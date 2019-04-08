import GameFacade from "../../GameFacade";
import BasePanel from "../Panel/BasePanel";
import EnumData from "../../Enum/EnumData";
import GameEvent from "../../constant/GameEvent";
import { utils } from "../../utils/CommonUtil";
import BatteryController from "../../controller/BatteryController";

/**
 * 提示弹框
*/
export default class PromptPanel extends BasePanel {

    private m_content: fairygui.GLabel;
    private m_cancelBtn: fairygui.GButton;
    private m_confirmBtn: fairygui.GButton;
    private m_type: EnumData.EnumPromptType;

    constructor(id: EnumData.EnumPanelType) {
        super();
        this.m_nameID = id;
        this.m_fui = fairygui.UIPackage.createObject("Hall", "ReconnectTip").asCom;
        this.m_confirmBtn = this.m_fui.getChild("ConfirmBtn").asButton;
        this.m_confirmBtn.onClick(this, this.OnConfirmBtnClick);
        this.m_cancelBtn = this.m_fui.getChild("CancelBtn").asButton;
        this.m_cancelBtn.onClick(this, this.OnCancelBtnClick);
        this.m_content = this.m_fui.getChild("ContentLabel").asLabel;
        GameFacade.Instance.SceneMng.AddFUI(this.m_fui);

        GameFacade.Instance.SceneMng.bProhibitWalletBtn = true;
    }

    public InitData(type: EnumData.EnumPromptType, text: string) {
        this.m_type = type;
        switch (type) {
            case EnumData.EnumPromptType.ExitHuntScene: //退出捕猎场景
            case EnumData.EnumPromptType.StopAutoAttack: //停止自动捕鱼
                {
                    this.m_cancelBtn.visible = true;
                    this.m_confirmBtn.x = 680;
                    break;
                }
            case EnumData.EnumPromptType.RefeshGame://异地登录提示框
                {
                    this.m_cancelBtn.visible = false;
                    this.m_confirmBtn.x = 563;
                    break;
                }
        }

        this.m_content.text = text;
    }

    private OnConfirmBtnClick() {

        switch (this.m_type) {
            case EnumData.EnumPromptType.ExitHuntScene: //退出捕猎场景
                {
                    GameFacade.Instance.SceneMng.EnterHallScene(() => { });
                    break;
                }
            case EnumData.EnumPromptType.StopAutoAttack: //停止自动捕鱼
                {
                    GameFacade.Instance.EventMng.dispatch(GameEvent.HUNT_AUTOATTACK, false);
                    break;
                }
            case EnumData.EnumPromptType.RefeshGame://异地登录提示框
                {
                    GameFacade.Instance.SocketMng.refreshGame();
                    break;
                }
        }
        this.Close();
    }

    private OnCancelBtnClick() {
        // if (manager.TouchMoveFullScreen.instance.isAndroidApp) {
        //     window.close();
        // } else {
        //     window.location.href = GameFacade.Instance.GameMng.lobbyUrl;
        // }
        GameFacade.Instance.SceneMng.bProhibitWalletBtn = false;
        this.Close();
    }
}