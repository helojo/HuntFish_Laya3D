import LoadingPanel from "../game/Panel/LoadingPanel";
import CommonConstant from "../constant/CommonConstant";
import GameFacade from "../GameFacade";
import ReconnecttingTip from "../game/Panel/ReconnecttingTip";
import BasePanel from "../game/Panel/BasePanel";
import EnumData from "../Enum/EnumData";
import HuntPanel from "../game/Panel/HuntPanel";
import HallPanel from "../game/Panel/HallPanel";
import AutoAttackPanel from "../game/Panel/AutoAttackPanel";
import PromptPanel from "../game/Panel/PromptPanel";
import WalletPanel from "../game/Panel/WalletPanel";
import LvRecordsPanel from "../game/Panel/LvRecordsPanel";
import Setting from "../game/Panel/SettingPanel";
import HelpPanel from "../game/Panel/HelpPanel";
import RankingPanel from "../game/Panel/RankingPanel";
import GuidePanel from "../game/Panel/GuidePanel";
import JpPanel from "../game/Panel/JpPanel";
import PersonalInfoPanel from "../game/Panel/PersonalInfoPanel";
import FundTipPanel from "../game/Panel/FundTipPanel";
import GrowthFundPanel from "../game/Panel/GrowthFundPanel";
import LevelBonusPanel from "../game/Panel/LevelBonusPanel";
import UpgradePanel from "../game/Panel/UpgradePanel";
import WinnerPanel from "../game/Panel/WinnerPanel";
import MarqueePanel from "../game/Login/Marquee/MarqueePanel";
import TipManager from "./TipManager";
import LvDetailPanel from "../game/Panel/LvDetailPanel";

export default class SceneManager {
    /** Fui*/
    private FUILayer: Laya.Sprite;
    /** 面板 */
    private PanelLayer: Laya.Sprite;
    private PanelDic: Laya.WeakObject;

    /** 是否禁止免转按钮*/
    public bProhibitWalletBtn: boolean = false; //有弹窗时禁止免转按钮

    public init(): void {
        this.PanelDic = new Laya.WeakObject();

        this.FUILayer = new Laya.Sprite();
        this.PanelLayer = new Laya.Sprite();
        Laya.stage.addChild(this.PanelLayer);
        Laya.stage.addChild(this.FUILayer);
        this.FUILayer.addChild(fairygui.GRoot.inst.displayObject);
    }

    public AddFUI(fui: fairygui.GComponent) {
        fairygui.GRoot.inst.addChild(fui);
    }

    public RemoveFUI(fui: fairygui.GComponent) {
        fui.removeFromParent();
        fui.dispose();
    }

    private GetPanel(id: EnumData.EnumPanelType, data: any = null) {
        var panel: BasePanel = null;
        if (this.PanelDic.has(id)) {
            panel = this.PanelDic.get(id);
        }
        else {
            switch (id) {
                case EnumData.EnumPanelType.HallPanel:
                    panel = new HallPanel(id);
                    break;
                case EnumData.EnumPanelType.HuntPanel:
                    panel = new HuntPanel(id);
                    break;
                case EnumData.EnumPanelType.LoadingPanel:
                    panel = new LoadingPanel(id);
                    break;
                case EnumData.EnumPanelType.PromptPanel:
                    panel = new PromptPanel(id);
                    break;
                case EnumData.EnumPanelType.Reconnectting:
                    panel = new ReconnecttingTip(id);
                    break;
                case EnumData.EnumPanelType.SettingPanel:
                    panel = new Setting();
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.HelpPanel:
                    panel = new HelpPanel();
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.RankingPanel:
                    panel = new RankingPanel();
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.GuidePanel:
                    panel = new GuidePanel();
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.AutoAttackPanel:
                    panel = new AutoAttackPanel(id);
                    break;
                case EnumData.EnumPanelType.WalletPanel:
                    panel = new WalletPanel(id);
                    break;
                case EnumData.EnumPanelType.JpPanel:
                    panel = new JpPanel();
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.PersonalInfoPanel:
                    panel = new PersonalInfoPanel();
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.FundTipPanel:
                    panel = new FundTipPanel(data);
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.GrowthFundPanel:
                    panel = new GrowthFundPanel();
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.LevelBonusPanel:
                    panel = new LevelBonusPanel();
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.LvRecordsPanel:
                    panel = new LvRecordsPanel();
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.UpgradePanel:
                    panel = new UpgradePanel(data);
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.WinnerPanel:
                    panel = new WinnerPanel();
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.MarqueePanel:
                    panel = new MarqueePanel(data);
                    panel.m_nameID = id;
                    break;
                case EnumData.EnumPanelType.LvDetailPanel:
                    panel = new LvDetailPanel();
                    panel.m_nameID = id;
                    break;
                default:
                    break;
            }
            this.PanelDic.set(id, panel);
        }

        return panel;
    }

    /**
     * 1.这里panel的添加到PanelLayer层暂时是没有显示的，显示的ui是panel内部的fui
     * 2.new一个panel的同时，在panel内部new fui并添加在fui层
     * */
    public Create(id: EnumData.EnumPanelType, data: any = null) {
        var panel: BasePanel = this.GetPanel(id, data) as BasePanel;
        this.PanelLayer.addChild(panel);
        if (!panel) return;
        return panel;
    }

    public close(id: EnumData.EnumPanelType, bRemove: boolean = true) {
        if (!this.PanelDic.has(id)) return null;
        var panel: BasePanel = this.GetPanel(id) as BasePanel;
        if (!panel) return;
        panel.Close(bRemove, id);
    }

    public destroy(id: EnumData.EnumPanelType) {
        if (!this.PanelDic.has(id)) return null;
        this.bProhibitWalletBtn = false;
        var panel: BasePanel = this.GetPanel(id) as BasePanel;
        this.PanelDic.del(id);
        if (!panel) return;
        panel.removeSelf();
        panel.destroy(true);
    }

    public GetPanelById(id: EnumData.EnumPanelType) {
        if (this.PanelDic.has(id)) {
            var panel: BasePanel = this.PanelDic.get(id);
            if (!panel) return;
            return panel;
        }
        return null;
    }

    /**
     * 清除掉所有的panel
     */
    public clearAllPanel(): void {
        this.close(EnumData.EnumPanelType.MarqueePanel);
        this.close(EnumData.EnumPanelType.FundTipPanel);
        this.close(EnumData.EnumPanelType.LevelBonusPanel);
        this.close(EnumData.EnumPanelType.GrowthFundPanel);
        this.close(EnumData.EnumPanelType.HelpPanel);
        this.close(EnumData.EnumPanelType.SettingPanel);
        this.close(EnumData.EnumPanelType.PersonalInfoPanel);
        this.close(EnumData.EnumPanelType.RankingPanel);
        GameFacade.Instance.TipMng.close();
    }
    public EnterHuntScene() {
        this.clearAllPanel();
        //清理上一个场景的ui、缓存
        var id = EnumData.EnumPanelType.HallPanel;
        if (this.PanelDic.has(id)) {
            var panel = this.PanelDic.get(id) as HallPanel;
            panel.ExitHallScene();
            this.close(id);
        }
        let hallFuiArr = [{ url: CommonConstant._fuiHunterUIPath.image, type: Laya.Loader.IMAGE },
        { url: CommonConstant._fuiHunterUIPath.fui, type: Laya.Loader.BUFFER },
        { url: CommonConstant._hunterBgPath1, type: Laya.Loader.IMAGE },
        { url: CommonConstant._hunterBgPath2, type: Laya.Loader.IMAGE },
        { url: CommonConstant._fuiFreeTranWalletPath.image, type: Laya.Loader.IMAGE },
        { url: CommonConstant._fuiFreeTranWalletPath.fui, type: Laya.Loader.BUFFER }
            // { url: CommonConstant._fuiHallPath.image, type: Laya.Loader.IMAGE },
            // { url: CommonConstant._fuiHallPath.fui, type: Laya.Loader.BUFFER },
            //  { url: CommonConstant._fuiCommonUIPath.image, type: Laya.Loader.IMAGE },
            //   { url: CommonConstant._fuiCommonUIPath.fui, type: Laya.Loader.BUFFER }
        ];

        GameFacade.Instance.ResourceMng.LoadNewScene(hallFuiArr, CommonConstant._huntScenePath, Loaded);
        function Loaded(scene: Laya.Scene3D) {
            var panel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.HuntPanel) as HuntPanel;
            panel.EnterAfter(scene);
            // 加载完有黑屏
            // Laya.loader.create(CommonConstant._gunScenePath,
            //     Laya.Handler.create(this, function (sc: Laya.Scene3D): void {
            //         var panel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.HuntPanel) as HuntPanel;
            //          panel.EnterAfter(scene);
            //     }),
            // null,);
        }
    }

    public EnterHallScene(callBack: Function) {
        this.clearAllPanel();
        var id = EnumData.EnumPanelType.HuntPanel;
        if (this.PanelDic.has(id)) {
            var panel = this.PanelDic.get(id) as HuntPanel;
            panel.ExitHuntScene();
            this.close(id);
        }
        let hallFuiArr = [//{ url: CommonConstant._fuiHallPath.image, type: Laya.Loader.IMAGE },
            // { url: CommonConstant._fuiHallPath.fui, type: Laya.Loader.BUFFER },
            { url: CommonConstant._fuiHallUIPath.image, type: Laya.Loader.IMAGE },
            { url: CommonConstant._fuiHallUIPath.fui, type: Laya.Loader.BUFFER },
            { url: CommonConstant._fuiFreeTranWalletPath.image, type: Laya.Loader.IMAGE },
            { url: CommonConstant._fuiFreeTranWalletPath.fui, type: Laya.Loader.BUFFER }
        ];
        GameFacade.Instance.ResourceMng.LoadNewScene(hallFuiArr, CommonConstant._hallPath_ls, Loaded);
        function Loaded(scene: Laya.Scene3D) {
            var panel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.HallPanel) as HallPanel;
            panel.EnterAfter(scene);
            callBack();
        }
    }

}

