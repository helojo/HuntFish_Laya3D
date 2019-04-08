import GComponent = fairygui.GComponent;
import Sound from "../../constant/SoundNameConstant";
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import GameFacade from "../../GameFacade";
import CommonConstant from "../../constant/CommonConstant";
import NetRoleInfo from "../../net/ProtoHander/NetRoleInfo";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";

export default class UpgradePanel extends BasePanel {
    private timeTex: fairygui.GLabel;
    private tran1: fairygui.Transition;
    private data: RoleInfoMsg.lv_notice_resp;
    private num: number = 3;
    public constructor(data: RoleInfoMsg.lv_notice_resp) {
        super();
        this.data = data;
        Laya.loader.load([
            { url: CommonConstant._fuiUpgradePath1.image, type: Loader.IMAGE },
            { url: CommonConstant._fuiUpgradePath2.image, type: Loader.IMAGE },
            { url: CommonConstant._fuiUpgradePath1.fui, type: Loader.BUFFER },
        ], Handler.create(this, this.onLoad))
        // GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiUpgradePath1.image, CommonConstant._fuiUpgradePath2.fui, this, null);
        // GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiUpgradePath1.image, CommonConstant._fuiUpgradePath1.fui, this, this.onLoad);
    }

    /**
     * 加载设置
     */
    private onLoad(): void {
        this.m_fui = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiUpgradePath1.Package, "upgradePanel", "upgradeCom");
        this.timeTex = this.m_fui.getChild("timeTex").asLabel;
        this.timeTex.text = this.num.toString();
        this.tran1 = this.m_fui.getTransition("t0");
        this.m_fui.getChild("lvTex").text = this.data.new_lv.toString();
        Laya.timer.loop(1000, this, this.timeShow)
        var closeBtn: fairygui.GButton = this.m_fui.getChild("closeBtn").asButton;
        closeBtn.onClick(this, this.onClose);
    }
    /**
     * 倒计时显示
     */
    private timeShow(): void {
        this.num -= 1;
        this.timeTex.text = this.num.toString();
        if (this.num == 0) {

            this.onClose();
        }
    }

    /**
    * 
    * @param targentCom 关闭目标
    */
    private onClose(): void {
        this.tran1.stop();
        Laya.timer.clear(this, this.timeShow);
        NetRoleInfo.Instance.isHaveNotion = false;
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.onClose);
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.UpgradePanel);
    }
}