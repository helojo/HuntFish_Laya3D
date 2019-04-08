import GameFacade from "../../GameFacade";
import { utils } from "../../utils/CommonUtil";

import code = WalletMsg.msg_wallet_code;
import FreeTranWallet from "../../game/Panel/WalletPanel";
import EventNetResponse from "./EventNetResponse";
import { TipType } from "../../manager/TipManager";
import Lang from "../../constant/LanguageConstant";

export default class NetWallet {
    private static _instance: NetWallet;

    public static get Instance(): NetWallet {
        if (!this._instance) {
            this._instance = new NetWallet();
        }
        return this._instance;
    }

    Init(): void {
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_wallet, WalletMsg.c_cmd.main_wallet_resp, WalletMsg.main_wallet_resp, Laya.Handler.create(this, this.mianWalletResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_wallet, WalletMsg.c_cmd.wallet_resp, WalletMsg.wallet_resp, Laya.Handler.create(this, this.walletResp, null, false));
    }

    /**
     * 钱包弹框返回
     * @param cmd 
     * @param pbData 
     */
    private mianWalletResp(cmd: number, pbData: WalletMsg.main_wallet_resp): void {
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.MainWalletResp, pbData);
        //this.walletCode(pbData.code);
    }

    /**
     * 加钱返回
     * @param cmd 
     * @param pbData 
     */
    private walletResp(cmd: number, pbData: WalletMsg.wallet_resp): void {
        //GameFacade.Instance.WalletMng.walletCode(pbData.code);
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.WalletResp, pbData);
    }

    /**
    * 请求钱包弹框
    */
    public mainWalletReq(): void {
        let req: WalletMsg.main_wallet_req = new WalletMsg.main_wallet_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_wallet, WalletMsg.c_cmd.main_wallet_req, req);
    }

    /**
     * 发送设置的钱
     * @param chip 
     * @param auto 
     */
    public walletReq(chip: number, auto: boolean): void {
        let req: WalletMsg.wallet_req = new WalletMsg.wallet_req();
        req.chips = chip;
        req.auto = auto;
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_wallet, WalletMsg.c_cmd.wallet_req, req);
    }
}