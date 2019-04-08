import GameFacade from "../../GameFacade";
import { utils } from "../../utils/CommonUtil";
import EventConstantResponse from "../../constant/EventConstantResponse";
import NetLogin from "./NetLogin";


export default class NetBroadcast {
    private static _instance: NetBroadcast;

    public static get Instance(): NetBroadcast {
        if (!this._instance) {
            this._instance = new NetBroadcast();
        }
        return this._instance;
    }

    Init(): void {
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_broadcast, BroadCastMsg.c_cmd.bcast_world_resp, BroadCastMsg.bcast_world_resp, Laya.Handler.create(this, this.bcastWorldResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_broadcast, BroadCastMsg.c_cmd.bcast_room_resp, BroadCastMsg.bcast_room_resp, Laya.Handler.create(this, this.bcastRoomResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_broadcast, BroadCastMsg.c_cmd.bcast_msg_resp, BroadCastMsg.bcast_msg_resp, Laya.Handler.create(this, this.bcastMsgResp, null, false));
    }

    /**
     * 全局广播
     * @param cmd 
     * @param pbData 
     */
    private bcastWorldResp(cmd: number, pbData: BroadCastMsg.bcast_world_resp): void {
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.BCASTWORLDRESP, pbData);
    }

    /**
     * 房间广播
     * @param cmd 
     * @param pbData 
     */
    private bcastRoomResp(cmd: number, pbData: BroadCastMsg.bcast_room_resp): void {
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.BCASTROOMRESP, pbData);
    }
    /**
   * 广播消息
   * @param cmd 
   * @param pbData 
   */
    private bcastMsgResp(cmd: number, pbData: BroadCastMsg.bcast_msg_resp): void {
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.BCASTMSGRESP, pbData);
    }

}