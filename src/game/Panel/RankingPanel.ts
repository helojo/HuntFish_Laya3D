import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import GComponent = fairygui.GComponent;
import GList = fairygui.GList;
import GImage = fairygui.GImage;
import GObject = fairygui.GObject;
import GLabel = fairygui.GLabel;
import GButton = fairygui.GButton;
import GGroup = fairygui.GGroup;
import Controller = fairygui.Controller;
import GameFacade from "../../GameFacade";
import NetRanking from "../../net/ProtoHander/NetRanking";
import EventConstantResponse from "../../constant/EventConstantResponse";
import NetLogin from "../../net/ProtoHander/NetLogin";
import { utils } from "../../utils/CommonUtil";
import Sound from "../../constant/SoundNameConstant";
import CommonConstant from "../../constant/CommonConstant";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";

export default class RankingPanel extends BasePanel {
    private thisRankBut: GButton;
    private lastRankBut: GButton;
    private thisRankList: GList;
    private lastRankList: GList;
    private selfRankTex: GLabel;
    private selfRankImag: GImage;
    private selfCoin: GLabel;
    private tabC: Controller;
    private currPage: number = 1;
    private isEndPage: Boolean = false;
    private iSCanClick: boolean = true;
    public constructor() {
        super();
        if (GameFacade.Instance.OthMng.isHaveRankPanel) return;
        else GameFacade.Instance.OthMng.isHaveRankPanel = true;
        GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiRankingPath.image, CommonConstant._fuiRankingPath.fui, this, this.onLoadRanking);
        GameFacade.Instance.EventMng.add(EventConstantResponse.RANKRESP, this, this.rankResp);
    }

    /**
     * 加载设置
     */
    private onLoadRanking(): void {
        this.m_fui = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiRankingPath.Package, "Ranking", "RankingPanel");
        this.tabC = this.m_fui.getController("tab");
        this.m_fui.getChild("close").onClick(this, this.onClose);
        this.thisRankBut = this.m_fui.getChild("thisWeekBut").asButton;
        this.lastRankBut = this.m_fui.getChild("lastWeekBut").asButton;
        this.thisRankBut.onClick(this, this.onClickThisRank);
        this.lastRankBut.onClick(this, this.onClickLastRank);
        this.thisRankBut.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.windowChange) });
        this.lastRankBut.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.windowChange) });
        this.thisRankList = this.m_fui.getChild("thisWeekList").asList;
        this.thisRankList.removeChildrenToPool();
        this.lastRankList = this.m_fui.getChild("lastWeekList").asList;
        this.lastRankList.removeChildrenToPool();
        this.selfRankTex = this.m_fui.getChild("selfHaveRankng").asLabel;
        this.selfRankImag = this.m_fui.getChild("selfNoRanking").asImage;
        this.selfCoin = this.m_fui.getChild("selfCoin").asCom.getChild("coinTex").asLabel;
        this.selfCoin.text = "0";
        var nameTxt: fairygui.GTextField = this.m_fui.getChild("selfName").asCom.getChild("playNameTex").asTextField;
        if (!NetLogin.Instance.RoleInfo) return;
        nameTxt.text = NetLogin.Instance.RoleInfo.nickname;
        utils.CommonUtils.nameAutoFontSize(nameTxt);
        this.rankThisWeekReq();
        //this.tabC.selectedIndex = 0;
    }

    /**
     * 点击本周
     */
    private onClickThisRank(): void {
        if (this.iSCanClick) {
            this.iSCanClick = false;
            Laya.timer.once(500, this, this.waitResh);
            this.currPage = 1;
            this.rankThisWeekReq();
            this.thisRankList.removeChildrenToPool();
        }
    }

    /**
     * 点击上周
     */
    private onClickLastRank(): void {
        if (this.iSCanClick) {
            this.iSCanClick = false;
            Laya.timer.once(500, this, this.waitResh);
            this.currPage = 1;
            this.rankLastWeekReq();
            this.lastRankList.removeChildrenToPool();
        }
    }

    /**
     * 等待刷新
     */
    private waitResh(): void {
        this.iSCanClick = true;
    }

    /**
     * 本周数据请求
     */
    private rankThisWeekReq() {
        NetRanking.Instance.rankReq(this.currPage, RankMsg.rank_type.rank_this_week);
    }
    /**
     * 上周数据请求
     */
    private rankLastWeekReq() {
        NetRanking.Instance.rankReq(this.currPage, RankMsg.rank_type.rank_last_week);
    }
    /**
     * 排行榜数据
     * @param data 
     */
    private rankResp(data: RankMsg.rank_resp): void {
        //// console.log(data);
        if (this.tabC.selectedIndex == 0) {
            this.listInfo(data, this.thisRankList, true);

        } else if (this.tabC.selectedIndex == 1) {
            this.listInfo(data, this.lastRankList, false);

        }
    }

    /**
     * 下拉
     */
    private onPullUpRelease(): void {
        if (this.isEndPage) {
            return;
        }
        ////  console.log("下拉");
        this.currPage += 1;
        this.refreshData();
    }
    /**
     * 上拉
     */
    private onPullDownRelease(): void {
        //// console.log("上拉");
        // this.currPage -= 1;
        // if (this.currPage == 0) {
        //     this.currPage = 1;
        // }
        // this.refreshData();
    }

    /**
     * 拖拽刷新数据
     */
    private refreshData(): void {
        if (this.tabC.selectedIndex == 0) {
            this.rankThisWeekReq();
        } else if (this.tabC.selectedIndex == 1) {
            this.rankLastWeekReq();
        }
    }
    /**
     * 排行榜列表
     * @param data 排行榜数据
     * @param list 排行榜列表
     * @param isThisWeek 是否是本周数据
     */
    private listInfo(data: RankMsg.rank_resp, list: GList, isThisWeek: boolean) {
        list.on(fairygui.Events.PULL_DOWN_RELEASE, this, this.onPullDownRelease);
        list.on(fairygui.Events.PULL_UP_RELEASE, this, this.onPullUpRelease);
        if (data.self_rank == 0) {
            this.selfRankImag.visible = true;
            this.selfRankTex.visible = false;
        } else {
            this.selfRankImag.visible = false;
            this.selfRankTex.visible = true;
            this.m_fui.getChild("selfRanking").text = data.self_rank.toString();
        }
        if (isThisWeek) {
            this.selfCoin.text = utils.CommonUtils.numberFormat(Number(data.score));
        } else {
            this.selfCoin.text = utils.CommonUtils.numberFormat(Number(data.last_score));
        }
        if (data.role.length == 0) {
            return;
        }
        else {

            if (data.role.length < 10) {
                this.isEndPage = true;
            }
            else {
                this.isEndPage = false;
            }
            //list.removeChildrenToPool();
            for (var i: number = 0; i < data.role.length; i++) {
                var rankingItemCom: GComponent = list.addItemFromPool().asCom;
                var rankingTex: GGroup = rankingItemCom.getChild("rankingTex").asGroup;
                var rankingImag: GImage = rankingItemCom.getChild("rankingImg").asImage;
                var playNameCom: GComponent = rankingItemCom.getChild("playName").asCom;
                var coinNumCom: GComponent = rankingItemCom.getChild("coinNum").asCom;
                var playName: GLabel = playNameCom.getChild("playNameTex").asLabel;
                var coinNum: GLabel = coinNumCom.getChild("coinTex").asLabel;
                var num: number = i + ((this.currPage - 1) * 10);
                if (num < 3) {
                    rankingImag.visible = true;
                    rankingTex.visible = false;
                    rankingImag.icon = "ui://Ranking/" + "ranking" + (num + 1);
                } else {
                    rankingImag.visible = false;
                    rankingTex.visible = true;
                    rankingItemCom.getChild("ranking").text = (num + 1).toString();
                }
                playName.text = data.role[i].nickname;
                coinNum.text = utils.CommonUtils.numberFormat(Number(data.role[i].score));
                list.ensureBoundsCorrect();
            }
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
        GameFacade.Instance.OthMng.isHaveRankPanel = false;
        this.onPlaySound(Sound.soundKeyArr.onClose);
        this.thisRankList.removeChildrenToPool();
        this.lastRankList.removeChildrenToPool();
        GameFacade.Instance.EventMng.remove(EventConstantResponse.RANKRESP, this, this.rankResp);
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.RankingPanel);
    }
}