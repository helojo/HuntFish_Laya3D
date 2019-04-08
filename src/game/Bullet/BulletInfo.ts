export default class BulletInfo {
    /** 子弹ID*/
    public _bulletId: number | Long;
    /** 子弹的倍数*/
    public _bulletMutil: number;
    /** 子弹表现的类型级别ID(共用ID:与渔网资源一一对应)*/
    public _bulletShowTypeId: number | Long;
    /**被锁定的鱼的ID*/
    public _lockFishId: number | Long;
    /** 所属玩家ID*/
    public _playId: number | Long;

    constructor(bulletId: number | Long, multi: number, bulletShowTypeId: number | Long, lockedId: number | Long, playerID: number | Long) {
        this._bulletId = bulletId;
        this._bulletMutil = multi;
        this._bulletShowTypeId = bulletShowTypeId;
        this._lockFishId = lockedId;
        this._playId = playerID;
    }
}