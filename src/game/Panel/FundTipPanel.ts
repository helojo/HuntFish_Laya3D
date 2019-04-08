import GComponent = fairygui.GComponent;
import GSlider = fairygui.GSlider;
import GameFacade from "../../GameFacade";
import Sound from "../../constant/SoundNameConstant";
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import CommonConstant from "../../constant/CommonConstant";
import ResourceManger from "../../manager/ResourceManger";
import NetRoleInfo from "../../net/ProtoHander/NetRoleInfo";
import NetLogin from "../../net/ProtoHander/NetLogin";
import EventConstantResponse from "../../constant/EventConstantResponse";
import NetRoom from "../../net/ProtoHander/NetRoom";
import EventNetResponse from "../../net/ProtoHander/EventNetResponse";
import NetAward from "../../net/ProtoHander/NetAward";
import { utils } from "../../utils/CommonUtil";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";

export default class FundTipPanel extends BasePanel {
    private timeTex: fairygui.GLabel;
    private currAmountTex: fairygui.GLabel;
    private hightestReceiveTex: fairygui.GLabel;
    private isTipBtn: fairygui.GButton;
    private cuurTipStatus: boolean = false;
    private data: AwardMsg.lv_award_notice_resp = null;
    public constructor(data: AwardMsg.lv_award_notice_resp) {
        super();
        this.data = data;
        GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiFundTipPath.image, CommonConstant._fuiFundTipPath.fui, this, this.onLoad);
    }

    /**
     * 加载设置
     */
    private onLoad(): void {
        this.m_fui = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiFundTipPath.Package, "FundTip", "FundTipCom");
        GameFacade.Instance.EventMng.add(EventConstantResponse.GROWTHFUNDSTATERESP, this, this.actEndTime);
        this.timeTex = this.m_fui.getChild("timeTex").asLabel;
        this.currAmountTex = this.m_fui.getChild("currAmountTex").asLabel;
        this.hightestReceiveTex = this.m_fui.getChild("hightestReceiveTex").asLabel;
        this.isTipBtn = this.m_fui.getChild("isTip").asButton;
        this.isTipBtn.onClick(this, this.onIsTipClick);
        var goFund: fairygui.GButton = this.m_fui.getChild("goBtn").asButton;
        goFund.onClick(this, this.onGoFundClick);
        var closeBtn: fairygui.GButton = this.m_fui.getChild("closeBtn").asButton;
        closeBtn.onClick(this, this.onClose);
        NetRoom.Instance.SyncChipsReq();
        NetRoleInfo.Instance.lvInfoReq();
        this.initData();
        if (NetAward.Instance != null) {
            this.actEndTime();
        }
    }

    /**
    * 活动结束时间
    * @param data 
    */
    private actEndTime(): void {
        Laya.timer.loop(200, this, this.timeShow);
    }
    /**
     * 活动时间显示
     */
    private timeShow() {
        console.log(NetAward.Instance.endTime);
        this.timeTex.text = utils.CommonUtils.getTimeDifference(NetAward.Instance.endTime);
    }
    /**
     * 等级通知的金额
     */
    private initData(): void {
        this.currAmountTex.text = (Number(this.data.award) * 0.01).toFixed(2);
        this.hightestReceiveTex.text = (Number(this.data.max_award) * 0.01).toFixed(2);
    }

    /**
     * 今日是否提示
     */
    private onIsTipClick(): void {
        this.onPlaySound(Sound.soundKeyArr.onClick);
        if (this.cuurTipStatus) {
            this.cuurTipStatus = false;
        }
        else {
            this.cuurTipStatus = true;
        }
    }
    /**
     * 去升级基金
     */
    private onGoFundClick(): void {
        this.onClose();
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.GrowthFundPanel);
    }
    /**
     * 
     * @param targentCom 关闭目标
     */
    private onClose(): void {
        NetAward.Instance.isHaveFundTip = false;
        Laya.timer.clear(this, this.timeShow);
        NetAward.Instance.lvAwardNoticeSetReq(this.cuurTipStatus);
        this.onPlaySound(Sound.soundKeyArr.onClose);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.GROWTHFUNDSTATERESP, this, this.actEndTime);
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.FundTipPanel);
    }

    /**
    * 
    * 播放按钮点击声音
    */
    private onPlaySound(str: string): void {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, str);
    }
}