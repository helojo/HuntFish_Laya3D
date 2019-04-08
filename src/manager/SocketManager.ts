import GameFacade from "./../GameFacade";
import SocketServe from "./../net/SocketServer";
import GameEvent from "./../constant/GameEvent";
import ProtoBuf from "../net/ProtoBuf";
import PackageIn from "../net/PackageIn";
import EnumData from "../Enum/EnumData";
import NetLogin from "../net/ProtoHander/NetLogin";
import NetJpPool from "../net/ProtoHander/NetJpPool";
import BaseManager from "./BaseManager";
import ReconnecttingTip from "../game/Panel/ReconnecttingTip";
import NetWallet from "../net/ProtoHander/NetWallet";
import NetRanking from "../net/ProtoHander/NetRanking";
import NetRoom from "../net/ProtoHander/NetRoom";
import { utils } from "../utils/CommonUtil";
import NetWanners from "../net/ProtoHander/NetWanners";
import NetRoleInfo from "../net/ProtoHander/NetRoleInfo";
import NetBroadcast from "../net/ProtoHander/NetBroadcast";
import NetAct from "../net/ProtoHander/NetAct";
import PromptPanel from "../game/Panel/PromptPanel"; import NetAward from "../net/ProtoHander/NetAward";
import CommonConstant from "../constant/CommonConstant";
import BatteryController from "../controller/BatteryController";

export default class SocketManager extends BaseManager {

    private socketDict: Laya.WeakObject;
    private cmdDict: Laya.WeakObject;

    private clientHeartBeatCount: number = 0;
    private serverHeartBeatCount: number = 0;

    Init(): void {
        this.socketDict = new Laya.WeakObject();
        this.cmdDict = new Laya.WeakObject();
        this.addHandleByCMD(NetCodeMsg.cmd.msg_base, BaseMsg.c_cmd.heartbeat_resp, BaseMsg.heartbeat_resp, Laya.Handler.create(this, this.receivesHeartBeatResp, null, false));

        //所有协议业务逻辑处理类的初始化在这里添加
        NetLogin.Instance.Init();
        NetRoom.Instance.Init();
        NetJpPool.Instance.Init();
        NetWallet.Instance.Init();
        NetRanking.Instance.Init();
        NetWanners.Instance.Init();
        NetRoleInfo.Instance.Init();
        NetBroadcast.Instance.Init();
        NetAct.Instance.Init();
        NetAward.Instance.Init();

        Laya.stage.on(laya.events.Event.BLUR, this, this.onStageBlur);   //退到后台
        Laya.stage.on(laya.events.Event.FOCUS, this, this.onStageFocus); //返回到前台
    }


    /** 注册监听socket状态的事件（连接、断开）*/
    AddEvent() {
        GameFacade.Instance.EventMng.add(GameEvent.CONNECT, this, this.connectGame);
        GameFacade.Instance.EventMng.add(GameEvent.SOCKET_CLOSE, this, this.reConnect);
    }

    addHandleByCMD(cmd: number, ccmd: number, data: any, callBack: Laya.Handler): void {
        this.addHandle(ProtoBuf.build(cmd, ccmd), data, callBack);

    }
    /**添加网络事件回调**/
    addHandle(cmd: number, data: any, callBack: Laya.Handler): void {
        this.cmdDict.set(cmd, callBack);
        ProtoBuf.registerCMD(cmd, data);
    }

    /**网络事件分发**/
    public dispatchMessage(cmd: number, data: any): void {
        var handle: Laya.Handler = this.cmdDict.get(cmd);
        if (handle) {
            handle.runWith([cmd, data]);
            if (cmd != 0 && cmd != 1) {
                let msgCode = ProtoBuf.Resolve(cmd);
                //utils.CommonUtils.log(`协议 cmd=${msgCode[0]},ccmd=${msgCode[1]},` + " data=", data);
            }
        }
        else {
            {
                let msgCode = ProtoBuf.Resolve(cmd);
                //utils.CommonUtils.log(`协议 cmd=${msgCode[0]},ccmd=${msgCode[1]} 未处理`);
            }
        }
    }

    /**连接socket**/
    public connenct(ip: string, port: number, type: EnumData.EnumSocketType, token: string): void {
        var socket: SocketServe = this.socketDict.get(type);
        if (socket == null) {
            socket = new SocketServe(type);
            this.socketDict.set(type, socket);
        }
        socket.connect(ip, port, token);
    }

    /**
     * 发送消息
     * @param cmd 消息协议大头（取二进制数据的前7位）
     * @param ccmd 消息协议小头（取二进制数据的前8到16位）
     * @param data 协议数据类
     * @param param 数据参数（暂未使用）
     * @param type socket类型
     */
    sendGameData(cmd: number, ccmd: number, data: any, param: any = null, type: EnumData.EnumSocketType = EnumData.EnumSocketType.GAME): void {
        var socket: SocketServe = this.socketDict.get(type);
        if (socket) {
            var headCmd = ProtoBuf.build(cmd, ccmd);
            socket.send(headCmd, data);
        }
    }

    /**
     * 发送请求登陆
     */
    public sendLoginReq(code: LoginMsg.login_mode_code, token: string): void {
        var loginReq: LoginMsg.login_req = new LoginMsg.login_req();
        NetLogin.Instance._LoginModeCode = code;
        loginReq.code = code;
        loginReq.token = token;
        loginReq.lang = GameFacade.Instance.GameMng.lang;
        this.sendGameData(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.login_req, loginReq);
    }

    /**
     * 发送心跳包
     * **/
    private sendBeatHeartRes(): void {
        //    utils.CommonUtils.log(`clientHeartBeatCount = ${this.clientHeartBeatCount} , serverHeartBeatCount = ${this.serverHeartBeatCount}`);
        if (this.clientHeartBeatCount - this.serverHeartBeatCount > 20)//断线了
        {
            utils.CommonUtils.log("---心跳超时---");
            this.closeSocket();
        }
        else {
            let msg: BaseMsg.heartbeat_req = new BaseMsg.heartbeat_req();
            msg.id = this.clientHeartBeatCount;
            this.clientHeartBeatCount++;
            this.sendGameData(NetCodeMsg.cmd.msg_base, BaseMsg.c_cmd.heartbeat_req, msg);
        }
    }
    /**
     * 处理心跳包
     * @param clientData 
     * @param msgID 
     * @param pbData 
     */
    private receivesHeartBeatResp(cmd: number, pbData: BaseMsg.heartbeat_resp): void {
        this.serverHeartBeatCount = pbData.id as number;
    }

    /**
     * 连接成功
     */
    private connectGame(): void {
        utils.CommonUtils.log("连接成功开始登陆 connectGame");
        /**开始执行心跳包 */
        Laya.timer.loop(1000, this, this.sendBeatHeartRes);

        switch (NetLogin.Instance._LoginModeCode) {
            //正常登录
            case LoginMsg.login_mode_code.normal: {
                if (GameFacade.Instance.GameMng.isLoacalDev) {
                    NetLogin.Instance.LoginAccountReq(GameFacade.Instance.GameMng.token, "zhanghao", GameFacade.Instance.GameMng.lang);
                } else {
                    utils.CommonUtils.log("-- 正常登录请求");
                    this.sendLoginReq(LoginMsg.login_mode_code.normal, GameFacade.Instance.GameMng.token);
                }
                break;
            }
            //重连登录
            case LoginMsg.login_mode_code.reconnect: {
                GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.Reconnectting);
                if (GameFacade.Instance.GameMng.isLoacalDev) {
                    NetLogin.Instance.LoginAccountReq(GameFacade.Instance.GameMng.token, "zhanghao", GameFacade.Instance.GameMng.lang);
                } else {
                    utils.CommonUtils.log("-- 重连登录请求");
                    this.sendLoginReq(LoginMsg.login_mode_code.reconnect, GameFacade.Instance.GameMng.token);
                }
                break;
            }
        }
    }

    /**
     * 重连
     */
    private reConnect(): void {

        NetLogin.Instance._LoginModeCode = LoginMsg.login_mode_code.reconnect;
        let gameManager = GameFacade.Instance.GameMng;

        if (!this.connectCountOut(EnumData.EnumSocketType.GAME)) {
            //重连动画
            utils.CommonUtils.log("自动重连 ReconnecttingTip");
            GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.Reconnectting);


            this.connenct(gameManager.serverIp, gameManager.serverPort, EnumData.EnumSocketType.GAME, gameManager.token);
        }
        else {
            utils.CommonUtils.log("重连超时 reConnect time out!!!");
            this.closeSocket();
            //重连弹框
            GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.Reconnectting);
            let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
            promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.Reconnect);

            BatteryController.Instance.StopLockAttack();
            BatteryController.Instance.StopAutoAttack();
        }

    }
    /**重连接超时**/
    public connectCountOut(type: EnumData.EnumSocketType): boolean {
        var socket: SocketServe = this.socketDict.get(type);
        return socket.connectCountOut();
    }

    /**关闭socketl连接**/
    public closeSocket(type: EnumData.EnumSocketType = EnumData.EnumSocketType.GAME): void {
        var socket: SocketServe = this.socketDict.get(type);
        if (socket) {
            socket.close();
        }

        Laya.timer.clear(this, this.sendBeatHeartRes); //停止心跳
    }

    /**
     * 刷新游戏
     */
    public refreshGame(): void {
        if (utils.CommonUtils.isApp()) {
            window.close(); //关闭游戏
        }
        else {
            history.go(0); //刷新网页
        }
    }

    /**
     * 游戏切到后台
    */
    private onStageBlur() {
        utils.CommonUtils.log("---切到后台---");
    }

    /**
     * 游戏切回前台
    */
    private onStageFocus() {
        utils.CommonUtils.log("---切回前台---");
        var socket: SocketServe = this.socketDict.get(EnumData.EnumSocketType.GAME);
        if (socket && socket != null) {
            if (!socket.isConnected() && socket.closeReason == "") {
                socket.curReconnetCount = 0;
                this.reConnect();
            }
        }
    }
}
