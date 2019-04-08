import GameFacade from "../../GameFacade";
import { utils } from "../../utils/CommonUtil";
import EventConstantResponse from "../../constant/EventConstantResponse";
import FundTipPanel from "../../game/Panel/FundTipPanel";
import EnumData from "../../Enum/EnumData";

export default class NetAward {
    private static _instance: NetAward;
    public endTime: number;
    public isHaveFundTip: boolean = false;//是否有等级提示
    public static get Instance(): NetAward {
        if (!this._instance) {
            this._instance = new NetAward();
        }
        return this._instance;
    }

    Init(): void {
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_info_resp, AwardMsg.growth_fund_info_resp,
            Laya.Handler.create(this, this.growthFundInfoResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_config_resp, AwardMsg.growth_fund_config_resp,
            Laya.Handler.create(this, this.growthFundConfigResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_buy_resp, AwardMsg.growth_fund_buy_resp,
            Laya.Handler.create(this, this.growthFundBuyResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.lv_award_resp, AwardMsg.lv_award_resp,
            Laya.Handler.create(this, this.lvAwardResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.lv_award_notice_resp, AwardMsg.lv_award_notice_resp,
            Laya.Handler.create(this, this.lvAwardNoticeResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_state_resp, AwardMsg.growth_fund_state_resp,
            Laya.Handler.create(this, this.growthFundStateResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.lv_award_state_resp, AwardMsg.lv_award_state_resp,
            Laya.Handler.create(this, this.lvAwardStateResp, null, false));

    }

    /**
     * 请求基金档次
     */
    public growthFundInfoReq(): void {
        let req: AwardMsg.growth_fund_info_req = new AwardMsg.growth_fund_info_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_info_req, req);
    }
    /**
      * 请求基金配置
      */
    public growthFundConfigReq(): void {
        let req: AwardMsg.growth_fund_config_req = new AwardMsg.growth_fund_config_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_config_req, req);
    }
    /**
      * 请求购买基金档次
      */
    public growtFundBuyReq(id: number): void {
        let req: AwardMsg.growth_fund_buy_req = new AwardMsg.growth_fund_buy_req();
        req.fund_id = id;
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_buy_req, req);
    }
    /**
      * 请求领取等级奖励
      */
    public lvAwardReq(lv: number): void {
        let req: AwardMsg.lv_award_req = new AwardMsg.lv_award_req();
        req.lv = lv;
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.lv_award_req, req);
    }
    /**
     * 请求通知设置
     * @param isNotice 是否今天通知
     */
    public lvAwardNoticeSetReq(isNotice: boolean): void {
        let req: AwardMsg.lv_award_notice_set_req = new AwardMsg.lv_award_notice_set_req();
        req.not_today = isNotice
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.lv_award_notice_set_req, req);
    }
    /**
      * 请求成长基金的状态
      */
    public growthFundStateReq(): void {
        ////console.log("请求");
        let req: AwardMsg.growth_fund_state_req = new AwardMsg.growth_fund_state_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.growth_fund_state_req, req);
    }
    /**
     * 请求等级奖金领取状态
     */
    public lvAwardStateReq(): void {
        let req: AwardMsg.lv_award_state_req = new AwardMsg.lv_award_state_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_award, AwardMsg.c_cmd.lv_award_state_req, req);
    }

    /**
     * 购买的成长基金档次
     * @param cmd 
     * @param pbData 
     */
    private growthFundInfoResp(cmd: number, pbData: AwardMsg.growth_fund_info_resp): void {
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.GROWTHFUNDINFORESP, pbData);
    }
    /**
  * 成长基金config
  * @param cmd 
  * @param pbData 
  */
    private growthFundConfigResp(cmd: number, pbData: AwardMsg.growth_fund_config_resp): void {
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.GROWTHFUNDCONFIGRESP, pbData);
    }
    /**
     * 购买基金返回状态
     * @param cmd 
     * @param pbData 
     */
    private growthFundBuyResp(cmd: number, pbData: AwardMsg.growth_fund_buy_resp): void {
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.GROWTHFUNDBUYRESP, pbData);
    }
    /**
  * 等级基金领取返回
  * @param cmd 
  * @param pbData 
  */
    private lvAwardResp(cmd: number, pbData: AwardMsg.lv_award_resp): void {
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.LVAWARDRESP, pbData);
    }
    /**
  * 等级提示框
  * @param cmd 
  * @param pbData 
  */
    private lvAwardNoticeResp(cmd: number, pbData: AwardMsg.lv_award_notice_resp): void {
        if (!this.isHaveFundTip) {
            this.isHaveFundTip = true
            GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.FundTipPanel, pbData);
        }
        // GameFacade.Instance.EventMng.dispatch(EventConstantResponse.LVAWARDNOTICERESP, pbData);
    }
    /**
    * 成长基金状态
    * @param cmd 
    * @param pbData 
    */
    private growthFundStateResp(cmd: number, pbData: AwardMsg.growth_fund_state_resp): void {
        this.endTime = pbData.end_time as number;
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.GROWTHFUNDSTATERESP, pbData);
    }
    /**
  * 等级奖励状态
  * @param cmd 
  * @param pbData 
  */
    private lvAwardStateResp(cmd: number, pbData: AwardMsg.lv_award_state_resp): void {
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.LVAWARDSTATERESP, pbData);
    }

}