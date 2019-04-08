module EnumData {

	/**
	 * socket连接类型
	 */
	export const enum EnumSocketType {
		GAME,
		USER_BEHAVIOR
	};

	export const enum EnumPanelType {
		HallPanel = 0,
		HuntPanel = 1,
		LoadingPanel = 2,
		PromptPanel = 3,
		Reconnectting = 4,
		SettingPanel = 5,
		HelpPanel = 6,
		RankingPanel = 7,
		GuidePanel = 8,
		AutoAttackPanel = 9,
		WalletPanel = 10,
		JpPanel = 11,
		PersonalInfoPanel = 12,
		FundTipPanel = 13,
		GrowthFundPanel = 14,
		LevelBonusPanel = 15,
		LvRecordsPanel = 16,
		UpgradePanel = 17,
		WinnerPanel = 18,
		MarqueePanel = 19,
		LvDetailPanel = 20,
	}

	export const enum EnumPromptType {
		StopAutoAttack,
		LoginOther,
		AccountError,
		ExitHuntScene,
		RefeshGame,
	}

	//射击模式
	export const enum ShootType {
		SHOOT_NORMAL = 0,           //普通模式
		SHOOT_AUTO = 1,             //自动模式
		SHOOT_LOCK = 2,            //锁定模式
		SHOOT_STOP = 3,              // 停止射击
	}

	/// <summary>鱼类型（子类型）</summary>
	export enum FishSubtype {

		Fish_1 = 1,
		Fish_2 = 2,
		Fish_3 = 3,
		Fish_4 = 4,
		Fish_5 = 5,
		Fish_6 = 6,
		Fish_7 = 7,
		Fish_8 = 8,
		Fish_9 = 9,
		Fish_10 = 10,
		Fish_11 = 11,
		Fish_12 = 12,
		Fish_13 = 13,
		Fish_14 = 14,
		Fish_15 = 15,
		Fish_16 = 16,
		Fish_17 = 17,

		Fish_18 = 18,
		Fish_19 = 19,
		Fish_20 = 20,

		Frozen_fish = 21,
		Fish_22 = 22,
		Golden_Shark = 23,
		Golden_Dragon = 24,
		/// <summary>美人鱼类型</summary>
		Mermaid = 25,
		/// <summary>海盗船类型</summary>
		Ship = 26,
		King_fishf1 = 27,
		King_fishf2 = 28,
		King_fishf3 = 29,
		King_fishf4 = 30,
		King_fishf5 = 31,
		Bomb_fish = 32,
		TanabataFestival_fish = 33,
	}

	/// <summary>鱼所属大类型</summary>
	export enum FishCategory {
		Normal_Fish = 1,
		World_Boss = 2,
		King_fish = 5,
		Bomb_fish = 6,
		Frozen_fish = 7,
	}

	/// <summary>鱼的状态枚举</summary>
	export enum ENUM_FISH_STATE {
		SWIMMING,//游动
		SHOW,   //展示动作
		PAUSE,  //暂停
		HITTED,//被击中
		DEATH,//死亡
	}

	export enum SCREEN_ZODER {

		BounsFont = 10,
		HuntPanelUI = 11,
		AwardPanel = 50,
	}

	//子弹的三种状态
	export enum ENUM_BULLET_STATE {
		UNLOCK, //无锁定
		LOCKING,//锁定攻击中
		LOCKED  //锁定的鱼已死亡
	}

	export enum ACTSTATUS {
		ACTSHOWSTARTBEFORE,//活动展示前
		ACTSHOWSTART_START,//活动展示开始到活动开始之间
		ACTSTART_END,//活动开始到活动结束之间
		ACTEND_SHOWEND,//活动结束到活动展示结束之间
		ACTSHOWENDAFTER,//活动结束之后
	}
}
export default EnumData