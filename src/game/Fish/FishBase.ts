import FishInfo from "./FishInfo";
import FishBaseConfigData from "./FishBaseConfigData";
import EnumData from "../../Enum/EnumData";
import FishController from "../../controller/FishController";
import GameFacade from "../../GameFacade";
import Sound from "../../constant/SoundNameConstant";
import { utils } from "../../utils/CommonUtil";
import BatteryController from "../../controller/BatteryController";
import GameEvent from "../../constant/GameEvent";
import NetLogin from "../../net/ProtoHander/NetLogin";
import GameConfig from "../../GameConfig";
import CommonConstant from "../../constant/CommonConstant";
import { BezierCurvers } from "../../utils/BezierCurvers";
import ConfigManager, { FishPathLength } from "../../manager/ConfigManager";

export class FishBase extends Laya.Script3D {
    /** 鱼是否存在*/
    public _mIsExist: boolean;
    /**鱼是否暂时停留 */
    protected _mIsStay: boolean;
    /**鱼是否执行过了停留动作 */
    protected _mAlreadyStay: boolean;
    /**鱼当前速度 */
    protected _mCurrentSpeed: number;
    /** 鱼当前出生时间*/
    protected _mCurrentCreateTime: number;
    /** 鱼当前所在路劲点*/
    protected _mActualPathNode: number;
    /**当前速度倍率 */
    protected _mSpeedRate: number;
    /**行为数据 */
    protected _FishBehavior: FishBaseConfigData.FishBehavior;
    /**动作数据 */
    protected _FishAniClass: FishBaseConfigData.FishAniClass;

    protected _Animator: Laya.Animator;
    /** 鱼当前的动作类型*/
    protected _fishActionState: EnumData.ENUM_FISH_STATE;
    /** 是否播过预警特效*/
    protected _mIsWarned: boolean = false;
    protected mowner: Laya.MeshSprite3D;
    protected _firstChild: Laya.MeshSprite3D;
    protected _initialFirstChildScale: Laya.Vector3;// = new Laya.Vector3(0, 0, 0);
    protected _initialFirstChildPosition: Laya.Vector3;// = new Laya.Vector3(0, 0, 0);
    protected _cameraTrans: Laya.Transform3D;
    /** 包含鱼的所有数据信息*/
    protected _fishInfo: FishInfo;

    public get _MFishInfo(): FishInfo {
        return this._fishInfo;
    }
    public get _OwnerPos(): Laya.Vector3 {
        return this.mowner.transform.position;
    }

    onDisable(): void {
        this.mowner.transform.localPosition = this._initialFirstChildPosition;
        this.mowner.transform.localScale = this._initialFirstChildScale;
    }

    Init(fishInfo: FishInfo): void {
        this.mowner = this.owner as Laya.MeshSprite3D;
        this._firstChild = this.mowner.getChildAt(0) as Laya.MeshSprite3D;
        if (null == this._initialFirstChildScale)
            this._initialFirstChildScale = new Laya.Vector3(this._firstChild.transform.localScale.x, this._firstChild.transform.localScale.y, this._firstChild.transform.localScale.z);
        if (null == this._initialFirstChildPosition)
            this._initialFirstChildPosition = new Laya.Vector3(this._firstChild.transform.localPosition.x, this._firstChild.transform.localPosition.y, this._firstChild.transform.localPosition.z);
        this._cameraTrans = GameFacade.Instance.HuntSceneMng._HuntSceneCamera.transform as Laya.Transform3D;

        this._fishInfo = fishInfo;
        this._mCurrentCreateTime = fishInfo._mFishCreateTime;
        this._mActualPathNode = 0;
        this._mIsStay = false;
        this._mSpeedRate = 1;
        this._mAlreadyStay = false;
        this._mIsWarned = false;
        let type = this.FishTypeID();//fishInfo._mFishType;

        //不能直接get其数据引用来赋值，必须copy一份出来（todo  代码待优化）
        this._FishBehavior = FishBaseConfigData.FishSwimConfig.CopyFishBehaviorData(type);//_FishBehaviorDict.get(type);
        this.InitPathLength();
        //// this._fishInfo._mPathLenght *= 100000; //todo 这个固定值100000是如何确定的
        this.SetFishLifeTime();

        this._FishAniClass = FishBaseConfigData.FishSwimConfig._FishAnimateDict.get(type);
        this._Animator = this.mowner.getChildAt(0).getChildAt(0).getComponent(Laya.Animator);
        this._fishActionState = EnumData.ENUM_FISH_STATE.DEATH;
        this.mowner.transform.position = new Laya.Vector3(-10000, 10000, 10000);
        this._mIsExist = true;
        this.mowner.active = true;
    }
    /**
     *主要针对规格为8的鱼群，待整理 （todo fishtype有点乱）
     */
    protected FishTypeID() {
        //总共编号只有1-26号鱼  32号炸弹  其余是鱼群
        return this._fishInfo._mModel == 8 ? this._fishInfo._mFishType + 100 : this._fishInfo._mFishType;
    }
    protected InitPathLength() {

        let configMng = GameFacade.Instance.ConfigMng;
        let key = configMng.GetfishPathLengthKey(this.FishTypeID(), this._fishInfo._mPathId);
        if (null == configMng._fishPathLengthConfig[key]) {
            let t = 0;
            let tPathNodeSpeed: Array<FishBaseConfigData.PathNodeInfo> = new Array<FishBaseConfigData.PathNodeInfo>();
            tPathNodeSpeed = this._FishBehavior._PathNodeSpeed;
            let arrIndex = 0;//tPathNodeSpeed数组的下标
            let pathLength = 0;//当前路劲段的长度
            let point: Laya.Vector3 = null;
            while (t <= 1) {
                let p = BezierCurvers.GetPoint(this._fishInfo._mWayPoints, t);
                if (null != point)
                    pathLength += Laya.Vector3.distance(point, p);
                point = p;
                t += 0.001;
                if (t >= (arrIndex + 1 < tPathNodeSpeed.length ? tPathNodeSpeed[arrIndex + 1]._NodeBeginPoint : 1)) {
                    let fwp2 = new FishBaseConfigData.PathNodeInfo();
                    fwp2._NodeBeginPoint = tPathNodeSpeed[arrIndex]._NodeBeginPoint;
                    fwp2._pathLength = pathLength * 100000;
                    fwp2._SpeedRate = tPathNodeSpeed[arrIndex]._SpeedRate;
                    let weakObj: Laya.WeakObject = configMng._fishPathLengthConfig[key]
                    if (null == weakObj)
                        weakObj = new Laya.WeakObject();
                    weakObj.set(tPathNodeSpeed[arrIndex]._NodeBeginPoint, fwp2);
                    configMng._fishPathLengthConfig[key] = weakObj;
                    pathLength = 0; //重置为0，开始计算下一段路劲长度
                    arrIndex++;
                }
            }
        }
        //  configMng._fishPathLengthConfig;
    }
    /** 初始化鱼的生命周期*/
    protected SetFishLifeTime(): void {
        this._FishBehavior._FishTotalLiftTime = 0;

        let tlenght = this._FishBehavior._PathNodeSpeed.length;
        let configMng = GameFacade.Instance.ConfigMng;
        let key = configMng.GetfishPathLengthKey(this.FishTypeID(), this._fishInfo._mPathId);
        let weakObj = configMng._fishPathLengthConfig[key];
        for (let index = 0; index < tlenght; index++) {
            let point1 = this._FishBehavior._PathNodeSpeed[index];
            let pathNodeInfo: FishBaseConfigData.PathNodeInfo = weakObj.get(point1._NodeBeginPoint) as FishBaseConfigData.PathNodeInfo;
            point1._LifeTime = pathNodeInfo._pathLength / (pathNodeInfo._SpeedRate * this._fishInfo._mSpeed);
            point1._pathLength = pathNodeInfo._pathLength;
            let point2: FishBaseConfigData.PathNodeInfo = index + 1 < tlenght ? this._FishBehavior._PathNodeSpeed[index + 1] : null;
            // point1._LifeTime = ((((null != point2) ? point2._NodeBeginPoint : 1) - point1._NodeBeginPoint) * this._fishInfo._mPathLenght) / (this._fishInfo._mSpeed * point1._SpeedRate);
            if (this._FishBehavior._StayPath > point1._NodeBeginPoint && ((null == point2) || (this._FishBehavior._StayPath < point2._NodeBeginPoint))) {
                point1._LifeTime += this._FishBehavior._StayTime;
            }
            this._FishBehavior._FishTotalLiftTime += point1._LifeTime;
        }
    }
    /** 计算鱼的当前位置百分比和当前速度,返回位置节点*/
    protected CalculateFishActualPathNode(): number {
        let survivalTime = this.GetCurTime() - this._fishInfo._mFishCreateTime;
        let curBeginPathNode = 0;
        let tlenght = this._FishBehavior._PathNodeSpeed.length;
        //遍历所有速度变化节点，求出当前鱼的运动状态
        for (let index = 0; index < tlenght; index++) {
            let point1 = this._FishBehavior._PathNodeSpeed[index];
            let point2: FishBaseConfigData.PathNodeInfo = index + 1 < tlenght ? this._FishBehavior._PathNodeSpeed[index + 1] : null;
            survivalTime -= point1._LifeTime;
            if (survivalTime < 0) {
                let curSpeed = point1._SpeedRate * this._fishInfo._mSpeed;
                curBeginPathNode = point1._NodeBeginPoint;
                survivalTime += point1._LifeTime;
                let moveTime = survivalTime;
                if (this._FishBehavior._StayPath > point1._NodeBeginPoint && ((null == point2) || (this._FishBehavior._StayPath < point2._NodeBeginPoint))) {

                    ////let stayPathNodeTime = (this._FishBehavior._StayPath - element._NodeBeginPoint) * this._fishInfo._mPathLenght / curSpeed;//到达停留点，所消耗的时间
                    let stayPathNodeTime = ((this._FishBehavior._StayPath - point1._NodeBeginPoint) / ((null == point2) ? (1 - point1._NodeBeginPoint) : (point2._NodeBeginPoint - point1._NodeBeginPoint))) * point1._pathLength / curSpeed;//到达停留点，所消耗的时间
                    if (survivalTime <= stayPathNodeTime)//还未到达停留行为路劲节点
                        moveTime = survivalTime;
                    else if (survivalTime > stayPathNodeTime && survivalTime <= stayPathNodeTime + this._FishBehavior._StayTime) {//正在播放停留行为
                        moveTime = stayPathNodeTime;
                        this.NewOnStayBehavior(stayPathNodeTime + this._FishBehavior._StayTime - survivalTime);
                    }
                    else if (survivalTime > stayPathNodeTime + this._FishBehavior._StayTime) {//已经游过了停留行为路劲节点
                        moveTime = survivalTime - this._FishBehavior._StayTime;
                    }
                }
                ////let tpn = (moveTime * curSpeed) / this._fishInfo._mPathLenght + curBeginPathNode;
                let nodePointLength = ((null == point2) ? (1 - point1._NodeBeginPoint) : (point2._NodeBeginPoint - point1._NodeBeginPoint));
                let tpn = (moveTime * curSpeed) / point1._pathLength * nodePointLength + curBeginPathNode;
                //let tpn = (moveTime / point1._LifeTime) * ((null == point2) ? (1 - point1._NodeBeginPoint) : (point2._NodeBeginPoint - point1._NodeBeginPoint)) + curBeginPathNode;
                if ((null != point2) && tpn > point2._NodeBeginPoint)
                    tpn = point2._NodeBeginPoint;
                // // //// this._mCurrentSpeed = curSpeed;
                if (this._mActualPathNode > tpn)
                    utils.CommonUtils.log("FishModelType= " + this._fishInfo._mFishModelType + "  ActualPathNode= " + this._mActualPathNode + "  tPathNode== " + tpn
                        + "  moveTime== " + moveTime + "  curBeginPathNode== " + curBeginPathNode + "  point._pathLength== " + point1._pathLength);
                return this._mActualPathNode > tpn ? this._mActualPathNode : tpn;//找到当前位置，提前结束循环
            }
        }
        return 1;
    }

    /**
         * 检测是否停留当中
         * @param pathNode 
         * @param curTime 
         */
    protected NewOnStayBehavior(curTime: number): void {
        if (!this._mIsStay && !this._mAlreadyStay) {
            this._mIsStay = true;
            this._mAlreadyStay = true;
            this.PlayAction(EnumData.ENUM_FISH_STATE.SHOW);
            Laya.timer.once(curTime, this, this.NewCancelStayBehavior);
        }
    }

    /**
    * 取消停留行为
    */
    private NewCancelStayBehavior(): void {
        this._mIsStay = false;
        this.PlayAction(EnumData.ENUM_FISH_STATE.SWIMMING);
    }

    /**
     * 鱼受击
     */
    public Hitted(): void {
        let self = this;
        if (self.PlayAction(EnumData.ENUM_FISH_STATE.HITTED)) {
            Laya.timer.once(self._FishAniClass._HitTime * 1000, self, function () {
                self.PlayAction(EnumData.ENUM_FISH_STATE.SWIMMING);
            });
        }
    }
    /**
     * 移除鱼对象
     * @param isDead 鱼是否死亡
     */
    public Remove(isDead: boolean, bouns: number = 0, uid: number | Long = 0, deadFishType: EnumData.FishSubtype = -1): void {
        this.StopMove();
        if (isDead) {
            this.Dead(bouns, uid, deadFishType);
            GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.fishSoundHead, GameFacade.Instance.SoundMng.fishTypeToSoundNum(this._fishInfo._mFishType));
        }
        else
            this.mowner.active = false;
        this._mIsExist = false;
    }

    public StartMove(): void {
        Laya.timer.loop(10, this, this.Moving);
    }
    private StopMove(): void {
        Laya.timer.clear(this, this.Moving);
    }

    protected GetCurTime(): number {
        return new Date().getTime();
    }


    //#region  鱼的游动逻辑
    protected Moving(): void {

        if (this._mIsStay) return;
        let currttime = this.GetCurTime();
        //在这条路线上的生存时间
        let survivalTime = 0;
        if (currttime < this._mCurrentCreateTime) {
            //这类鱼可能是超前 推过来,只有等到时间到才出来
            return;
        }
        this._mActualPathNode = this.CalculateFishActualPathNode();
        let t = this._mActualPathNode;

        //监测是否移动到墙外
        this.CheckFishOutWall();
        ////Debug.Log(string.Format("速度 : {0} 生存时间 : {1}  长度 : {2}   T : {3} ", mWayMoveInfo.mSpeed, survivalTime, mWayMoveInfo.mPathLenght, t));
        if (t >= 1) {
            FishController.Instance.OnDeadFishOrMoveEnd(this._fishInfo._mFishId, false);
        }
        else {
            this.SwimmingStyle(t);
            if (this._fishInfo._mFishModelType > 20)   //todo 这里写死的数字待整理 28是最大的模型类型id值
                this.SetTransform(100 * (28 - this._fishInfo._mFishModelType), this._firstChild.transform, this._cameraTrans);
            else
                this.SetTransform(200 * (28 - this._fishInfo._mFishModelType), this._firstChild.transform, this._cameraTrans);
        }
    }

    /**
     * 鱼的游动方式
     * @param pathNode 路劲百分比
     */
    protected SwimmingStyle(pathNode: number): void {
        Laya.Vector3.add(BezierCurvers.GetPoint(this._fishInfo._mWayPoints, pathNode), this._fishInfo._offsetPoints, this.mowner.transform.position);
        let lookDir: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.add(BezierCurvers.GetPoint(this._fishInfo._mWayPoints, pathNode + 0.01), this._fishInfo._offsetPoints, lookDir);
        if (this._mIsStay)
            this.mowner.transform.lookAt(this._cameraTrans.up, Laya.Vector3.Up, false);
        else {
            //this.mowner.transform.lookAt(lookDir, Laya.Vector3.Up, false);
            if (lookDir.z > this._cameraTrans.position.z)
                this.mowner.transform.lookAt(lookDir, Laya.Vector3.Up, false);
            else
                this.mowner.transform.lookAt(lookDir, CommonConstant.DirectionVector.Down, false);
        }
        let offset: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.subtract(lookDir, this.mowner.transform.position, offset);
        this.mowner.transform.translate(offset, false);

        if (pathNode < 0.2 && !this._mIsWarned && !this.CheckFishCenterPosInWall()) {
            this._mIsWarned = true;
            this.FishWarn();
        }
    }

    /**
     * 通过屏幕坐标检测鱼是否在屏幕内
     */
    public CheckFishCenterPosInWall() {
        let outPos = new Laya.Vector3(0, 0, 0);
        (this._cameraTrans.owner as Laya.Camera).worldToViewportPoint(this.mowner.transform.position, outPos);
        // (this._cameraTrans.owner as Laya.Camera).viewport.project(this.mowner.transform.position, (this._cameraTrans.owner as Laya.Camera).projectionViewMatrix, outPos);
        return outPos.x > 50 && outPos.x < GameConfig.width - 50 && outPos.y > 50 && outPos.y < GameConfig.height - 50;
    }

    //#endregion

    //#region  动画逻辑控制

    /// <summary>鱼的动作逻辑</summary>
    /// <param name="enum_fish_state"></param>
    protected PlayAction(enum_fish_state: EnumData.ENUM_FISH_STATE): boolean {
        let self = this;
        if (null == self._Animator || null == self._FishAniClass) return;
        if (self._fishActionState == enum_fish_state) return false;
        self._fishActionState = enum_fish_state;

        switch (enum_fish_state) {
            case EnumData.ENUM_FISH_STATE.SWIMMING:
                return self.PlayAnimation(self._FishAniClass._SwimName);
            case EnumData.ENUM_FISH_STATE.SHOW://停留动画（嬉戏）
                self.mowner.transform.lookAt(self._cameraTrans.up, Laya.Vector3.Up, false);
                return self.PlayAnimation(self._FishAniClass._StayName);
            case EnumData.ENUM_FISH_STATE.PAUSE:
                return false;
            case EnumData.ENUM_FISH_STATE.HITTED:
                return self.PlayAnimation(self._FishAniClass._HitName);
            case EnumData.ENUM_FISH_STATE.DEATH:
                return self.PlayAnimation(self._FishAniClass._DeadName);
            default:
                return false;
        }
    }

    protected PlayAnimation(aniName: string): boolean {
        if (aniName && aniName != "") {
            let aniStatesMap = this._Animator.getControllerLayer(0)._statesMap;
            let animatorState: Laya.AnimatorState = aniStatesMap[aniName];
            if (animatorState)
                this._Animator.play(aniName);
            // this._Animator.crossFade(aniName, 0.5);//使用这个接口好像会造成鱼闪的bug
            return true;
        }
        return false;
    }


    /// <summary>鱼受玩家攻击死亡</summary>
    private Dead(bouns: number, uid: number | Long = 0, deadFishType: EnumData.FishSubtype = -1): void {
        //被炮弹打死的是鱼王/炸弹鱼
        if (deadFishType != -1) //
        {
            if (this._fishInfo._mFishType == deadFishType) //本鱼是炸弹鱼/鱼王
            {
                if (BatteryController.Instance.gShootModel == EnumData.ShootType.SHOOT_AUTO && NetLogin.Instance.IsSelfUid(uid)) {
                    GameFacade.Instance.EventMng.dispatch(GameEvent.HUNT_HUNTEDFISH, [bouns, this._fishInfo._mFishType]);
                }
            }
        }
        else {
            if (BatteryController.Instance.gShootModel == EnumData.ShootType.SHOOT_AUTO && NetLogin.Instance.IsSelfUid(uid)) {
                GameFacade.Instance.EventMng.dispatch(GameEvent.HUNT_HUNTEDFISH, [bouns, this._fishInfo._mFishType]);
            }
        }

        this.PlayAction(EnumData.ENUM_FISH_STATE.DEATH);
        //todo 不能直接删除，待写死亡表现
        Laya.timer.once(this._FishAniClass._DeadTime * 1000, this, function () {
            this.mowner.active = false;
        });
    }
    //#endregion

    //#region 鱼的z轴计算，防止鱼重叠穿插

    protected SetTransform(newZPos: number, trans: Laya.Transform3D, camTrans: Laya.Transform3D): void {
        //求出与摄像机的方向单位向量
        let dirNormal: Laya.Vector3 = new Laya.Vector3(1, 0, 0);
        Laya.Vector3.subtract(this.mowner.transform.position, camTrans.position, dirNormal);
        Laya.Vector3.normalize(dirNormal, dirNormal);
        //求出新位置z轴到摄像机距离与现有位置z轴到摄像机距离的比率
        let trate: number = (newZPos - camTrans.position.z) / (this.mowner.transform.position.z - camTrans.position.z);
        let angel: number = Laya.Vector3.dot(dirNormal, Laya.Vector3.ForwardRH);
        //let tangle = Math.acos(angel);//*180;
        let dis = (newZPos - this.mowner.transform.position.z) / angel;//Math.cos(tangle);// (Math.cos((tangle/180) * Math.PI));

        let tscale: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.scale(this._initialFirstChildScale, trate, tscale);
        trans.localScale = tscale;

        let dirVec3 = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.scale(dirNormal, Math.abs(dis), dirVec3);
        Laya.Vector3.add(this.mowner.transform.position, dirVec3, trans.position);
        trans.position = trans.position;
    }

    //#endregion


    public CheckFishOutWall() {
        if (this._MFishInfo._mFishId.toString() == BatteryController.Instance.LockedFishID.toString()) {
            let outPos = new Laya.Vector3(0, 0, 0);
            (this._cameraTrans.owner as Laya.Camera).viewport.project(this.mowner.transform.position, (this._cameraTrans.owner as Laya.Camera).projectionViewMatrix, outPos);

            let offset = this.GetFishSize() / 2;
            if (outPos.x > GameConfig.width + offset || outPos.x < -offset ||
                outPos.y > GameConfig.height + offset || outPos.y < -offset) {
                BatteryController.Instance.LockedFishID = 0;
                return true;
            }
        }
        return false;
    }
    /**
     * 通过屏幕坐标检测鱼是否在屏幕内
     */
    public CheckIsFishInWall() {
        let outPos = new Laya.Vector3(0, 0, 0);
        (this._cameraTrans.owner as Laya.Camera).viewport.project(this.mowner.transform.position, (this._cameraTrans.owner as Laya.Camera).projectionViewMatrix, outPos);
        let offset = this.GetFishSize() / 2;

        if (outPos.x > GameConfig.width + offset || outPos.x < -offset ||
            outPos.y > GameConfig.height + offset || outPos.y < -offset) {
            return false;
        }
        return true;
    }
    /**
     * 模型x轴长度大小（模型比较小的鱼忽略不计）
     */
    protected GetFishSize(): number {
        return 0;
    }

    public GetRelatedFishsId(): (number | Long)[] {
        return [];
    }

    /**
     * 鱼预警
     */
    protected FishWarn(): void {
    }
}
