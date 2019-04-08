
/**
 * 捕鱼场景菜单栏
 */
import Sound from "../../constant/SoundNameConstant";
import GameFacade from "../../GameFacade";
import HuntPanel from "../Panel/HuntPanel";
import GameEvent from "../../constant/GameEvent";
import NetLogin from "../../net/ProtoHander/NetLogin";
import { TipType } from "../../manager/TipManager";
import { utils } from "../../utils/CommonUtil";
import BatteryController from "../../controller/BatteryController";
import CommonConstant from "../../constant/CommonConstant";
import PromptPanel from "../Panel/PromptPanel";
import EnumData from "../../Enum/EnumData";
import NetRoom from "../../net/ProtoHander/NetRoom";

export default class Menu {

    private m_menu: fairygui.GComponent;
    private m_panelController: fairygui.Controller;
    private m_parent: HuntPanel;
    private m_selfController: fairygui.Controller;
    constructor(menu: fairygui.GComponent, controller: fairygui.Controller, parent: HuntPanel) {
        this.m_menu = menu;
        this.m_panelController = controller;
        this.m_parent = parent;

        Laya.stage.on(Laya.Event.RESIZE, this, this.OnResize);

        this.init();
    }

    private init() {
        this.m_panelController.selectedIndex = 0;
        if (utils.CommonUtils.isApp() && utils.CommonUtils.isIphonXAdapte()) {
            this.m_panelController.selectedIndex = 2;
        }
        this.m_selfController = this.m_menu.getController("c1");
        this.m_selfController.selectedIndex = 0;
        this.m_menu.getChild("MenuBtn").onClick(this, this.OnMenuBtnClick);
        this.m_menu.getChild("SetBtn").onClick(this, this.OnSetBtnClick);
        this.m_menu.getChild("ExcelBtn").onClick(this, this.OnExcelBtnClick);
        this.m_menu.getChild("HelpBtn").onClick(this, this.OnHelpBtnClick);
        this.m_menu.getChild("ExitBtn").onClick(this, this.OnExitBtnClick);

        this.m_menu.getChild("MenuBtn").onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick); });
        this.m_menu.getChild("SetBtn").onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen); });
        this.m_menu.getChild("ExcelBtn").onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen); });
        this.m_menu.getChild("HelpBtn").onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen); });
        this.m_menu.getChild("ExitBtn").onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen); });
    }


    /**
  * 
  * 播放按钮点击声音
  */
    private onPlaySound(str: string) {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, str);
    }

    /**
     * 设置按钮
     */
    private OnSetBtnClick() {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.SettingPanel);
    }

    private OnHelpBtnClick() {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.HelpPanel);
    }
    /**
     * 报表
     */
    private OnExcelBtnClick() {
        if (GameFacade.Instance.GameMng.isPlay) {
            GameFacade.Instance.TipMng.createTip(CommonConstant._PromptContent.DemoAccTip, TipType.ONECLOSE);
        }
        else {
            window.open(GameFacade.Instance.GameMng.reportUrl);
        }
    }
    private OnExitBtnClick() {
        //GameFacade.Instance.SoundMng.stopMusic();
        BatteryController.Instance.StopAutoAttack();
        BatteryController.Instance.StopLockAttack();

        let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
        promptPanel.InitData(EnumData.EnumPromptType.ExitHuntScene, CommonConstant._PromptContent.ExitHuntScene);
    }

    /** 屏幕宽高、翻转变化检测*/
    private OnResize() {
        if (utils.CommonUtils.isApp() && utils.CommonUtils.isIphonXAdapte()) {
            if (this.m_panelController.selectedIndex == 0) {
                this.m_panelController.selectedIndex = 2;
            }
            else if (this.m_panelController.selectedIndex == 1) {
                this.m_panelController.selectedIndex = 3;
            }
        }
        else {
            if (this.m_panelController.selectedIndex == 2) {
                this.m_panelController.selectedIndex = 0;
            }
            else if (this.m_panelController.selectedIndex == 3) {
                this.m_panelController.selectedIndex = 1;
            }
        }
    }

    private OnMenuBtnClick() {
        if (utils.CommonUtils.isApp() && utils.CommonUtils.isIphonXAdapte()) {
            this.m_panelController.selectedIndex = this.m_panelController.selectedIndex == 2 ? 3 : 2; //有留海
        }
        else {
            this.m_panelController.selectedIndex = this.m_panelController.selectedIndex == 0 ? 1 : 0; //无留海
        }

        if (GameFacade.Instance.GameMng.sheet == 0) //隐藏报表按钮
        {
            this.m_selfController.selectedIndex = this.m_selfController.selectedIndex == 0 ? 2 : 0; //按钮显示、隐藏            
        }
        else {
            this.m_selfController.selectedIndex = this.m_selfController.selectedIndex == 0 ? 1 : 0; //按钮显示、隐藏 
        }

        GameFacade.Instance.GameMng.seeLog();

    }
    //#endregion
}