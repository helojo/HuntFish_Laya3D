import CommonConstant from "../constant/CommonConstant";
import GameFacade from "../GameFacade";
import FishController from "../controller/FishController";
import EnumData from "../Enum/EnumData";
import { FishBase } from "../game/Fish/FishBase";
import BaseManager from "./BaseManager";
import BulletBase from "../game/Bullet/BulletBase";
import HF3DBulletClasses from "../game/Bullet/HF3DBulletClasses";
import HF3DFishClasses from "../game/Fish/HF3DFishClasses";
import BatteryController from "../controller/BatteryController";
import { utils } from "../utils/CommonUtil";
import Sound from "../constant/SoundNameConstant";
import { SoundsManager } from "./SoundsManager";
import NetRoom from "../net/ProtoHander/NetRoom";

export default class HuntSceneManager extends BaseManager {

    public _GunScene: Laya.Scene3D;
    public _GunSceneCamera: Laya.Camera;
    public _HuntScene: Laya.Scene3D;
    public _HuntSceneCamera: Laya.Camera;

    public _bSelectedFish: boolean = false;
    public _bAutoAttack: boolean = false;
    public _bLockAttack: boolean = false;
    public _bTransform: boolean = false;

    /** 缓存鱼模型预制件列表*/
    private _FishPrefabDict: Laya.WeakObject;
    /** 缓存子弹预制件列表*/
    private _bulletPrefabDict: Laya.WeakObject;
    /** 缓存捕猎相关特效预制件列表*/
    private _effectPrefabDict: Laya.WeakObject;
    /** 缓存爆金币特效预制件列表*/
    private _awardffectPrefabDict: Laya.WeakObject;
    /** 缓存炮台预制件列表*/
    private _cannonPrefabDict: Laya.WeakObject;


    /** 存放实例化的鱼对象*/
    //private _FishInstanceDict: Laya.WeakObject;
    private _FishInstanceDict: { [key: number]: Array<Laya.Sprite3D> } = {};
    /** 存放实例化的子弹对象*/
    private _BulletInstanceDict: { [key: number]: Array<Laya.Sprite3D> } = {};
    //  private _BulletInstanceDict: Laya.WeakObject;
    /** 存放实例化的特效对象*/
    private _effectInstanceDict: Laya.WeakObject;

    /**预警面板 */
    private warnCom: fairygui.GComponent = null;
    private warnTran: fairygui.Transition;
    private type: number;
    private fishIconGLoader: fairygui.GLoader;
    private warnGLoader: fairygui.GLoader;
    private isHaveWarnEffect: boolean = false;
    private warnEffect: Laya.Sprite3D;//由于预警同时只能显示一个
    private warnArr: Array<number> = new Array<number>();//当前预警个数

    Init() {
        //this._HuntScene = new Laya.Scene3D();
    }
    /** 清空还原数据*/
    public ClearData(): void {
        this._FishInstanceDict = null;
        //this.DeleteAllFishsIns();
        this._BulletInstanceDict = null;
        //this.DeleteAllBulletsIns();
        //this.onExitWarn();
        this._GunScene = null;
        this._HuntScene = null;
        this._HuntSceneCamera = null;
        this._FishPrefabDict = null;
        this._bulletPrefabDict = null;
        this._effectPrefabDict = null;
        this._awardffectPrefabDict = null;
        this._cannonPrefabDict = null;
        this._effectInstanceDict = null;
        this._bSelectedFish = false;
        this._bAutoAttack = false;
        this._bLockAttack = false;
        this._bTransform = false;
    }

    /**
     * 进入捕猎房间
     */
    public EnterRoomInit(scene: Laya.Scene3D, gunScene: Laya.Scene3D) {
        this._GunScene = gunScene;
        this._GunSceneCamera = gunScene.getChildByName("Main Camera") as Laya.Camera;

        this._HuntScene = scene;
        this._HuntSceneCamera = scene.getChildByName("Main Camera") as Laya.Camera;
        //this._HuntSceneCamera.fieldOfView = 80;
        this._HuntSceneCamera.clearFlag = 3;
        // camera.cullingMask = (1 << 8);
        this._HuntSceneCamera.transform.position = new Laya.Vector3(0, 0, -10);

        this.SetFishModels();
        this.SetBulletModels();
        this.SetEffectModels();
        this.SetAwardEffectModels();
        this.SetCannonModels();
        FishController.Instance.Init();
        BatteryController.Instance.Init();
    }

    /** 退出捕猎场景并回收相关资源*/
    public ExitHuntScene(): void {

        FishController.Instance.Uninit();
        BatteryController.Instance.Uninit();

        //卸载3d资源缓存
        this._HuntScene.destroy(true);
        this.onExitWarn();
        this._GunScene.destroy(true);
        GameFacade.Instance.SoundMng.stopAll();

        this.ClearData();

        Laya.loader.clearRes(CommonConstant._gunScenePath);
        Laya.loader.clearRes(CommonConstant._huntScenePath);
        Laya.loader.clearRes(CommonConstant._hunterBgPath1);
        Laya.loader.clearRes(CommonConstant._hunterBgPath2);
        GameFacade.Instance.ResourceMng.ReleaseFuiResByGroupName(CommonConstant._groupName_fuiRes);
    }

    /**
     * 获取碰撞鱼的脚本信息
     */
    public GetFishBase(node: Laya.Node): FishBase {
        let parent = node.parent.parent; //其他鱼
        if (parent == null) {
            parent = node.parent; //美人鱼
        }
        let fish = parent.getComponent(FishBase) as FishBase;
        return fish;
    }

    //#region 鱼对象的实例化、回收与移除鱼

    private SetFishModels(): void {
        if (null == this._FishPrefabDict) {
            this._FishPrefabDict = new Laya.WeakObject();
            let fishNode = this._HuntScene.getChildByName("FishModels");
            fishNode.active = true;
            let numChildren = fishNode.numChildren;
            for (let index = 0; index < numChildren; index++) {
                let nd = fishNode.getChildAt(index);
                nd.active = false;
                this._FishPrefabDict.set(nd.name, nd);
            }
        }
    }
    /**
       * 获取鱼模型资源
       * @param fishModelType 鱼的模型类型ID
       */
    private GetFishModel(fishModelType: number): Laya.Sprite3D {
        let key;
        if (fishModelType >= 10)
            key = `Fish${fishModelType}`;
        else
            key = `Fish0${fishModelType}`;
        if (this._FishPrefabDict.has(key)) {
            return this._FishPrefabDict.get(key);
        }
        else
            utils.CommonUtils.warn(`not find fish model of fishId${fishModelType}`);
        return null;
    }


    public InstantiateFish(fishSubType: number, parent?: Laya.Node): Laya.Sprite3D {
        let fishModelType = GameFacade.Instance.HuntSceneMng.GetFishModelType(fishSubType);
        if (null == this._FishInstanceDict) this._FishInstanceDict = {};//new Laya.WeakObject();

        var fishIns: Laya.Sprite3D;
        var fishArray: Array<Laya.Sprite3D>;
        if (this._FishInstanceDict[fishModelType]) {
            fishArray = this._FishInstanceDict[fishModelType];// as Array<Laya.Sprite3D>;
            var tarray = fishArray.filter((value: Laya.Sprite3D, index: number, array: Laya.Sprite3D[]) => value.active == false) as Array<Laya.Sprite3D>;
            if (null != tarray && tarray.length > 0)
                return tarray[0];
        }
        else
            fishArray = new Array<Laya.Sprite3D>();

        let prefab = this.GetFishModel(fishModelType);
        fishIns = Laya.Sprite3D.instantiate(prefab, parent == null ? prefab.parent : parent);
        fishArray.push(fishIns);
        this._FishInstanceDict[fishModelType] = fishArray;

        switch (fishSubType) {
            case EnumData.FishSubtype.Fish_1: fishIns.addComponent(HF3DFishClasses.Fish01); break;
            case EnumData.FishSubtype.Fish_2: fishIns.addComponent(HF3DFishClasses.Fish02); break;
            case EnumData.FishSubtype.Fish_3: fishIns.addComponent(HF3DFishClasses.Fish03); break;
            case EnumData.FishSubtype.Fish_4: fishIns.addComponent(HF3DFishClasses.Fish04); break;
            case EnumData.FishSubtype.Fish_5: fishIns.addComponent(HF3DFishClasses.Fish05); break;
            case EnumData.FishSubtype.Fish_6: fishIns.addComponent(HF3DFishClasses.Fish06); break;
            case EnumData.FishSubtype.Fish_7: fishIns.addComponent(HF3DFishClasses.Fish07); break;
            case EnumData.FishSubtype.Fish_8: fishIns.addComponent(HF3DFishClasses.Fish08); break;
            case EnumData.FishSubtype.Fish_9: fishIns.addComponent(HF3DFishClasses.Fish09); break;
            case EnumData.FishSubtype.Fish_10: fishIns.addComponent(HF3DFishClasses.Fish10); break;
            case EnumData.FishSubtype.Fish_11: fishIns.addComponent(HF3DFishClasses.Fish11); break;
            case EnumData.FishSubtype.Fish_12: fishIns.addComponent(HF3DFishClasses.Fish12); break;
            case EnumData.FishSubtype.Fish_13: fishIns.addComponent(HF3DFishClasses.Fish13); break;
            case EnumData.FishSubtype.Fish_14: fishIns.addComponent(HF3DFishClasses.Fish14); break;
            case EnumData.FishSubtype.Fish_15: fishIns.addComponent(HF3DFishClasses.Fish15); break;
            case EnumData.FishSubtype.Fish_16: fishIns.addComponent(HF3DFishClasses.Fish16); break;
            case EnumData.FishSubtype.Fish_17: fishIns.addComponent(HF3DFishClasses.Fish17); break;
            case EnumData.FishSubtype.Fish_18: fishIns.addComponent(HF3DFishClasses.Fish18); break;
            case EnumData.FishSubtype.Fish_19: fishIns.addComponent(HF3DFishClasses.Fish19); break;
            case EnumData.FishSubtype.Fish_20: fishIns.addComponent(HF3DFishClasses.Fish20); break;
            case EnumData.FishSubtype.Frozen_fish: fishIns.addComponent(HF3DFishClasses.Fish21); break;
            case EnumData.FishSubtype.Fish_22: fishIns.addComponent(HF3DFishClasses.Fish22); break;
            case EnumData.FishSubtype.Golden_Shark: fishIns.addComponent(HF3DFishClasses.Fish23); break;
            case EnumData.FishSubtype.Golden_Dragon: fishIns.addComponent(HF3DFishClasses.Fish24); break;
            case EnumData.FishSubtype.Mermaid: fishIns.addComponent(HF3DFishClasses.Fish25); break;
            case EnumData.FishSubtype.Ship: fishIns.addComponent(HF3DFishClasses.Fish26); break;
            case EnumData.FishSubtype.King_fishf1: fishIns.addComponent(HF3DFishClasses.FishKing1); break;
            case EnumData.FishSubtype.King_fishf2: fishIns.addComponent(HF3DFishClasses.FishKing2); break;
            case EnumData.FishSubtype.King_fishf3: fishIns.addComponent(HF3DFishClasses.FishKing3); break;
            case EnumData.FishSubtype.King_fishf4: fishIns.addComponent(HF3DFishClasses.FishKing4); break;
            case EnumData.FishSubtype.King_fishf5: fishIns.addComponent(HF3DFishClasses.FishKing5); break;
            case EnumData.FishSubtype.Bomb_fish: fishIns.addComponent(HF3DFishClasses.Fish27); break;
            default:
                fishIns.addComponent(FishBase);
                break;
        }

        return fishIns;
    }

    /**
     * 根据鱼数据类型获取对应的模型ID( 修改type 从27(炸弹鱼) 以后 开始 对应的是 1 2 3 4 5类型鱼模型的鱼王)
     * @param fishType 鱼的子类型
     */
    public GetFishModelType(fishType: number): number {
        switch (fishType) {
            case EnumData.FishSubtype.Bomb_fish:
                fishType = 27;
                break;
            case EnumData.FishSubtype.King_fishf1:
                fishType = 1;
                break;
            case EnumData.FishSubtype.King_fishf2:
                fishType = 2;
                break;
            case EnumData.FishSubtype.King_fishf3:
                fishType = 3;
                break;
            case EnumData.FishSubtype.King_fishf4:
                fishType = 4;
                break;
            case EnumData.FishSubtype.King_fishf5:
                fishType = 5;
                break;
            default:
                break;
        }
        return fishType;
    }

    /**
     * 销毁所有缓存的鱼资源
     */
    public DeleteAllFishsIns(): void {
        if (null == this._FishInstanceDict) return;
        for (const key in this._FishInstanceDict) {
            if (this._FishInstanceDict.hasOwnProperty(key)) {
                let element = this._FishInstanceDict[key] as Array<Laya.Sprite3D>;
                for (let index = 0; index < element.length; index++) {
                    let tins = element[index] as Laya.Sprite3D;
                    tins.destroy();
                }
            }
        }
        this._FishInstanceDict = null;
    }
    //#endregion

    //#region  子弹对象的实例化  缓存与回收

    /** 缓存炮台预制件列表*/
    private SetCannonModels(): void {
        if (null == this._cannonPrefabDict) {
            this._cannonPrefabDict = new Laya.WeakObject();
            let node = this._GunScene.getChildByName("Cannons");
            let numChildren = null != node ? node.numChildren : 0;
            for (let index = 0; index < numChildren; index++) {
                let nd = node.getChildAt(index);
                nd.active = false;
                this._cannonPrefabDict.set(nd.name, nd);
            }
        }
    }
    /**
     * 获取炮台预制件资源
     * @param cannonResType 炮台资源类型ID(1\2\3)
     */
    public GetCannonPrefab(cannonResType: number): Laya.Sprite3D {
        let key;
        key = `Cannon${cannonResType}`;
        if (this._cannonPrefabDict.has(key)) {
            return this._cannonPrefabDict.get(key);
        }
        else
            utils.CommonUtils.warn(`not find prefab model of cannonResType ${cannonResType}`);
        return null;
    }


    /** 缓存子弹预制件列表*/
    private SetBulletModels(): void {
        if (null == this._bulletPrefabDict) {
            this._bulletPrefabDict = new Laya.WeakObject();
            let bulletNode = this._HuntScene.getChildByName("Bullets");
            let numChildren = bulletNode.numChildren;
            for (let index = 0; index < numChildren; index++) {
                let nd = bulletNode.getChildAt(index);
                // nd.getChildAt(0).getChildAt(0).active = false;
                nd.active = false;
                this._bulletPrefabDict.set(nd.name, nd);
            }
        }
    }
    /**
       * 获取子弹预制件资源
       * @param bulletResType 子弹资源类型ID
       */
    private GetBulletPrefab(bulletResType: number): Laya.Sprite3D {
        let key;
        key = `BulletPrefab${bulletResType}`;
        if (this._bulletPrefabDict.has(key)) {
            return this._bulletPrefabDict.get(key);
        }
        else
            utils.CommonUtils.warn(`not find BulletPrefab model of bulletResType ${bulletResType}`);
        return null;
    }
    /**
     * 
     * @param bulletType 子弹资源类型
     */
    public InstantiateBullet(bulletType: number): Laya.Sprite3D {
        if (null == this._BulletInstanceDict) this._BulletInstanceDict = {};//new Laya.WeakObject();

        var cloneIns: Laya.Sprite3D;
        var cloneArray: Array<Laya.Sprite3D>;
        if (this._BulletInstanceDict[bulletType]) {
            cloneArray = this._BulletInstanceDict[bulletType];// as Array<Laya.Sprite3D>;
            var tarray = cloneArray.filter((value: Laya.Sprite3D, index: number, array: Laya.Sprite3D[]) => value.active == false) as Array<Laya.Sprite3D>;
            if (null != tarray && tarray.length > 0)
                return tarray[0];
        }
        else
            cloneArray = new Array<Laya.Sprite3D>();

        let prefab = this.GetBulletPrefab(bulletType);
        if (null == prefab)
            return;

        cloneIns = Laya.Sprite3D.instantiate(prefab, prefab.parent);
        cloneArray.push(cloneIns);
        this._BulletInstanceDict[bulletType] = cloneArray;
        switch (bulletType) {
            case 1: cloneIns.addComponent(HF3DBulletClasses.Bullet01); break;
            case 2: cloneIns.addComponent(HF3DBulletClasses.Bullet02); break;
            case 3: cloneIns.addComponent(HF3DBulletClasses.Bullet03); break;
            default:
                cloneIns.addComponent(BulletBase);
                break;
        }
        return cloneIns;
    }
    /**
     * 销毁所有缓存的子弹资源
     */
    public DeleteAllBulletsIns(): void {
        if (null == this._BulletInstanceDict) return;
        for (const key in this._BulletInstanceDict) {
            if (this._BulletInstanceDict.hasOwnProperty(key)) {
                let element = this._BulletInstanceDict[key] as Array<Laya.Sprite3D>;
                for (let index = 0; index < element.length; index++) {
                    let tins = element[index] as Laya.Sprite3D;
                    tins.destroy();
                }
            }
        }
        BatteryController.Instance.ShootedBulletAmount = 0;
        this._BulletInstanceDict = null;
    }

    //#endregion


    //#region  特效对象的实例化  缓存与回收

    /** 缓存特效预制件列表*/
    private SetEffectModels(): void {
        if (null == this._effectPrefabDict) {
            this._effectPrefabDict = new Laya.WeakObject();
            let node = this._HuntScene.getChildByName("Effects");
            let numChildren = node.numChildren;
            for (let index = 0; index < numChildren; index++) {
                let nd = node.getChildAt(index);
                nd.active = false;
                this._effectPrefabDict.set(nd.name, nd);
            }
        }
    }
    /**
       * 获取捕猎场景特效资源预制件
       * @param effectResPath 捕猎场景特效资源
       */
    private GetEffectPrefab(effectResPath: string): Laya.Sprite3D {
        let key = effectResPath;
        if (this._effectPrefabDict.has(key)) {
            return this._effectPrefabDict.get(key);
        }
        else
            utils.CommonUtils.warn(`not find effectRes model of path ${effectResPath}`);
        return null;
    }

    /** 缓存爆金币特效预制件列表*/
    private SetAwardEffectModels(): void {
        if (null == this._awardffectPrefabDict) {
            this._awardffectPrefabDict = new Laya.WeakObject();
            let node = this._GunScene.getChildByName("Effects");
            let numChildren = node.numChildren;
            for (let index = 0; index < numChildren; index++) {
                let nd = node.getChildAt(index);
                nd.active = false;
                this._awardffectPrefabDict.set(nd.name, nd);
            }
        }
    }
    /**
       * 获取捕猎场景爆金币特效资源预制件
       * @param effectResPath 捕猎场景特效资源
       */
    private GetAwardEffectPrefab(effectResPath: string): Laya.Sprite3D {
        let key = effectResPath;
        if (this._awardffectPrefabDict.has(key)) {
            return this._awardffectPrefabDict.get(key);
        }
        else
            utils.CommonUtils.warn(`not find effectRes model of path ${effectResPath}`);
        return null;
    }

    /**
     * 实例化捕猎场景中的特效对象
     * @param effectResPath 特效资源名称
     */
    public InstantiateEffect(effectResPath: string): Laya.Sprite3D {
        if (null == this._effectInstanceDict) this._effectInstanceDict = new Laya.WeakObject();

        var cloneIns: Laya.Sprite3D;
        var cloneArray: Array<Laya.Sprite3D>;
        if (this._effectInstanceDict.has(effectResPath)) {
            cloneArray = this._effectInstanceDict.get(effectResPath) as Array<Laya.Sprite3D>;
            var tarray = cloneArray.filter((value: Laya.Sprite3D, index: number, array: Laya.Sprite3D[]) => value.active == false) as Array<Laya.Sprite3D>;
            if (null != tarray && tarray.length > 0)
                return tarray[0];
        }
        else {
            cloneArray = new Array<Laya.Sprite3D>();
        }

        cloneIns = this.CreateEffect(effectResPath, cloneArray);

        return cloneIns;
    }

    private CreateEffect(effectResPath: string, cloneArray: Array<Laya.Sprite3D>): Laya.Sprite3D {
        var cloneIns: Laya.Sprite3D;
        let prefab = this.GetEffectPrefab(effectResPath);
        if (prefab == null) {
            prefab = this.GetAwardEffectPrefab(effectResPath);
        }
        if (null == prefab)
            return;
        cloneIns = Laya.Sprite3D.instantiate(prefab, prefab.parent);
        cloneArray.push(cloneIns);
        this._effectInstanceDict.set(effectResPath, cloneArray);
        return cloneIns;
    }
    //#endregion

    //#region 锁定捕鱼
    public GetFishId(posX, posY) {
        //从屏幕空间生成射线
        let ray: Laya.Ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
        this._HuntSceneCamera.viewportPointToRay(new Laya.Vector2(posX, posY), ray);
        //拿到射线碰撞的物体
        let outHitInfo: Laya.HitResult = new Laya.HitResult();
        this._HuntScene.physicsSimulation.rayCast(ray, outHitInfo);
        //如果碰撞到物体
        if (outHitInfo.succeeded) {
            let colLayer = outHitInfo.collider.owner as Laya.Sprite3D;
            if (colLayer.layer == CommonConstant.Layer.Fish) {
                let fish: FishBase = this.GetFishBase(outHitInfo.collider.owner);
                return fish ? fish._MFishInfo._mFishId : 0;
            }
        }
        return 0;
    }
    public GetFishPointById(id: string) {
        let script: FishBase = FishController.Instance.FishObjDict[id];
        if (script != null) {
            let outPos = new Laya.Vector3();
            this._HuntSceneCamera.viewport.project(script._OwnerPos, this._HuntSceneCamera.projectionViewMatrix, outPos);
            return new Laya.Point(outPos.x, outPos.y);
        }
        return null;
    }

    /**
    * 预警显示
    * @param type 
    */
    public warnShow(type: number): void {
        utils.CommonUtils.log("预警显示");
        if (!Laya.stage.isVisibility) return;//切换到后台，停止表现效果
        if (null == this._GunScene) return;
        if (type == 0) {
            GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.wave);
        }
        else {
            GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.warn);
        }

        if (this.warnCom == null) {
            this.type = type;
            GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiWarnPath.image, CommonConstant._fuiWarnPath.fui, this, this.onLoadWarning);
            Laya.Sprite3D.load(CommonConstant._warnPath_lh, Laya.Handler.create(this, function (s: Laya.Sprite3D) {
                this.warnEffect = s;
                this._GunScene.addChild(s);
            }))
        }
        else {//如果当前有预警正在播放延迟播放

            if (this.isHaveWarnEffect) {
                this.warnArr.push(type);
            }
            else {
                try {
                    this.isHaveWarnEffect = true;
                    this.type = type;
                    this._GunScene.addChild(this.warnEffect);
                    fairygui.GRoot.inst.addChild(this.warnCom);
                    this.IconUrl();
                } catch (error) {
                    this.warnCom = null;
                    this.isHaveWarnEffect = false;
                    utils.CommonUtils.log(error);
                }

            }
        }
    }

    /**
     * 加载预警资源
     */
    private onLoadWarning(): void {

        this.warnCom = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiWarnPath.Package, "Warning", "warningPanel");
        this.warnTran = this.warnCom.getTransition("t0");
        this.fishIconGLoader = this.warnCom.getChild("fishIconLoader").asLoader;
        this.warnGLoader = this.warnCom.getChild("warnLoader").asLoader;
        this.IconUrl();
    }


    /**
     * 预警图标
     */
    private IconUrl(): void {
        fairygui.GRoot.inst.setChildIndex(this.warnCom, -1);
        this.fishIconGLoader.icon = fairygui.UIPackage.getItemURL("Warning", "fish" + this.type);
        this.warnGLoader.icon = fairygui.UIPackage.getItemURL("Warning", "warn" + this.type);
        this.warnTran.play(Laya.Handler.create(this, this.onCloseWarn))
    }

    /**
     * 关闭预警
     */
    public onCloseWarn(): void {
        fairygui.GRoot.inst.removeChild(this.warnCom);
        this._GunScene.removeChild(this.warnEffect);
        this.isHaveWarnEffect = false;
        if (this.warnArr.length > 0) {
            this.warnShow(this.warnArr.shift());
        }
    }
    /**
     * 退房剔除预警
     */
    private onExitWarn(): void {
        this.warnArr.length = 0;
        this.onCloseWarn();
    }
}