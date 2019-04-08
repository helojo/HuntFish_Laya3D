import GComponent = fairygui.GComponent;
import GSlider = fairygui.GSlider;
import GameFacade from "../../GameFacade";
import Sound from "../../constant/SoundNameConstant";
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import CommonConstant from "../../constant/CommonConstant";
import EventConstantResponse from "../../constant/EventConstantResponse";
import NetRoleInfo from "../../net/ProtoHander/NetRoleInfo";
import Lang from "../../constant/LanguageConstant";
import { TipType } from "../../manager/TipManager";
import NetAward from "../../net/ProtoHander/NetAward";
import LvDetailPanel from "./LvDetailPanel";
import { utils } from "../../utils/CommonUtil";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";

export default class LevelBonusPanel extends BasePanel {
    private upgradeContr: fairygui.Controller;//是否已经升级控制
    private lvReContr: fairygui.Controller;//等级领取控制
    private tipContr: fairygui.Controller;//提示框
    private buyMoneyTex: fairygui.GLabel;//购买基金需要多少钱text
    private currTotalReTex: fairygui.GLabel;//当前累计领取奖金text
    private currReLvTex: fairygui.GLabel;//当前领取等级text
    private currReRewardTex: fairygui.GLabel;//当前等级领取奖金text
    private preBtn: fairygui.GButton;//上一个按钮
    private nextBtn: fairygui.GButton;//下一个按钮
    private reBtn: fairygui.GButton;//领取按钮
    private _upgradeBtn: fairygui.GButton;//前往升级按钮
    private _recordBtn: fairygui.GButton;//记录按钮
    private _detailsBtn: fairygui.GButton;//详情按钮
    private expList: fairygui.GList;//基金列表
    private currFundId: number;//当前基金
    private currTotalRe: number;//当前累计领取奖金
    private currLv: number;//当前等级
    private nextLv: number;//下一等级
    private currReLv: number;//当前领取等级
    private currReReward: number;//当前等级领取奖金
    public constructor() {
        super();
        if (GameFacade.Instance.OthMng.isHaveLevelBonusPanel) return;
        else GameFacade.Instance.OthMng.isHaveLevelBonusPanel = true;
        GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiLevelBonusPath.image, CommonConstant._fuiLevelBonusPath.fui, this, this.onLoad);
        GameFacade.Instance.EventMng.add(EventConstantResponse.LVCONFIGRESP, this, this.initInfoList);
        GameFacade.Instance.EventMng.add(EventConstantResponse.LVAWARDRESP, this, this.reLvAwardData);
        GameFacade.Instance.EventMng.add(EventConstantResponse.LVINFORESP, this, this.initLvAwardData);
    }

    /**
     * 加载设置  
     */
    private onLoad(): void {
        this.m_fui = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiLevelBonusPath.Package, "LevelBonus", "LevelBonus");
        var tipCom = this.m_fui.getChild("tipCom").asCom;
        this.tipContr = tipCom.getController("c1");
        this.buyMoneyTex = tipCom.getChild("buyMoneyTex").asLabel;
        var upgradeCom = this.m_fui.getChild("upgradeCom").asCom;
        this.upgradeContr = upgradeCom.getController("c1");
        this._upgradeBtn = upgradeCom.getChild("upgradeBtn").asButton;
        this._upgradeBtn.onClick(this, this.onUpgradeClick);
        this._upgradeBtn.onClick(this, () => { this.soundPlay(Sound.soundKeyArr.onOpen) });
        var receiveCom = this.m_fui.getChild("receiveCom").asCom;
        this.lvReContr = receiveCom.getController("c1");
        this.reBtn = receiveCom.getChild("reBtn").asButton;
        this.expList = this.m_fui.getChild("ExpList").asList;
        this.preBtn = this.m_fui.getChild("preBtn").asButton;
        this.nextBtn = this.m_fui.getChild("nextBtn").asButton;
        this.preBtn.onClick(this, () => { this.onlvConfigReqClick(this.currFundId - 1) });
        this.nextBtn.onClick(this, () => { this.onlvConfigReqClick(this.currFundId + 1) });
        this.currTotalReTex = this.m_fui.getChild("allBounsTex").asLabel;
        this.currReLvTex = this.m_fui.getChild("lvTex").asLabel;
        this.currReRewardTex = this.m_fui.getChild("bounsTex").asLabel;
        this._recordBtn = this.m_fui.getChild("recordBtn").asButton;
        this._recordBtn.onClick(this, this.onRecordClick);
        this._recordBtn.onClick(this, () => { this.soundPlay(Sound.soundKeyArr.onOpen) });
        this._detailsBtn = this.m_fui.getChild("detailsBtn").asButton;
        this._detailsBtn.onClick(this, this.onHelpClick);
        this._detailsBtn.onClick(this, () => { this.soundPlay(Sound.soundKeyArr.onOpen) });
        var closeBtn: fairygui.GButton = this.m_fui.getChild("closeBtn").asButton;
        closeBtn.onClick(this, this.onClose);
        this.refresh();
    }

    /**
     *初始、失败之后重新刷新
     */
    private refresh(): void {
        NetRoleInfo.Instance.lvInfoReq();
    }
    /**
     * 初始化奖金数据
     */
    private initLvAwardData(): void {
        var info = NetRoleInfo.Instance.lvInfo;
        this.currFundId = NetRoleInfo.Instance.lvInfo.fund_id;
        NetRoleInfo.Instance.lvConfigReq(this.currFundId);
        this.currLv = info.lv;
        this.m_fui.getChild("expLvTex").text = info.lv + "级";
        var expPre: fairygui.GLabel = this.m_fui.getChild("expPreTex").asLabel;
        var expSli: fairygui.GSlider = this.m_fui.getChild("expSli").asSlider;
        var needExp: number = info.need_exp as number;
        var exp: number = info.exp as number;
        if (needExp == 0) {
            expPre.text = "0.00%";
            expSli.value = 0;
        }
        else {
            expSli.max = needExp;
            expSli.value = exp;
            expPre.text = (exp / needExp * 100).toFixed(0) + "%";
        }
        this.m_fui.getChild("disNextExpTex").text = (needExp - exp).toString();
        this.m_fui.getChild("nextBounsTex").text = (Number(info.next_reward) * 0.01).toString();
        this.currTotalReTex.text = (Number(info.total_reward) * 0.01).toString();
        this.currTotalRe = info.total_reward as number;
        this.awardRe(info.lv, info.next_reward_lv, Number(info.reward));
    }

    /**
     * 领取等级反馈结果
     * @param data 
     */
    private reLvAwardData(data: AwardMsg.lv_award_resp): void {
        if (this.awardCode(data.code)) {
            GameFacade.Instance.TipMng.createTip(Lang.lvFundCh.tipLevelReceived.replace("{0}", (this.currReReward * 0.01).toString()), TipType.FLOATTIP);
            this.currTotalRe = Number(this.currTotalRe) + Number(this.currReReward);
            this.currTotalReTex.text = (this.currTotalRe * 0.01).toString();
            this.awardRe(data.lv, data.next_lv, Number(data.reward));
        }
        else {
            GameFacade.Instance.TipMng.createTip(Lang.lvFundCh.tipReceiveFailed, TipType.FLOATTIP);
            this.refresh();
        }
    }
    /**
     * 领取等奖奖金
     * @param lv 
     * @param nextLv 
     * @param reward 
     */
    private awardRe(lv: number, nextLv: number, reward: number): void {
        this.currReLv = lv;
        this.nextLv = nextLv;
        this.currReReward = reward;
        this.currReLvTex.text = nextLv.toString();
        this.currReRewardTex.text = Number(reward * 0.01).toString();
        if (nextLv == 0) {//已经领取最高等级
            this.lvReContr.setSelectedIndex(3);
            return;
        }
        else {
            if (this.currLv >= nextLv)//可领取
            {
                this.lvReContr.setSelectedIndex(2);
                this.reBtn.onClick(this, this.onReLvAwardClick);
            }
            else {//不可领取
                this.lvReContr.setSelectedIndex(0);
            }
        }
    }

    /**
     * 领取等级
     */
    private onReLvAwardClick(): void {
        this.soundPlay(Sound.soundKeyArr.luckAward);
        this.lvReContr.selectedIndex = 1;
        Laya.timer.once(1000, this, this.onPlayAwardAni)
    }
    /**
     * 播放领取动画
     */
    private onPlayAwardAni() {
        NetAward.Instance.lvAwardReq(this.nextLv)
    }
    /**
     *基金奖金数据列表
     * @param data 
     */
    private initInfoList(data: RoleInfoMsg.lv_config_resp): void {
        var tip: fairygui.GLoader = this.m_fui.getChild("tipLoader").asLoader;
        this.currFundId = data.fund_id;
        this.isShowMoney(data.fund_id);
        this.isBuy(data.buy_mark);
        this.buyMoneyTex.text = (Number(data.price) * 0.01).toString();
        this.expList.removeChildrenToPool();
        var configs = data.configs;
        tip.icon = "ui://LevelBonus/" + "tip" + (Number(data.fund_id) - 1);
        for (var i: number = 0; i < configs.length; i++) {
            var infoCom: GComponent = this.expList.addItemFromPool().asCom;
            infoCom.getChild("lvTex").text = configs[i].lv.toString();
            infoCom.getChild("expTex").text = configs[i].exp.toString();
            infoCom.getChild("awardTex").text = (Number(configs[i].award) * 0.01).toString();
            this.expList.ensureBoundsCorrect();
        }
    }

    /**
     * 点击请求基金显示
     */
    private onlvConfigReqClick(id: number): void {
        if (id > 5) {
            return;
        }
        NetRoleInfo.Instance.lvConfigReq(id);
    }

    /**
     * 是不是全民等级
     * @param id 
     */
    private isShowMoney(id: number): void {
        if (id == 1) {
            this.tipContr.setSelectedIndex(1);
        }

        else {
            this.tipContr.setSelectedIndex(0);
        }
    }
    /**
     * 是否已经购买
     * @param buyMark 
     */
    private isBuy(buyMark: number) {
        if (buyMark == 0) {
            this.upgradeContr.setSelectedIndex(0);
            if (this.currFundId == 5) {
                this.nextBtn.visible = false;
            }
            else {
                this.nextBtn.visible = true;
                this.preBtn.visible = true;
            }
        }
        else if (buyMark == 1) {
            this.upgradeContr.setSelectedIndex(1);
            this.preBtn.visible = false;
        }
        else {
            this.upgradeContr.setSelectedIndex(1);
        }
    }

    /**
     * 帮助按钮
     */
    private onHelpClick(): void {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.LvDetailPanel);
    }
    /**
     * 前往升级
     */
    private onUpgradeClick(): void {
        if (GameFacade.Instance.OthMng.isActEnd) {
            GameFacade.Instance.TipMng.createTip(Lang.lvFundCh.tipActEnd, TipType.FLOATTIP);
        }
        else {
            GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.GrowthFundPanel);
            this.onClose();
        }
    }

    /**
     * 领取记录
     */
    private onRecordClick(): void {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.LvRecordsPanel);
    }
    /**
     * 
     * @param targentCom 关闭目标
     */
    private onClose(): void {
        GameFacade.Instance.OthMng.isHaveLevelBonusPanel = false;
        this.soundPlay(Sound.soundKeyArr.onClose);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.LVCONFIGRESP, this, this.initInfoList);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.LVAWARDRESP, this, this.reLvAwardData);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.LVINFORESP, this, this.initLvAwardData);
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.LevelBonusPanel);
    }
    /**
      * 播放声音
      */
    private sound(): void {
        this.preBtn.onClick(this, () => { this.soundPlay(Sound.soundKeyArr.onClick) });
        this.nextBtn.onClick(this, () => { this.soundPlay(Sound.soundKeyArr.onClick) });
        this._upgradeBtn.onClick(this, () => { this.soundPlay(Sound.soundKeyArr.onOpen) });
        this._recordBtn.onClick(this, () => { this.soundPlay(Sound.soundKeyArr.onOpen) });
        this._detailsBtn.onClick(this, () => { this.soundPlay(Sound.soundKeyArr.onOpen) });
    }
    /**
     * 声音播放
     */
    private soundPlay(str: string): void {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, str);
    }
    /**
     * 奖金领取状态
     * @param receLvBonus 
     */
    private awardCode(receLvBonus: AwardMsg.award_code): boolean {
        var award_code = AwardMsg.award_code;
        var isTrue: boolean = false;
        switch (receLvBonus) {
            case award_code.success:
                utils.CommonUtils.log("领取：金币成功");
                isTrue = true;
                break;
            case award_code.fail:
                utils.CommonUtils.log("领取：金币失败");//更新整个面板         
                break;
            case award_code.out_of_cash:
                utils.CommonUtils.log("领取：金币不足");
                break;
            case award_code.top_fun_id:
                utils.CommonUtils.log("领取：当前已经是最高档次基金");
                break;
            case award_code.lv_had_reward:
                utils.CommonUtils.log("领取：当前奖励已经领取");
                break;
            case award_code.levelnot:
                utils.CommonUtils.log("领取：当前奖励未满足领取条件");
                break;
            case award_code.prev_reward:
                utils.CommonUtils.log("领取：前置奖励未领取");
                break;
            case award_code.had_bought:
                utils.CommonUtils.log("领取：活动已经结束");
                break;
            case award_code.act_end:
                utils.CommonUtils.log("活动已经结束");
                break;
            default:
                break;
        }
        return isTrue;
    }

}