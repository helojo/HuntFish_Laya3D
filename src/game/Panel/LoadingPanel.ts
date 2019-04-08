import GameFacade from "../../GameFacade";
import CommonConstant from "../../constant/CommonConstant";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";
import { utils } from "../../utils/CommonUtil";

export default class LoadingPanel extends BasePanel {

    private m_LoadingProgress: fairygui.GProgressBar;
    private m_content: string;
    private m_progressTitle: fairygui.GLabel;
    private m_progressLoader: fairygui.GLoader;
    constructor(id) {
        super();

        ////fairygui.UIPackage.addPackage(CommonConstant._fuiLoadingPath.Package);
        this.m_content = "";
        this.m_fui = fairygui.UIPackage.createObject("Loading", "LoadingPanel").asCom;
        this.m_LoadingProgress = this.m_fui.getChild("LoadingBar").asProgress;
        this.m_progressTitle = this.m_fui.getChild("value").asLabel;
        this.m_progressLoader = this.m_fui.getChild("loader").asLoader;
        this.m_nameID = id;
        this.InitUI();
    }

    private InitUI() {
        this.addChild(new Laya.Image(CommonConstant._loadingBgPath));
        GameFacade.Instance.SceneMng.AddFUI(this.m_fui);
        this.SetProgress(0);
        var r: Number = Math.round(Math.random() * 10 + 1);
        this.m_progressLoader.icon = "ui://Loading/" + "tishi_" + ((r > 5) ? 4 : r);
    }

    public SetProgress(value: number): void {
        this.m_LoadingProgress.value = Math.round(value * 100);
        this.m_progressTitle.text = Math.round(value * 100) + "%";
        if (this.m_LoadingProgress.value > this.m_LoadingProgress.max) {
            this.m_LoadingProgress.value = this.m_LoadingProgress.max;

        }
    }

    public SetContent(content: string) {
        this.m_content = content;
    }


}