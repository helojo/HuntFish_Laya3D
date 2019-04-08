import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import GComponent = fairygui.GComponent;
import GList = fairygui.GList;
import Transition = fairygui.Transition;
import GameFacade from "../../../GameFacade";
import CommonConstant from "../../../constant/CommonConstant";
import { MarqueeMove } from "./MarqueeMove";
import BasePanel from "../../Panel/BasePanel";
import EnumData from "../../../Enum/EnumData";

export default class MarqueePanel extends BasePanel {
    // private static _instance: Marquee;
    private isRoom: boolean;
    // public static get Instance(): Marquee {
    //     if (!this._instance) {
    //         this._instance = new Marquee();
    //     }
    //     return this._instance;
    // }
    public constructor(isRoom: boolean) {
        super();
        this.isRoom = isRoom;
        GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiMarqueePath.image, CommonConstant._fuiMarqueePath.fui, this, this.onLoadMarquee);
    }
    // /**
    //  * 创建公告
    //  * @param isRoom 是否是房间的公告
    //  */
    // public createMarquee(isRoom: boolean) {
    //     this.isRoom = isRoom;
    //     GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiMarqueePath.image, CommonConstant._fuiMarqueePath.fui, this, this.onLoadMarquee);
    // }
    /**
     * 加载设置
     */
    private onLoadMarquee(): void {
        this.m_fui = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiMarqueePath.Package, "Marquee", "MarqueeCom");
        var mar: MarqueeMove = this.m_fui.displayObject.addComponent(MarqueeMove);
        mar.setMarqueeCom(this.m_fui, this.isRoom);
        this.m_fui.visible = false;
    }



    /**
     * 关闭公告
     */
    public disposeMarquee(): void {
        if (!this.m_fui) return;
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.MarqueePanel);
    }
}