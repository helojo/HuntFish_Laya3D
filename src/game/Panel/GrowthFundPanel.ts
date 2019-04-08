import GComponent = fairygui.GComponent;
import GSlider = fairygui.GSlider;
import GameFacade from "../../GameFacade";
import Sound from "../../constant/SoundNameConstant";
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import CommonConstant from "../../constant/CommonConstant";
import EventConstantResponse from "../../constant/EventConstantResponse";
import NetAward from "../../net/ProtoHander/NetAward";
import Lang from "../../constant/LanguageConstant";
import { TipType } from "../../manager/TipManager";
import LvDetailPanel from "./LvDetailPanel";
import { utils } from "../../utils/CommonUtil";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";

export default class GrowthFundPanel extends BasePanel {
    private infoList: fairygui.GList;
    private timeTex: fairygui.GLabel;
    private buyId: number = 0;
    private buyPrice: number;
    /**当前等级 */
    private currFundId: number = 0;

    public constructor() {
        super();
        if (GameFacade.Instance.OthMng.isHaveGrowthFundPane) return;
        else GameFacade.Instance.OthMng.isHaveGrowthFundPane = true;
        GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiGrowthFundPath.image, CommonConstant._fuiGrowthFundPath.fui, this, this.onLoad);
        GameFacade.Instance.EventMng.add(EventConstantResponse.GROWTHFUNDCONFIGRESP, this, this.initInfoList);
        GameFacade.Instance.EventMng.add(EventConstantResponse.GROWTHFUNDINFORESP, this, this.fundId);
        GameFacade.Instance.EventMng.add(EventConstantResponse.GROWTHFUNDSTATERESP, this, this.actEndTime);
        GameFacade.Instance.EventMng.add(EventConstantResponse.GROWTHFUNDBUYRESP, this, this.growthFundBuyResp);
    }

    /**
     * 加载设置
     */
    private onLoad(): void {
        this.m_fui = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiGrowthFundPath.Package, "GrowthFund", "GrowthFundCom");
        this.infoList = this.m_fui.getChild("infoList").asList;
        this.timeTex = this.m_fui.getChild("timeTex").asLabel;
        var actDetailsBtn: fairygui.GButton = this.m_fui.getChild("helpBtn").asButton;
        actDetailsBtn.onClick(this, this.onActDetailsClick);
        actDetailsBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick) });
        var lvBonusBtn: fairygui.GButton = this.m_fui.getChild("lvBonus").asButton;
        lvBonusBtn.onClick(this, this.onLvBonusClick);
        lvBonusBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick) });
        var closeBtn: fairygui.GButton = this.m_fui.getChild("closeBtn").asButton;
        closeBtn.onClick(this, this.onClose);
        NetAward.Instance.growthFundInfoReq();
        NetAward.Instance.growthFundStateReq();
        this.refrehFundConfig();
        NetAward.Instance.growthFundStateReq();
    }

    /**
     * 刷新配置
     */
    private refrehFundConfig(): void {
        NetAward.Instance.growthFundConfigReq();
    }
    /**
     * 活动结束时间
     * @param data 
     */
    private actEndTime(data: AwardMsg.growth_fund_state_resp): void {
        Laya.timer.loop(200, this, this.timeShow);
    }
    /**
     * 活动时间显示
     */
    private timeShow() {
        this.timeTex.text = utils.CommonUtils.getTimeDifference(NetAward.Instance.endTime);
    }

    /**
     * 成长基金购买反馈
     * @param data 
     */
    private growthFundBuyResp(data: AwardMsg.growth_fund_buy_resp): void {
        this.currFundId = data.fund_id;
        this.refrehFundConfig();
        this.awardCode(data.code);
    }
    /**
     * 当前基金档次
     * @param data 
     */
    private fundId(data: AwardMsg.growth_fund_info_resp): void {
        this.currFundId = data.fund_id;
    }

    /**
     * 初始化配置信息
     * @param data 
     */
    private initInfoList(data: AwardMsg.growth_fund_config_resp): void {
        this.infoList.removeChildrenToPool();
        var info: Array<AwardMsg.growth_fund_config> = data.configs;
        for (var i: number = 0; i < info.length; i++) {
            var infoCom: GComponent = this.infoList.addItemFromPool().asCom;
            var bgLoader: fairygui.GLoader = infoCom.getChild("bgLoader").asLoader;
            bgLoader.icon = "ui://GrowthFund/" + i;
            var bgLoader: fairygui.GLoader = infoCom.getChild("tipLoader").asLoader;
            bgLoader.icon = "ui://GrowthFund/" + "tip" + i;
            infoCom.getChild("timesTex").text = (info[i].rebate_per).toString();
            infoCom.getChild("priceTex").text = (Number(info[i].price) * 0.01).toString();
            infoCom.getChild("rebateTex").text = (Number(info[i].rebate) * 0.01).toString();
            var byStatusCom: GComponent = infoCom.getChild("byStatusCom").asCom;
            var buy: fairygui.GButton = byStatusCom.getChild("buyBtn").asButton;
            var c: fairygui.Controller = byStatusCom.getController("c1");
            c.selectedIndex = 0;
            if (this.currFundId < 2) {
                c.selectedIndex = 0;
                var id = info[i].fund_id;
                var price = Number(info[i].price);
                this.byBtn(buy, id, price);
                //buy.onClick(this, () => { this.onBuyClick(id, price) });

            }
            else {
                var id = info[i].fund_id;
                if (id == this.currFundId) {
                    c.selectedIndex = 1;
                }
                else if (id > this.currFundId) {
                    c.selectedIndex = 3;
                    var price = Number(info[i].price);
                    var currPrice = Number(info[this.currFundId - 2].price);//等级是从1开始
                    this.byBtn(buy, id, price - currPrice);
                    // buy.onClick(this, () => this.onBuyClick(id, price - currPrice));
                }
                else {
                    c.selectedIndex = 2;
                }
            }
            this.infoList.ensureBoundsCorrect();
        }
    }

    /**
     * 购买按钮
     * @param byBtn 
     * @param id 
     * @param price 
     */
    private byBtn(byBtn: fairygui.GButton, id: number, price: number): void {

        switch (id) {
            case 1:
                var p = price;
                byBtn.onClick(this, () => { this.onBuyClick(1, p) });
                break;
            case 2:
                var p = price;
                byBtn.onClick(this, () => { this.onBuyClick(2, p) });
                break;
            case 3:
                var p = price;
                byBtn.onClick(this, () => { this.onBuyClick(3, p) });
                break;
            case 4:
                var p = price;
                byBtn.onClick(this, () => { this.onBuyClick(4, p) });
                break;
            case 5:
                var p = price;
                byBtn.onClick(this, () => { this.onBuyClick(4, p) });
                break;
            default:
                break;
        }
    }
    /**
     * 购买基金弹框
     * @param id 
     * @param price 
     */
    private onBuyClick(id: number, price: number): void {
        this.onPlaySound(Sound.soundKeyArr.onClick);
        this.buyId = id;
        this.buyPrice = price;
        GameFacade.Instance.TipMng.createTip(Lang.lvFundCh.tipsLevelBuy.replace("{0}", (price * 0.01).toString()), TipType.YESNOCHOICE, function (isTrue: boolean) {
            if (isTrue) {
                NetAward.Instance.growtFundBuyReq(id);
            }

        });
    }

    /**
     * 是否确定购买
     * @param isTrue 
     */
    private isTrue(isTrue: boolean): void {
        if (isTrue) {
            NetAward.Instance.growtFundBuyReq(this.buyId)
        }
    }

    /**
     * 活动说明
     */
    private onActDetailsClick(): void {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.LvDetailPanel);
    }

    /**
     * 等级奖金
     */
    private onLvBonusClick(): void {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.LevelBonusPanel);
        this.onClose();
    }
    /**
     * 
     * @param targentCom 关闭目标
     */
    private onClose(): void {
        Laya.timer.clear(this, this.timeShow);
        GameFacade.Instance.OthMng.isHaveGrowthFundPane = false;
        this.onPlaySound(Sound.soundKeyArr.onClose);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.GROWTHFUNDCONFIGRESP, this, this.initInfoList);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.GROWTHFUNDINFORESP, this, this.fundId);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.GROWTHFUNDSTATERESP, this, this.actEndTime);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.GROWTHFUNDBUYRESP, this, this.growthFundBuyResp);
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.GrowthFundPanel);
    }

    /**
    * 
    * 播放按钮点击声音
    */
    private onPlaySound(str: string): void {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, str);
    }
    /**
     * 基金名字转化
     * @param id 
     */
    private numToFundName(id: number): string {
        var str: string = null;
        switch (id) {
            case 1:
                str = "全民基金";
                break;
            case 2:
                str = "荣耀基金";
                break;
            case 3:
                str = "尊享基金";
                break;
            case 4:
                str = "豪华基金";
                break;
            case 5:
                str = "至臻基金";
                break;
            default:
                break;
        }
        return str;
    }
    private awardCode(fundBuy: AwardMsg.award_code): void {
        var code = AwardMsg.award_code;
        switch (fundBuy) {
            case code.success:
                utils.CommonUtils.log("购买：金币成功");
                GameFacade.Instance.TipMng.createTip(Lang.lvFundCh.tipFundBuy.replace("{0}", (this.buyPrice * 0.01).toString()).replace("{1}", this.numToFundName(this.buyId)), TipType.FLOATTIP);
                break;
            case code.fail:
                utils.CommonUtils.log("购买：金币失败");
                GameFacade.Instance.TipMng.createTip(Lang.lvFundCh.tipPurchaseFailed, TipType.ONECLOSE);
                break;
            case code.out_of_cash:
                utils.CommonUtils.log("购买：金币不足");
                GameFacade.Instance.TipMng.createTip(Lang.lvFundCh.tipsGoldLess, TipType.ONECLOSE);
                break;
            case code.top_fun_id:
                utils.CommonUtils.log("购买：当前已经是最高档次基金");
                break;
            case code.lv_had_reward:
                utils.CommonUtils.log("购买：当前奖励已经领取");
                break;
            case code.levelnot:
                utils.CommonUtils.log("购买：当前奖励未满足领取条件");
                break;
            case code.prev_reward:
                utils.CommonUtils.log("购买：前置奖励未领取");
                break;
            case code.had_bought:
                utils.CommonUtils.log("购买：活动已经买了");
                break;
            case code.act_end:
                GameFacade.Instance.OthMng.isActEnd = true;
                break;
            default:
                break;
        }
    }
}