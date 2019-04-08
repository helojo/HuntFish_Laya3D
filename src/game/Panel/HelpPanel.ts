import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import GComponent = fairygui.GComponent;
import GList = fairygui.GList;
import GImage = fairygui.GImage;
import GObject = fairygui.GObject;
import GLabel = fairygui.GLabel;
import GameFacade from "../../GameFacade";
import NetLogin from "../../net/ProtoHander/NetLogin";
import Sound from "../../constant/SoundNameConstant";
import CommonConstant from "../../constant/CommonConstant";
import { utils } from "../../utils/CommonUtil";
import EnumData from "../../Enum/EnumData";
import BasePanel from "./BasePanel";

export default class HelpPanel extends BasePanel {
    private fishIconList: GList;
    public constructor() {
        super();
        if (GameFacade.Instance.OthMng.isHaveHelpPanel) return;
        else GameFacade.Instance.OthMng.isHaveHelpPanel = true;
        // // Laya.loader.load([
        // //     { url: CommonConstant._fuiHelpPath.image, type: Loader.IMAGE },
        // //     { url: CommonConstant._fuiHelpPath.fui, type: Loader.BUFFER },
        // //     { url: CommonConstant._fuiCommonUIPath.image, type: Loader.IMAGE },
        // //     { url: CommonConstant._fuiCommonUIPath.fui, type: Loader.BUFFER },
        // // ], Handler.create(this, this.onLoadHelp));
        this.onLoadHelp();
        GameFacade.Instance.SceneMng.bProhibitWalletBtn = true;

    }

    /**
     * 加载设置
     */
    private onLoadHelp(): void {
        this.m_fui = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiHelpPath.Package, "Help", "HelpPanel");
        ////  fairygui.UIPackage.addPackage(CommonConstant._fuiCommonUIPath.Package);
        this.m_fui.getChild("close").onClick(this, this.onClose);
        this.m_fui.getChild("n5").onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.windowChange) });
        this.m_fui.getChild("n6").onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.windowChange) });
        this.m_fui.getChild("n7").onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.windowChange) });
        this.fishIconList = this.m_fui.getChild("n53").asList;
        this.fishIconList.removeChildrenToPool();
        if (!NetLogin.Instance._playerLoginInfo) return;
        for (var i: number = 0; i < NetLogin.Instance._playerLoginInfo.fish_info.length; i++) {
            var num: number = NetLogin.Instance._playerLoginInfo.fish_info[i].fish_type;
            if (num >= EnumData.FishSubtype.King_fishf1 && num < 32) {
                return;
            }
            if (num > 32) {
                return;
            }
            var fishIconCom: GComponent = this.fishIconList.addItemFromPool().asCom;
            var fishIcon: GImage = fishIconCom.getChild("fishIcon").asImage;
            var fishValue: GLabel = fishIconCom.getChild("fishValue").asLabel;
            fishIcon.icon = "ui://CommonUI/" + (num);
            if (num == 26) {
                fishValue.text = "5-200";
            }
            else if (num == 32) {
                fishValue.text = "全屏炸弹";
            }
            else if (num == 27) {
                fishValue.text = "鱼王";
                fishIcon.icon = "ui://CommonUI/" + (num);
            }
            // else if (num == 21) {
            //     fishValue.text = "全屏冰冻";
            // }
            else {
                fishValue.text = (utils.CommonUtils.numberFixed(NetLogin.Instance._playerLoginInfo.fish_info[i].fish_rate)).toFixed(2);
            }
            this.fishIconList.ensureBoundsCorrect();
        }
    }
    /**
       * 
       * 播放按钮点击声音
       */
    private onPlaySound(str: string) {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, str);
    }

    private onClose(): void {
        this.onPlaySound(Sound.soundKeyArr.onClose);
        this.fishIconList.removeChildrenToPool();
        GameFacade.Instance.OthMng.isHaveHelpPanel = false;
        GameFacade.Instance.SceneMng.bProhibitWalletBtn = false;
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.HelpPanel);
    }
}