import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import GComponent = fairygui.GComponent;
import GameFacade from "../../GameFacade";
import EventConstantResponse from "../../constant/EventConstantResponse";
import Sound from "../../constant/SoundNameConstant";
import NetWanners from "../../net/ProtoHander/NetWanners";
import { utils } from "../../utils/CommonUtil";
import CommonConstant from "../../constant/CommonConstant";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";

export default class WinnerPanel extends BasePanel {
    public bcastJpInfo: PoolMsg.bcast_jp_resp;

    public constructor() {
        super();
        Laya.loader.load([
            { url: CommonConstant._fuiWinningPath.image, type: Loader.IMAGE },
            { url: CommonConstant._fuiWinningPath.fui, type: Loader.BUFFER },
        ], Handler.create(this, this.onLoadWinner))
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.luckAward);
    }

    /**
     * 加载设置
     */
    private onLoadWinner(): void {
        fairygui.UIPackage.addPackage(CommonConstant._fuiWinningPath.Package);
        this.m_fui = fairygui.UIPackage.createObject("Winning", "winningPanel").asCom;
        this.m_fui.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        GameFacade.Instance.SceneMng.AddFUI(this.m_fui);
        this.m_fui.getChild("GradeLoader").icon = "ui://Winning/" + this.bcastJpInfo.score_level;
        this.m_fui.getChild("clipText").text = "+" + (utils.CommonUtils.numberFixed(Number(this.bcastJpInfo.score))).toFixed(2);
        Laya.timer.once(2000, this, this.onClose);
    }


    /**
     * 关闭
     */
    private onClose(): void {
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.WinnerPanel);
    }
}