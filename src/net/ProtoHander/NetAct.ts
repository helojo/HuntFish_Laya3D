import GameFacade from "../../GameFacade";
import { utils } from "../../utils/CommonUtil";
import EventConstantResponse from "../../constant/EventConstantResponse";
import { TipType } from "../../manager/TipManager";

export default class NetAct {
    private static _instance: NetAct;
    private uid: number | Long;
    public static get Instance(): NetAct {
        if (!this._instance) {
            this._instance = new NetAct();
        }
        return this._instance;
    }

    Init(): void {
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_act, ActMsg.c_cmd.act_list_resp, ActMsg.act_list_resp, Laya.Handler.create(this, this.actListResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_act, ActMsg.c_cmd.act_detail_info_resp, ActMsg.act_detail_info_resp, Laya.Handler.create(this, this.actDetailResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_act, ActMsg.c_cmd.top_12_notice_resp, ActMsg.top_12_notice_resp, Laya.Handler.create(this, this.topNoticeResp, null, false));
    }

    /**
     * 活动列表请求
     */
    public actListReq(): void {
        let req: ActMsg.act_list_req = new ActMsg.act_list_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_act, ActMsg.c_cmd.act_list_req, req);
    }

    /**
     * 活动详情请求
     * @param fundId 
     */
    public actDetailReq(id: number | Long): void {
        let req: ActMsg.act_detail_info_req = new ActMsg.act_detail_info_req();
        req.uid = id;
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_act, ActMsg.c_cmd.act_detail_info_req, req);
    }
    /**
     * 获得活动列表
     * @param cmd 
     * @param pbData 
     */
    private actListResp(cmd: number, pbData: ActMsg.act_list_resp): void {
        //// console.log(pbData);

        var actInfo: Array<ActMsg.Iact_info> = pbData.info;
        for (let i = 0; i < actInfo.length; i++) {
            this.uid = actInfo[0].uid;
            GameFacade.Instance.EventMng.dispatch(EventConstantResponse.ACTLISTRESP, actInfo[0]);
        }
        //this.actDetailReq(this.uid);//暂时没有用到活动详情

    }

    /**
    * 获得活动详情
    * @param cmd 
    * @param pbData 
    */
    private actDetailResp(cmd: number, pbData: ActMsg.act_detail_info_resp): void {

    }
    /**
     * 返利活动飘字
     * @param cmd 
     * @param pbData 
     */
    private topNoticeResp(cmd: number, pbData: ActMsg.top_12_notice_resp): void {
        GameFacade.Instance.TipMng.createTip(pbData.content, TipType.FLOATTIPDELAY);
    }
}