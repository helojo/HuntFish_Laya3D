import BasePanel from "./BasePanel";
import SceneManager from "../../manager/SceneManager";
import GameFacade from "../../GameFacade";
import Sound from "../../constant/SoundNameConstant";
import CommonConstant from "../../constant/CommonConstant";
import EventNetResponse from "../../net/ProtoHander/EventNetResponse";
import NetRoom from "../../net/ProtoHander/NetRoom";
import GameEvent from "../../constant/GameEvent";
import { cameraMove } from "../Login/Camera/CameraMove";
import EventConstantResponse from "../../constant/EventConstantResponse";
import jpBeat from "../Login/Jp/JpBeat";
import FreeTranWallet from "./WalletPanel";
import NetRoleInfo from "../../net/ProtoHander/NetRoleInfo";
import NetJpPool from "../../net/ProtoHander/NetJpPool";
import { TipType } from "../../manager/TipManager";
import Lang from "../../constant/LanguageConstant";
import RebateAct from "../Login/Act/RebateAct";
import { AddWebpage } from "../Login/AddWebpages/AddWebpage";
import NetAward from "../../net/ProtoHander/NetAward";
import { utils } from "../../utils/CommonUtil";
import NetLogin from "../../net/ProtoHander/NetLogin";
import NetReport from "../../net/ProtoHander/NetReport";
import EnumData from "../../Enum/EnumData";


export default class HallPanel extends BasePanel {
    private m_islandInfoPanelEffect: fairygui.GComponent; //岛信息面板的效果
    private m_islandInfoPanel: fairygui.GComponent; //岛信息面板
    private fundCom: fairygui.GComponent;
    private lvCom: fairygui.GComponent;
    private rebateCom: fairygui.GComponent;
    private nameText: fairygui.GLabel;
    private coinText: fairygui.GTextField;
    private lvText: fairygui.GLabel;
    private expPer: fairygui.GLabel;
    private endTimeTex: fairygui.GLabel;//活动结束时间
    private expProgress: fairygui.GProgressBar;
    private walletBtn: fairygui.GButton;
    private settingBtn: fairygui.GButton;
    private helpBtn: fairygui.GButton;
    private reportBtn: fairygui.GButton;
    private rankingBtn: fairygui.GButton;
    private jpBtn: fairygui.GButton;
    private preBtn: fairygui.GButton;
    private nextBtn: fairygui.GButton;
    private fastBtn: fairygui.GButton;
    private rebateActBtn: fairygui.GButton;
    private backMainPageBtn: fairygui.GButton;
    private personnalInfoBtn: fairygui.GButton;
    private lvBonusBtn: fairygui.GButton;
    private growthFundBtn: fairygui.GButton;
    private lvNew: fairygui.GImage;//特殊new 有等级奖金可以领取的时候 出现 

    private m_curIslandIndex: number; //当前岛屿的下标
    private m_bMoving: boolean;
    private m_scene3D: Laya.Scene3D;
    private m_islandArr: Array<Laya.Sprite3D> = [];
    private m_sceneMng: SceneManager;
    private m_islandbut: Laya.Sprite;
    private m_direction: number = CommonConstant.DIRICTION.HORIZONTAL;

    private m_bHallPanelFinished = false;
    constructor(id) {
        super();
        this.m_sceneMng = GameFacade.Instance.SceneMng;
        this.m_bMoving = false;
        this.m_curIslandIndex = 0;
        this.m_nameID = id;
        this.m_bHallPanelFinished = false;
    }
    /**
     * 进入大厅
     * @param scene3D 
     */
    public EnterAfter(scene3D: Laya.Scene3D) {

        //this.ShowEffect();
        GameFacade.Instance.EventMng.add(EventConstantResponse.LOGINRESROLEINFO, this, this.InitRoleInfo);
        GameFacade.Instance.EventMng.add(GameEvent.GAME_RECONNECT, this, this.Reconnect);
        GameFacade.Instance.EventMng.add(EventNetResponse.EnterRoomResp, this, this.EnterRoomResp);
        GameFacade.Instance.EventMng.add(EventNetResponse.SyncChipsResp, this, this.syncChip);
        GameFacade.Instance.EventMng.add(EventNetResponse.MqSyncChipsResp, this, this.mqSyncChip);
        GameFacade.Instance.EventMng.add(EventConstantResponse.LVINFORESP, this, this.lvInfo);
        GameFacade.Instance.EventMng.add(EventConstantResponse.GROWTHFUNDSTATERESP, this, this.actEndTime);
        GameFacade.Instance.EventMng.add(EventConstantResponse.SWITCHRESP, this, this.onSwitch);
        GameFacade.Instance.EventMng.add(EventConstantResponse.LVAWARDRESP, this, this.synLvNew);
        this.InitScene(scene3D);
        this.InitFui();
        //this.InitRoleInfo();
        this.ChangePanelInfo(this.m_curIslandIndex);
        NetRoom.Instance.SyncChipsReq();

        GameFacade.Instance.SceneMng.bProhibitWalletBtn = true;

        NetReport.Instance.ScreenReportReq();
        Laya.stage.on(Laya.Event.RESIZE, this, this.onStageChange);
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


    /**
     * 初始化3D
     * @param scene3D 
     */
    private InitScene(scene3D: Laya.Scene3D) {
        this.m_scene3D = scene3D;
        this.m_scene3D.ambientColor = new Laya.Vector3(1, 1, 1);
        this.addChild(new Laya.Image(CommonConstant._hallBgPath));
        this.addChild(this.m_scene3D);
        //添加岛
        var Node = this.m_scene3D.getChildByName("Island") as Laya.Node;
        var camera = this.m_scene3D.getChildByName("Main Camera") as Laya.Camera;
        camera.addComponent(cameraMove);
        var num = Node.numChildren;
        for (var i = 0; i < num; i++) {
            var sp3D = Node.getChildAt(i) as Laya.Sprite3D;
            this.m_islandArr.push(sp3D);
            if (i != 0) {
                sp3D.active = false;
            }
            else {
                sp3D.active = true;
            }
        }
    }

    /**
     * 初始化2D
     */
    private InitFui(): void {
        fairygui.UIPackage.addPackage(CommonConstant._fuiHallUIPath.Package);
        ////    fairygui.UIPackage.addPackage(CommonConstant._fuiHallPath.Package);
        this.m_fui = fairygui.UIPackage.createObject("HallUI", "HallPanel").asCom;
        GameFacade.Instance.SceneMng.AddFUI(this.m_fui);
        this.nameText = this.m_fui.getChild("nameTex").asLabel;
        this.coinText = this.m_fui.getChild("coinTex").asTextField;
        this.lvText = this.m_fui.getChild("lvTex").asLabel;
        this.expProgress = this.m_fui.getChild("lvProgressBar").asProgress;
        this.expPer = this.m_fui.getChild("lvPer").asLabel;

        var jp = this.m_fui.getChild("jp").asCom;
        this.jpBtn = jp.getChild("jpBtn").asButton;
        this.jpBtn.onClick(this, this.onJpBtnClick);
        var jpb: jpBeat = jp.displayObject.addComponent(jpBeat);
        jpb.setJpText(jp.getChild("jpNumTex").asLabel);
        jpb.synJpData();
        this.backMainPageBtn = this.m_fui.getChild("backMainPageBtn").asButton;
        this.backMainPageBtn.onClick(this, this.onBackMainPage);
        this.backMainPagBtnShow();
        this.walletBtn = this.m_fui.getChild("walletBtn").asButton; this.walletBtn.visible = false;
        this.walletBtn.onClick(this, this.OnWalletBtnClick);
        this.settingBtn = this.m_fui.getChild("settingBtn").asButton;
        this.settingBtn.onClick(this, this.OnSetBtnClick);
        this.reportBtn = this.m_fui.getChild("reportBtn").asButton;
        this.reportBtn.onClick(this, this.OnExcelBtnClick);
        this.helpBtn = this.m_fui.getChild("helpBtn").asButton;
        this.helpBtn.onClick(this, this.OnHelpBtnClick);
        this.rankingBtn = this.m_fui.getChild("rankBtn").asButton;
        this.rankingBtn.onClick(this, this.OnRankBtnClick);
        this.preBtn = this.m_fui.getChild("preBtn").asButton;
        this.preBtn.onClick(this, this.OnLeftBtnClick);
        this.nextBtn = this.m_fui.getChild("nextBtn").asButton;
        this.nextBtn.onClick(this, this.OnRightBtnClick);
        this.fastBtn = this.m_fui.getChild("fastBtn").asButton;
        this.fastBtn.onClick(this, this.OnQuickGameClick);
        this.m_islandInfoPanel = this.m_fui.getChild("IslandInfoEffect").asCom
        this.m_islandInfoPanel.getChild("RateBtn").onClick(this, this.OnGameBtnClick);
        this.m_fui.getChild("bgBtn").onClick(this, this.OnGameBtnClick);

        let contorller: fairygui.Controller = this.m_fui.getController("c1");
        contorller.selectedIndex = GameFacade.Instance.GameMng.sheet == 0 ? 1 : 0;

        this.initActFui();
        this.role(GameFacade.Instance.GameMng.userAccount, GameFacade.Instance.GameMng.userChips); //默认值、记录的房间内的值
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.MarqueePanel, false);
    }

    /**
     * 由于fui太多 分开act的单独处理
     */
    private initActFui(): void {
        this.rebateCom = this.m_fui.getChild("rebateAct").asCom;
        this.rebateActBtn = this.rebateCom.getChild("rebateActBtn").asButton;
        this.rebateActBtn.onClick(this, this.onRebateActBtnClick);
        this.rebatwActShow();
        this.personnalInfoBtn = this.m_fui.getChild("personalInfoBtn").asButton;
        this.personnalInfoBtn.onClick(this, this.onPersonalInfoBtnClick);
        this.personnalInfoBtn.touchable = !GameFacade.Instance.GameMng.isPlay;
        this.lvCom = this.m_fui.getChild("lvCom").asCom;
        this.lvBonusBtn = this.lvCom.getChild("lvBtn").asButton;
        this.lvNew = this.lvCom.getChild("lvNew").asImage;
        this.lvNew.visible = false;
        this.lvBonusBtn.onClick(this, this.onLvBonusBtnClick);
        this.fundCom = this.m_fui.getChild("fundCom").asCom;
        this.endTimeTex = this.fundCom.getChild("timeTex").asLabel;
        this.growthFundBtn = this.fundCom.getChild("fundBtn").asButton;
        this.growthFundBtn.onClick(this, this.onGrowthFundBtnClick);
        this.fundCom.visible = false;
        this.lvCom.visible = false;
        this.synData();
        this.sound();
    }

    /**
     * 返回大厅按钮显示
     */
    private backMainPagBtnShow() {
        if (!utils.CommonUtils.isApp()) {
            if (GameFacade.Instance.GameMng.return == "0") {
                this.backMainPageBtn.visible = false;
            }
            else if ((GameFacade.Instance.GameMng.lobbyUrl == null || GameFacade.Instance.GameMng.lobbyUrl == "") && Laya.Browser.onPC) {
                this.backMainPageBtn.visible = false;
            }
        }
    }
    /**
     * 同步返利活动显示
     */
    private rebatwActShow() {
        if (utils.CommonUtils.isApp()) {
            this.rebateCom.visible = false;
        }
        else {
            var rbAct: RebateAct = this.rebateCom.displayObject.addComponent(RebateAct);
            rbAct.setTimeLabel(this.rebateCom);
        }
    }

    /**
   * 活动结束时间
   * @param data 
   */
    private actEndTime(): void {
        Laya.timer.loop(200, this, this.timeShow);
    }
    /**
     * 活动时间显示
     */
    private timeShow() {
        this.lvCom.visible = NetLogin.Instance.isOnLvSw;
        if (utils.CommonUtils.getTimeDifference(NetAward.Instance.endTime) == null) {
            this.fundCom.visible = false;
            GameFacade.Instance.OthMng.isActEnd = true;
            Laya.timer.clear(this, this.timeShow);
            return;
        }
        else {
            this.fundCom.visible = NetLogin.Instance.isOnLvSw;
            this.endTimeTex.text = utils.CommonUtils.getTimeDifference(NetAward.Instance.endTime);
        }
    }

    /**
     * 开关
     */
    private onSwitch() {
        ////  console.log("开关");
        ////  console.log(NetLogin.Instance.isOnLvSw);
    }
    /**
     * 同步数据
     * @param jpb 
     */
    private synData(): void {

        if (NetLogin.Instance.RoleInfo != null) {

            this.walletBtn.visible = NetLogin.Instance.isOfficial;
            this.onSwitch();
            this.refreshChip();
            this.refreshLv();
            this.refreshEndTime();
        }
    }

    /** 初始化角色信息*/
    private InitRoleInfo(): void {

        let data: RoleMsg.role_info = NetLogin.Instance.RoleInfo as RoleMsg.role_info;
        if (data == null) return;

        this.walletBtn.visible = NetLogin.Instance.isOfficial;
        if (data.jetton_show == 0) {
            this.OnWalletBtnClick();
        }
        this.refreshLv();
        this.refreshEndTime();
        this.role(data.nickname, data.jetton_show);
        this.m_bHallPanelFinished = true;
    }

    /**
     * 刷新时间
     */
    private refreshEndTime(): void {
        NetAward.Instance.growthFundStateReq();
    }
    /**
     * 刷新金币
     */
    private refreshChip(): void {
        NetRoom.Instance.SyncChipsReq();
    }
    /**
     * 刷新等级
     */
    private refreshLv(): void {
        NetRoleInfo.Instance.lvInfoReq();
    }
    /**
     * 获得同步金币
     * @param data 
     */
    private syncChip(data: RoomMsg.sync_chips_resp): void {

        this.m_bHallPanelFinished = true;
        this.role(NetLogin.Instance.RoleInfo.nickname, data.chips);
    }
    /**
     * 获得同步金币(用于免转)
     * @param data 
     */
    private mqSyncChip(data: RoomMsg.mq_sync_chips_resp): void {
        this.role(NetLogin.Instance.RoleInfo.nickname, data.chips);
    }
    /**
     * 获得同步等级
     * @param data 
     */
    private lvInfo(data: RoleInfoMsg.lv_info_resp): void {
        this.exp(data.need_exp, data.exp, data.lv);//与活动相关经验值
        this.lvNewShow(data.lv, data.reward_lv + 1);//初始化等级new标识
    }

    /**
     * 同步等级new标识
     */
    private synLvNew(data: AwardMsg.lv_award_resp): void {
        if (data.code == AwardMsg.award_code.success) {
            this.lvNewShow(NetRoleInfo.Instance.lvInfo.lv, data.next_lv);
        }
    }
    /**
     * 等级里面的new 展示login
     */
    private lvNewShow(currLv: number, nextLv: number): void {
        if (currLv >= nextLv)//可领取
        {
            this.lvNew.visible = true;
        }
        else {//不可领取
            this.lvNew.visible = false;
        }
    }
    /**
     * 角色
     * @param name 名字
     * @param coin 金币
     * @param lv 等级
     */
    private role(name: string, coin: number | Long): void {
        this.nameText.text = utils.CommonUtils.nickNameWithSymbol(name);
        this.coinText.text = utils.CommonUtils.numberFormat(Number(coin));
        utils.CommonUtils.coinAutoFontSize(this.coinText);

    }

    /**
     * 经验值 
     * @param needExp 需要的经验值
     * @param exp 当前经验值
     */
    private exp(needExp: Long | number, exp: Long | number, lv: number): void {
        this.lvText.text = lv.toString();
        if (needExp == 0) {
            this.expProgress.value = 0;
            this.expPer.text = "0.00%";
        }
        else {
            var e = Number(exp) / Number(needExp);
            this.expProgress.value = Number(exp);
            this.expProgress.max = Number(needExp);
            this.expPer.text = (e * 100).toFixed(0) + "%";
        }
    }
    /**
     * 声音
     */
    private sound(): void {
        this.settingBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen) });
        this.reportBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen) });
        this.rebateActBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen) });
        this.helpBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen) });
        this.rankingBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen) });
        this.jpBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen) });
        this.walletBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen) });
        this.preBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.rateSelect) });
        this.nextBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.rateSelect) });
        this.fastBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick) });
        this.backMainPageBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick) });
        this.personnalInfoBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen) });
        this.lvBonusBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen) });
        this.growthFundBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onOpen) });
        this.m_fui.getChild("bgBtn").onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick) });
        this.m_islandInfoPanel.getChild("RateBtn").onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick) });
        GameFacade.Instance.SoundMng.playMusic(Sound.soundBgArr.hallBgMusic);
    }


    private Reconnect() {

    }
    /**
     * 进房请求 （进房成功收到的消息）
     * @param data 
     */
    private EnterRoomResp(data: RoomMsg.ready_room_resp): void {
        GameFacade.Instance.SceneMng.EnterHuntScene();
    }

    /**
     * 
     * 播放按钮点击声音
     */
    private onPlaySound(str: string): void {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, str);
    }

    /**
     * 设置
     */
    private OnSetBtnClick(): void {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.SettingPanel);
    }

    /**
     * 帮助
     */
    private OnHelpBtnClick(): void {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.HelpPanel);
    }
    /**
     * 报表
     */
    private OnExcelBtnClick(): void {
        if (GameFacade.Instance.GameMng.isPlay) {
            GameFacade.Instance.TipMng.createTip(CommonConstant._PromptContent.DemoAccTip, TipType.ONECLOSE);
        }
        else {
            window.open(GameFacade.Instance.GameMng.reportUrl);
        }
    }
    /**
     * 排行榜
     */
    private OnRankBtnClick(): void {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.RankingPanel);
    }

    /**
     * jp
     */
    private onJpBtnClick(): void {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.JpPanel);
    }

    /**
     * 免转
     */
    private OnWalletBtnClick(): void {
        GameFacade.Instance.WalletMng.mainWalletReq();
    }

    /**
     * 返利活动
     */
    private onRebateActBtnClick(): void {
        AddWebpage.createIframe();
    }

    /**
     * 个人信息
     */
    private onPersonalInfoBtnClick(): void {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PersonalInfoPanel);
    }

    /**
     * 等级奖金
     */
    private onLvBonusBtnClick(): void {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.LevelBonusPanel);
    }
    /**
     * 成长基金
     */
    private onGrowthFundBtnClick(): void {
        GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.GrowthFundPanel);
    }
    /**
     * 返回主页面
     * 返回逻辑参考  http://wiki.blizzmi.local/pages/viewpage.action?pageId=28213648
     */
    private onBackMainPage(): void {
        if (utils.CommonUtils.isApp()) {
            window.close();
        }
        else {
            if (GameFacade.Instance.GameMng.lobbyUrl != null && GameFacade.Instance.GameMng.lobbyUrl != "") {
                utils.CommonUtils.log(" ----- 主界面返回 GameFacade.Instance.GameMng.lobbyUrl = ", GameFacade.Instance.GameMng.lobbyUrl);
                window.open(GameFacade.Instance.GameMng.lobbyUrl);
            }
            else {
                window.open("about:blank", "_self").close(); //关闭网页
            }
        }
        // if(Laya.Browser.onPC){
        //   AddWebpage.addBackMainPage();
        //   }
        //   else{
        //    AddWebpage.closePage();
        //   }

    }
    /**
     * 点击右按钮
     */
    private OnRightBtnClick(): void {
        if (this.m_bMoving) return;
        this.m_bMoving = true;
        var index = this.m_curIslandIndex;
        if (++this.m_curIslandIndex >= CommonConstant.C_IslandAmount) {
            this.m_curIslandIndex = 0;
        }
        this.m_islandArr[this.m_curIslandIndex].transform.position = new Laya.Vector3(-CommonConstant.C_IslandMoveX, 0, 0);
        Laya.Tween.to(this.m_islandArr[this.m_curIslandIndex].transform, { localPositionX: 0 }, CommonConstant.C_IslandMoveTime, Laya.Ease.sineOut, Laya.Handler.create(this, this.ShowEffect));
        this.m_islandArr[this.m_curIslandIndex].active = true;
        Laya.Tween.to(this.m_islandArr[index].transform, { localPositionX: CommonConstant.C_IslandMoveX }, CommonConstant.C_IslandMoveTime, Laya.Ease.sineOut, null);
        this.m_islandInfoPanel.visible = false;
        this.ChangePanelInfo(this.m_curIslandIndex);

    }

    /**
     * 点击左按钮
     */
    private OnLeftBtnClick() {
        if (this.m_bMoving) return;
        this.m_bMoving = true;
        var index = this.m_curIslandIndex;
        if (--this.m_curIslandIndex <= -1) {
            this.m_curIslandIndex = CommonConstant.C_IslandAmount - 1;
        }
        this.m_islandArr[this.m_curIslandIndex].transform.position = new Laya.Vector3(CommonConstant.C_IslandMoveX, 0, 0);
        Laya.Tween.to(this.m_islandArr[this.m_curIslandIndex].transform, { localPositionX: 0 }, CommonConstant.C_IslandMoveTime, Laya.Ease.sineOut, Laya.Handler.create(this, this.ShowEffect));
        this.m_islandArr[this.m_curIslandIndex].active = true;
        Laya.Tween.to(this.m_islandArr[index].transform, { localPositionX: -CommonConstant.C_IslandMoveX }, CommonConstant.C_IslandMoveTime, Laya.Ease.sineOut, null);
        this.m_islandInfoPanel.visible = false;
        this.ChangePanelInfo(this.m_curIslandIndex);

    }

    /**
     * 进入游戏
     */
    private OnGameBtnClick() {
        if (this.m_bHallPanelFinished) {
            NetRoom.Instance.EnterRoomReq(this.m_curIslandIndex + 1, RoleMsg.msg_relogin_code.RELOGIN_NORMAL);
        }
    }

    /**
     * 快速游戏
     */
    private OnQuickGameClick() {
        if (this.m_bHallPanelFinished) {
            NetRoom.Instance.EnterRoomReq(1, RoleMsg.msg_relogin_code.RELOGIN_NORMAL);
        }
    }

    public ExitHallScene() {
        //卸载3d资源缓存
        Laya.stage.off(Laya.Event.RESIZE, this, this.onStageChange);
        GameFacade.Instance.SoundMng.stopAll();
        this.m_scene3D.destroy(true);

        GameFacade.Instance.WalletMng.CloseWalltPanel();

        //// fairygui.UIPackage.removePackage(CommonConstant._fuiHallUIPath.Package);
        ////  fairygui.UIPackage.removePackage(CommonConstant._fuiHallPath.Package);

        //GameFacade.Instance.ResourceMng.ReleaseAll3D(CommonConstant._hallScenePath_json);
        Laya.loader.clearRes(CommonConstant._hallPath_ls);// console.log("ExitHallScene clearRes = ", Laya.loader.getRes(CommonConstant._hallPath_ls));
        GameFacade.Instance.ResourceMng.ReleaseFuiResByGroupName(CommonConstant._groupName_fuiRes);
        this.m_islandArr = [];
        Laya.timer.clear(this, this.timeShow);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.LOGINRESROLEINFO, this, this.InitRoleInfo);
        GameFacade.Instance.EventMng.remove(GameEvent.GAME_RECONNECT, this, this.Reconnect);
        GameFacade.Instance.EventMng.remove(EventNetResponse.EnterRoomResp, this, this.EnterRoomResp);
        GameFacade.Instance.EventMng.remove(EventNetResponse.SyncChipsResp, this, this.syncChip);
        GameFacade.Instance.EventMng.remove(EventNetResponse.MqSyncChipsResp, this, this.mqSyncChip);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.LVINFORESP, this, this.lvInfo);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.GROWTHFUNDSTATERESP, this, this.actEndTime);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.SWITCHRESP, this, this.onSwitch);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.LVAWARDRESP, this, this.synLvNew);
    }

    /**
     * 岛屿面板信息
     * @param index 
     */
    private ChangePanelInfo(index: number) {
        var titleImg = this.m_islandInfoPanel.getChild("nameLoader").asLoader;
        var limitImg = this.m_islandInfoPanel.getChild("bulletLoader").asLoader;
        var rateLoader = this.m_islandInfoPanel.getChild("rateLoader").asLoader;
        var rateBtn = this.m_islandInfoPanel.getChild("RateBtn").asButton;

        titleImg.url = CommonConstant._prelandInfoPath + CommonConstant._islandInfoArr[index].title;
        limitImg.url = CommonConstant._prelandInfoPath + CommonConstant._islandInfoArr[index].limit;
        rateLoader.url = CommonConstant._prelandInfoPath + CommonConstant._islandInfoArr[index].rate;
    }

    /**
     * 岛屿移动效果
     */
    private ShowEffect() {
        this.onPlaySound(Sound.soundKeyArr.rateWindow);
        this.m_bMoving = false;
        this.m_islandInfoPanel.visible = false;
        this.m_islandInfoPanel.visible = true;
    }



}