import GameFacade from "../../GameFacade";
import { utils } from "../../utils/CommonUtil";
import EventConstantResponse from "../../constant/EventConstantResponse";


export default class NetRanking {
    private static _instance: NetRanking;
    public static get Instance(): NetRanking {
        if (!this._instance) {
            this._instance = new NetRanking();
        }
        return this._instance;
    }

    Init(): void {
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_rank, RankMsg.c_cmd.rank_resp, RankMsg.rank_resp, Laya.Handler.create(this, this.rankResp, null, false));
    }


    /**
     * 排行榜请求
     * @param type 是本周还是上周
     */
    public rankReq(index:number,type: RankMsg.rank_type): void {
        let req: RankMsg.rank_req = new RankMsg.rank_req();
        req.index =index;
        req.type = type;
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_rank, RankMsg.c_cmd.rank_req, req);
    }

    /**
     * 排行榜返回数据
     * @param cmd 
     * @param pbData 
     */
    private rankResp(cmd: number, pbData: RankMsg.rank_resp): void {
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.RANKRESP, pbData);
    }

}