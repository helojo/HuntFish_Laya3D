import BulletInfo from "./BulletInfo";
import GameFacade from "../../GameFacade";
import { FishBase } from "../Fish/FishBase";
import FishController from "../../controller/FishController";
import CommonConstant from "../../constant/CommonConstant";
import AutoDestroy from "../../utils/AutoDestroy";
import BatteryController from "../../controller/BatteryController";
import NetLogin from "../../net/ProtoHander/NetLogin";
import NetRoom from "../../net/ProtoHander/NetRoom";
import EnumData from "../../Enum/EnumData";
import HF3DFishClasses from "../Fish/HF3DFishClasses";
import { utils } from "../../utils/CommonUtil";

export default class BulletBase extends Laya.Script3D {

    protected mowner: Laya.MeshSprite3D;
    /** 子弹信息*/
    private _bulletInfo: BulletInfo;

    /** 子弹的运动方向*/
    private _direction: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
    private _movingSpeed: number = 0.3;
    private _offset = new Laya.Vector3(1, 0, 0);

    private _point: Laya.Vector2;
    private _camera: Laya.Camera;
    private _scene: Laya.Scene3D;
    private _ray: Laya.Ray;
    private _outHitInfo: Laya.HitResult;
    private _outPos = new Laya.Vector3(0, 0, 0);
    private _bulletMoveEffect: Laya.Sprite3D;
    private _trailFilterTime: number = 0;

    private _lockedFishID: number | Long;
    private _uid: number | Long;
    private _state: EnumData.ENUM_BULLET_STATE;
    /** 上一次撞到的墙壁*/
    private _lastHitWallName: string = "";

    onAwake(): void {
        this.mowner = this.owner as Laya.MeshSprite3D;
        this._camera = GameFacade.Instance.HuntSceneMng._HuntSceneCamera;
        this._scene = GameFacade.Instance.HuntSceneMng._HuntScene;
        this._point = new Laya.Vector2();
        this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
        this._outHitInfo = new Laya.HitResult();
        if (null == this._bulletMoveEffect) {
            this._bulletMoveEffect = this.mowner.getChildAt(0).getChildAt(0) as Laya.Sprite3D;
            this._bulletMoveEffect.transform.localPosition = new Laya.Vector3(0, 0, 0);
            this._trailFilterTime = (this._bulletMoveEffect.getChildAt(0) as Laya.TrailSprite3D).trailFilter.time;
        }
    }

    public InitData(bulletId: number | Long, multi: number, bulletShowTypeId: number, lockedId: number | Long, playerID: number | Long, lockedFishID: number | Long): void {
        this.mowner = this.owner as Laya.MeshSprite3D;
        this._bulletInfo = new BulletInfo(bulletId, multi, bulletShowTypeId, lockedId, playerID);

        this._direction = this.mowner.transform.up;
        this._lastHitWallName = "";
        this.mowner.active = true;
        this._lockedFishID = lockedId;
        this._uid = playerID;
        if (lockedFishID.toString() == "0") {
            this._state = EnumData.ENUM_BULLET_STATE.UNLOCK;
        }
        else {
            this._state = EnumData.ENUM_BULLET_STATE.LOCKING;
        }
        this.ShowBulletEffect();
    }
    private ShowBulletEffect(): void {
        this.mowner.active = true;
        this.StartMoving();
    }

    private StartMoving(): void {
        Laya.timer.frameLoop(1, this, this.Moving);
        this.SetBulletTrailFilterTime(0);
        Laya.timer.frameOnce(1, this, function () {
            this.SetBulletTrailFilterTime(this._trailFilterTime);
        });
    }
    private StopMoving(): void {
        Laya.timer.clear(this, this.Moving);
    }
    /**
     * 设置拖尾特效的时间周期
     * @param t 时间周期
     */
    private SetBulletTrailFilterTime(t: number) {
        for (let index = 0; index < this._bulletMoveEffect.numChildren; index++) {
            const element = this._bulletMoveEffect.getChildAt(index) as Laya.TrailSprite3D;
            element.trailFilter.time = t;
        }
    }
    private Moving(): void {
        this._direction = this.GetDynamicDir();
        Laya.Vector3.scale(this._direction, this._movingSpeed, this._offset);
        //utils.CommonUtils.log("---------------------------子弹运动方向 moving dir = ", this._direction);

        //Laya.Vector3.scale(this._direction, this._movingSpeed, this._offset);
        this.mowner.transform.translate(this._offset, false);
        //如果飞墙外 那么需要销毁
        if (this.CheckBulletOutWall()) {
            //NetRoom.Instance.SyncChipsReq();
            //打出去边界的子弹 需要发送给服务器告诉是无效的

            this.ShootUselessBulletReq();
            this.RemoveBullet();
        }
        else {
            //this._camera.worldToViewportPoint(this.mowner.transform.position,this._outPos);
            this._camera.viewport.project(this.mowner.transform.position, this._camera.projectionViewMatrix, this._outPos);
            this.RayCastCheck(this._outPos);
            //console.log("outPos = " + this._outPos.elements)
        }
    }

    private RayCastCheck(screenPos: Laya.Vector3): void {
        //从屏幕空间生成射线
        this._point.elements[0] = screenPos.x;// Laya.MouseManager.instance.mouseX;//Laya.stage.mouseX;// 
        this._point.elements[1] = screenPos.y;//Laya.MouseManager.instance.mouseY;//Laya.stage.mouseY;//
        this._camera.viewportPointToRay(this._point, this._ray);


        //拿到射线碰撞的物体
        this._scene.physicsSimulation.rayCast(this._ray, this._outHitInfo);
        //如果碰撞到物体
        if (this._outHitInfo.succeeded) {
            let colLayer: Laya.Sprite3D = this._outHitInfo.collider.owner as Laya.Sprite3D;
            let fish: FishBase = null;
            // // if (colLayer.layer == CommonConstant.Layer.Fish) {
            // //     fish = GameFacade.Instance.HuntSceneMng.GetFishBase(this._outHitInfo.collider.owner);// this._outHitInfo.collider.owner.parent.getComponent(FishBase) as FishBase;
            // // }

            switch (this._state) {
                case EnumData.ENUM_BULLET_STATE.UNLOCK: {
                    if (colLayer.layer == CommonConstant.Layer.Fish) {
                        fish = GameFacade.Instance.HuntSceneMng.GetFishBase(this._outHitInfo.collider.owner);// this._outHitInfo.collider.owner.parent.getComponent(FishBase) as FishBase;
                    }
                    this.NormalAttack(fish, colLayer);
                    break;
                }
                case EnumData.ENUM_BULLET_STATE.LOCKING: {
                    fish = FishController.Instance.FishObjDict[this._lockedFishID.toString()];
                    if (fish) {
                        let fishPosVec2 = new Laya.Vector3(0, 0, 0);
                        this._camera.worldToViewportPoint(fish._OwnerPos, fishPosVec2);
                        if (Laya.Vector3.distance(screenPos, fishPosVec2) < 15)//15为屏幕坐标距离
                            this.RayCastCheckFish(colLayer, fish);
                    }
                    break;
                }
                case EnumData.ENUM_BULLET_STATE.LOCKED: {
                    break;
                }
            }
        }
    }


    private NormalAttack(fish: FishBase, colLayer: Laya.Sprite3D) {
        if (fish) {
            this.RayCastCheckFish(colLayer, fish);
        }
        else if (colLayer.layer == CommonConstant.Layer.Wall) {
            this.RayCastCheckWall();
        }
    }

    private RayCastCheckFish(colLayer: Laya.Sprite3D, fish: FishBase) {
        if (!fish._mIsExist) return;

        // 子弹打中鱼了
        let cloneIns = GameFacade.Instance.HuntSceneMng.InstantiateEffect(CommonConstant._huntSceneEffectArray.FishNetPrefab + this._bulletInfo._bulletShowTypeId);
        cloneIns.transform.position = this.mowner.transform.position;
        let ad = utils.CommonUtils.CustomAddComponent(cloneIns, AutoDestroy) as AutoDestroy;
        ad.InitData(5000, false);//渔网特效最长时间为5秒

        this.RemoveBullet();

        //todo 特殊鱼逻辑
        if (fish) {
            fish.Hitted();
            let related_fishs_id: Array<number | Long> = null;
            switch (fish._MFishInfo._mFishType) {
                case EnumData.FishSubtype.Bomb_fish:
                    {
                        related_fishs_id = fish.GetRelatedFishsId();
                        break;
                    }
            }
            FishController.Instance._FishHitedType = fish._MFishInfo._mFishType;
            FishController.Instance.HitFish(fish._MFishInfo._mFishId, this._bulletInfo, related_fishs_id);
        }
    }

    private RayCastCheckWall() {
        let colNamePrefix = this._outHitInfo.collider.owner.name.substring(0, 6);//长度6可保证取到下列字符串的完整值
        if (this._lastHitWallName == colNamePrefix)
            return;
        this._lastHitWallName = colNamePrefix;
        switch (colNamePrefix) {
            case "top":
                this.BulletReflect(CommonConstant.DirectionVector.Down);
                break;
            case "bottom":
                this.BulletReflect(CommonConstant.DirectionVector.Up);
                break;
            case "left":
                this.BulletReflect(CommonConstant.DirectionVector.Left);
                break;
            case "right":
                this.BulletReflect(CommonConstant.DirectionVector.Right);
                break;
            default:
                break;
        }
    }

    /**获取动态跟踪鱼的方向*/
    private GetDynamicDir() {

        if (this._lockedFishID == 0) {
            return this._direction;
        }
        else {
            this._camera.viewport.project(this.mowner.transform.position, this._camera.projectionViewMatrix, this._outPos);
            let outFishPos = new Laya.Vector3(0, 0, 0);
            let lockedFish = FishController.Instance.FishObjDict[this._lockedFishID.toString()];
            if (lockedFish == null || lockedFish == undefined) {
                this._lockedFishID = 0;
                this._state = EnumData.ENUM_BULLET_STATE.LOCKED;
                return this._direction; //子弹飞行中指定的鱼已挂掉
            }

            this._camera.viewport.project(lockedFish._OwnerPos, this._camera.projectionViewMatrix, outFishPos);
            let dir = new Laya.Vector3(this._outPos.x - outFishPos.x, this._outPos.y - outFishPos.y, 0);
            new Laya.Vector3.normalize(dir, dir);
            return dir;
        }
    }

    private CheckBulletOutWall() {
        if (this.mowner.transform.position.x > 12 || this.mowner.transform.position.x < -12) {
            return true;
        }
        if (this.mowner.transform.position.y > 7 || this.mowner.transform.position.y < -7) {
            return true;
        }
        return false;
    }

    /// <summary>
    /// 发送打出屏幕外的无效子弹请求
    /// </summary>
    private ShootUselessBulletReq() {
        //Debug.Log("发送无效子弹： " + buttetData.BulletId + " 倍数：" + buttetData.BulletMutil);
        if (this._bulletInfo._playId.toString() == NetLogin.Instance.RoleInfo.roleId.toString()) {
            let req = new RoomMsg.bullet_useless_req();
            req.uid = this._bulletInfo._playId;
            req.multi = this._bulletInfo._bulletMutil;
            req.bulletid = this._bulletInfo._bulletId;
            //NetRoom.Instance.BulletUseLessReq(req.uid, req.multi, req.bulletid);
            if (NetLogin.Instance.IsSelfUid(req.uid)) {
                BatteryController.Instance.m_uselessMsgDict[req.bulletid as number] = req;
            }
        }
    }

    /**
     * 根据入射向量I和法向量N求反射向量R：R = I-2(I·N)N
     * @param normal 法向量
     */
    private BulletReflect(normal: Laya.Vector3): void {
        let arrivalAngle = this._direction;//new Laya.Vector3(this._direction.x, this._direction.y, this._direction.z);
        // utils.CommonUtils.log(this._HitWallName + "--- 子弹入射角度 this._direction = ", arrivalAngle);
        let dotValue = Laya.Vector3.dot(arrivalAngle, normal);
        let reflexAngle = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.scale(normal, dotValue * 2, reflexAngle);
        Laya.Vector3.subtract(arrivalAngle, reflexAngle, reflexAngle);
        Laya.Vector3.normalize(reflexAngle, this._direction);
        // utils.CommonUtils.log(this._HitWallName + "--- 子弹反弹 left this._direction = ", this._direction);
    }

    public RemoveBullet(): void {
        if (this._bulletInfo._playId.toString() == NetLogin.Instance.RoleInfo.roleId.toString() && BatteryController.Instance.ShootedBulletAmount > 0) {
            BatteryController.Instance.ShootedBulletAmount -= 1;
        }
        this.StopMoving();
        //this.mowner.removeSelf();
        // Laya.Pool.recover(this._bulletInfo._bulletShowTypeId.toString(), this.mowner);
        this.mowner.active = false;
    }
}