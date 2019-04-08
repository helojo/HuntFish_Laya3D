import GameFacade from "../../GameFacade";
import { utils } from "../../utils/CommonUtil";
import EventConstantResponse from "../../constant/EventConstantResponse";
import NetLogin from "./NetLogin";
import EnumData from "../../Enum/EnumData";
import WinnerPanel from "../../game/Panel/WinnerPanel";


export default class NetJpPool {
    private static _instance: NetJpPool;
    public _JpAmount: Long | number = 0;

    public static get Instance(): NetJpPool {
        if (!this._instance) {
            this._instance = new NetJpPool();
        }
        return this._instance;
    }

    Init(): void {
        this._JpAmount = 0;
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_pool, PoolMsg.c_cmd.bcast_jp_resp, PoolMsg.bcast_jp_resp, Laya.Handler.create(this, this.receiveBcastJPResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_pool, PoolMsg.c_cmd.amount_jp_resp, PoolMsg.amount_jp_resp, Laya.Handler.create(this, this.receiveAmountJPResp, null, false));
    }

    /**
     * 广播中奖
     * @param cmd 
     * @param pbData 
     */
    private receiveBcastJPResp(cmd: number, pbData: PoolMsg.bcast_jp_resp): void {
        if (pbData.uid.toString() == NetLogin.Instance.RoleInfo.roleId.toString()) {
            var win: WinnerPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.SettingPanel) as WinnerPanel;
            win.bcastJpInfo = pbData;
        }
        if (pbData.content != null) {
            GameFacade.Instance.EventMng.dispatch(EventConstantResponse.JPBCAST, pbData);
        }
        this._JpAmount = pbData.amount;
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.JPNUMBER, pbData.amount);
    }

    /**
     * jp金额
     * @param cmd 
     * @param pbData 
     */
    private receiveAmountJPResp(cmd: number, pbData: PoolMsg.amount_jp_resp): void {
        this._JpAmount = pbData.amount;
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.JPNUMBER, pbData.amount);
    }
}