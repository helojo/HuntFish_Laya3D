//免转钱包管理类
import GameFacade from "./../GameFacade";
import { utils } from "./../utils/CommonUtil";
import BaseManager from "./BaseManager";
import GComponent = fairygui.GComponent;
import NetLogin from "../net/ProtoHander/NetLogin";
import NetRoom from "../net/ProtoHander/NetRoom";
import NetWallet from "../net/ProtoHander/NetWallet";
import Lang from "../constant/LanguageConstant";
import { TipType } from "./TipManager";
import BatteryController from "../controller/BatteryController";
import WalletPanel from "../game/Panel/WalletPanel";
import EventConstantResponse from "../constant/EventConstantResponse";
import EventNetResponse from "../net/ProtoHander/EventNetResponse";
import EnumData from "../Enum/EnumData";

export default class WalletManager extends BaseManager {

    //private walletSliValue: number;//滑动条滑动的值
    private isHavePanel: boolean = false;

    /** 是否打开面板请求加钱*/
    private bReqWalletPanel: boolean = false;

    /**fg钱包的显示余额 最新 */
    public fgWalletValueByPanel: number = null;
    /**fg钱包在发射子弹后的余额 不记录打死鱼的钱*/
    public fgWalletValueAfterShoot: number = 0;
    public addToValue: number = null;
    public isAutoLocal: boolean;
    public walletPanel: WalletPanel = null;

    public Init() {
        GameFacade.Instance.EventMng.add(EventNetResponse.MainWalletResp, this, this.mainWalletResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.WalletResp, this, this.walletResp);
    }

    public UnInit() {
        GameFacade.Instance.EventMng.remove(EventNetResponse.WalletResp, this, this.walletResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.MainWalletResp, this, this.mainWalletResp);
    }


    /**
     * 加钱请求返回
     * @param data 
     */
    private walletResp(data: WalletMsg.wallet_resp) {
        utils.CommonUtils.log("加钱  walletResp pbData = ", data);
        var code = WalletMsg.msg_wallet_code;
        switch (data.code) {
            case code.SUCCESS:
                let addValue = this.addToValue - this.fgWalletValueAfterShoot;
                if (this.bReqWalletPanel) {
                    this.bReqWalletPanel = false;
                    addValue = this.addToValue - this.fgWalletValueByPanel;
                }
                if (addValue == 0) return;
                GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.autoAddWallet.replace("{0}", (utils.CommonUtils.numberFixed(addValue)).toFixed(2)), TipType.FLOATTIP);
                BatteryController.Instance.StopAutoAttack();
                BatteryController.Instance.StopLockAttack();
                break;
            case code.FAIL:
                GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.reqFail, TipType.FLOATTIP);
                break;
            case code.FREQUENT:
                GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.reqTooFast, TipType.FLOATTIP);
                break;
            case code.FREQUENTY:
                GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.conServer, TipType.FLOATTIP);
                break;
            default:
                break;
        }
    }

    private mainWalletResp(data: WalletMsg.main_wallet_resp) {
        // this.walletPanel.certerWalletValue = Number(data.chips);
        // this.walletPanel.isAutoServer = GameFacade.Instance.WalletMng.changeNumToBool(data.auto_wallet);
        // this.walletPanel.initData();
        utils.CommonUtils.log("钱包弹框请求返回 mainWalletResp pbData = ", data);
        let enumCode = WalletMsg.msg_wallet_code;
        switch (data.code) {
            case enumCode.SUCCESS:
                {
                    //manager.SceneManager.instance.DialogLayer.addChild(new game.MoneySupplyDialog(data.chips));
                    //GameFacade.Instance.WalletMng.ShowWallet(data);
                    this.walletPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.WalletPanel) as WalletPanel;
                    this.walletPanel.initData(data);
                    this.bReqWalletPanel = true;
                    break;
                }
            case enumCode.FAIL:
                {
                    GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.reqFail, TipType.FLOATTIP);
                    break;
                }
            case enumCode.FREQUENTY:
                {
                    GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.conServer, TipType.FLOATTIP);
                    break;
                }
            case enumCode.FREQUENT:
                {
                    GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.reqTooFast, TipType.FLOATTIP);
                    break;
                }
            // case enumCode.NOT_ENOUGH:{
            // 	manager.SceneManager.instance.DialogLayer.addChild(new game.TipDialog(proxys.LanguageProxy.instance.getTextById(20007)/*中心钱包余额不足*/, 300));
            // 	break;
            // }
        }
    }

    /** 同步FG钱包*/
    public setFgWalletValue(chips) {
        if (null != this.walletPanel) {
            this.walletPanel.syncWelletFG(chips);
        }
    }

    public mainWalletReq(): boolean {
        if (NetLogin.Instance.isOfficial) {
            NetWallet.Instance.mainWalletReq();
            return true;
        }
        return false;
    }

    public CloseWalltPanel() {
        if (this.walletPanel != null) {
            this.walletPanel.OnClose();
            this.walletPanel = null;
        }
    }

    // 余额不足
    public IsfgWalletEnough() {
        if (!BatteryController.Instance) return;
        let selfCannon = BatteryController.Instance.selfCannon;
        if (null == selfCannon || null == selfCannon.Data) return false;

        let jettonShow = utils.CommonUtils.numberFixed(selfCannon.Data.jetton_show as number);
        let bulletMulti = utils.CommonUtils.numberFixed(selfCannon.Data.bullet_multi * NetRoom.Instance._curRoomInfo.ante);
        if (jettonShow < bulletMulti) {
            if (NetLogin.Instance.isOfficial) {
                // 自动加钱 todo
                // 如果 addToValue > fg余额服务端会自动推送加钱, 否则要给提示
                if (this.isAutoLocal) {
                    //if (utils.CommonUtils.numberFixed(this.addToValue) < bulletMulti) {

                    //fg>=子弹额度，此时点击炮台的＋按钮，这是无法自动加钱，只能给提示
                    GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.clipNoMoney, TipType.FLOATTIP);
                    //}
                }

                // 弹框加钱
                else {
                    //射出的子弹还在移动则给提示，不弹框
                    if (BatteryController.Instance.ShootedBulletAmount > 0) {
                        GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.clipNoMoney, TipType.FLOATTIP);
                    }
                    else {
                        GameFacade.Instance.WalletMng.mainWalletReq();
                    }
                }
            }
            else {
                GameFacade.Instance.TipMng.createTip(Lang.freeTranWalletCh.clipNoMoney, TipType.FLOATTIP);
            }
            return false;
        }
        return true;
    }
}