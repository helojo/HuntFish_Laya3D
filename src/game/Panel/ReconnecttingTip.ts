import GameFacade from "../../GameFacade";
import BasePanel from "../Panel/BasePanel";
import EnumData from "../../Enum/EnumData";

/**
 * 断线自动重连的ui
 */
export default class ReconnecttingTip extends BasePanel{
    
    constructor(id:EnumData.EnumPanelType){
        super();
        this.m_fui = fairygui.UIPackage.createObject("Hall", "ReconnectUI").asCom;
        var trans:fairygui.Transition = this.m_fui.getTransition("t0");
        trans.play();
        this.m_fui.name = "ReconnecttingTip";
        this.m_nameID = id;
        GameFacade.Instance.SceneMng.AddFUI(this.m_fui);
    }
}