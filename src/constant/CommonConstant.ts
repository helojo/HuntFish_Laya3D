import GameConfig from "../GameConfig";


export default class CommonConstant {
	//#region u3d资源路径

	/** 捕猎场景路劲*/
	static _huntScenePath: string = "unityRes/HuntScene/Conventional/HuntScene.ls";
	static _gunScenePath: string = "unityRes/LayaScene_GunScene/Conventional/GunScene.ls";
	/** 捕猎场景特效名称集合*/
	static _huntSceneEffectArray = {
		// FishNetPrefab1:"FishNetPrefab1",
		// FishNetPrefab2:"FishNetPrefab2",
		// FishNetPrefab3:"FishNetPrefab3",
		FishNetPrefab: "FishNetPrefab",
		GoldCoin: "GoldCoin", //
		Gold_Effect: "Gold_Effect",
		Half_screenBomb_2: "Half-screenBomb_2",
		Full_screenBomb_2: "Full_screenBomb_2",
		HalfScreenDrawReward: "HalfScreenDrawReward02",
		ChangeCannonEffect: "ChangeCannon_effect",
		LockButtonEffect: "LockButtonEffect",
		BombFishExpEffect: "FishExp_Effect_2",

	}

	static _huntSceneTestArry = {
		shootBulletReq: 0,
		shootBulletResp: 0,
		BulletPassResp: 0,
		ShootErrorResp: 0,

		uselessBulletReq: 0,
		uselessBulletResp: 0,

		hitFishReq: 0,
		hitFishResp: 0,

		fishDeadResp: 0,
	}

	/**大厅岛的资源 */
	static _hallPath_ls: string = "unityRes/LayaScene_hall/Conventional/hall.ls";
	/**预警模型 */
	static _warnPath_lh: string = "unityRes/LayaScene_WarnEffect/Conventional/WarnEffect.lh";


	//#endregion


	//#region UI面板资源路径
	/** fui资源组名字*/
	static _groupName_fuiRes: string = "groupName_fuiRes";


	static _mainPanelPath: string = "panel/MainPanel.scene";
	/** loading过场界面*/
	static _loadingPanelPath: string = "panel/LoadingPanel.scene";
	/** hall背景图*/
	static _hallBgPath: string = "LayaRes/game/rateBgTexture.png";
	static _loadingBgPath: string = "LayaRes/load/lading_bg 1.png";
	/**活动的关闭按钮 */
	static actCloseBtnPath: string = "LayaRes/game/button_gb.png";
	/** fui资源*/
	static _fuiHallUIPath = { fui: "fairyguiRes/fui/HallUI.fui", image: "fairyguiRes/fui/HallUI_atlas0.png", Package: "fairyguiRes/fui/HallUI" };
	static _fuiHallPath = { fui: "fairyguiRes/fui/Hall.fui", image: "fairyguiRes/fui/Hall_atlas0.png", Package: "fairyguiRes/fui/Hall" };
	static _fuiFreeTranWalletPath = { fui: "fairyguiRes/fui/FreeTranWallet.fui", image: "fairyguiRes/fui/FreeTranWallet_atlas0.png", Package: "fairyguiRes/fui/FreeTranWallet" };
	static _fuiCommonUIPath = { fui: "fairyguiRes/fui/CommonUI.fui", image: "fairyguiRes/fui/CommonUI_atlas0.png", Package: "fairyguiRes/fui/CommonUI" };
	static _fuiHelpPath = { fui: "fairyguiRes/fui/Help.fui", image: "fairyguiRes/fui/Help_atlas0.png", Package: "fairyguiRes/fui/Help" };
	static _fuiHunterUIPath = { fui: "fairyguiRes/fui/HunterUI.fui", image: "fairyguiRes/fui/HunterUI_atlas0.png", Package: "fairyguiRes/fui/HunterUI" };
	static _fuiJpPath = { fui: "fairyguiRes/fui/Jp.fui", image: "fairyguiRes/fui/Jp_atlas0.png", Package: "fairyguiRes/fui/Jp" };
	static _fuiLoadingPath = { fui: "fairyguiRes/fui/loading.fui", image: "fairyguiRes/fui/loading_atlas0.png", Package: "fairyguiRes/fui/loading" };
	static _fuiRankingPath = { fui: "fairyguiRes/fui/Ranking.fui", image: "fairyguiRes/fui/Ranking_atlas0.png", Package: "fairyguiRes/fui/Ranking" };
	static _fuiSettingPath = { fui: "fairyguiRes/fui/Setting.fui", image: "fairyguiRes/fui/Setting_atlas0.png", Package: "fairyguiRes/fui/Setting" };
	static _fuiWinningPath = { fui: "fairyguiRes/fui/Winning.fui", image: "fairyguiRes/fui/Winning_atlas0.png", Package: "fairyguiRes/fui/Winning" };
	static _fuiGuidePath = { fui: "fairyguiRes/fui/Guide.fui", image: "fairyguiRes/fui/Guide_atlas0.png", Package: "fairyguiRes/fui/Guide" };
	static _fuiWarnPath = { fui: "fairyguiRes/fui/Warning.fui", image: "fairyguiRes/fui/Warning_atlas0.png", Package: "fairyguiRes/fui/Warning" };
	static _fuiMarqueePath = { fui: "fairyguiRes/fui/Marquee.fui", image: "fairyguiRes/fui/Marquee_atlas0.png", Package: "fairyguiRes/fui/Marquee" };
	static _fuiTipPath = { fui: "fairyguiRes/fui/Public.fui", image: "fairyguiRes/fui/Public_atlas0.png", Package: "fairyguiRes/fui/Public" };
	static _fuiPersonalInfoPath = { fui: "fairyguiRes/fui/PersonalInfo.fui", image: "fairyguiRes/fui/PersonalInfo_atlas0.png", Package: "fairyguiRes/fui/PersonalInfo" };
	static _fuiFundTipPath = { fui: "fairyguiRes/fui/FundTip.fui", image: "fairyguiRes/fui/FundTip_atlas0.png", Package: "fairyguiRes/fui/FundTip" };
	static _fuiGrowthFundPath = { fui: "fairyguiRes/fui/GrowthFund.fui", image: "fairyguiRes/fui/GrowthFund_atlas0.png", Package: "fairyguiRes/fui/GrowthFund" };
	static _fuiLevelBonusPath = { fui: "fairyguiRes/fui/LevelBonus.fui", image: "fairyguiRes/fui/LevelBonus_atlas0.png", Package: "fairyguiRes/fui/LevelBonus" };
	static _fuiLvDetailsPath = { fui: "fairyguiRes/fui/LvDetails.fui", image: "fairyguiRes/fui/LvDetails_atlas0.png", Package: "fairyguiRes/fui/LvDetails" };
	static _fuiLvRecordsPath = { fui: "fairyguiRes/fui/LvRecords.fui", image: "fairyguiRes/fui/LvRecords_atlas0.png", Package: "fairyguiRes/fui/LvRecords" };
	static _fuiUpgradePath1 = { fui: "fairyguiRes/fui/upgradePanel.fui", image: "fairyguiRes/fui/upgradePanel_atlas0.png", Package: "fairyguiRes/fui/upgradePanel" };
	static _fuiUpgradePath2 = { fui: "fairyguiRes/fui/upgradePanel.fui", image: "fairyguiRes/fui/upgradePanel_atlas0_1.png", Package: "fairyguiRes/fui/upgradePanel" };
	/** 大厅小岛面板上的资源*/
	static _prelandInfoPath = "ui://HallUI/";
	static _islandInfoArr = [{ title: "name1", limit: "bullet1", rate: "rate1" },
	{ title: "name2", limit: "bullet2", rate: "rate2" },
	{ title: "name3", limit: "bullet3", rate: "rate3" }];

	/** 捕猎场景的laya资源*/
	static _hunterBgPath1: string = "LayaRes/game/BG01.png";
	static _hunterBgPath2: string = "LayaRes/game/BG02.png";
	static _baseBgPath = "LayaRes/game/paotai.png";
	static _lockImgPath = "LayaRes/game/lock.png"; //锁定按钮
	static _autoImgPath = "LayaRes/game/auto.png"; //自动攻击按钮
	static _lockImgMaskPath = "LayaRes/game/lock_down.png"; //锁定按钮mask
	static _autoImgMaskPath = "LayaRes/game/auto_down.png"; //自动攻击按钮mask
	static _autoTextImgPath = "LayaRes/game/zidonggongji.png"; //自动攻击文字
	static _lockTextImgPath = "LayaRes/game/suodinggongji.png"; //锁定攻击文字
	static _cancleAutoTextImgPath = "LayaRes/game/quxiaozidong.png"; //取消自动攻击文字
	static _cancleLockTextImgPath = "LayaRes/game/quxiaosuoding.png"; //取消锁定攻击文字
	static _linePointPath = "LayaRes/game/point.png"; //锁定连线的点
	static _aimImgPath = "LayaRes/game/aim.png"; //鱼身上的锁定图标

	static _zhuanpanPath = "LayaRes/game/zhuanpan.png"; //转盘
	static _zhuanpanLightPath = "LayaRes/game/zhuanpan_guanquan.png"; //转盘光
	static _fish20Path = "LayaRes/game/20.png"; //蓝色鲨鱼
	static _fish23Path = "LayaRes/game/23.png"; //金色鲨鱼
	static _fish25Path = "LayaRes/game/25.png"; //美人鱼
	static _BombFlagPath = "LayaRes/game/BombFlag.png"; //炸弹鱼标志

	/** 炮台信息框*/
	static _infoFrame: string = "LayaRes/game/ing_4.png";
	static _infoLabelBg: string = "LayaRes/game/ing_5.png";
	static _infoLevelBg: string = "LayaRes/game/djbs.png";
	static _infoCoin: string = "LayaRes/game/jp_jb.png";
	static _infoWallent: string = "LayaRes/game/wallent.png";  //免转按钮


	/** 公共资源*/
	static _preCommonPath = "ui://CommonUI/";

	/** font字体*/
	static _awardFont = "LayaRes/Font/jl_0-9.png"; //大转盘金币字体
	static _bounsFontSelf = "LayaRes/Font/jl_0-9.png"; //自己打死鱼时的金币字体
	static _bounsFontOther = "LayaRes/Font/yl_0-9.png"; //别人打死鱼时的金币字体
	static _levelFont = "LayaRes/Font/djbs_0-9.png"; //炮台信息 等级数字
	static _coinFont = "LayaRes/Font/3djnh_jb.png"; //炮台信息 金币数字

	//#endregion


	//#region 游戏常量
	static C_IslandAmount: number = 3;
	static C_IslandMoveX: number = 20;
	static C_IslandMoveTime: number = 1500;
	/** layer层列表*/
	static Layer = {
		Fish: 8
		, Wall: 9
	};

	/** 方向单位向量*/
	static DirectionVector = {
		Up: new Laya.Vector3(0, 1, 0),
		Down: new Laya.Vector3(0, -1, 0),
		Left: new Laya.Vector3(1, 0, 0),
		Right: new Laya.Vector3(-1, 0, 0),
	};

	/** 鱼的倍率*/
	static fishRate = {
		Fifty: 50
		, Sixty: 60
		, Eighty: 80
	};
	/** 半屏转盘的显示位置*/
	static HalfAwardPos = [
		new Laya.Vector3(370, 468, 0),
		new Laya.Vector3(898, 468, 0),
		new Laya.Vector3(370, 278, 0),
		new Laya.Vector3(898, 278, 0),
	];

	static Delta = 60;
	static DispatchUselessMsgDelta = 100; //无效子弹派发间隔
	static SendUselessMsgDelta = 200; //无效子弹派发间隔
	static ShootRate = 250;       		//炮台射击速度 间隔0.25s
	static ShootMaxNum = 20;          //锁定状态下 最多20个子弹
	/** 海盗船模型横向屏幕大小*/
	static OutWallOffset_ship = 300;    //
	/** 美人鱼模型横向屏幕大小*/
	static OutWallOffset_mermaid = 160;    //
	/** 鲨鱼模型横向屏幕大小*/
	static OutWallOffset_shark = 160;    //
	static LinePointWith = 32;
	static BounsFontOffY = 80; //收集金币，提示字体漂浮高度
	static BGwidth = 1283;
	static BGOffSetMax = 1280;


	//#endregion

	//#region 贴图资源路劲

	/** 贴图路劲集合*/
	static _TextureArray = {
		Gold: "jinbi.png",
		Silver: "yinbi.png",
	}

	public static _PromptContent = {
		StopAutoAttack: "您正在自动捕鱼是否停止?",
		Reconnect: "网络断开连接，是否重新连接游戏？",
		LowPay: "金币不足,请充值或到低倍场玩哦",
		HeightPay: "您的金钱超过本场限制,请到高倍场游戏",
		NeedRecharge: "金币不足,请充值后重试",
		Invalid: "下注筹码非法,请刷新游戏后重试",
		LoginOther: "异地登陆,请刷新游戏后重试",
		AccountError: "您的账号出现异常,请重新登录",
		TokeTimeOut: "会话已经过期，请重新登录",
		TokeError: "会话校验失败，请联系管理员",
		ForceKictout: "您的账号出现异常,请重新登录",
		LoginMuch: "登陆过于频繁,请稍后重试",
		SessionLong: "会话已经过期,请重新登录",
		SessionWrong: "会话校验失败,请重新登录",
		LoginFail: "账号登录失败,请联系管理员",
		LoginError: "账号错误,请联系管理员",
		BackHall: "您确定要返回大厅么？",
		BulletMax: "您当前子弹数量已达上限",
		CannotS: "需要消耗%s金币，无法召唤",
		JpReward: "该记录是JP奖金",
		EnterRoomFail: "进入房间失败，请重试",
		DemoAccTip: "试玩账号无报表数据，请登录游戏账号体验",
		ExitHuntScene: "您确定要返回大厅吗？",

	}

	public static DIRICTION = {
		VERTICAL: 1,
		HORIZONTAL: 2,
	}


	//#endregion
}

