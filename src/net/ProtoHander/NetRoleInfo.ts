import GameFacade from "../../GameFacade";
import { utils } from "../../utils/CommonUtil";
import EventConstantResponse from "../../constant/EventConstantResponse";
import NetLogin from "./NetLogin";
import EnumData from "../../Enum/EnumData";

export default class NetRoleInfo {
    private static _instance: NetRoleInfo;
    public lvInfo: RoleInfoMsg.lv_info_resp = null;
    public isHaveNotion: Boolean = false;
    public static get Instance(): NetRoleInfo {
        if (!this._instance) {
            this._instance = new NetRoleInfo();
        }
        return this._instance;
    }

    Init(): void {
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_role_info, RoleInfoMsg.c_cmd.lv_info_resp, RoleInfoMsg.lv_info_resp, Laya.Handler.create(this, this.lvInfoResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_role_info, RoleInfoMsg.c_cmd.lv_config_resp, RoleInfoMsg.lv_config_resp, Laya.Handler.create(this, this.lvConfigResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_role_info, RoleInfoMsg.c_cmd.lv_notice_resp, RoleInfoMsg.lv_notice_resp, Laya.Handler.create(this, this.lvNoticeResp, null, false));
    }

    /**
     * 请求等级信息
     */
    public lvInfoReq(): void {
        let req: RoleInfoMsg.lv_info_req = new RoleInfoMsg.lv_info_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_role_info, RoleInfoMsg.c_cmd.lv_info_req, req);
    }

    /**
     * 请求等级配置
     * @param fundId 
     */
    public lvConfigReq(fundId: number): void {
        let req: RoleInfoMsg.lv_config_req = new RoleInfoMsg.lv_config_req();
        req.fund_id = fundId;
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_role_info, RoleInfoMsg.c_cmd.lv_config_req, req);
    }
    /**
     * 等级信息返回
     * @param cmd 
     * @param pbData 
     */
    private lvInfoResp(cmd: number, pbData: RoleInfoMsg.lv_info_resp): void {
        this.lvInfo = pbData;
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.LVINFORESP, pbData);
    }

    /**
    * 等级配置返回
    * @param cmd 
    * @param pbData 
    */
    private lvConfigResp(cmd: number, pbData: RoleInfoMsg.lv_config_resp): void {
        utils.CommonUtils.log("等级配置");
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.LVCONFIGRESP, pbData);
    }
    /**
  * 等级通知
  * @param cmd 
  * @param pbData 
  */
    private lvNoticeResp(cmd: number, pbData: RoleInfoMsg.lv_notice_resp): void {
        utils.CommonUtils.log("等级通知");
        if (NetLogin.Instance.RoleInfo.roleId.toString() == pbData.uid.toString()) {
            if (!this.isHaveNotion) {
                this.isHaveNotion = true;
                GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.UpgradePanel, pbData);
            }
        }
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.LVNOTICERESP, pbData);
    }
}