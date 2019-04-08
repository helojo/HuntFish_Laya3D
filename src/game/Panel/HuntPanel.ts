import Cannon from "../Item/Cannon";
import GuidePanel from "./GuidePanel";
import NetLogin from "../../net/ProtoHander/NetLogin";
import GameFacade from "../../GameFacade";
import CommonConstant from "../../constant/CommonConstant";
import Menu from "../Item/Menu";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";
import NetRoom from "../../net/ProtoHander/NetRoom";
import HuntSceneManager from "../../manager/HuntSceneManager";
import BatteryController from "../../controller/BatteryController";
import EventNetResponse from "../../net/ProtoHander/EventNetResponse";
import GameEvent from "../../constant/GameEvent";
import AutoAttackPanel from "./AutoAttackPanel";
import { utils } from "../../utils/CommonUtil";
import FishController from "../../controller/FishController";
import HuntAwardPanel from "./HuntAwardPanel";
import Sound from "../../constant/SoundNameConstant";
import jpBeat from "../Login/Jp/JpBeat";
import PromptPanel from "./PromptPanel";
import NetWallet from "../../net/ProtoHander/NetWallet";
import NetReport from "../../net/ProtoHander/NetReport";

export default class HuntPanel extends BasePanel {
    public m_scene3D: Laya.Scene3D = null;
    public m_gunScene3D: Laya.Scene3D = null; //炮的展示场景
    public m_awardScene3D: Laya.Scene3D = null; //爆金币的展示场景
    public m_layaUINode: Laya.Node; //layaUI
    //  public m_huntSceneCamera: Laya.Camera;
    private m_isShoot = false;
    private m_isMoving = false;
    private m_lockBtnMask: fairygui.GImage;
    private m_autoBtnMask: fairygui.GImage;
    private m_menu: fairygui.GComponent;

    private m_lockMaskImg: Laya.Image;
    private m_autoMaskImg: Laya.Image;
    private m_lockTextImg: Laya.Image;
    private m_autoTextImg: Laya.Image;
    private m_lockBtnEffect: Laya.Sprite3D;
    private m_autoBtnEffect: Laya.Sprite3D;

    private m_bg1: Laya.Image;
    private m_bg2: Laya.Image;

    private m_direction: number = CommonConstant.DIRICTION.HORIZONTAL;

    private m_awardEffectArr: Array<HuntAwardPanel>;

    constructor(id) {
        super();
        this.m_nameID = id;

    }

    /**
     * 添加引导界面
     */
    private Guide(): void {
        if (NetLogin.Instance.RoleInfo.is_new && utils.CommonUtils.isFirstEnterRoom) {
            new GuidePanel();
        }
        utils.CommonUtils.isFirstEnterRoom = false;
    }
    /**
     * 初始化ui信息
     */
    public InitFui() {
        this.Guide();
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.MarqueePanel, true);
        GameFacade.Instance.SoundMng.playMusicRoom(NetLogin.Instance._curRoomIndex);
        ////  fairygui.UIPackage.addPackage(CommonConstant._fuiHallPath.Package);
        fairygui.UIPackage.addPackage(CommonConstant._fuiHunterUIPath.Package);
        ////  fairygui.UIPackage.addPackage(CommonConstant._fuiCommonUIPath.Package);
        this.m_fui = fairygui.UIPackage.createObject("HunterUI", "HunterPanel").asCom;
        GameFacade.Instance.SceneMng.AddFUI(this.m_fui);

        let jp: fairygui.GComponent = this.m_fui.getChild("jp").asCom;
        let jpb: jpBeat = jp.displayObject.addComponent(jpBeat);
        jpb.setJpText(jp.getChild("jpNumTex").asLabel);
        jpb.synJpData();
        //左侧菜单
        this.m_menu = this.m_fui.getChild("Menu").asCom;
        let controller = this.m_fui.getController("c1");
        new Menu(this.m_menu, controller, this);


        //炮台
        for (var i = 0; i < 4; i++) {
            let waitImg = this.m_fui.getChild("WaitImg" + i).asImage;
            waitImg.visible = false;
            let cannonSeat = this.m_fui.getChild("Cannon" + i).asCom;
            let cannonInfo = this.m_fui.getChild("CannonInfo" + i).asCom;
            let cannon = new Cannon(cannonSeat, cannonInfo, waitImg, i) as Cannon;
            cannon.InitGun3D();
            cannon.UpdatePlayerInfoShow();
            BatteryController.Instance.BatteryArr.push(cannon);
        }

        //自动攻击、锁定攻击
        this.m_fui.getChild("AutoBtn").asButton.onClick(this, this.OnAutoBtnClick);
        this.m_autoBtnMask = this.m_fui.getChild("AutoDownImg").asImage;
        this.m_autoBtnMask.visible = false;
        this.m_fui.getChild("LockBtn").asButton.onClick(this, this.OnLockBtnClick);
        this.m_lockBtnMask = this.m_fui.getChild("LockDownImg").asImage;
        this.m_lockBtnMask.visible = false;
        let lockText = this.m_fui.getChild("LockImg").asLoader;
        let autoText = this.m_fui.getChild("AutoImg").asLoader;
        //fui的锁定攻击和自动捕鱼攻击按钮与特效的层级没法调整，使用laya的ui来显示
        var lockBtn: Laya.Image = utils.CommonUtils.CreatLayaImg(CommonConstant._lockImgPath, new Laya.Point(this.m_lockBtnMask.x, this.m_lockBtnMask.y), this.m_layaUINode);
        lockBtn.zOrder = EnumData.SCREEN_ZODER.HuntPanelUI;
        var autoBtn: Laya.Image = utils.CommonUtils.CreatLayaImg(CommonConstant._autoImgPath, new Laya.Point(this.m_autoBtnMask.x, this.m_autoBtnMask.y), this.m_layaUINode);
        autoBtn.zOrder = EnumData.SCREEN_ZODER.HuntPanelUI;
        this.m_lockMaskImg = utils.CommonUtils.CreatLayaImg(CommonConstant._lockImgMaskPath, new Laya.Point(this.m_lockBtnMask.x, this.m_lockBtnMask.y), this.m_layaUINode);
        this.m_lockMaskImg.zOrder = EnumData.SCREEN_ZODER.HuntPanelUI;
        this.m_autoMaskImg = utils.CommonUtils.CreatLayaImg(CommonConstant._autoImgMaskPath, new Laya.Point(this.m_autoBtnMask.x, this.m_autoBtnMask.y), this.m_layaUINode);
        this.m_autoMaskImg.zOrder = EnumData.SCREEN_ZODER.HuntPanelUI;
        this.m_lockMaskImg.visible = false;
        this.m_autoMaskImg.visible = false;
        this.m_autoTextImg = utils.CommonUtils.CreatLayaImg(CommonConstant._autoTextImgPath, new Laya.Point(autoText.x, autoText.y), this.m_layaUINode);
        this.m_autoTextImg.zOrder = EnumData.SCREEN_ZODER.HuntPanelUI;
        this.m_lockTextImg = utils.CommonUtils.CreatLayaImg(CommonConstant._lockTextImgPath, new Laya.Point(lockText.x, lockText.y), this.m_layaUINode);
        this.m_lockTextImg.zOrder = EnumData.SCREEN_ZODER.HuntPanelUI;
        //特效
        this.m_lockBtnEffect = GameFacade.Instance.HuntSceneMng.InstantiateEffect(CommonConstant._huntSceneEffectArray.LockButtonEffect);
        this.m_autoBtnEffect = GameFacade.Instance.HuntSceneMng.InstantiateEffect(CommonConstant._huntSceneEffectArray.LockButtonEffect);
    }

    private InitMouseEvent() {
        var monitor = this.m_fui.getChild("Monitor").asImage;
        monitor.on(Laya.Event.MOUSE_DOWN, this, this.MouseHandler);
        monitor.on(Laya.Event.MOUSE_UP, this, this.MouseHandler);
        monitor.on(Laya.Event.MOUSE_MOVE, this, this.MouseHandler);
        monitor.on(Laya.Event.MOUSE_OUT, this, this.MouseHandler);
    }

    public EnterAfter(scene3D: Laya.Scene3D) {
        this.m_awardEffectArr = [];
        this.m_scene3D = scene3D;
        // this.m_huntSceneCamera = this.m_scene3D.getChildByName("Main Camera") as Laya.Camera;
        this.m_bg1 = new Laya.Image(CommonConstant._hunterBgPath1); //背景图
        this.m_bg2 = new Laya.Image(CommonConstant._hunterBgPath2); this.m_bg2.pos(CommonConstant.BGwidth, 0); //背景图
        let bgNode: Laya.Node = new Laya.Sprite();
        bgNode.addChild(this.m_bg1);
        bgNode.addChild(this.m_bg2);
        this.addChild(bgNode);
        this.addChild(scene3D); //鱼的3d资源
        //this.m_awardNode = new Laya.Sprite(); //爆金币节点
        //this.addChild(this.m_awardNode);
        this.m_layaUINode = new Laya.Sprite(); //炮台的底座node
        this.addChild(this.m_layaUINode);

        this.m_gunScene3D = Laya.loader.getRes(CommonConstant._gunScenePath); //炮台3d资源
        this.addChild(this.m_gunScene3D);

        GameFacade.Instance.HuntSceneMng.EnterRoomInit(this.m_scene3D, this.m_gunScene3D);
        this.InitFui(); //最上层的fui

        GameFacade.Instance.EventMng.add(GameEvent.GAME_RECONNECT, this, this.Reconnect);
        GameFacade.Instance.EventMng.add(GameEvent.HUNT_AUTOATTACK, this, this.OnAutoAttackEvent);
        GameFacade.Instance.EventMng.add(GameEvent.HUNT_LOCKATTACK, this, this.OnLockAttackEvent);
        GameFacade.Instance.EventMng.add(EventNetResponse.ReadyRoomResp, this, this.ReadyRoomResp);

        NetRoom.Instance.ReadyRoomReq();
        NetReport.Instance.ScreenReportReq();

        GameFacade.Instance.SceneMng.bProhibitWalletBtn = false;
        //Laya.loader.create(CommonConstant._topScenePath, Laya.Handler.create(this, (scene:Laya.Scene3D)=>{
        //this.addChild(scene);
        //}), null);

        Laya.timer.loop(0.1, this, this.MoveBg);
        Laya.stage.on(Laya.Event.RESIZE, this, this.onStageChange);
    }

    /**
     * 移动背景图
     */
    private MoveBg() {
        if (this.m_bg1.x < -CommonConstant.BGOffSetMax) {
            this.m_bg1.x = this.m_bg2.x + CommonConstant.BGwidth - 6;
        }
        if (this.m_bg2.x < -CommonConstant.BGOffSetMax) {
            this.m_bg2.x = this.m_bg1.x + CommonConstant.BGwidth;
        }
        Laya.Tween.to(this.m_bg1, { x: this.m_bg1.x - 0.3 }, 0.1);
        Laya.Tween.to(this.m_bg2, { x: this.m_bg2.x - 0.3 }, 0.1);
    }

    /**
     * 屏幕横竖屏切换，宽高变化
     */
    private onStageChange() {
        let screenWidth: number = Laya.Browser.clientWidth;
        let screenHeight: number = Laya.Browser.clientHeight;

        if (this.m_direction === CommonConstant.DIRICTION.HORIZONTAL && screenWidth < screenHeight) {
            //this.onDirectionChangeToVertical();
            NetReport.Instance.ScreenReportReq();
            this.m_direction = CommonConstant.DIRICTION.VERTICAL;
            utils.CommonUtils.log("--- onStageChange 竖屏");
        } else if (this.m_direction === CommonConstant.DIRICTION.VERTICAL && screenWidth >= screenHeight) {
            //this.onDirectionChangeToHorizontal();
            NetReport.Instance.ScreenReportReq();
            this.m_direction = CommonConstant.DIRICTION.HORIZONTAL;
            utils.CommonUtils.log("--- onStageChange 横屏");
        }
    }

    private MouseHandler(e: Laya.Event) {
        switch (e.type) {
            case Laya.Event.MOUSE_DOWN:
                {
                    if (GameFacade.Instance.HuntSceneMng._bAutoAttack) {
                        BatteryController.Instance.MouseDownPoint = new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY);
                        BatteryController.Instance.bAutoAttackMouseDown = true;
                        //正在捕猎选中的鱼
                        if (GameFacade.Instance.HuntSceneMng._bSelectedFish) {
                            let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                            promptPanel.InitData(EnumData.EnumPromptType.StopAutoAttack, CommonConstant._PromptContent.StopAutoAttack);
                        }
                    }
                    else if (GameFacade.Instance.HuntSceneMng._bLockAttack) {
                        let fishid = GameFacade.Instance.HuntSceneMng.GetFishId(Laya.stage.mouseX, Laya.stage.mouseY);
                        if (fishid.toString() != "0") {
                            BatteryController.Instance.LockedFishID = fishid;
                        }
                    }
                    else {
                        BatteryController.Instance.Shoot(true);
                    }
                    break;
                }
            case Laya.Event.MOUSE_MOVE:
                {
                    break;
                }
            case Laya.Event.MOUSE_OUT:
                {
                    if (!GameFacade.Instance.HuntSceneMng._bAutoAttack && !GameFacade.Instance.HuntSceneMng._bLockAttack) {
                        BatteryController.Instance.Shoot(false);
                    }
                    break;
                }
            case Laya.Event.MOUSE_UP:
                {
                    if (!GameFacade.Instance.HuntSceneMng._bAutoAttack && !GameFacade.Instance.HuntSceneMng._bLockAttack) {
                        BatteryController.Instance.Shoot(false);
                    }
                    // 自动攻击
                    if (GameFacade.Instance.HuntSceneMng._bAutoAttack) {
                        BatteryController.Instance.bAutoAttackMouseDown = false;
                        BatteryController.Instance.MouseDownPoint = new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY);
                    }
                    break;
                }
        }
    }

    private GetAwardPanel(): HuntAwardPanel {
        for (let index = 0; index < this.m_awardEffectArr.length; index++) {
            const element = this.m_awardEffectArr[index];
            if (!element.visible)
                return element;
        }
        return null;
    }

    public AwardEffect(ownerUid, fishType, reward, bHalf) {
        var award: HuntAwardPanel = this.GetAwardPanel();
        if (null == award) {
            award = new HuntAwardPanel();
            award.zOrder = EnumData.SCREEN_ZODER.AwardPanel;
            this.m_awardEffectArr.push(award);
        }
        award.InitPanel(ownerUid, fishType, reward, bHalf);
        this.m_layaUINode.addChild(award);
    }

    //#endregion 锁定攻击、自动攻击
    private OnAutoBtnClick() {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.onOpen);
        if (!GameFacade.Instance.WalletMng.IsfgWalletEnough()) {
            return;
        }

        let autoAttackPanel: AutoAttackPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.AutoAttackPanel) as AutoAttackPanel;
        autoAttackPanel.init();
    }
    private OnLockBtnClick() {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.onClick);
        if (!GameFacade.Instance.WalletMng.IsfgWalletEnough()) {
            return;
        }

        if (GameFacade.Instance.HuntSceneMng._bAutoAttack) {
            let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
            promptPanel.InitData(EnumData.EnumPromptType.StopAutoAttack, CommonConstant._PromptContent.StopAutoAttack);
        }
        else {
            this.OnLockAttackEvent(GameFacade.Instance.HuntSceneMng._bLockAttack ? false : true);
        }
    }

    private OnAutoAttackEvent(bAuto: boolean) {
        GameFacade.Instance.HuntSceneMng._bAutoAttack = bAuto;
        this.m_autoMaskImg.visible = bAuto;
        if (!bAuto) {
            BatteryController.Instance.LockedFishID = 0;
            BatteryController.Instance.HideLockLineEffect();
        }
        let res: string = bAuto ? CommonConstant._cancleAutoTextImgPath : CommonConstant._autoTextImgPath;
        this.m_autoTextImg.skin = res;

        BatteryController.Instance.ShootMode = bAuto ? EnumData.ShootType.SHOOT_AUTO : EnumData.ShootType.SHOOT_NORMAL;
        BatteryController.Instance.Shoot(bAuto);

        this.m_autoBtnEffect.active = bAuto;
        if (bAuto) {
            this.m_autoBtnEffect.transform.position = utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._GunSceneCamera, new Laya.Vector3(this.m_autoBtnMask.x, this.m_autoBtnMask.y, 0));
        }
    }

    private OnLockAttackEvent(bLock: boolean) {
        GameFacade.Instance.HuntSceneMng._bLockAttack = bLock;
        this.m_lockMaskImg.visible = bLock;
        if (!bLock) {
            BatteryController.Instance.LockedFishID = 0;
            BatteryController.Instance.HideLockLineEffect();
        }

        // let lockImg = this.m_fui.getChild("LockImg").asLoader;
        // let res: string = bLock ? "quxiaosuoding" : "suodinggongji";
        // lockImg.url = CommonConstant._preHunterPath + res;
        // 更换纹理
        let res: string = bLock ? CommonConstant._cancleLockTextImgPath : CommonConstant._lockTextImgPath;
        this.m_lockTextImg.skin = res;

        BatteryController.Instance.ShootMode = bLock ? EnumData.ShootType.SHOOT_LOCK : EnumData.ShootType.SHOOT_NORMAL;
        BatteryController.Instance.Shoot(bLock);

        this.m_lockBtnEffect.active = bLock;
        if (bLock) {
            this.m_lockBtnEffect.transform.position = utils.CommonUtils.ScreenToWorldPoint(GameFacade.Instance.HuntSceneMng._GunSceneCamera, new Laya.Vector3(this.m_lockBtnMask.x, this.m_lockBtnMask.y, 0));
        }
    }
    //#endregion


    //#endregion 断线重连
    private Reconnect() {
        FishController.Instance.Reconnect();
        BatteryController.Instance.Reconnect();
        GameFacade.Instance.EventMng.add(EventNetResponse.EnterRoomResp, this, this.EnterRoomResp);
        NetRoom.Instance.EnterRoomReq(NetLogin.Instance._curRoomIndex, RoleMsg.msg_relogin_code.RELOGIN_RECONNECT);
        //  NetRoom.Instance.ReadyRoomReq();
    }

    private EnterRoomResp() {
        this.OnAutoAttackEvent(false);
        this.OnLockAttackEvent(false);
        NetRoom.Instance.ReadyRoomReq();
    }

    /** 准备房间完成*/
    private ReadyRoomResp() {
        utils.CommonUtils.log("---准备房间完成---");
        this.InitMouseEvent();
    }

    //#endregion

    public ExitHuntScene() {
        NetRoom.Instance.LeaveRoomReq();

        //// fairygui.UIPackage.removePackage(CommonConstant._fuiHallPath.Package);
        ////  fairygui.UIPackage.removePackage(CommonConstant._fuiHunterUIPath.Package);
        ////  fairygui.UIPackage.removePackage(CommonConstant._fuiCommonUIPath.Package);

        GameFacade.Instance.EventMng.remove(GameEvent.GAME_RECONNECT, this, this.Reconnect);
        GameFacade.Instance.EventMng.remove(GameEvent.HUNT_LOCKATTACK, this, this.OnLockAttackEvent);
        GameFacade.Instance.EventMng.remove(GameEvent.HUNT_AUTOATTACK, this, this.OnAutoAttackEvent);
        GameFacade.Instance.EventMng.remove(EventNetResponse.EnterRoomResp, this, this.EnterRoomResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.ReadyRoomResp, this, this.ReadyRoomResp);

        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.AutoAttackPanel);
        //GameFacade.Instance.SoundMng.stopMusic();
        Laya.stage.off(Laya.Event.RESIZE, this, this.onStageChange);
        Laya.stage.releaseMouseEvent();
        GameFacade.Instance.HuntSceneMng.ExitHuntScene();

        //卸载3d资源缓存
        // // this.m_scene3D.destroy(true);
        // // this.m_gunScene3D.destroy(true);
        // // Laya.loader.clearRes(CommonConstant._gunScenePath);
        // // Laya.loader.clearRes(CommonConstant._huntScenePath);
        // // Laya.loader.clearRes(CommonConstant._hunterBgPath);
    }
}