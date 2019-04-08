import GameFacade from "../../GameFacade";
import { utils } from "../../utils/CommonUtil";
import EventConstantResponse from "../../constant/EventConstantResponse";


export default class NetReport {
    private static _instance: NetReport;
    public static get Instance(): NetReport {
        if (!this._instance) {
            this._instance = new NetReport();
        }
        return this._instance;
    }

    Init(): void { }


    /**
     * 请求获得中奖名单
     * @param type 
     */
    public ScreenReportReq(): void {
        let req: ReportMsg.screen_report_req = new ReportMsg.screen_report_req();
        req.srceen = GameFacade.Instance.GameMng.getDeviceType();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_report, ReportMsg.c_cmd.screen_report_req, req);
    }
}