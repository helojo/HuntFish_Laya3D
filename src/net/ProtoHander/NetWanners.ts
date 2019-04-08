import GameFacade from "../../GameFacade";
import { utils } from "../../utils/CommonUtil";
import EventConstantResponse from "../../constant/EventConstantResponse";


export default class NetWanners {
    private static _instance: NetWanners;
    public static get Instance(): NetWanners {
        if (!this._instance) {
            this._instance = new NetWanners();
        }
        return this._instance;
    }

    Init(): void {
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_winners, WinnerMsg.c_cmd.winners_resp, WinnerMsg.winners_resp, Laya.Handler.create(this, this.winnersResp, null, false));
    }


    /**
     * 请求获得中奖名单
     * @param type 
     */
    public winnersReq(): void {
        let req: WinnerMsg.winners_req = new WinnerMsg.winners_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_winners, WinnerMsg.c_cmd.winners_req, req);
    }

    /**
     * 中奖名单返回
     * @param cmd 
     * @param pbData 
     */
    private winnersResp(cmd: number, pbData: WinnerMsg.winners_resp): void {
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.WINNERRESP, pbData);
    }

}