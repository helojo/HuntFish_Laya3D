export default class WayMoveInfo {
    /** 鱼的ID*/
    public _mFishId: number | Long;
    /** 鱼类型*/
    public _mFishType: number;
    /** 鱼对应模型类型*/
    public _mFishModelType: number;
    /** 是否可以移动*/
    public _mCanMove: boolean;
    /** 移动速度*/
    public _mSpeed: number;
    /** 路径ID*/
    public _mPathId: number;
    /** 路径长度*/
    public _mPathLenght: number;
    /** 被冰冻时间*/
    public _mForzenTime: number;
    /** 路径类型（鱼阵 散鱼 boss ...）*/
    public _mWayType: number;
    /** 鱼的出生时间*/
    public _mFishCreateTime: number;
    /** 鱼是否被冰冻*/
    public _mIsFreezn: boolean;
    /** 鱼路径关键节点*/
    public _mWayPoints: Laya.Vector3[];
    /** 路径偏移*/
    public _offsetPoints: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
    /** 鱼的规格*/
    public _mModel: number;
}