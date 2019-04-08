import GameFacade from "../GameFacade";
import EventNetResponse from "../net/ProtoHander/EventNetResponse";
import NetLogin from "../net/ProtoHander/NetLogin";
import FishInfo from "../game/Fish/FishInfo";
import { FishBase } from "../game/Fish/FishBase";
import ConfigManager, { FishWayPoint } from "../manager/ConfigManager";
import BulletInfo from "../game/Bullet/BulletInfo";
import NetRoom from "../net/ProtoHander/NetRoom";
import BatteryController from "./BatteryController";
import { utils } from "../utils/CommonUtil";
import EnumData from "../Enum/EnumData";
import CommonConstant from "../constant/CommonConstant";
import CoinFlying from "../game/CoinEffect/CoinFlying";
import { Enum } from "../../libs/protobuf-library";
import Sound from "../constant/SoundNameConstant";
import HuntPanel from "../game/Panel/HuntPanel";
import AutoDestroy from "../utils/AutoDestroy";
import HuntSceneManager from "../manager/HuntSceneManager";
import GameConfig from "../GameConfig";
import GameEvent from "../constant/GameEvent";

export default class FishController {

    private static _instance: FishController;
    public static get Instance(): FishController {
        if (null == this._instance) this._instance = new FishController();
        return this._instance;
    }
    /** 实例化的鱼的列表*/
    private _FishObjDict: { [index: string]: FishBase };
    public get FishObjDict() {
        return this._FishObjDict;
    }

    /** 当前被攻击的鱼类型*/
    public _FishHitedType: number = null;
    public _PoolSign: string = null;

    public Init(): void {
        this._PoolSign = "bounsFont";
        this._FishObjDict = {};
        this._FishHitedType = null;
        GameFacade.Instance.EventMng.add(EventNetResponse.SynFishResp, this, this.CreateFish);
        GameFacade.Instance.EventMng.add(EventNetResponse.FishDeadResp, this, this.FishDeadResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.OnePieceResp, this, this.OnePieceResp);
    }

    public Uninit(): void {
        this._FishObjDict = null;
        GameFacade.Instance.EventMng.remove(EventNetResponse.SynFishResp, this, this.CreateFish);
        GameFacade.Instance.EventMng.remove(EventNetResponse.FishDeadResp, this, this.FishDeadResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.OnePieceResp, this, this.OnePieceResp);

        Laya.Pool.clearBySign(this._PoolSign);
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
    }

    private CreateFish(data: RoomMsg.syn_fish_resp): void {
        let fishCount = data.fish_list.length;
        for (let index = 0; index < fishCount; index++) {
            let fishResp = data.fish_list[index];
            //   if(fishResp.type > 4)continue;//todo
            if (this._FishObjDict[fishResp.id.toString()]) {
                utils.CommonUtils.warn("已经存在鱼ID: " + fishResp.id);
                continue;
            }
            /// this.FishWarn(fishResp.type);
            let fishSpeed = NetLogin.Instance.FishInfoList(fishResp.type).fish_speed;

            let fishInfo = new FishInfo();
            fishInfo._mFishId = fishResp.id;
            fishInfo._mFishType = fishResp.type;
            fishInfo._mFishModelType = GameFacade.Instance.HuntSceneMng.GetFishModelType(fishResp.type);
            fishInfo._mPathId = fishResp.path_id;
            fishInfo._mSpeed = fishSpeed;
            fishInfo._mFishCreateTime = (fishResp.create_time_ms as number - NetLogin.Instance._timeOffset);
            fishInfo._mForzenTime = fishResp.frozen_time_ms as number;
            fishInfo._mModel = fishResp.model;
            let fwp: FishWayPoint = GameFacade.Instance.ConfigMng.FishPathConfig[fishInfo._mPathId];// as FishWayPoint;
            fishInfo._mPathLenght = fwp._wayLength;
            fishInfo._mWayPoints = fwp._points;

            if (fishResp.pos > 0) {
                if (fishResp.model == 1) {
                    let fishModelType = fishInfo._mFishModelType;
                    if (fishInfo._mWayPoints[0].x >= 0) {
                        let fwpr: FishWayPoint = GameFacade.Instance.ConfigMng.FishOffsetConfig.get(`L${fishModelType}`);// as FishWayPoint;
                        Laya.Vector3.scale(fwpr._points[fishResp.pos], -1, fishInfo._offsetPoints);
                        //Debug.Log("右边出鱼");
                    }
                    else {
                        let fwpr: FishWayPoint = GameFacade.Instance.ConfigMng.FishOffsetConfig.get(`R${fishModelType}`);// as FishWayPoint;
                        fishInfo._offsetPoints = fwpr._points[fishResp.pos];
                        //Debug.Log("左边出鱼");
                    }
                }
            }
            // let node = GameFacade.Instance.HuntSceneMng._HuntScene.addChild(new Laya.Sprite()) as Laya.Sprite;
            // node.zOrder = fishResp.type;
            let fishScript = GameFacade.Instance.HuntSceneMng.InstantiateFish(fishResp.type).getComponent(FishBase) as FishBase;
            this._FishObjDict[fishResp.id.toString()] = fishScript;
            fishScript.Init(fishInfo);
            fishScript.StartMove();
        }
    }
    /**
    * 鱼死亡同步
    * @param data 
    */
    private FishDeadResp(data: RoomMsg.fish_dead_resp): void {

        let len = data.fish_killed.length;
        let deadFishType: EnumData.FishSubtype = -1;
        for (let i: number = 0; i < len; i++) {
            let fishInfo = data.fish_killed[i];
            let tFishBase = this._FishObjDict[fishInfo.fish_id.toString()] as FishBase;
            if (null != tFishBase && tFishBase._MFishInfo._mFishType == EnumData.FishSubtype.Bomb_fish) {
                deadFishType = EnumData.FishSubtype.Bomb_fish; //如果炮弹打死的鱼是炸弹鱼、鱼王
                break;
            }
        }
        for (let i: number = 0; i < len; i++) {
            let fishInfo = data.fish_killed[i];
            this.GetCoinEffect(data.uid, fishInfo, data.jettonshow as number, i, deadFishType);
            this.OnDeadFishOrMoveEnd(fishInfo.fish_id, true, fishInfo.bonus, data.uid, deadFishType);
        }
    }
    /** 从世界Boss身上掉下金币*/
    private OnePieceResp(data: RoomMsg.one_piece_resp): void {

        for (let i: number = 0; i < data.fish_killed.length; i++) {
            let tinfo = data.fish_killed[i];
            this.NormalCoinEffect(data.uid, tinfo, data.jettonshow as number, i);

            if (BatteryController.Instance.gShootModel == EnumData.ShootType.SHOOT_AUTO) {
                GameFacade.Instance.EventMng.dispatch(GameEvent.HUNT_HUNTEDFISH, [tinfo.bonus, this._FishObjDict[tinfo.fish_id.toString()]._MFishInfo._mFishType]);
            }
        }
    }
    //#region  爆金币逻辑

    /**
     * 普通爆金币特效
     * @param ownerUid 玩家uid
     * @param data 打死的鱼的奖励信息
     */
    private NormalCoinEffect(ownerUid: number | Long, data: RoomMsg.Ifish_bonus_info, jettonshow: number, i: number): void {
        if (!Laya.stage.isVisibility) return;//切换到后台，停止子弹创建

        let fish_id = data.fish_id;
        if (this._FishObjDict[fish_id.toString()]) {
            let tFishBase = this._FishObjDict[fish_id.toString()] as FishBase;
            let tfish_config = NetLogin.Instance.FishInfoList(tFishBase._MFishInfo._mFishType)
            let tbasic_reward = utils.CommonUtils.numberFixed(tfish_config.fish_rate);
            let coinNumToShow = this.GetCoinNumsToShow(tFishBase._MFishInfo._mFishType);
            let tPos: Laya.Vector3 = new Laya.Vector3(tFishBase._OwnerPos.x, tFishBase._OwnerPos.y, tFishBase._OwnerPos.z);
            let tempPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
            GameFacade.Instance.HuntSceneMng._HuntSceneCamera.worldToViewportPoint(tPos, tempPos);
            tPos = utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._HuntSceneCamera, tempPos);
            this.CoinResCreate(ownerUid, data, jettonshow, coinNumToShow, tPos, true, i);

            //金币数字
            let bounsFont: Laya.FontClip = this.CreatBounsFont(data.bonus, tempPos, 0.3, ownerUid);

            //bounsFont.scale(1.4, 1.4);
            let scaleSize = 0.6;
            Laya.Tween.to(bounsFont, { scaleX: 1.5, scaleY: 1.5 }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(bounsFont, { scaleX: scaleSize, scaleY: scaleSize }, 200, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(bounsFont, { scaleX: scaleSize + 0.1, scaleY: scaleSize + 0.1 }, 200, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(bounsFont, { scaleX: scaleSize, scaleY: scaleSize }, 200, null, Laya.Handler.create(this, () => {

                        }));
                    }));
                }));
            }));
            Laya.Tween.to(bounsFont, { y: bounsFont.y - 50 }, 100, null, Laya.Handler.create(this, () => { }));
            Laya.Tween.to(bounsFont, {}, 800, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(bounsFont, { alpha: 0 }, 100, null, Laya.Handler.create(this, () => { }));
                Laya.Pool.recover(this._PoolSign, bounsFont);
            }));
        }
    }

    /**
     * 爆金币字体
     * @param bonus 要显示的数值大小
     * @param screenPos 字体要显示的坐标
     * @param scale 缩放比例
     */
    public CreatBounsFont(bonus: number, screenPos: Laya.Vector3, sacle: number, uid: number | Long = null) {
        let huntPanel = GameFacade.Instance.SceneMng.GetPanelById(EnumData.EnumPanelType.HuntPanel) as HuntPanel;

        let fontSkin: string = CommonConstant._bounsFontSelf;
        //如果是其他炮打死鱼，使用其他字体
        if (uid != null && !NetLogin.Instance.IsSelfUid(uid)) {
            fontSkin = CommonConstant._bounsFontOther;
        }
        let bounsFont: Laya.FontClip = Laya.Pool.getItem(this._PoolSign);
        if (bounsFont == null) {
            bounsFont = utils.CommonUtils.CreatFontClip(new Laya.Point(screenPos.x, screenPos.y), fontSkin, ".+0123456789", huntPanel.m_layaUINode, 100);//new Laya.FontClip(fontSkin, ".+0123456789");
            bounsFont.scale(sacle, sacle);
            bounsFont.anchorX = 0.5;
            bounsFont.anchorY = 0.5;
            bounsFont.value = "+" + utils.CommonUtils.numberFixed(bonus).toFixed(2);
        }
        else {
            bounsFont.pos(screenPos.x, screenPos.y);
            bounsFont.visible = true;
            bounsFont.alpha = 1;
            bounsFont.skin = fontSkin;
            bounsFont.scale(sacle, sacle);
            bounsFont.value = "+" + utils.CommonUtils.numberFixed(bonus).toFixed(2);
        }

        return bounsFont;
    }

    /**
     * 鱼死亡获得金币银币的特效播放
     * @param data 
     * @param fishScript 
     */
    private GetCoinEffect(ownerUid: number | Long, data: RoomMsg.Ifish_bonus_info, jettonshow: number, i: number, fishType: number): void {
        if (!Laya.stage.isVisibility) return;//切换到后台，停止子弹创建

        if (this._FishObjDict[data.fish_id.toString()]) {
            this.NormalCoinEffect(ownerUid, data, jettonshow, i);

            let tFishBase = this._FishObjDict[data.fish_id.toString()] as FishBase;
            let tfish_config = NetLogin.Instance.FishInfoList(tFishBase._MFishInfo._mFishType);
            let tbasic_reward = utils.CommonUtils.numberFixed(tfish_config.fish_rate);

            if ((tbasic_reward > CommonConstant.fishRate.Fifty) && (tbasic_reward <= CommonConstant.fishRate.Sixty)) //触发半屏转盘
            {
                //todo 20号-25号鱼金币相关逻辑
                let tPos: Laya.Vector3 = new Laya.Vector3(tFishBase._OwnerPos.x, tFishBase._OwnerPos.y, tFishBase._OwnerPos.z);
                let tempPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
                GameFacade.Instance.HuntSceneMng._HuntSceneCamera.worldToViewportPoint(tPos, tempPos);
                tPos = utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._HuntSceneCamera, tempPos);
                this.AwardEffect(ownerUid, tFishBase._MFishInfo._mFishType, data.bonus, Sound.soundKeyArr.bigFishCoin, tPos, true);
            }
            else if (tbasic_reward >= CommonConstant.fishRate.Eighty) { //触发全屏转盘
                if (tfish_config.fish_class != EnumData.FishCategory.Frozen_fish) {
                    //todo boss鱼金币相关逻辑 
                    let tPos = new Laya.Vector3(0, 0, 0);// utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._HuntSceneCamera, new Laya.Vector3(GameConfig.width / 2, GameConfig.height / 2, 0));
                    this.AwardEffect(ownerUid, tFishBase._MFishInfo._mFishType, data.bonus, Sound.soundKeyArr.bossFishCoin, tPos, false);
                }
            }
            else {
                if (fishType != EnumData.FishSubtype.Bomb_fish) {
                    GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.coin)
                }
            }

            //todo 特殊鱼种处理
            switch (tFishBase._MFishInfo._mFishType) {
                case EnumData.FishSubtype.Bomb_fish: {
                    let bombEffect = GameFacade.Instance.HuntSceneMng.InstantiateEffect(CommonConstant._huntSceneEffectArray.BombFishExpEffect);
                    ////let tPos = utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._HuntSceneCamera, new Laya.Vector3(GameConfig.width / 2, GameConfig.height / 2, 0));
                    bombEffect.transform.localPosition = new Laya.Vector3(0, 0, 0);//tPos;
                    // bombEffect.active = true;
                    let ad = utils.CommonUtils.CustomAddComponent(bombEffect, AutoDestroy) as AutoDestroy;
                    ad.InitData(8000, false);
                    break;
                }
            }
        }
    }

    private AwardEffect(ownerUid, type, reward, soundName, tPos, bHalf) {
        let panel = GameFacade.Instance.SceneMng.GetPanelById(EnumData.EnumPanelType.HuntPanel) as HuntPanel;
        //转盘
        panel.AwardEffect(ownerUid, type, reward, bHalf);
        //爆金币
        this.ScreenBombCoinEffect(soundName, tPos, ownerUid, bHalf);
    }

    private ScreenBombCoinEffect(soundName: string, tPos: Laya.Vector3, ownerUid: number | Long, bHalf: boolean): void {
        let effectName: string = bHalf ? CommonConstant._huntSceneEffectArray.Half_screenBomb_2 : CommonConstant._huntSceneEffectArray.Full_screenBomb_2;
        let cloneIns = GameFacade.Instance.HuntSceneMng.InstantiateEffect(effectName);
        //let textureName = (NetLogin.Instance.IsSelfUid(ownerUid) ? CommonConstant._TextureArray.Gold : CommonConstant._TextureArray.Silver);
        //GameFacade.Instance.ResourceMng.LoadTexture2D(textureName, function (t: Laya.Texture2D) {
        //    ((cloneIns.getChildAt(0) as Laya.ShuriKenParticle3D).particleRenderer.material as Laya.ShurikenParticleMaterial).texture = t;
        cloneIns.transform.position = tPos;
        let ad = utils.CommonUtils.CustomAddComponent(cloneIns, AutoDestroy) as AutoDestroy;
        ad.InitData(5000, false);//该特效最长时间为5秒
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, soundName)
        //});
    }

    /**
     * 
     * @param uid 玩家uid
     * @param data 打死鱼的奖金信息
     * @param coinNum 要显示的金币个数
     * @param startPos 金币开始位置
     * @param isScreenPos 是否为屏幕坐标
     */
    private CoinResCreate(uid: number | Long, data: RoomMsg.Ifish_bonus_info, jettonshow: number, coinNum: number, startPos: Laya.Vector3, isScreenPos: boolean, index: number): void {

        if (!isScreenPos) {
            let tempPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
            GameFacade.Instance.HuntSceneMng._GunSceneCamera.worldToViewportPoint(startPos, tempPos);
            startPos = utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._GunSceneCamera, tempPos);
        }

        let tcannon = BatteryController.Instance.GetBatteryByUid(uid);
        if (null == tcannon) return;
        let tendPos: Laya.Vector3 = tcannon.CoinEndPos;
        tendPos = utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._GunSceneCamera, tendPos);
        let self = this;
        for (let i = 0; i < coinNum; i++) {
            let cloneIns = GameFacade.Instance.HuntSceneMng.InstantiateEffect(CommonConstant._huntSceneEffectArray.GoldCoin) as Laya.Sprite3D;
            let textureName = (NetLogin.Instance.IsSelfUid(uid) ? CommonConstant._TextureArray.Gold : CommonConstant._TextureArray.Silver);
            GameFacade.Instance.ResourceMng.LoadTexture2D(textureName, function (t: Laya.Texture2D) {
                ((cloneIns.getChildAt(0) as Laya.ShuriKenParticle3D).particleRenderer.material as Laya.ShurikenParticleMaterial).texture = t;
                //(cloneIns.getChildAt(0) as Laya.ShuriKenParticle3D).particleSystem.startLifetimeConstant = 50;
                //(cloneIns.getChildAt(0) as Laya.ShuriKenParticle3D).particleSystem.textureSheetAnimation.cycles = 50;
                let toffsetX = utils.CommonUtils.randomFloat(-1, 1);
                let toffsetY = utils.CommonUtils.randomFloat(0.1, 1);
                cloneIns.transform.position = new Laya.Vector3(startPos.x + toffsetX, startPos.y + toffsetY, startPos.z);
                cloneIns.active = true;
                //cloneIns.transform.localScale = new Laya.Vector3(0.5, 0.5, 0.5);
                // Laya.timer.once(500, self, function () {
                //     Laya.Tween.to(cloneIns.transform, { localScaleX: 1, localScaleY: 1, localScaleZ: 1 }, 200, null, Laya.Handler.create(self, function () { }));
                //     Laya.Tween.to(cloneIns.transform, { localPositionY: cloneIns.transform.localPositionY + 3 }, 200, Laya.Ease.quadIn, Laya.Handler.create(self, function () {
                //         Laya.Tween.to(cloneIns.transform, { localScaleX: 1, localScaleY: 1, localScaleZ: 1 }, 150, null, Laya.Handler.create(self, function () { }));
                //         Laya.Tween.to(cloneIns.transform, { localPositionY: cloneIns.transform.localPositionY - 1 }, 150, Laya.Ease.quadOut, Laya.Handler.create(self, function () {
                //             Laya.timer.once(500, self, function () {
                //                 let ad = utils.CommonUtils.CustomAddComponent(cloneIns, CoinFlying) as CoinFlying;
                //                 ad.InitData(index * 50, tendPos, false, uid, data, jettonshow);
                //             });
                //         }));
                //     }));

                // })

                Laya.timer.once(500, self, function () {
                    Laya.Tween.to(cloneIns.transform, {
                        localPositionX: cloneIns.transform.localPositionX + 0,//toffsetX,
                        localPositionY: cloneIns.transform.localPositionY + 1,//toffsetY,
                    }, 300, Laya.Ease.quintOut, Laya.Handler.create(self, function () {
                        let ad = utils.CommonUtils.CustomAddComponent(cloneIns, CoinFlying) as CoinFlying;
                        ad.InitData(index * 50, tendPos, false, uid, data, jettonshow);
                    }));
                });
            });
        }
    }

    /**
     * 获得的金币个数用于效果展示
     * @param fishtype 获得金币价值
     */
    private GetCoinNumsToShow(fishtype: number): number {
        switch (fishtype) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                return 5;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 26:
                return 7;
            case 13:
            case 14:
            case 15:
            case 16:
                return 10;
            case 17:
            case 18:
            case 19:
            case 20:
                return 12;
            case 21:
            case 23:
                return 15;
            case 25:
                return 16;
            default:
                break;
        }
        return 2;
    }
    //#endregion

    /**
     * 鱼路劲周期走完或者鱼死亡，自动被删除
     * @param fishId 鱼ID
     * @param isDead 是否死亡
     */
    public OnDeadFishOrMoveEnd(fishId: number | Long, isDead: boolean, bouns: number = 0, uid: number | Long = 0, deadFishType: EnumData.FishSubtype = -1): void {
        if (this._FishObjDict[fishId.toString()]) {
            let tFishBase = this._FishObjDict[fishId.toString()] as FishBase;
            tFishBase.Remove(isDead, bouns, uid, deadFishType);
            delete this._FishObjDict[fishId.toString()];
            if (fishId.toString() == BatteryController.Instance.LockedFishID.toString()) {
                BatteryController.Instance.LockedFishID = 0;
            }
        }
    }

    /**
    * 击中鱼请求服务器认证
    * @param fishId 被击中的鱼ID
    * @param bulletData 子弹信息
    * @param related_fishs_id 关联鱼的ID列表
    */
    public HitFish(fishId: number | Long, bulletData: BulletInfo, related_fishs_id: (number | Long)[]): void {
        if (bulletData._playId.toString() == NetLogin.Instance.RoleInfo.roleId.toString()) {
            if (this._FishObjDict[fishId.toString()]) {
                NetRoom.Instance.HitFishReq(bulletData._bulletMutil, fishId, related_fishs_id, bulletData._bulletId);
                delete BatteryController.Instance.m_totalBulletIdDict[bulletData._bulletId as number];
                CommonConstant._huntSceneTestArry.hitFishReq++;
            }
        }
    }

    public Reconnect() {
        for (let key in this._FishObjDict) {
            this._FishObjDict[key].Remove(false);
            delete this.FishObjDict[key];
        }
    }

    public IsFishKing(type: number) {
        if (type >= EnumData.FishSubtype.King_fishf1 && type < EnumData.FishSubtype.Bomb_fish) {
            return true;
        }

        return false;
    }
}