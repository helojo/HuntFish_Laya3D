/**
 * 服务器数据处理之后的事件分发
 */
export default class EventNetResponse {
    /** 进入房间*/
    public static EnterRoomResp: string = "EnterRoomResp";

    /** 获得捕猎人的信息，房间准备好了*/
    public static ReadyRoomResp: string = "ReadyRoomResp";
    /** 同步房间内所有的玩家信息*/
    public static SynRoleResp: string = "SynRoleResp";
    /** 同步出鱼信息*/
    public static SynFishResp: string = "SynFishResp";
    /** 改变炮台倍率 消息返回*/
    public static ChangeBatteryResp: string = "ChangeBatteryResp";
    /** 子弹的射击 消息返回*/
    public static ShootBulletResp: string = "ShootBulletResp";
    /** 子弹的射击 消息返回*/
    public static ShootErrorResp: string = "ShootErrorResp";
    /** 有玩家离开房间 消息返回*/
    public static LeaveRoomResp: string = "LeaveRoomResp";
    /** 刷新金币 消息返回*/
    public static UpdateChipResp: string = "UpdateChipResp";
    /** 同步玩家自己金币 消息返回*/
    public static SyncChipsResp: string = "SyncChipsResp";
    /**用于免转同步金币 */
    public static MqSyncChipsResp: string = "MqSyncChipsResp";
    /** 子弹无效 消息返回*/
    public static BulletUselessResp: string = "BulletUselessResp";
    /** 子弹无效 消息返回*/
    public static BulletPassResp: string = "BulletPassResp";
    /** 子弹无效 消息返回*/
    public static SyncJpJettonResp: string = "SyncJpJettonResp";
    /** 鱼死亡 消息返回*/
    public static FishDeadResp: string = "FishDeadResp";
    /** 从世界Boss身上掉下金币 消息返回*/
    public static OnePieceResp: string = "OnePieceResp";
    /**加钱信息反馈 */
    public static WalletResp: string = "WalletResp";
    /**钱包弹框信息反馈 */
    public static MainWalletResp: string = "MainWalletResp";
}