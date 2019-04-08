import GComponent = fairygui.GComponent;
import GSlider = fairygui.GSlider;
import GInput = fairygui.GTextInput;
import GameFacade from "../../GameFacade";
import Sound from "../../constant/SoundNameConstant";
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import NetWallet from "../../net/ProtoHander/NetWallet";
import { utils } from "../../utils/CommonUtil";
import WalletKey from "./WallerKeyPanel";
import BasePanel from "./BasePanel";
import EventConstantResponse from "../../constant/EventConstantResponse";
import CommonConstant from "../../constant/CommonConstant";
import EventNetResponse from "../../net/ProtoHander/EventNetResponse";
import NetRoom from "../../net/ProtoHander/NetRoom";
import Lang from "../../constant/LanguageConstant";
import { TipType } from "../../manager/TipManager";
import WalletManager from "../../manager/WalletManager";
import { util } from "../../../libs/protobuf-library";
import NetLogin from "../../net/ProtoHander/NetLogin";
import EnumData from "../../Enum/EnumData";

export default class WalletPanel extends BasePanel {
    private walletSli: GSlider;
    private walletInput: GInput;
    private walletKeyText: fairygui.GLabel;
    private walletKeyBtn: fairygui.GButton;
    private ratio: number = 0.05;
    /** 中心钱包*/
    private certerWalletValue: number = 0;
    /** fg钱包*/
    private fgWalletValue: number = null;
    /** 您要追加到..*/
    private addToValue: number = 0;
    /** 实际充值额度*/
    private addValue: number = 0;
    /** 是否自动加钱*/
    private isAutoLocal: boolean;
    private isAutoServer: boolean;

    public constructor(id: EnumData.EnumPanelType) {
        super();
        this.m_nameID = id;
        //GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiFreeTranWalletPath.image, CommonConstant._fuiFreeTranWalletPath.fui, this, this.onLoadWallet);
        GameFacade.Instance.EventMng.add(EventConstantResponse.WALLETKEYNUM, this, this.walletKeyNum);
        GameFacade.Instance.EventMng.add(EventNetResponse.SyncChipsResp, this, this.syncChip); //
        //GameFacade.Instance.EventMng.add(EventConstantResponse.SYNCWALLETFG, this, this.syncWelletFG); //

        this.initFui();
        this.addListerOnClick();

        NetRoom.Instance.SyncChipsReq();
    }

    public initData(data: WalletMsg.main_wallet_resp) {
        this.certerWalletValue = Number(data.chips);
        this.isAutoServer = data.auto_wallet == 0 ? false : true;
        this.isAutoLocal = this.isAutoServer;

        GameFacade.Instance.SceneMng.bProhibitWalletBtn = true;

        this.updateUIValue();
    }

    private initFui() {
        fairygui.UIPackage.addPackage(CommonConstant._fuiFreeTranWalletPath.Package);
        this.m_fui = fairygui.UIPackage.createObject("FreeTranWallet", "FreeTranWalletPanel").asCom;
        GameFacade.Instance.SceneMng.AddFUI(this.m_fui);
        fairygui.UIConfig.defaultFont = "幼圆";
        this.m_fui.getChild("playAccText").text = utils.CommonUtils.nickNameWithSymbol(NetLogin.Instance.RoleInfo.nickname);
        this.m_fui.getChild("certerWalletText").text = utils.CommonUtils.numberFormat(this.certerWalletValue);
        this.m_fui.getChild("fgWalletText").text = utils.CommonUtils.numberFormat(this.fgWalletValue);

        this.m_fui.getChild("autoAddBut").asButton.selected = this.isAutoServer;
        this.isAutoLocal = this.isAutoServer;
        this.walletInput = this.m_fui.getChild("input").asTextInput;
        this.walletKeyText = this.m_fui.getChild("keyText").asLabel;
        this.walletKeyBtn = this.m_fui.getChild("keyBtn").asButton;
        this.walletSli = this.m_fui.getChild("walletSli").asSlider;
        this.walletSli.on(fairygui.Events.STATE_CHANGED, this, this.onWalletSliderDragEnd);

        if (Laya.Browser.onPC) {
            if (this.fgWalletValue == 0) {
                this.walletInput.text = "0";
            }
            else {
                this.walletInput.text = utils.CommonUtils.numberFormat(this.addToValue);
            }
            this.walletInput.on(Laya.Event.INPUT, this, this.onInput);
            this.walletKeyText.visible = false;
            this.walletKeyBtn.visible = false;
        }
        else {
            this.walletInput.visible = false;
            this.walletKeyText.text = utils.CommonUtils.numberFormat(this.fgWalletValue);
            this.walletKeyBtn.on(Laya.Event.MOUSE_DOWN, this, this.createWalletKey);
        }
    }

    private updateUIValue() {
        if ((this.certerWalletValue + this.fgWalletValue) == 0) {
            utils.CommonUtils.log("-----initUI this.fgWalletValue = ", this.fgWalletValue);
            this.walletSli.enabled = false;
        }
        else {
            this.walletSli.max = this.certerWalletValue + this.fgWalletValue;
        }

        this.m_fui.getChild("autoAddBut").asButton.selected = this.isAutoServer;
        this.isAutoLocal = this.isAutoServer;
        this.m_fui.getChild("certerWalletText").text = utils.CommonUtils.numberFormat(this.certerWalletValue);
        this.m_fui.getChild("fgWalletText").text = utils.CommonUtils.numberFormat(this.fgWalletValue);
        this.walletInput.text = utils.CommonUtils.numberFormat(this.addToValue);
        this.walletKeyText.text = utils.CommonUtils.numberFormat(this.fgWalletValue);
        this.walletSli.value = this.fgWalletValue;
    }

    /**
     * 请求同步FG钱包
     * @param data 
     */
    private syncChip(data: RoomMsg.sync_chips_resp) {
        //假设已发射2发子弹，但都没碰到鱼，此时客户端已经扣钱但是服务端是没有扣钱的
        //这时面板的数据应该与客户端同步
        utils.CommonUtils.log("  syncChip this.fgWalletValue = ", this.fgWalletValue);
        utils.CommonUtils.log("  syncChip Number(data.chips) = ", Number(data.chips));

        GameFacade.Instance.GameMng.seeLog();

        if (null == this.fgWalletValue) {
            this.fgWalletValue = Number(data.chips);
        }
        this.addToValue = this.fgWalletValue;
        this.updateUIValue();
    }

    /** 发射子弹、打死鱼时同步FG钱包*/
    public syncWelletFG(chips: number) {
        if (this.m_fui != null) {
            console.log("---syncWelletFG", chips);
            this.fgWalletValue = Number(chips);
            this.updateUIValue();
        }
    }

    /**
     * 
     * @param str 小键盘输入的值
     */
    private walletKeyNum(str: string) {
        utils.CommonUtils.log(str);
        this.walletKeyText.text = str;
        var v: number = Number(utils.CommonUtils.just_num(str));
        // if (v <= this.fgWalletValue) return;
        // if (v > this.certerWalletValue + this.fgWalletValue) {
        //     v = this.certerWalletValue + this.fgWalletValue;
        // }
        this.onClickMeanwhileChange(v * 100);
    }

    /**
     * 对按钮进行监控
     */
    private addListerOnClick() {
        this.m_fui.getChild("addBut").onClick(this, this.onClickAdd);
        this.m_fui.getChild("subBut").onClick(this, this.onClickSub);
        this.m_fui.getChild("autoAddBut").onClick(this, this.onClickIsAuto);
        this.m_fui.getChild("startBut").onClick(this, this.onClickStart);
        this.m_fui.getChild("close").onClick(this, this.OnClose);
    }

    /**
     * 创建小键盘
     */
    private createWalletKey() {
        new WalletKey(this.fgWalletValue + this.certerWalletValue);
    }

    /**
     * 输入值
     */
    private onInput() {
        utils.CommonUtils.log("this.walletInput.text" + this.walletInput.text);

        let content = utils.CommonUtils.just_num(this.walletInput.text);
        let max = utils.CommonUtils.numberFixed(this.fgWalletValue + this.certerWalletValue);
        if (Number(content) > max) {
            content = max.toString();
        }

        this.walletSli.value = Number(content) * 100;
        this.addToValue = Number(content) * 100;

        this.walletInput.text = utils.CommonUtils.check_Phone_Text(content);
    }

    /**
     * 点击加号
     */
    private onClickAdd() {
        var add: number = this.addToValue + this.certerWalletValue * this.ratio;
        var all: number = this.certerWalletValue + this.fgWalletValue;
        if (this.certerWalletValue > 0 && this.addToValue < all) {
            if (add >= all) {
                this.onClickMeanwhileChange(all);
            }
            else {
                this.onClickMeanwhileChange(add);
            }
        }
    }

    /**
     *点击减号
     */
    private onClickSub() {

        //if (this.addToValue < this.certerWalletValue && this.addToValue > this.fgWalletValue) {
        this.onClickMeanwhileChange(this.addToValue - this.certerWalletValue * this.ratio);
        //}
    }

    /**
     * 点击是否自动加钱
     */
    private onClickIsAuto() {
        if (this.isAutoLocal) {
            this.isAutoLocal = false;
        }
        else {
            this.isAutoLocal = true;
        }
    }

    /**
     * 拖拽滑动条
     */
    private onWalletSliderDragEnd() {
        this.m_fui.on(Laya.Event.MOUSE_UP, this, function () {
            var v: number = this.walletSli.value;
            if (this.walletSli.value <= this.fgWalletValue) {
                this.walletSli.value = this.fgWalletValue;
            }
            this.addToValue = this.walletSli.value;
            this.walletInput.text = utils.CommonUtils.numberFormat(this.walletSli.value);
            this.walletKeyText.text = utils.CommonUtils.numberFormat(this.walletSli.value);
        });
    }
    /**
     * 点击加钱减钱是同时改变滑动条及加的钱数
     */
    private onClickMeanwhileChange(num: number) {
        if (num <= this.fgWalletValue) {
            num = this.fgWalletValue;
        }
        this.addToValue = num;
        this.walletInput.text = utils.CommonUtils.numberFormat(num).toString();
        this.walletKeyText.text = utils.CommonUtils.numberFormat(num).toString();
        this.walletSli.value = num;
    }

    /**
     * 点击start游戏
     */
    private onClickStart() {

        if (this.certerWalletValue == 0) {
            GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.centerNotEnough, TipType.FLOATTIP);
            return;
        }
        if (this.addToValue == 0) {
            GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.setMoney, TipType.FLOATTIP);
            return;
        }
        else if (this.addToValue == this.fgWalletValue && this.isAutoLocal == this.isAutoServer || this.addToValue < this.fgWalletValue) {
            //else if(this.addToValue < this.fgWalletValue){
            GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.operationInvalid, TipType.FLOATTIP);
            return;
        }

        GameFacade.Instance.WalletMng.addToValue = this.addToValue;
        GameFacade.Instance.WalletMng.isAutoLocal = this.isAutoLocal;
        GameFacade.Instance.WalletMng.fgWalletValueByPanel = this.fgWalletValue;
        NetWallet.Instance.walletReq(this.addToValue, this.isAutoLocal);

        this.OnClose();
    }


    public OnClose() {

        this.fgWalletValue = null;

        GameFacade.Instance.EventMng.remove(EventConstantResponse.WALLETKEYNUM, this, this.walletKeyNum);
        //GameFacade.Instance.EventMng.remove(EventConstantResponse.SYNCWALLETFG, this, this.syncWelletFG);
        GameFacade.Instance.EventMng.remove(EventNetResponse.SyncChipsResp, this, this.syncChip);

        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.onClose);

        //this.m_fui.dispose();
        GameFacade.Instance.SceneMng.bProhibitWalletBtn = false;
        GameFacade.Instance.WalletMng.walletPanel = null;

        this.Close();
    }
}