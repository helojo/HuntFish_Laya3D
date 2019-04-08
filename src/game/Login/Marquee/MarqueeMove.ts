import GameFacade from "../../../GameFacade";
import EventConstantResponse from "../../../constant/EventConstantResponse";
import GComponent = fairygui.GComponent;
import GList = fairygui.GList;
import Transition = fairygui.Transition;
import { utils } from "../../../utils/CommonUtil";
export class MarqueeMove extends Laya.Script {
    private marqueeCom: GComponent;
    private marqueeTextCom: GComponent;
    private marqueeList: GList;
    private isRoom: boolean;
    private arrMessageWorld: Array<string>;
    private arrMessageRoom: Array<string>;
    private startX: number = 940;//公告开始移动的位置
    constructor() { super() };
    onAwake() {
        this.arrMessageWorld = new Array<string>();
        this.arrMessageRoom = new Array<string>();
        GameFacade.Instance.EventMng.add(EventConstantResponse.JPBCAST, this, this.jpBcast);//jp广播
        GameFacade.Instance.EventMng.add(EventConstantResponse.BCASTMSGRESP, this, this.bcastMsg);//信息广播
        GameFacade.Instance.EventMng.add(EventConstantResponse.BCASTWORLDRESP, this, this.bcastWorld);//全局广播
        GameFacade.Instance.EventMng.add(EventConstantResponse.BCASTROOMRESP, this, this.bcastRoom);//房间广播
        //this.test();
    }

    /**
     * 测试使用
     */
    private test() {
        var te1: string = "测000100010001000100010011"
        var te: string = "测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用测试使用";
        this.arrMessageRoom.push(te + te1 + te);
    }
    /**
     * 设置主面板
     * @param mainCom 
     */
    public setMarqueeCom(mainCom: GComponent, isRoom: boolean) {
        this.marqueeCom = mainCom;
        this.isRoom = isRoom;
        this.marqueeList = this.marqueeCom.getChild("contentList").asList;
    }
    private bcastMsg(data: BroadCastMsg.bcast_msg_resp) {
        this.arrMessageWorld.push(this.getMsgString(data));
    }
    private bcastWorld(data: BroadCastMsg.bcast_world_resp) {
        this.arrMessageWorld.push(data.content);
    }
    private bcastRoom(data: BroadCastMsg.bcast_room_resp) {
        this.arrMessageRoom.push(data.content);
    }
    private jpBcast(data: PoolMsg.bcast_jp_resp) {
        this.arrMessageWorld.push(this.getJpString(data));
    }

    /**
     * 获得msg
     * @param data 
     */
    private getMsgString(data: BroadCastMsg.bcast_msg_resp): string {
        var msg: CommonMsg.Idmsg_content[] = data.msg.content;
        let char: string;
        let fishId: number;
        let num: string;
        for (let i = 0; i < msg.length; i++) {
            switch (msg[i].msg_type) {
                case "chars":
                    char = msg[i].chars;
                    break;
                case "fish_name":
                    fishId = msg[i].id;
                    break;
                case "number":
                    num = msg[i].number.toString();
                    break;
                default:
                    break;
            }
        }
        let mg: string = `恭喜${char}击杀${GameFacade.Instance.SoundMng.getSoundCofig()[fishId - 1]["fishname"]}获得${num}倍金币奖励`;
        return mg;
        //var msgStr: string = "恭喜[color=#ffff00]{0}[/color]击杀 [color=#ffff00]{1}[/color]获得[color=#FFFF00]{2}[/color]倍金币奖励";
        //var msgStr: string = "恭喜{0}击杀{1}获得{2}倍金币奖励";
        //return msgStr.replace("{0}", char).replace("{1}", GameFacade.Instance.SoundMng.getSoundCofig()[fishId - 1]["fishname"].toString()).replace("{2}", num);
    }
    /**
     * 获得jp
     * @param data 
     */
    private getJpString(data: PoolMsg.bcast_jp_resp): string {
        var msg: CommonMsg.Idmsg_content[] = data.content.content;
        let char1: string = null;
        let num: number;
        let char2: string = null;
        for (let i = 0; i < msg.length; i++) {
            switch (msg[i].msg_type) {
                case "chars":
                    if (char1 == null) {
                        char1 = msg[i].chars;
                    }
                    else {
                        char2 = msg[i].chars;
                    }
                    break;
                case "number":
                    num = Number(msg[i].number);
                    break;
                default:
                    break;
            }
        }
        let mg: string = `恭喜${char1}获得JP大奖${utils.CommonUtils.jpWinnerToType(data.score_level)},奖励${char2}金币`;
        return mg;
        // var msgStr: string = "恭喜{0}获得JP大奖{1},奖励{2}金币";
        // return msgStr.replace("{0}", char1).replace("{1}", utils.CommonUtils.jpWinnerToType(data.score_level)).replace("{2}", char2);
    }

    onUpdate() {
        while (this.arrMessageRoom.length > 0 && !this.marqueeCom.visible && this.isRoom) {
            this.onShow(this.arrMessageRoom);
        }
        while (this.arrMessageWorld.length > 0 && !this.marqueeCom.visible) {
            this.onShow(this.arrMessageWorld);
        }
    }


    /**
    * 展示公告
    */
    private onShow(arr: Array<string>) {
        this.marqueeCom.visible = true;
        this.marqueeList.removeChildrenToPool();
        var itemCom: GComponent = this.marqueeList.addItemFromPool().asCom;
        var tex: fairygui.GLabel = itemCom.getChild("Text").asLabel;
        tex.text = arr.shift();
        var l: number = tex.text.length;
        tex.width = 26 * l;
        this.marqueeList.ensureBoundsCorrect();
        tex.x = this.startX;
        var w: number = tex.width;
        Laya.Tween.to(tex, { x: -(w) }, l * 50 + 4000, null, Laya.Handler.create(this, this.onHide));
    }

    /**
     * 隐藏公告
     */
    private onHide(): void {
        this.marqueeCom.visible = false;
    }

    /**
     * 关闭公告
     */
    private onClose(): void {
        this.onHide();
        this.marqueeList.removeChildrenToPool();
        GameFacade.Instance.EventMng.remove(EventConstantResponse.JPBCAST, this, this.bcastWorld);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.BCASTMSGRESP, this, this.bcastMsg);//信息广播
        GameFacade.Instance.EventMng.remove(EventConstantResponse.BCASTWORLDRESP, this, this.bcastWorld);//全局广播
        GameFacade.Instance.EventMng.remove(EventConstantResponse.BCASTROOMRESP, this, this.bcastRoom);//房间广播

    }
}