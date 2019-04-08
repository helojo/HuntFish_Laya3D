import GameFacade from "../../GameFacade";
import { utils } from "../../utils/CommonUtil";
import NetLogin from "./NetLogin";
import EventNetResponse from "./EventNetResponse";
import FishController from "../../controller/FishController";
import CommonConstant from "../../constant/CommonConstant";
import { TipType } from "../../manager/TipManager";
import BatteryController from "../../controller/BatteryController";

export default class NetRoom {
    private static _instance: NetRoom;
    /**房间内的人物信息列表 */
    _RoomRoleInfoDict: { [index: string]: RoomMsg.Iroom_role_info } = {};
    /**房间内鱼的信息列表 */
    _FishDict: { [index: string]: RoomMsg.Iupdate_fish_resp } = {};
    /*** 玩家登陆房间信息*/
    _curRoomInfo: LoginMsg.Ilogin_room_info;


    public static get Instance(): NetRoom {
        if (!this._instance) {
            this._instance = new NetRoom();
        }
        return this._instance;
    };
    Init(): void {
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.enter_room_resp, RoomMsg.enter_room_resp, Laya.Handler.create(this, this.EnterRoomResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.ready_room_resp, RoomMsg.ready_room_resp, Laya.Handler.create(this, this.ReadyRoomResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.syn_fish_resp, RoomMsg.syn_fish_resp, Laya.Handler.create(this, this.SynFishResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.hit_fish_resp, RoomMsg.hit_fish_resp, Laya.Handler.create(this, this.HitFishResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.shoot_bullet_resp, RoomMsg.shoot_bullet_resp, Laya.Handler.create(this, this.ShootBulletResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.shoot_err_resp, RoomMsg.shoot_err_resp, Laya.Handler.create(this, this.ShootErrResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.change_battery_resp, RoomMsg.change_battery_resp, Laya.Handler.create(this, this.ChangeBatteryResp, null, false));
        //  GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.update_fish_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.fish_dead_resp, RoomMsg.fish_dead_resp, Laya.Handler.create(this, this.FishDeadResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.leave_room_resp, RoomMsg.leave_room_resp, Laya.Handler.create(this, this.LeaveRoomResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.update_chips_resp, RoomMsg.update_chips_resp, Laya.Handler.create(this, this.UpdateChipResp, null, false));
        //   GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.shoot_err_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.battery_err_resp, RoomMsg.battery_err_resp, Laya.Handler.create(this, this.BatteryErrResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.sync_chips_resp, RoomMsg.sync_chips_resp, Laya.Handler.create(this, this.SyncChipsResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.room_status_resp, RoomMsg.room_status_resp, Laya.Handler.create(this, this.RoomStatusResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.syn_role_resp, RoomMsg.syn_role_resp, Laya.Handler.create(this, this.SynRoleResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.bullet_useless_resp, RoomMsg.bullet_useless_resp, Laya.Handler.create(this, this.BulletUselessResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.bullet_pass_resp, RoomMsg.bullet_pass_resp, Laya.Handler.create(this, this.BulletPassResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.sync_jp_jetton_resp, RoomMsg.sync_jp_jetton_resp, Laya.Handler.create(this, this.SyncJpJettonResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.fish_matrix_resp, RoomMsg.fish_matrix_resp, Laya.Handler.create(this, this.FishMatrixResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.clean_wave_resp, RoomMsg.clean_wave_resp, Laya.Handler.create(this, this.CleanWaveResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.one_piece_resp, RoomMsg.one_piece_resp, Laya.Handler.create(this, this.OnePieceResp, null, false));
        // GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.hit_result_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        // GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.extra_reward_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.wave_matrix_resp, RoomMsg.wave_matrix_resp, Laya.Handler.create(this, this.WaveMatrixResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.mq_sync_chips_resp, RoomMsg.mq_sync_chips_resp, Laya.Handler.create(this, this.MqSyncChipsResp, null, false));
        // GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.fish_select_save_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.fish_select_resp, RoomMsg.fish_select_resp, Laya.Handler.create(this, this.FishSelectResp, null, false));
        // GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.update_valentine_score, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        // GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.rotate_canvas_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));
        // GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.weapon_chip_resp, Laya.Handler.create(this, this.receiveLoginResp, null, false));

    }

    //#region socket response


    /**
     * 进入房间回复
     * @param data 协议数据类
     */
    private EnterRoomResp(cmd: number, data: RoomMsg.enter_room_resp): void {
        utils.CommonUtils.log(`进入房间msg_room_code = ${data.code}`);

        switch (data.code) {
            case RoomMsg.msg_room_code.SUCCESS_ENTER:
                {
                    //this.ReadyRoomReq();
                    utils.CommonUtils.warn("------------进入房间成功------------");
                    GameFacade.Instance.EventMng.dispatch(EventNetResponse.EnterRoomResp, data);
                    break;
                }
            case RoomMsg.msg_room_code.FALSE_ENTER:
                {
                    utils.CommonUtils.warn("------------进入房间失败------------");
                    GameFacade.Instance.TipMng.createTip(CommonConstant._PromptContent.EnterRoomFail, TipType.FLOATTIP);
                    break;
                }
        }
    }

    /**房间内角色信息 */
    private ReadyRoomResp(cmd: number, data: RoomMsg.ready_room_resp): void {
        utils.CommonUtils.log("ReadyRoomResp data = ", data);
        let roleInfo = data.role;
        let bSelfuid = false;
        for (let value of roleInfo) {
            this._RoomRoleInfoDict[value.uid.toString()] = value;
            if (NetLogin.Instance.IsSelfUid(value.uid)) {
                bSelfuid = true;
            }
        }

        if (bSelfuid) {
            this.SynSeatReq();
        }

        GameFacade.Instance.EventMng.dispatch(EventNetResponse.ReadyRoomResp, data.role);
    }

    /**同步鱼池中鱼的信息 */
    private SynFishResp(cmd: number, data: RoomMsg.syn_fish_resp): void {
        //utils.CommonUtils.log("同步鱼信息 SynFishResp data = ", data);
        let fishList = data.fish_list;
        for (let value of fishList) {
            this._FishDict[value.id.toString()] = value;
        }
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.SynFishResp, data);
    }

    /**击中鱼 消息返回 */
    private HitFishResp(cmd: number, data: RoomMsg.hit_fish_resp): void {
        if (RoomMsg.msg_room_code.ERR_CHIPS == data.code) {
            utils.CommonUtils.log("HitFishResp error data = ", data);
        }
        CommonConstant._huntSceneTestArry.hitFishResp++;
    }

    /**子弹的射击 消息返回 */
    private ShootBulletResp(cmd: number, data: RoomMsg.shoot_bullet_resp): void {
        if (this._RoomRoleInfoDict[data.uid.toString()]) {
            this._RoomRoleInfoDict[data.uid.toString()].jetton_show = data.jettonshow;
        }
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.ShootBulletResp, data);
    }

    /**发射子弹报错返回 */
    private ShootErrResp(cmd: number, data: RoomMsg.shoot_err_resp): void {
        utils.CommonUtils.log("发射子弹报错 data:", data);
    }

    /**改变炮台倍率 消息返回 */
    ChangeBatteryResp(cmd: number, data: RoomMsg.change_battery_resp): void {
        if (this._RoomRoleInfoDict[data.uid.toString()]) {
            this._RoomRoleInfoDict[data.uid.toString()].bullet_multi = data.multi;
        }
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.ChangeBatteryResp, data);
    }

    /**鱼死亡 消息返回 */
    FishDeadResp(cmd: number, data: RoomMsg.fish_dead_resp): void {
        if (this._RoomRoleInfoDict[data.uid.toString()]) {
            this._RoomRoleInfoDict[data.uid.toString()].jetton_show = data.jettonshow;
        }
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.FishDeadResp, data);
    }

    /**离开房间 消息返回 */
    LeaveRoomResp(cmd: number, data: RoomMsg.leave_room_resp): void {
        if (this._RoomRoleInfoDict[data.uid.toString()]) {
            delete this._RoomRoleInfoDict[data.uid.toString()];
        }
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.LeaveRoomResp, data);
    }

    /**刷新金币 消息返回 */
    UpdateChipResp(cmd: number, data: RoomMsg.update_chips_resp): void {
        if (this._RoomRoleInfoDict[data.uid.toString()]) {
            this._RoomRoleInfoDict[data.uid.toString()].jetton_show = data.jettonshow;
        }
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.UpdateChipResp, data);
    }

    /**切换炮台错误 消息返回 */
    BatteryErrResp(cmd: number, msg: RoomMsg.battery_err_resp): void {
        utils.CommonUtils.log("切换炮台错误 " + msg.code);
    };

    /**同步玩家自己金币 消息返回 */
    SyncChipsResp(cmd: number, data: RoomMsg.sync_chips_resp): void {
        //utils.CommonUtils.log("sync_chips_resp 跟新金币");
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.SyncChipsResp, data);
    }


    /**中心钱包 消息返回 */
    MqSyncChipsResp(cmd: number, msg: RoomMsg.mq_sync_chips_resp): void {
        let selfID = NetLogin.Instance.RoleInfo.roleId;
        let role = this._RoomRoleInfoDict[selfID.toString()];
        if (role) {
            role.jetton_show = msg.chips;
        }
        //console.log("mq_sync_chips_resp 跟新金币");
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.MqSyncChipsResp, msg);
    }

    /**冰冻效果等 消息返回 */
    RoomStatusResp(cmd: number, msg: RoomMsg.room_status_resp): void {
        utils.CommonUtils.log("冰冻效果等 " + msg.status);
    }

    /**同步角色信息 消息返回 */
    SynRoleResp(cmd: number, data: RoomMsg.syn_role_resp): void {
        for (let key in this._RoomRoleInfoDict) {
            delete this._RoomRoleInfoDict[key];
        }
        let roleInfo = data.role;
        for (let value of roleInfo) {
            this._RoomRoleInfoDict[value.uid.toString()] = value;
        }
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.SynRoleResp, data.role);
    }

    /**子弹无效 消息返回 */
    BulletUselessResp(cmd: number, data: RoomMsg.bullet_useless_resp): void {
        let role = this._RoomRoleInfoDict[data.uid.toString()];
        if (role) {
            role.jetton_show = data.jettonshow;
        }
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.BulletUselessResp, data);
    }

    /**子弹无效 消息返回 */
    BulletPassResp(cmd: number, data: RoomMsg.bullet_pass_resp): void {
        let role = this._RoomRoleInfoDict[data.uid.toString()];
        if (role) {
            role.jetton_show = data.jettonshow;
        }
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.BulletPassResp, data);
    }

    /**服务器主动推送，同步玩家(可能是自己也可能是别人)jp中奖金币（筹码）额度 消息返回 */
    SyncJpJettonResp(cmd: number, data: RoomMsg.sync_jp_jetton_resp): void {
        let role = this._RoomRoleInfoDict[data.uid.toString()];
        if (role) {
            role.jetton_show = data.jettonshow;
        }
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.SyncJpJettonResp, data);
    }

    /**鱼矩阵信息 消息返回 */
    FishMatrixResp(cmd: number, msg: RoomMsg.fish_matrix_resp): void {
        utils.CommonUtils.log("鱼阵来临 ");
    }

    /**波浪来袭 消息返回 */
    CleanWaveResp(cmd: number, msg: RoomMsg.clean_wave_resp): void {
        utils.CommonUtils.log("波浪来袭 ");
        GameFacade.Instance.HuntSceneMng.warnShow(0);
    }

    /**从世界Boss身上掉下金币 消息返回 */
    OnePieceResp(cmd: number, data: RoomMsg.one_piece_resp): void {
        let role = this._RoomRoleInfoDict[data.uid.toString()];
        if (role) {
            role.jetton_show = data.jettonshow;
        }
        GameFacade.Instance.EventMng.dispatch(EventNetResponse.OnePieceResp, data);
    }

    /**波浪矩阵来临 消息返回 */
    WaveMatrixResp(cmd: number, msg: RoomMsg.wave_matrix_resp): void {
        utils.CommonUtils.log("波浪矩阵来临 ");
    }

    /**自动捕鱼加载上次设置 消息返回 */
    FishSelectResp(cmd: number, data: any): void {
        utils.CommonUtils.log("自动捕鱼加载上次设置 ");
    }

    //#endregion

    //#region  socket request

    /**
     * 请求进入房间
     * @param roomType 房间类型
     * @param reLoginCode 连接类型
     */
    EnterRoomReq(roomType: CommonMsg.room_type, reLoginCode: RoleMsg.msg_relogin_code): void {
        let req = new RoomMsg.enter_room_req();
        req.type = roomType;
        req.code = reLoginCode;
        NetLogin.Instance._curRoomIndex = roomType;
        this._curRoomInfo = NetLogin.Instance.RoomInfoList[req.type - 1];       //服务端是 1 2 3。客户端数组下标0开始
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.enter_room_req, req);
    }


    /** 请求同步房间内正在打鱼的玩家信息*/
    ReadyRoomReq(): void {
        let req = new RoomMsg.ready_room_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.ready_room_req, req);
    }

    /** 同步座位消息信号，开始出鱼*/
    SynSeatReq(): void {
        let req = new RoomMsg.syn_seat_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.syn_seat_req, req);
    }

    /**
     * 通知服务器击中了鱼
     * @param multi 子弹倍率
     * @param fishid 击中的鱼ID列表
     * @param relateFish 关联的鱼ID列表
     * @param bulletId 子弹ID
     */
    HitFishReq(multi: number, fishid: number | Long, relateFish: (number | Long)[], bulletId: number | Long): void {
        let req = new RoomMsg.hit_fish_req();
        req.bullet_multi = multi;
        req.fish_id = [fishid];
        req.related_fish = relateFish;
        req.bulletid = bulletId;
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.hit_fish_req, req);
        utils.CommonUtils.log("--- HitFishReq bulletid = ", bulletId, " reqData = ", req);
    }

    /**
     * 发射子弹请求
     * @param uid 
     * @param multi 
     * @param angle 
     * @param time 
     * @param fishid 
     * @param bulletid 
     */
    ShootBulletReq(uid: number | Long, multi: number, angle: number, time: number, fishid: number | Long, bulletid: number): void {
        let req = new RoomMsg.shoot_bullet_req();
        req.uid = uid;
        req.multi = multi;
        req.angel = angle;
        req.time = time;
        req.fishid = fishid;//鱼ID（锁定状态使用）有鱼传ID 没有传0; 
        req.bulletid = bulletid;
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.shoot_bullet_req, req);

        CommonConstant._huntSceneTestArry.shootBulletReq++;
        BatteryController.Instance.m_reqBulletIdDict[bulletid] = req;
        utils.CommonUtils.log("-- ShootBulletReq bulletID = ", bulletid.toString(), " bullet_multi = ", multi);
    }

    /**
     * 切换炮台倍率
     * @param batteryMulti 炮台倍率
     * @param roleId 玩家ID
     */
    ChangeBatteryReq(batteryMultiIndex: number, roleId: number | Long): void {
        let req = new RoomMsg.change_battery_req();
        req.multi = NetRoom.Instance._curRoomInfo.battery[batteryMultiIndex];
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.change_battery_req, req);
        this._RoomRoleInfoDict[roleId.toString()].bullet_multi = NetRoom.Instance._curRoomInfo.battery[batteryMultiIndex];
        for (let iterator in this._RoomRoleInfoDict) {

        }
    }

    /** 离开房间*/
    LeaveRoomReq(): void {
        let req = new RoomMsg.leave_room_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.leave_room_req, req);
    }

    /** 同步金币请求*/
    SyncChipsReq(): void {
        let req = new RoomMsg.sync_chips_rep();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.sync_chips_rep, req);
    }

    /** 同步新用户进入过打鱼场景*/
    NovicePromptReq(): void {
        let req = new RoomMsg.novice_prompt_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.novice_prompt_req, req);
    }
    BulletUseLessReq(userid: number | Long, bulletMulti: number, bulletId: number | Long): void {
        let req = new RoomMsg.bullet_useless_req();
        req.uid = userid;
        req.multi = bulletMulti;
        req.bulletid = bulletId;
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_room, RoomMsg.c_cmd.bullet_useless_req, req);
        utils.CommonUtils.log("--- 子弹飞出边界 BulletUseLessReq bulletId = ", bulletId);
    }
    //#endregion
}

// export class LockInfo {
//     public LockFishId: string = null;               //锁定鱼的ID
//     public IsLockState: boolean = false;            //是否开启锁定状态
//     public LockFishPos: cc.Vec2 = null;             //锁定鱼的坐标
//     public LockNodeSize: cc.Vec2 = null;            //锁定鱼尺寸
//     public PreLockPos: cc.Vec2 = null;              //锁定鱼尺寸
// }