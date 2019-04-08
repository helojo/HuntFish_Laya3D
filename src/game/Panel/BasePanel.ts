import EnumData from "../../Enum/EnumData";
import GameFacade from "../../GameFacade";

export default class BasePanel extends Laya.Sprite {
    protected m_fui: fairygui.GComponent;
    public m_nameID: EnumData.EnumPanelType;
    constructor() {
        super();
        this.m_fui = null;
    }

    protected RemoveAllEvents() {

    }

    public Hide() {
        this.m_fui.visible = false;
    }

    public Show() {
        if (!this.m_fui) return;
        this.m_fui.visible = true;
    }

    public Close(bRemove: boolean = true, id: EnumData.EnumPanelType = this.m_nameID) {
        GameFacade.Instance.SceneMng.RemoveFUI(this.m_fui);
        GameFacade.Instance.SceneMng.destroy(id);
        this.RemoveAllEvents();
    }
}