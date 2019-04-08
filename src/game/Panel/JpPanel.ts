import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import GComponent = fairygui.GComponent;
import GList = fairygui.GList;
import GameFacade from "../../GameFacade";
import EventConstantResponse from "../../constant/EventConstantResponse";
import Sound from "../../constant/SoundNameConstant";
import NetWanners from "../../net/ProtoHander/NetWanners";
import { utils } from "../../utils/CommonUtil";
import CommonConstant from "../../constant/CommonConstant";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";

export default class JpPanel extends BasePanel {
    private jpList: GList;
    public constructor() {
        super();
        if (GameFacade.Instance.OthMng.isHaveJpPanel) return;
        else GameFacade.Instance.OthMng.isHaveJpPanel = true;
        GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiJpPath.image, CommonConstant._fuiJpPath.fui, this, this.onLoadJp);
        GameFacade.Instance.EventMng.add(EventConstantResponse.WINNERRESP, this, this.jpListInfo);
    }

    /**
     * 加载设置
     */
    private onLoadJp(): void {
        this.m_fui = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiJpPath.Package, "Jp", "jpPanel");
        this.m_fui.getChild("close").onClick(this, this.onClose);
        this.jpList = this.m_fui.getChild("jpList").asList;
        NetWanners.Instance.winnersReq();
    }

    private jpListInfo(data: WinnerMsg.winners_resp) {
        this.jpList.removeChildrenToPool();
        for (var i: number = 0; i < data.role.length; i++) {
            var itemCom: GComponent = this.jpList.addItemFromPool().asCom;
            itemCom.getChild("data").text = utils.CommonUtils.numberToDataTime(data.role[i].date);
            itemCom.getChild("name").text = data.role[i].nickname;
            itemCom.getChild("grade").text = utils.CommonUtils.jpWinnerToType(data.role[i].awardLevel);
            itemCom.getChild("amount").text = (Number(data.role[i].award) / 100).toString();
            this.jpList.ensureBoundsCorrect();
        }
    }

    /**
     * 
     * 播放按钮点击声音
     */
    private onPlaySound(str: string) {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, str);
    }
    /**
     * 关闭
     */
    private onClose(): void {
        GameFacade.Instance.OthMng.isHaveJpPanel = false;
        this.onPlaySound(Sound.soundKeyArr.onClose);
        this.jpList.removeChildrenToPool();
        GameFacade.Instance.EventMng.remove(EventConstantResponse.WINNERRESP, this, this.jpListInfo);
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.JpPanel);
    }
}