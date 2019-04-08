import GComponent = fairygui.GComponent;
import Sound from "../../constant/SoundNameConstant";
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import GameFacade from "../../GameFacade";
import CommonConstant from "../../constant/CommonConstant";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";

export default class LvDetailPanel extends BasePanel {
    public constructor() {
        super();
        GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiLvDetailsPath.image, CommonConstant._fuiLvDetailsPath.fui, this, this.onLoad);
    }

    /**
     * 加载设置
     */
    private onLoad(): void {
        this.m_fui = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiLvDetailsPath.Package, "LvDetails", "lvDetailsCom");

        var closeBtn: fairygui.GButton = this.m_fui.getChild("closeBtn").asButton;
        closeBtn.onClick(this, this.onClose);
    }
    /**
    * 
    * @param targentCom 关闭目标
    */
    private onClose(): void {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.onClose);
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.LvDetailPanel);
    }
}