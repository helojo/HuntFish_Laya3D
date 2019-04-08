/**
 * 
 */
import NetReader from "./NetReader";
import GameFacade from "./../GameFacade";
import GameEvent from "./../constant/GameEvent";
import EventManager from "../manager/EventManager";
import PackageOut from "./PackageOut";
import PackageIn from "./PackageIn";
import EnumData from "../Enum/EnumData";
import { utils } from "../utils/CommonUtil";
import BatteryController from "../controller/BatteryController";

export default class SocketServe {
    private socket: laya.net.Socket;
    private _PACKAGE_OUT_NAME = "_PACKAGE_OUT_NAME_";
    private netReader: NetReader;
    private type: EnumData.EnumSocketType;
    public static MAX_RECONNET_COUT: number = 5;
    public curReconnetCount: number = 0;
    public closeReason: string = "";

    private EventManager: EventManager;
    constructor(_type: EnumData.EnumSocketType) {

        this.netReader = new NetReader();
        this.EventManager = GameFacade.Instance.EventMng;

        this.socket = new laya.net.Socket();
        this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
        this.socket.on(laya.events.Event.OPEN, this, this.onConnect);
        this.socket.on(laya.events.Event.CLOSE, this, this.onClose, []);
        this.socket.on(laya.events.Event.ERROR, this, this.onError);
        this.socket.on(laya.events.Event.MESSAGE, this, this.onMessage);

        this.type = _type;

        this.Init();
    }

    private Init() {
        let gameMng = GameFacade.Instance.GameMng;
        if (gameMng.sip != null) {
            gameMng.sip.push(gameMng.serverIp);
            gameMng.sip.reverse();
            SocketServe.MAX_RECONNET_COUT = gameMng.sip.length;
        }
        else {
            gameMng.sip = new Array<string>();
            for (var i = 0; i < SocketServe.MAX_RECONNET_COUT; i++) {

                gameMng.sip.push(gameMng.serverIp);
            }
        }
    }


    public connect(host: string, port: number, token: string): void {
        utils.CommonUtils.log(host, port, token);
        if (this.socket.connected) {
            console.debug("socket已连接" + "_" + this.type);
            return;
        }
        if (token != undefined) {
            this.socket.connectByUrl(host + ":" + port);

        }
        else {
            this.socket.connect(host, port);
        }

        Laya.timer.once(5000, this, this.checkErroHandle);
    }

    /** 连接超时*/
    private checkErroHandle(): void {
        utils.CommonUtils.log("checkErroHandle");
        this.curReconnetCount = SocketServe.MAX_RECONNET_COUT;
        this.EventManager.dispatch(GameEvent.SOCKET_CLOSE + this.getSocketTypeStr());
    }

    public close(): void {
        this.socket.close();
    }

    public isConnected() {
        return this.socket.connected;
    }

    private onConnect(): void {
        this.EventManager.dispatch(GameEvent.CONNECT + this.getSocketTypeStr());
        this.curReconnetCount = -1;
        utils.CommonUtils.log("onConnect 正常建立连接:curReconnetCount = ", this.curReconnetCount);
        Laya.timer.clear(this, this.checkErroHandle);
    }

    private onClose(ev: CloseEvent): void {

        utils.CommonUtils.log("onClose 关闭连接:curReconnetCount = ", this.curReconnetCount + "  ev = ", ev);

        this.closeReason = ev.reason;
        //断线关闭自动射击、清除子弹
        BatteryController.Instance.StopAutoAttack();
        BatteryController.Instance.StopLockAttack();
        GameFacade.Instance.HuntSceneMng.DeleteAllBulletsIns();
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.Reconnectting);

        //网络问题，正常掉线
        if (ev.reason == "") {
            this.curReconnetCount++;
            this.EventManager.dispatch(GameEvent.SOCKET_CLOSE + this.getSocketTypeStr());
            //GameFacade.Instance.HuntSceneMng.DeleteAllFishsIns();
        }
        //被踢下线
        else {
            let arrbuf: ArrayBuffer = this.NetCloseReasonHandle(ev.reason);
            // var byte:Laya.Byte = new Laya.Byte(arrbuf);
            // let reason:string = byte.getString();
            this.onMessage(arrbuf); //KictoutResp
        }
    }

    private onError(): void {
        this.curReconnetCount++;
        utils.CommonUtils.log("onError 连接出错:curReconnetCount = ", this.curReconnetCount);
        this.EventManager.dispatch(GameEvent.SOCKET_CLOSE + this.getSocketTypeStr());
    }

    /**
     * 网络关闭原因处理
     * @param reason 网络关闭 断开原因
     */
    private NetCloseReasonHandle(reason: string): ArrayBuffer {
        //踢人消息
        var uint8ar = new TextEncoder().encode(reason); //①此处爆红不用处理 ②laya自带的解析有问题
        //var byte:Laya.Byte = new Laya.Byte();
        //byte.writeUTFString(reason);
        // byte.writeArrayBuffer();
        //var uint8ar = byte.getUint8Array(0, byte.length);
        //utils.CommonUtils.log("------------byte = ", byte);
        //utils.CommonUtils.log("------------uint8ar = ", uint8ar);
        var len = uint8ar.length;
        if (len <= 5) {
            len = 6;
        }
        var arrayBuff = new ArrayBuffer(len);

        var u8a = new Uint8Array(arrayBuff);
        for (var i = 0; i < len; i++) {
            u8a[i] = uint8ar[i] ? uint8ar[i] : 0;
        }

        return arrayBuff;
    }

    /**
     * 发送请求
     */
    public send(code: number, data: protobuf.Message<any>): void {
        if (!this.socket.connected)
            return;
        // if (0 != code)
        //     utils.CommonUtils.log("send", code, data);
        if (this.socket != null) {
            var pkg: PackageOut = Laya.Pool.getItemByClass(this._PACKAGE_OUT_NAME, PackageOut);
            pkg.init(code);
            pkg.pack(data);
            pkg.pos = 0;
            // pkg.writeInt32(pkg.buffer.byteLength);
            this.socket.send(pkg.buffer);
            this.socket.flush();
            Laya.Pool.recover(this._PACKAGE_OUT_NAME, pkg);
            // utils.CommonUtils.log("发送数据code=",code,JSON.stringify(data) );  
        } else {
        }
    }

    public connectCountOut(): boolean {
        let gameManager = GameFacade.Instance.GameMng;

        if (this.curReconnetCount >= SocketServe.MAX_RECONNET_COUT) {
            return true;
        }
        // 轮询
        else {
            utils.CommonUtils.log("轮询 this.curReconnetCount = ", this.curReconnetCount);
            gameManager.serverIp = gameManager.sip[this.curReconnetCount];
            utils.CommonUtils.log("connectCountOut gameManager.serverIp = ", gameManager.serverIp);
            return false;
        }
    }


    /**
     * 收到服务器数据
     */
    private onMessage(message: ArrayBuffer): void {
        if (message.byteLength <= 0) return;

        let packageIn: PackageIn = new PackageIn(message);
        packageIn.unpack();
        //  utils.CommonUtils.log("onMessage", packageIn.code, packageIn.data);
        this.netReader.addPackage(packageIn);
        (<NetReader>this.netReader).notify();
    }

    private getSocketTypeStr(): string {
        return this.type == EnumData.EnumSocketType.GAME ? "" : String(EnumData.EnumSocketType.USER_BEHAVIOR);
    }
}
