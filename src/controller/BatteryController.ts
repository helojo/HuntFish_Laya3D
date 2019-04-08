import GameFacade from "../GameFacade";
import EventNetResponse from "../net/ProtoHander/EventNetResponse";
import Cannon from "../game/Item/Cannon";
import NetLogin from "../net/ProtoHander/NetLogin";
import FishController from "./FishController";
import BulletBase from "../game/Bullet/BulletBase";
import EnumData from "../Enum/EnumData";
import HuntPanel from "../game/Panel/HuntPanel";
import CommonConstant from "../constant/CommonConstant";
import { utils } from "../utils/CommonUtil";
import NetRoom from "../net/ProtoHander/NetRoom";
import ConfigManager from "../manager/ConfigManager";
import CannonConfig from "../config/CannonConfig";
import GameConfig from "../GameConfig";
import TipManager, { TipType } from "../manager/TipManager";
import FreeTranWallet from "../game/Panel/WalletPanel";
import NetWallet from "../net/ProtoHander/NetWallet";
import { FishBase } from "../game/Fish/FishBase";
import GameEvent from "../constant/GameEvent";
import Lang from "../constant/LanguageConstant";
//import CannonConfig from "../config/CannonConfig";

export default class BatteryController {

    private static _instance: BatteryController;
    public static get Instance(): BatteryController {
        if (null == this._instance) this._instance = new BatteryController();
        return this._instance;
    }
    public m_cannon: Cannon = null;
    public get selfCannon(): Cannon {
        if (this.m_cannon == null) {
            this.m_cannon = this.GetBatteryByUid(NetLogin.Instance.RoleInfo.roleId);
        }
        return this.m_cannon;
    }

    private m_lineSp: Laya.Sprite; //锁定攻击时的连线的节点
    private m_aimImg: Laya.Image; //鱼身上的锁定图标


    /** 存放四个炮台*/
    private m_batteryArr: Array<Cannon> = [];
    public get BatteryArr(): Array<Cannon> {
        return this.m_batteryArr;
    }

    /** 下标代表鱼type，值为true代表此鱼被选中为自动攻击*/
    private m_autoAttackArr: Array<boolean>; //
    public get gAutoAttackArr(): Array<boolean> {
        return this.m_autoAttackArr;
    }
    public set sAutoAttackArr(v: Array<boolean>) {
        this.m_autoAttackArr = v;
    }
    /**已发射的子弹数量 */
    public ShootedBulletAmount: number = 0;


    public m_bshoot = false; //是否在射击状态
    private m_shootIndex = 0; //自己发射子弹的索引
    private m_shootInterval: number = 0; //控制射击时间间隔


    /** 死亡或者移动出边界时，都会重置为0*/
    public LockedFishID: number | Long = 0;
    public MouseDownPoint: Laya.Point;
    public bAutoAttackMouseDown: boolean;


    /** 收到无用子弹回复后才能请求下一发子弹*/
    public m_bDispatchMsg = true;

    /** 无用子弹字典，每间隔0.2发送一条，频率太快，服务端会忽略*/
    public m_uselessMsgDict: { [id: number]: RoomMsg.bullet_useless_req } = [];
    public m_uselessBulletIdDict: { [id: number]: RoomMsg.bullet_useless_req } = [];
    public m_totalBulletIdDict: { [id: number]: RoomMsg.shoot_bullet_resp } = [];
    public m_reqBulletIdDict: { [id: number]: RoomMsg.shoot_bullet_req } = [];

    /** 攻击类型*/
    private m_shootModel: EnumData.ShootType = EnumData.ShootType.SHOOT_NORMAL;
    private m_shootModelLast: EnumData.ShootType = EnumData.ShootType.SHOOT_NORMAL;
    public set ShootMode(v: EnumData.ShootType) {
        this.m_shootModel = v;
    }
    public get gShootModel(): EnumData.ShootType {
        return this.m_shootModel;
    }

    public Init(): void {
        GameFacade.Instance.EventMng.add(EventNetResponse.ReadyRoomResp, this, this.ReadyRoomResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.SynRoleResp, this, this.SynRoleResp); //再次同步座位信息
        GameFacade.Instance.EventMng.add(EventNetResponse.ChangeBatteryResp, this, this.ChangeBatteryResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.ShootBulletResp, this, this.ShootBulletResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.ShootErrorResp, this, this.ShootErrorResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.LeaveRoomResp, this, this.LeaveRoomResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.UpdateChipResp, this, this.UpdateChipResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.SyncChipsResp, this, this.SyncChipsResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.MqSyncChipsResp, this, this.MqSyncChipsResp); //大厅免转充值，房间内充值是 UpdateChipResp
        GameFacade.Instance.EventMng.add(EventNetResponse.BulletUselessResp, this, this.BulletUselessResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.BulletPassResp, this, this.BulletPassResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.SyncJpJettonResp, this, this.SyncJpJettonResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.FishDeadResp, this, this.FishDeadResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.OnePieceResp, this, this.OnePieceResp);

        this.m_autoAttackArr = [];
        this.m_batteryArr = [];
        this.Shoot(false);
        this.m_shootIndex = 0;
        this.ShootedBulletAmount = 0;
        this.LockedFishID = 0;
        this.m_shootInterval = CommonConstant.ShootRate;
        this.m_shootModel = EnumData.ShootType.SHOOT_NORMAL;
        this.MouseDownPoint = new Laya.Point(-1, -1);
        this.InitLockLine();
        this.m_bDispatchMsg = true;

        Laya.timer.frameLoop(1, this, this.ShootBehaviour);
        Laya.timer.loop(CommonConstant.DispatchUselessMsgDelta, this, this.dispatchUselessMsg);

    }

    public Uninit(): void {
        GameFacade.Instance.EventMng.remove(EventNetResponse.ReadyRoomResp, this, this.ReadyRoomResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.SynRoleResp, this, this.SynRoleResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.ChangeBatteryResp, this, this.ChangeBatteryResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.ShootBulletResp, this, this.ShootBulletResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.LeaveRoomResp, this, this.LeaveRoomResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.UpdateChipResp, this, this.UpdateChipResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.SyncChipsResp, this, this.SyncChipsResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.MqSyncChipsResp, this, this.MqSyncChipsResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.BulletUselessResp, this, this.BulletUselessResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.BulletPassResp, this, this.BulletPassResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.SyncJpJettonResp, this, this.SyncJpJettonResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.FishDeadResp, this, this.FishDeadResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.OnePieceResp, this, this.OnePieceResp);

        this.Shoot(false);
        this.ShootedBulletAmount = 0;
        this.LockedFishID = 0;
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        for (let i = 0; i < this.m_batteryArr.length; i++) {
            //if(this.m_batteryArr[i].Gun3D.active)
            { this.m_batteryArr[i].Exit(); }
        }

        this.m_bDispatchMsg = false;
        this.m_uselessMsgDict = [];
        this.m_uselessBulletIdDict = [];
        this.m_totalBulletIdDict = [];
        this.m_reqBulletIdDict = [];
        this.m_cannon = null;
    }


    /**
     * 派发无用子弹的消息
     */
    private dispatchUselessMsg() {
        if (this.m_bDispatchMsg) {
            let self = this;
            for (let key in this.m_uselessMsgDict) {
                this.m_bDispatchMsg = false;
                Laya.timer.once(CommonConstant.SendUselessMsgDelta, self, () => {
                    let req: RoomMsg.bullet_useless_req = self.m_uselessMsgDict[key];
                    NetRoom.Instance.BulletUseLessReq(req.uid, req.multi, req.bulletid);

                    self.m_uselessBulletIdDict[req.bulletid as number] = req;

                    CommonConstant._huntSceneTestArry.uselessBulletReq++;
                    //utils.CommonUtils.log("  dispatchUselessMsg bulletId = ", req.bulletid);
                })
                return;
            }
        }
    }

    public Reconnect() {
        this.m_autoAttackArr = [];
        this.Shoot(false);
        this.LockedFishID = 0;
        this.m_shootInterval = CommonConstant.ShootRate;
        this.m_shootModel = EnumData.ShootType.SHOOT_NORMAL;
        this.MouseDownPoint = new Laya.Point(-1, -1);
    }

    public StopLockAttack() {
        this.Shoot(false);
        this.HideLockLineEffect();
        GameFacade.Instance.EventMng.dispatch(GameEvent.HUNT_LOCKATTACK, false);
        this.LockedFishID = 0;
    }

    public StopAutoAttack() {
        this.Shoot(false);
        this.HideLockLineEffect();
        GameFacade.Instance.EventMng.dispatch(GameEvent.HUNT_AUTOATTACK, false);
        this.LockedFishID = 0;
    }




    /**
     * 初始化玩家信息
     * @param data 房间内所有的玩家信息
     */
    private ReadyRoomResp(data: RoomMsg.room_role_info[]): void {
        //GameFacade.Instance.HuntSceneMng.InitFui();
        ////  this.SynRoleResp(data);
        //////this.TransformView(data);
    }

    /**
     * 再次同步座位信息
     * @param data 房间内所有的玩家信息
     */
    private SynRoleResp(data: RoomMsg.room_role_info[]): void {
        utils.CommonUtils.log("------------------------SynRoleResp data:", data);
        var bUpdateArr = [false, false, false, false];
        //如果玩家自身的位置在上方，则需要调整到下方
        let tempData = this.TransformView(data);
        for (var i = 0; i < tempData.length; i++) {
            var index = tempData[i].position - 1; //服务端位置从1开始
            this.m_batteryArr[index].UpdateInfo(tempData[i]);
            bUpdateArr[index] = true;
            // //获取玩家的炮台
            // if (!this.selfCannon && NetLogin.Instance.RoleInfo.roleId == this.m_batteryArr[index].Data.uid) {
            //     this.m_cannon = this.m_batteryArr[index];
            // }
        }
        for (var i = 0; i < bUpdateArr.length; i++) {
            if (!bUpdateArr[i]) {
                this.m_batteryArr[i].UpdateInfo(null);
            }
        }
    }

    /**
     * 如果玩家自身的位置在上方，则需要变换上下炮台的位置以及场景中鱼的位置
    */
    private TransformView(data: RoomMsg.room_role_info[]) {
        let tempData = data.slice();
        let bTransform = false;
        for (var i = 0; i < data.length; i++) {
            if (data[i].uid.toString() == NetLogin.Instance.RoleInfo.roleId.toString() && data[i].position > 2) {
                GameFacade.Instance.HuntSceneMng._bTransform = true; break;
            }
        }
        if (GameFacade.Instance.HuntSceneMng._bTransform) {
            for (var i = 0; i < data.length; i++) {
                // if (data[i].position == 1 || data[i].position == 3) {
                //     tempData[i].position = 4 - data[i].position;
                // }
                // if (data[i].position == 2 || data[i].position == 4) {
                //     tempData[i].position = 6 - data[i].position;
                // }
                tempData[i].position = 5 - data[i].position;
            }
            //GameFacade.Instance.ConfigMng.TransformFishPath();
            //GameFacade.Instance.HuntSceneMng.TransformFishView();
            return tempData;
        }

        return data;
    }

    /**
     * 玩家切换炮台倍率
     * @param data 玩家uid
     */
    private ChangeBatteryResp(data: RoomMsg.change_battery_resp): void {
        utils.CommonUtils.log("------------------ChangeBatteryResp data:", data);
        var cannon = this.GetBatteryByUid(data.uid);
        cannon.UpdateBulletMulti(data.multi);
    }

    private ShootErrorResp(data: RoomMsg.shoot_err_resp): void {
        utils.CommonUtils.log("------------------ShootErrorResp data:", data);
        CommonConstant._huntSceneTestArry.ShootErrorResp++;
    }

    /**
     * 子弹发射消息返回
     * @param data 
     */
    private ShootBulletResp(data: RoomMsg.shoot_bullet_resp): void {
        if (!Laya.stage.isVisibility) return;//切换到后台，停止子弹创建
        var cannon = this.GetBatteryByUid(data.uid);
        if (null != cannon) {
            cannon.CreateBullet(data);
            if (NetLogin.Instance.IsSelfUid(data.uid)) {

                CommonConstant._huntSceneTestArry.shootBulletResp++;
                BatteryController.Instance.m_totalBulletIdDict[data.bulletid as number] = data;
                delete BatteryController.Instance.m_reqBulletIdDict[data.bulletid as number];
                let chips: number = Number(data.jettonshow) + Number(GameFacade.Instance.GameMng.getFlyingBulletChips());
                utils.CommonUtils.log("-- CreateBullet bulletID = ", data.bulletid.toString(), " coin= ", data.jettonshow.toString(), " chips = ", chips.toString(), " data = ", data);
            }
        }
    }

    /**
     * 离开房间
     * @param data 玩家uid
     */
    private LeaveRoomResp(data: RoomMsg.leave_room_resp): void {
        this.UpdateBattery(data.uid);
    }
    /**
    * 房间内免转加钱、平台充值提现  刷新金币
    * @param data 玩家uid
    */
    private UpdateChipResp(data: RoomMsg.update_chips_resp): void {
        utils.CommonUtils.log("-- 免转加钱 刷新金币 UpdateChipResp bulletID = ", data.bulletid.toString(), " coin= ", data.jettonshow.toString());
        this.UpdateBattery(data.uid);
    }
    /**
    * 玩家请求 同步金币
    * @param data 玩家uid
    */
    private SyncChipsResp(data: RoomMsg.sync_chips_resp): void {
        //utils.CommonUtils.log("-- 玩家请求 同步真实金币 SyncChipsResp  coin= ", data.chips.toString(), " realChips = ", GameFacade.Instance.GameMng.realChips.toString());
        //this.m_realChips = data.chips as number;
        this.UpdateBattery(NetLogin.Instance._playerLoginInfo.role.roleId);
    }

    /**
  * 同步玩家自己金币(用于免转) 大厅免转充值
  * @param data 玩家uid
  */
    private MqSyncChipsResp(data: RoomMsg.Imq_sync_chips_resp): void {
        //utils.CommonUtils.log("-- 同步金币 SyncChipsResp  coin = ", data.chips.toString());
        this.UpdateBattery(NetLogin.Instance._playerLoginInfo.role.roleId);
    }

    /**
     * 无效子弹信息
     * @param data 
     */
    private BulletUselessResp(data: RoomMsg.bullet_useless_resp): void {
        if (NetLogin.Instance.IsSelfUid(data.uid)) {
            utils.CommonUtils.log("-- 无效子弹信息 BulletUselessResp bulletID = ", data.bulletid.toString(), " coin= ", data.jettonshow.toString());
            delete BatteryController.Instance.m_uselessMsgDict[data.bulletid as number];
            delete BatteryController.Instance.m_uselessBulletIdDict[data.bulletid as number];
            delete BatteryController.Instance.m_totalBulletIdDict[data.bulletid as number];
            CommonConstant._huntSceneTestArry.uselessBulletResp++;
            BatteryController.Instance.m_bDispatchMsg = true;
        }
        this.UpdateBattery(data.uid);
    }
    /**
     * 有效子弹信息
     * @param data 
     */
    private BulletPassResp(data: RoomMsg.bullet_pass_resp): void {
        utils.CommonUtils.log("-- 有效子弹信息 BulletPassResp bulletID = ", data.bulletid.toString(), " coin= ", data.jettonshow.toString());
        if (NetLogin.Instance.IsSelfUid(data.uid)) {
            CommonConstant._huntSceneTestArry.BulletPassResp++;
        }
        this.UpdateBattery(data.uid);
    }
    /**
     * Jp奖励同步
     * @param data 
     */
    private SyncJpJettonResp(data: RoomMsg.sync_jp_jetton_resp): void {
        this.UpdateBattery(data.uid);
    }
    /**
     * 鱼死亡同步
     * @param data 
     */
    private FishDeadResp(data: RoomMsg.fish_dead_resp): void {
        //utils.CommonUtils.log("-- 鱼死亡同步 FishDeadResp bulletID = ", data.bulletid.toString(), " coin= ", data.jettonshow.toString(), " realChips = ", GameFacade.Instance.GameMng.realChips.toString());
        //如果配合回收金币特效延迟更新数据会导致很多异常问题，所以此处直接更新金币
        this.UpdateBattery(data.uid as Long);
        if (NetLogin.Instance.IsSelfUid(data.uid)) {
            CommonConstant._huntSceneTestArry.fishDeadResp++;
        }
    }

    private OnePieceResp(data: RoomMsg.one_piece_resp): void {
        //utils.CommonUtils.log("-- OnePieceResp bulletID = ", data.bulletid.toString(), " coin= ", data.jettonshow.toString());
        this.UpdateBattery(data.uid as Long);
    }

    /**
     * 玩家UI进行更新并返回玩家炮台UI对象
     * @param userId 玩家uid
     */
    private UpdateBattery(userId: number | Long): Cannon {
        var cannon = this.GetBatteryByUid(userId);
        if (cannon) {
            var angle = cannon.UpdatePlayerInfoShow();
        }

        return;
    }

    public CoinFlyingFinish(userId: number | Long, data: RoomMsg.Ifish_bonus_info) {
        var cannon = this.GetBatteryByUid(userId);
        if (cannon) {

            cannon.CoinFlyingFinish(userId, data);
        }
    }

    public GetBatteryByUid(userId: number | Long): Cannon {

        for (var i = 0; i < this.m_batteryArr.length; i++) {
            if (this.m_batteryArr[i].Data != null) {
                //utils.CommonUtils.log("----------this.m_batteryArr[i].Data.uid = ", this.m_batteryArr[i].Data.uid);
                if (userId.toString() == this.m_batteryArr[i].Data.uid.toString()) {
                    return this.m_batteryArr[i];
                }
            }
        }

        utils.CommonUtils.warn("------------不存在userid：", userId.toString());
        return null;

    }


    /**
     * 根据炮台倍数获取炮台资源ID
     * @param index 炮台倍数
     */
    public GetBatteryResIdByMulti(multi: number): number {
        let index = this.GetBatteryIndexByMulti(multi);
        let resId = this.GetBatteryResId(index);
        return resId;
    }
    /**
     * 获取炮台倍数对应的数组下标
     * @param multi 炮台倍数
     */
    public GetBatteryIndexByMulti(multi: number): number {
        for (let index = 0; index < NetRoom.Instance._curRoomInfo.battery.length; index++) {
            const element = NetRoom.Instance._curRoomInfo.battery[index];
            if (element == multi)
                return index;
        }
        return 0;
    }
    /**
     * 根据下标获取炮台资源ID
     * @param index 炮台下标
     */
    public GetBatteryResId(index: number): number {
        if (index < 4) {
            return 1;
        }
        else if (index < 8) {
            return 2;
        }
        else {
            return 3;
        }
    }

    public Shoot(bshoot: boolean) {

        this.m_bshoot = bshoot;
    }

    /// <summary>射击行为  canShoot只有在间隔时间后才能射击，其余的调用只是作为转角度</summary>
    /// <param name="isTouch">是否执行射击操作</param>
    public ShootBehaviour() {
        if (!Laya.stage.isVisibility) return;//切换到后台，停止子弹发射

        //this.m_shootInterval += CommonConstant.Delta;//Laya.timer.delta;
        this.m_shootInterval += Laya.timer.delta;
        if (this.m_bshoot) {
            switch (this.m_shootModel) {

                case EnumData.ShootType.SHOOT_NORMAL:
                    {
                        this.NormalShootModel();
                    }
                    break;
                case EnumData.ShootType.SHOOT_AUTO:
                    this.AutoShootModel();
                    break;
                case EnumData.ShootType.SHOOT_LOCK:
                    this.LockShootModel();
                    break;
                case EnumData.ShootType.SHOOT_STOP:
                    {
                        if (BatteryController.Instance.ShootedBulletAmount < CommonConstant.ShootMaxNum) {
                            this.m_shootModel = this.m_shootModelLast;
                        }
                    }
                    break;
            }
        }
    }
    /// <summary>普通攻击模式</summary>
    private NormalShootModel() {
        //utils.CommonUtils.log("NormalShootModel");
        this.AimAndFireByPoint(Laya.stage.mouseX, Laya.stage.mouseY);
    }

    /**自动攻击*/
    private AutoShootModel() {
        var len = BatteryController.Instance.gAutoAttackArr.length;
        //没有选择要自动攻击的鱼    
        if (!GameFacade.Instance.HuntSceneMng._bSelectedFish) {
            this.LockedFishID = 0;
            if (this.bAutoAttackMouseDown) {
                this.AimAndFireByPoint(Laya.stage.mouseX, Laya.stage.mouseY);
            }
            else {
                this.AimAndFireByPoint(this.MouseDownPoint.x, this.MouseDownPoint.y);
            }
            return;
        }
        else {
            if (this.LockedFishID.toString() == "0") {
                for (var i = len - 1; i >= 0; i--) {
                    if (this.m_autoAttackArr[i]) {
                        let fishType = i;
                        for (let key in FishController.Instance.FishObjDict) {
                            let obj: FishBase = FishController.Instance.FishObjDict[key];
                            if (obj._MFishInfo._mFishType == fishType && obj.CheckIsFishInWall()) {
                                this.LockedFishID = obj._MFishInfo._mFishId;
                                this.LockShootModel();
                                return;
                            }
                        }
                        // 屏幕中暂无要捕的鱼,取消锁定特效
                        this.HideLockLineEffect();
                    }
                }
            }
            else {
                this.LockShootModel(); //持续攻击当前锁定的鱼，直到此鱼死亡或者移动出边界
            }
        }
    }

    /**锁定攻击*/
    private LockShootModel() {
        if (this.LockedFishID.toString() == "0") {
            this.HideLockLineEffect();
            this.selfCannon.PlayAnimation(CannonConfig._IdleAni);
            return;
        }
        let fishPos = GameFacade.Instance.HuntSceneMng.GetFishPointById(this.LockedFishID.toString());
        if (fishPos == null) {
            this.selfCannon.PlayAnimation(CannonConfig._IdleAni);
            return;
        }

        this.AimAndFireByPoint(fishPos.x, fishPos.y);
    }


    private AimAndFireByPoint(posX, posY) {
        if (this.selfCannon == null || null == this.selfCannon.Gun3D) {
            utils.CommonUtils.log("AimAndFireByPoin::炮台信息为空");
            return;//加载点击时出现卡死现象
        }
        //发射的子弹超出上限
        if (BatteryController.Instance.ShootedBulletAmount == CommonConstant.ShootMaxNum) {
            GameFacade.Instance.TipMng.createTip(CommonConstant._PromptContent.BulletMax, TipType.FLOATTIP);
            this.HideLockLineEffect();
            this.m_shootModelLast = this.m_shootModel;
            this.m_shootModel = EnumData.ShootType.SHOOT_STOP;
            return;
        }

        var angle = this.selfCannon.Gun3D.transform.rotationEuler.z;
        //var angle = cannon.Gun.rotation;
        if (posX != -1 && posY != -1) {
            let tempAngle = this.selfCannon.UpdateAngleByPos(posX, posY);
            angle = tempAngle == -1 ? angle : tempAngle;
            //锁定攻击时，炮身体旋转到90度，就停止攻击
            // if (tempAngle == -1 && this.LockedFishID != 0) {
            //     this.HideLockLineEffect();
            //     return;  //-1表示点击无效
            // }
        }

        this.LockLineEffect(angle);
        if (this.m_shootInterval >= CommonConstant.ShootRate) {

            this.m_shootInterval = 0;
            this.Fire(angle);
        }
    }

    // /**
    //  * 是否有足够的筹码
    //  * @param cannon 
    //  */
    // public isEnoughChip(cannon: Cannon): boolean {
    //     let jettonShow = utils.CommonUtils.numberFixed(cannon.Data.jetton_show as number);
    //     let bulletMulti = utils.CommonUtils.numberFixed(cannon.Data.bullet_multi * NetRoom.Instance._curRoomInfo.ante);

    //     if (jettonShow < bulletMulti) {
    //         //GameFacade.Instance.WalletMng.setNoEnoughChip(jettonShow);
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }
    private Fire(angle) {
        if (!GameFacade.Instance.WalletMng.IsfgWalletEnough()) {
            this.StopAutoAttack();
            this.StopLockAttack();
            return;
        }

        var uid = NetLogin.Instance.RoleInfo.roleId;
        var bullet_multi = this.GetBatteryByUid(uid).Data.bullet_multi;
        var time = 1;
        var bulletid = NetRoom.Instance._RoomRoleInfoDict[uid.toString()].position * 10000000 + this.m_shootIndex++
        NetRoom.Instance.ShootBulletReq(uid, bullet_multi, angle, time, this.LockedFishID, bulletid);
    }

    // 暂不知laya的图片平铺如何使用。。。
    // 1.先在m_lineSp上贴足够长距离的点
    // 2.根据距离长度，显示距离内的点
    // 3.然后旋转m_lineSp角度即可
    private InitLockLine() {
        //锁定攻击的线
        this.m_lineSp = new Laya.Sprite();
        this.m_lineSp.pos(100, 720);
        let huntPanel = GameFacade.Instance.SceneMng.GetPanelById(EnumData.EnumPanelType.HuntPanel) as HuntPanel;
        huntPanel.m_layaUINode.addChild(this.m_lineSp);

        let len = Math.floor(GameConfig.width / CommonConstant.LinePointWith);
        for (var i = 0; i < len; i++) {
            var point = new Laya.Image(CommonConstant._linePointPath);
            point.pos(0, -i * CommonConstant.LinePointWith);
            point.anchorX = 0.5;
            point.anchorY = 0.5;
            this.m_lineSp.addChild(point);
        }
        this.m_aimImg = new Laya.Image(CommonConstant._aimImgPath);
        this.m_aimImg.anchorX = 0.5;
        this.m_aimImg.anchorY = 0.5;
        this.m_aimImg.scale(0.5, 0.5);
        huntPanel.m_layaUINode.addChild(this.m_aimImg);
        this.HideLockLineEffect();
    }

    /** 锁定特效 */
    public LockLineEffect(rotate: number) {
        let startPos = new Laya.Vector3(0, 0, 0);
        let outFishPos = new Laya.Vector3(0, 0, 0);
        let lockedFish = FishController.Instance.FishObjDict[this.LockedFishID.toString()];
        if (lockedFish == null || lockedFish == undefined) {
            this.HideLockLineEffect();
            return;
        }
        let cameraHunt = GameFacade.Instance.HuntSceneMng._HuntSceneCamera;
        let cameraGun = GameFacade.Instance.HuntSceneMng._GunSceneCamera;
        cameraHunt.viewport.project(lockedFish._OwnerPos, cameraHunt.projectionViewMatrix, outFishPos);
        var worldPos = (this.selfCannon.Gun3D.getChildByName("BulletPos") as Laya.Sprite3D).transform.position;
        cameraGun.worldToViewportPoint(worldPos, startPos);

        let distance = Laya.Vector3.distance(startPos, outFishPos);
        let len = Math.floor(distance / CommonConstant.LinePointWith);
        for (var i = 0; i < this.m_lineSp.numChildren; i++) {
            let point = this.m_lineSp.getChildAt(i) as Laya.Image;
            if (i < len) {
                point.visible = true;
            }
            else {
                point.visible = false;
            }
        }
        this.m_aimImg.pos(outFishPos.x, outFishPos.y);
        this.m_aimImg.visible = true;
        this.m_lineSp.rotation = rotate;
        this.m_lineSp.pos(startPos.x, startPos.y);
        this.m_lineSp.visible = true;

    }

    public HideLockLineEffect() {
        if (this.m_lineSp && this.m_aimImg) {
            this.m_lineSp.visible = false;
            this.m_aimImg.visible = false;
        }
    }
}