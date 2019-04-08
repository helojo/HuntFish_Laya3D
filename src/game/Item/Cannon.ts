import CommonConstant from "../../constant/CommonConstant";
import FishController from "../../controller/FishController";
import GameFacade from "../../GameFacade";
import BatteryController from "../../controller/BatteryController";
import BulletBase from "../Bullet/BulletBase";
import NetRoom from "../../net/ProtoHander/NetRoom";
import NetLogin from "../../net/ProtoHander/NetLogin";
import Sound from "../../constant/SoundNameConstant";
import { utils } from "../../utils/CommonUtil";
import HuntSceneManager from "../../manager/HuntSceneManager";
import EnumData from "../../Enum/EnumData";
import HuntPanel from "../Panel/HuntPanel";
import CannonConfig from "../../config/CannonConfig";
import WalletPanel from "../Panel/WalletPanel";
import EventConstantResponse from "../../constant/EventConstantResponse";
/**
 * 炮台
 */
export default class Cannon {
    private m_gunMultiLabel: fairygui.GLabel;
    private m_gun: fairygui.GLoader;
    private m_gunNode: fairygui.GImage;
    private m_waitImg: fairygui.GImage; //等待加入img
    private m_userNameLabel: Laya.Label;
    private m_coinNumFont: Laya.FontClip;
    private m_userLevelFont: Laya.FontClip;
    private m_walletBnt: Laya.Image;
    private m_cannon: fairygui.GComponent;
    private m_loseBtn: fairygui.GButton;
    private m_addBtn: fairygui.GButton;
    private m_coinEndPos: Laya.Vector3;

    private m_gunMultiIndex: number; //点击按钮的索引 累加 1，2，3，4，5，6，7，8，9
    private m_gunGpos: Laya.Point;

    private m_gun3dDic: Laya.WeakObject = null;
    private m_gun3D: Laya.Sprite3D;
    private m_baseBg: Laya.Image;
    private m_info: Laya.Image;
    private m_gun3DNode: Laya.Node;
    private m_gunBulletPos: Laya.Vector3;
    private m_scene3D: Laya.Scene3D;
    private m_changeEffect: Laya.Sprite3D;

    private m_data: RoomMsg.Iroom_role_info = null;
    public m_position: number; //炮台的位置
    public m_bInversion: boolean; //炮台是否倒置
    private m_curGun3DIndex: number; //3d炮的索引
    private m_wallentBtnMonitor: Laya.Image;

    public get CoinEndPos(): Laya.Vector3 {
        return this.m_coinEndPos;
    }

    public get Gun3D(): Laya.Sprite3D {
        return this.m_gun3D;
    }
    public get Gun(): fairygui.GLoader {
        return this.m_gun;
    }
    public get GunGpos(): Laya.Vector3 {
        return new Laya.Vector3(this.m_gunGpos.x, this.m_gunGpos.y, 0);
    }
    public get Data(): RoomMsg.Iroom_role_info {
        return this.m_data;
    }

    constructor(cannon, info: fairygui.GComponent, waitImg, index) {
        this.m_gunMultiIndex = 0;
        this.m_curGun3DIndex = 0;
        this.m_data = null;

        this.m_waitImg = waitImg;
        this.m_cannon = cannon;

        let controller = cannon.getController("c1");
        this.m_bInversion = false;
        if (index >= 2) { //0~3
            this.m_bInversion = true;
            controller.selectedIndex = 1;
        }
        this.m_position = index;

        // controller = this.m_info.getController("c1");
        // if (index % 2 == 0) {
        //     controller.selectedIndex = 1;
        // }

        //炮台底座为laya的UI，炮使用3d资源
        let fuiBaseBg = (cannon.getChild("BaseBg") as fairygui.GImage);
        fuiBaseBg.visible = false;
        this.m_gun = cannon.getChild("Gun").asLoader;
        this.m_gun.visible = false;

        let fuiBaseBgPos = this.m_cannon.localToGlobal(fuiBaseBg.x, fuiBaseBg.y);
        this.m_baseBg = new Laya.Image(CommonConstant._baseBgPath); //炮的底座
        this.m_baseBg.anchorX = 0.5;
        this.m_baseBg.anchorY = 0.5;
        this.m_baseBg.pos(fuiBaseBgPos.x, fuiBaseBgPos.y);
        let huntPanel = GameFacade.Instance.SceneMng.GetPanelById(EnumData.EnumPanelType.HuntPanel) as HuntPanel;
        huntPanel.m_layaUINode.addChild(this.m_baseBg);
        //// this.m_gun3DNode = huntPanel.m_gunScene3D;
        //this.m_gun3DNode = huntPanel.m_awardScene3D;

        //炮台加减按钮
        this.m_loseBtn = cannon.getChild("LoseBtn");
        this.m_loseBtn.onClick(this, this.OnLossBtnClick);
        this.m_loseBtn.onClick(this, this.playSoundChangeGun);
        this.m_addBtn = cannon.getChild("AddBtn");
        this.m_addBtn.onClick(this, this.OnAddBtnClick);
        this.m_addBtn.onClick(this, this.playSoundChangeGun);
        this.m_gunMultiLabel = cannon.getChild("GunPowerLabel").asLabel;

        //炮台旁的信息框 用laya创建
        info.visible = false;
        let namePos = new Laya.Point(27, 25);
        //let namePos = new Laya.Point(44, 25);
        let coinFontPos = new Laya.Point(27, 66);
        let levelFont = new Laya.Point(2, 23);
        let coinImgPos = new Laya.Point(18, 74);
        let levelFontBgPos = new Laya.Point(22, 35);
        let walletBtnPos = new Laya.Point(196, 76);
        if (index % 2 == 1) {
            //namePos = new Laya.Point(11, 25);
            coinFontPos = new Laya.Point(14, 66);
            levelFont = new Laya.Point(176, 23);
            coinImgPos = new Laya.Point(191, 75);
            levelFontBgPos = new Laya.Point(196, 35);
            walletBtnPos = new Laya.Point(22, 76);
        }
        this.m_info = utils.CommonUtils.CreatLayaImg(CommonConstant._infoFrame, new Laya.Point(info.x, info.y), huntPanel.m_layaUINode, 0, 0);//炮台信息底框
        let labelBg = utils.CommonUtils.CreatLayaImg(CommonConstant._infoLabelBg, new Laya.Point(4, 21), this.m_info, 0, 0);//玩家昵称底框
        this.m_userNameLabel = utils.CommonUtils.CreatLayaLabel(namePos, 161, this.m_info, 22);//玩家昵称
        this.m_userNameLabel.color = "#FFFFFF";
        let levelFontBg = utils.CommonUtils.CreatLayaImg(CommonConstant._infoLevelBg, levelFontBgPos, this.m_info);//玩家等级底框
        this.m_userLevelFont = utils.CommonUtils.CreatFontClip(levelFont, CommonConstant._levelFont, "*+,-./0123456789", this.m_info, 51);//等级
        this.m_userLevelFont.scale(0.8, 0.8);
        levelFontBg.visible = false;
        this.m_userLevelFont.visible = false;
        let coinFontBg = utils.CommonUtils.CreatLayaImg(CommonConstant._infoLabelBg, new Laya.Point(4, 60), this.m_info, 0, 0);//金币数字底框
        let coinImg = utils.CommonUtils.CreatLayaImg(CommonConstant._infoCoin, coinImgPos, this.m_info);//金币icon
        this.m_coinNumFont = utils.CommonUtils.CreatFontClip(coinFontPos, CommonConstant._coinFont, ".,0123456789", this.m_info, 173);//金币数字
        this.m_walletBnt = utils.CommonUtils.CreatLayaImg(CommonConstant._infoWallent, walletBtnPos, this.m_info);//金币icon
        this.m_wallentBtnMonitor = utils.CommonUtils.CreatLayaImg(CommonConstant._infoWallent, new Laya.Point(walletBtnPos.x + this.m_info.x, walletBtnPos.y + this.m_info.y), Laya.stage);//金币icon
        this.m_wallentBtnMonitor.alpha = 0;
        this.m_wallentBtnMonitor.on(Laya.Event.MOUSE_DOWN, this, this.OnWalletBtnClick);

        this.m_gunGpos = this.m_cannon.localToGlobal(this.m_gun.x, this.m_gun.y);
        var endPos = this.m_info.localToGlobal(new Laya.Point(coinImg.x, coinImg.y));
        this.m_coinEndPos = new Laya.Vector3(endPos.x, endPos.y, 0);

        this.m_changeEffect = GameFacade.Instance.HuntSceneMng.InstantiateEffect(CommonConstant._huntSceneEffectArray.ChangeCannonEffect);
    }

    public InitGun3D() {
        let self = this;
        if (this.m_gun3dDic == null) {
            this.m_gun3dDic = new Laya.WeakObject;
        }
        for (var i = 0; i < 3; i++) {
            let prefab = GameFacade.Instance.HuntSceneMng.GetCannonPrefab(i + 1);
            if (null == prefab)
                return;
            let cloneIns: Laya.Sprite3D = Laya.Sprite3D.instantiate(prefab, prefab.parent);
            //cloneIns.active = true;
            cloneIns.transform.position = utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._GunSceneCamera, this.GunGpos);
            cloneIns.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
            this.m_gun3dDic.set(i, cloneIns);
        }
        this.m_gun3D = this.m_gun3dDic.get(0) as Laya.Sprite3D;

        if (this.m_bInversion) {
            this.m_baseBg.scaleY = -1;
            this.m_gun3D.transform.rotationEuler = new Laya.Vector3(0, 0, 180);
        }
    }

    private OnLossBtnClick() {
        this.m_gunMultiIndex = (this.m_gunMultiIndex <= 0) ? NetRoom.Instance._curRoomInfo.battery.length - 1 : this.m_gunMultiIndex - 1;
        NetRoom.Instance.ChangeBatteryReq(this.m_gunMultiIndex, NetLogin.Instance.RoleInfo.roleId);
        this.ChangeGunBySelf(this.m_gunMultiIndex);

    }
    private OnAddBtnClick() {
        this.m_gunMultiIndex = (this.m_gunMultiIndex >= NetRoom.Instance._curRoomInfo.battery.length - 1) ? 0 : this.m_gunMultiIndex + 1;
        NetRoom.Instance.ChangeBatteryReq(this.m_gunMultiIndex, NetLogin.Instance.RoleInfo.roleId);
        this.ChangeGunBySelf(this.m_gunMultiIndex);
    }
    /**
     * 免转按钮点击
     * 最高层的fui不能点击穿透，所以炮台信息框上的免转按钮不能触发响应，只能起到一个显示功能，因此在stage上添加laya对象wallentBtnMonitor来监测响应
     */
    private OnWalletBtnClick(e: Laya.Event) {
        switch (e.type) {
            case Laya.Event.MOUSE_DOWN:
                {
                    if (!GameFacade.Instance.SceneMng.bProhibitWalletBtn && this.m_walletBnt.visible) {
                        BatteryController.Instance.StopAutoAttack();
                        BatteryController.Instance.StopLockAttack();
                        GameFacade.Instance.WalletMng.mainWalletReq();
                    }
                }
        }
    }

    /**
     * 播放改变炮台声音
     */
    private playSoundChangeGun() {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.changeGun);
    }

    private ChangeGunByServe() {
        this.m_gunMultiLabel.text = utils.CommonUtils.numberFixed(this.m_data.bullet_multi * NetRoom.Instance._curRoomInfo.ante).toString(); //子弹倍率
        let bulletResID = BatteryController.Instance.GetBatteryResIdByMulti(this.m_data.bullet_multi) - 1;
        //this.m_gun.url = CommonConstant._preHunterPath + CommonConstant._gunPicArr[bulletResID];
        this.ChangeGun(bulletResID);
    }
    private ChangeGunBySelf(index: number) {
        let multi = NetRoom.Instance._curRoomInfo.battery[this.m_gunMultiIndex];
        this.m_data.bullet_multi = multi; //客户端更新自身炮台倍率
        this.m_gunMultiLabel.text = utils.CommonUtils.numberFixed(multi * NetRoom.Instance._curRoomInfo.ante).toString(); //子弹倍率
        let bulletResID = BatteryController.Instance.GetBatteryResIdByMulti(multi) - 1;
        //this.m_gun.url = CommonConstant._preHunterPath + CommonConstant._gunPicArr[bulletResID];
        this.ChangeGun(bulletResID);
    }

    private ChangeGun(index: number) {
        var rotateZ = this.m_gun3D.transform.rotationEuler.z;
        if (index != this.m_curGun3DIndex) {
            this.m_gun3D.active = false;
            this.m_gun3D = this.m_gun3dDic.get(index) as Laya.Sprite3D;
            this.m_gun3D.active = true;
            this.m_gun3D.transform.rotationEuler = new Laya.Vector3(0, 0, rotateZ);
            this.m_curGun3DIndex = index;
            this.m_changeEffect.transform.position = utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._GunSceneCamera, new Laya.Vector3(this.m_gunGpos.x, this.m_gunGpos.y, 0));

            this.m_changeEffect.active = false;
            this.m_changeEffect.active = true;
            this.m_changeEffect.transform.localPositionZ = -2;

            this.PlayAnimation(CannonConfig._IdleAni);
        }

        // if(!BatteryController.Instance.m_bshoot)
        // {
        //     this.PlayAnimation(CannonConfig._IdleAni);
        // }
    }

    private GetBulletPos() {
        var outPos = new Laya.Vector3(0, 0, 0);
        //Laya.Vector3.add((this.m_gun3D.getChildByName("BulletPos") as Laya.Sprite3D).transform.position, this.m_gun3D.transform.position, outPos);
        //this.m_gunBulletPos = outPos;
        var worldPos = (this.m_gun3D.getChildByName("BulletPos") as Laya.Sprite3D).transform.position;
        GameFacade.Instance.HuntSceneMng._GunSceneCamera.worldToViewportPoint(worldPos, outPos);
        return utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._HuntSceneCamera, outPos);

    }

    //#region 子弹逻辑

    /**
     * 创建子弹
     * @param data 子弹数据
     */
    public CreateBullet(data: RoomMsg.shoot_bullet_resp): void {
        let tStartPos = this.GetBulletPos();
        let tStartAngle = this.GetGunAngle(data, tStartPos);
        this.Gun3D.transform.rotationEuler = tStartAngle; //创建子弹之前，先同步好炮台角度
        //utils.CommonUtils.log("CreateBullet data = ", data);
        var self = this;
        this.PlayAnimation(CannonConfig._AttackAni);
        this.PlayAttackFire();
        Laya.timer.once(0.3 * 1000, this, function () {
            self.PlayAnimation(CannonConfig._IdleAni);
        });
        // if (!(data.fishid > 0 && FishController.Instance.FishObjDict.has(data.fishid)))
        //     return;//子弹锁定了一个不存在的鱼
        if (data.uid.toString() == NetLogin.Instance.RoleInfo.roleId.toString()) {
            BatteryController.Instance.ShootedBulletAmount += 1;
        }

        this.FGNumFont(data.jettonshow as number, data.uid);
        if (NetLogin.Instance.IsSelfUid(data.uid)) {
            GameFacade.Instance.WalletMng.fgWalletValueAfterShoot = data.jettonshow as number;
        }


        let bulletResID = BatteryController.Instance.GetBatteryResIdByMulti(data.multi);
        let bullet = GameFacade.Instance.HuntSceneMng.InstantiateBullet(bulletResID);
        bullet.transform.rotationEuler = tStartAngle;//this.GetBulletRotate(data.angel);
        this.playSoundShoot(bulletResID);
        //bullet.transform.position = CommonConstant.PosVector[this.m_data.position - 1];

        //bullet.transform.position = utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._HuntSceneCamera, this.m_gunBulletPos);
        bullet.transform.position = tStartPos;//this.GetBulletPos();
        (bullet.getChildAt(0) as Laya.Sprite3D).transform.localPosition = new Laya.Vector3(0, 0, 0);
        let bulletScript = bullet.getComponent(BulletBase) as BulletBase;
        bulletScript.InitData(data.bulletid, data.multi, bulletResID, data.fishid, data.uid, data.fishid);
        //bulletScript.StartMoving();
    }
    /**
     * 获得炮台角度
     * @param data 子弹数据
     * @param beginPos 起始位置
     */
    private GetGunAngle(data: RoomMsg.shoot_bullet_resp, beginPos: Laya.Vector3): Laya.Vector3 {
        if (null != data) {
            if (data.fishid != 0) {
                let lockedFish = GameFacade.Instance.HuntSceneMng.GetFishPointById(data.fishid.toString());//FishController.Instance.FishObjDict[data.fishid.toString()];
                if (null != lockedFish) {
                    this.UpdateAngleByPos(lockedFish.x, lockedFish.y)
                    return this.GetBulletRotate(this.UpdateAngleByPos(lockedFish.x, lockedFish.y));
                }
            }
            return this.GetBulletRotate(data.angel);
        }
    }
    /** 炮台 子弹的角度*/
    private GetBulletRotate(angel: number) {
        return new Laya.Vector3(0, 0, (this.m_bInversion ? 180 : 0) + angel);
    }

    /** 更新fg钱包*/
    private FGNumFont(value: number, uid: number | Long) {
        this.m_coinNumFont.value = (utils.CommonUtils.numberFixed(value)).toFixed(2); //金币数
        if (NetLogin.Instance.IsSelfUid(uid)) {
            GameFacade.Instance.WalletMng.setFgWalletValue(value);
            GameFacade.Instance.GameMng.userChips = value;

        }
    }

    /**
     * 根于子弹类型播放声音
     * @param num 子弹类型
     */
    private playSoundShoot(num: number) {
        switch (num) {
            case 1:
                GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.shoot1);
                break;
            case 2:
                GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.shoot2);
                break;
            case 3:
                GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.shoot3);
                break;
            default:
                break;
        }
    }

    //#endregion
    /**
     * 更新玩家炮台UI信息展示
     */
    public UpdatePlayerInfoShow(): void {
        let info = null;
        if (this.m_data)
            info = NetRoom.Instance._RoomRoleInfoDict[this.m_data.uid.toString()];
        this.UpdateInfo(info);
        //// BatteryUpgrade();
    }

    public UpdateInfo(data: RoomMsg.Iroom_role_info) {
        this.m_data = data;
        let dataIsNotNull = (data != null);
        this.m_cannon.visible = dataIsNotNull;
        this.m_info.visible = dataIsNotNull;
        this.m_waitImg.visible = !dataIsNotNull;
        this.m_gun3D.active = dataIsNotNull;
        this.m_baseBg.visible = dataIsNotNull;
        this.m_walletBnt.visible = NetLogin.Instance.isOfficial;
        if (dataIsNotNull) {
            //if (data.uid.toString() != NetLogin.Instance.RoleInfo.roleId.toString()) {
            if (!NetLogin.Instance.IsSelfUid(data.uid)) {
                this.m_loseBtn.visible = false;
                this.m_addBtn.visible = false;
                this.m_walletBnt.visible = false;
            }
            else {
                GameFacade.Instance.GameMng.userAccount = this.m_userNameLabel.text;
            }

            this.m_position = data.position;
            this.PlayAnimation(CannonConfig._IdleAni);
            this.m_gunMultiIndex = BatteryController.Instance.GetBatteryIndexByMulti(this.m_data.bullet_multi);
            this.m_userNameLabel.text = utils.CommonUtils.nickNameWithSymbol(this.m_data.nickname); //用户名
            this.m_userLevelFont.value = this.m_data.level.toString(); //等级数
            this.FGNumFont(this.m_data.jetton_show as number, data.uid);


            this.ChangeGunByServe();
        }
    }
    private coinNum: number = 0;//金币个数
    /** 更新金币*/
    public CoinFlyingFinish(uid: number | Long, data: RoomMsg.Ifish_bonus_info) {
        let info = null;
        if (this.m_data) {
            //this.FGNumFont(this.m_data.jetton_show as number);
            // 金币数字
            let bounsFont: Laya.FontClip = FishController.Instance.CreatBounsFont(data.bonus, this.CoinEndPos, 0.3, uid);
            if (null == bounsFont)
                return;
            let bInversion = BatteryController.Instance.GetBatteryByUid(uid).m_bInversion;
            let offY = -CommonConstant.BounsFontOffY;
            if (bInversion) {
                offY = CommonConstant.BounsFontOffY;
            }
            //console.log("金币");
            this.coinNum++;
            if (this.coinNum == 1) {
                GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.getCoin);
            }
            Laya.Tween.to(bounsFont, { y: this.CoinEndPos.y + offY }, 500, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
                bounsFont.visible = false;
                this.coinNum = 0;
                Laya.Pool.recover(FishController.Instance._PoolSign, bounsFont);
            }));
        }
    }

    /**
     * 更新子弹倍数
     * @param multi 
     */
    public UpdateBulletMulti(multi) {
        this.m_data.bullet_multi = multi;
        this.ChangeGunByServe();
    }

    public UpdateAngleByAngle(angel) {
        this.m_cannon.rotation = angel;
    }

    /** 更新炮台角度，并返回*/
    public UpdateAngleByPos(posX, posY) {
        if (null == this.m_data) return;

        var diry = this.m_data.position <= 2 ? -1 : 1;

        var dir = new Laya.Vector2(posX - this.m_gunGpos.x, posY - this.m_gunGpos.y);
        var dirnor = new Laya.Vector2(0, 0);
        Laya.Vector2.normalize(dir, dirnor);
        var dot = Laya.Vector2.dot(new Laya.Vector2(0, diry), dirnor);
        var rAngle = Math.acos(dot) * 57.29578;

        //dot点乘为负数，则两向量夹角大于90度，点击无效
        // if (dot < 0) {
        //     return -1;
        // }
        // else {
        //     if (dirnor.x <= 0) {
        //         rAngle = -rAngle;
        //     }
        // }
        if (dirnor.x <= 0) {
            rAngle = -rAngle;
        }
        rAngle = this.m_data.position <= 2 ? rAngle : -rAngle;
        //this.m_gun.rotation = rAngle;
        this.m_gun3D.transform.rotationEuler = new Laya.Vector3(0, 0, rAngle);

        return rAngle;
    }

    //
    public PlayAnimation(aniName: string): void {
        if (this.Gun3D == null) {
            utils.CommonUtils.log("---3d炮资源为空");
            return;
        }
        var animator = this.Gun3D.getChildAt(0).getComponent(Laya.Animator);
        if (aniName != "") {
            let aniStatesMap = animator.getControllerLayer(0)._statesMap;
            let animatorState = aniStatesMap[aniName];
            if (animatorState)
                animator.play(aniName);
            //utils.CommonUtils.log("PlayAnimation aniName = ", aniName);
        }
    }

    public PlayAttackFire() {
        //3号炮台的喷火粒子效果
        let particle = this.Gun3D.getChildAt(0).getChildAt(0).getChildByName("huo") as Laya.ShuriKenParticle3D;
        if (particle) {
            let particleSys = particle.particleSystem;
            particleSys.stop();
            particleSys.play();
        }

        //三个炮台的meshrenderer 喷火效果
        let fireSp3D: Laya.MeshSprite3D = this.Gun3D.getChildAt(0).getChildAt(0).getChildByName("cannon01_1") as Laya.MeshSprite3D;
        if (fireSp3D == null) {
            fireSp3D = (this.Gun3D.getChildAt(0).getChildByName("cannon01_1") as Laya.MeshSprite3D);

        }
        let fireMeshRenderer: Laya.MeshRenderer = (fireSp3D as Laya.MeshSprite3D).meshRenderer;
        let effectMaterial = (fireMeshRenderer.material as Laya.EffectMaterial);

        Laya.Tween.to(effectMaterial, { colorA: 255 }, 45, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(effectMaterial, { colorA: 0 }, 45);
        }));

    }

    public Exit() {
        this.m_gun3D = null;
        this.m_data = null;
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        this.m_wallentBtnMonitor.off(Laya.Event.MOUSE_DOWN, this, this.OnWalletBtnClick);
        this.m_wallentBtnMonitor.removeSelf();
    }
}