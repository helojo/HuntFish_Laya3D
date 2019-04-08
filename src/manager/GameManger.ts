/**
* 玩家数据
*/

import GameFacade from "./../GameFacade";
import BaseManager from "./BaseManager";
import { utils } from "../utils/CommonUtil";
import BatteryController from "../controller/BatteryController";
import NetRoom from "../net/ProtoHander/NetRoom";
import CommonConstant from "../constant/CommonConstant";

export default class GameManger extends BaseManager {

	private static _instance: GameManger;
	public secret: string;

	public lang: string = "zh-cn";  //多语言 	(暂时定义 无用)	

	public game_id: number = 5006;
	public isShowTip: boolean = true;
	public bReconnect: boolean = false;

	public serverIp: string;
	public lobbyUrl: string;
	public serverPort: number = 50062;
	public sip: Array<string> = null;
	public return: string;

	/** 弱网情况下从房间返回大厅，则记录的房间的值*/
	public userAccount: string = "null";
	public userChips: number = 0;

	/** 账号登录的token*/
	public token: string = "123";
	public historyUrl: string = "";
	public myVersion: string = "";
	public client: string = "";  //客户端设备
	public isLoacalDev: boolean = false; //是否本地调试
	public reportUrl: string = null;
	public actUrl: string = null;
	public playType: string = "2"; //正式玩1  试玩2
	public isPlay: boolean = true;//是否是试玩
	public sheet: number; //1或者null显示  0隐藏
	Init(): void {
		this.sip = JSON.parse(utils.CommonUtils.decode("sip", "value"));
		this.serverIp = utils.CommonUtils.decode("serverIp", "value");
		//this.lobbyUrl = utils.CommonUtils.decode("lobbyUrl", "value");
		this.serverPort = utils.CommonUtils.decode("serverPort", "value");
		this.token = utils.CommonUtils.decode("token", "value");
		//this.historyUrl = utils.CommonUtils.decode("historyUrl", "value");
		this.myVersion = utils.CommonUtils.decode("myVersion", "value");
		this.client = utils.CommonUtils.decode("client", "value");
		this.return = utils.CommonUtils.decode("return", "value");
		this.sheet = utils.CommonUtils.decode("sheet", "value");

		this.playType = utils.CommonUtils.getValue("play_type");
		this.isPlay = this.playType == "2" ? true : false;

		this.reportUrl = utils.CommonUtils.getValue("gameWebLog");
		this.actUrl = utils.CommonUtils.getValue("actUrl");
		this.lobbyUrl = utils.CommonUtils.getValue("lobbyUrl");
		this.historyUrl = utils.CommonUtils.getValue("historyUrl");
	}

	/**
	  * 获取运行设备
	  * 1:PC，2:IOS横，3:IOS竖，4:安卓横，5:安卓竖，6:其它横，7:其它
	  */
	public getDeviceType(): number {
		var isHorizontal: boolean = Laya.Browser.clientWidth > Laya.Browser.clientHeight;
		var media: number = 1;

		if (Laya.Browser.onPC) {
			media = 1;
		}
		else if (Laya.Browser.onIOS) {
			media = isHorizontal ? 2 : 3;
		}
		else if (Laya.Browser.onAndroid) //onAndriod 
		{
			media = isHorizontal ? 4 : 5;
		}
		else {
			media = isHorizontal ? 6 : 7;
		}

		return media;
	}

	public seeLog() {
		utils.CommonUtils.log(" ");
		utils.CommonUtils.log("-----------------------------log结果------------------------------");

		for (let key in BatteryController.Instance.m_uselessBulletIdDict) {
			utils.CommonUtils.log(" 无用子弹 bulletId = ", BatteryController.Instance.m_uselessBulletIdDict[key].bulletid.toString());
		}
		for (let key in BatteryController.Instance.m_totalBulletIdDict) {
			utils.CommonUtils.log(" 异常子弹 bulletId = ", BatteryController.Instance.m_totalBulletIdDict[key].bulletid.toString());
		}
		for (let key in BatteryController.Instance.m_reqBulletIdDict) {
			utils.CommonUtils.log(" 请求但未收到回复的子弹 bulletId = ", BatteryController.Instance.m_reqBulletIdDict[key].bulletid.toString());
		}

		utils.CommonUtils.log("shootBulletReq = ", CommonConstant._huntSceneTestArry.shootBulletReq);
		utils.CommonUtils.log("shootBulletResp = ", CommonConstant._huntSceneTestArry.shootBulletResp);
		utils.CommonUtils.log("BulletPassResp = ", CommonConstant._huntSceneTestArry.BulletPassResp);
		utils.CommonUtils.log("ShootErrorResp = ", CommonConstant._huntSceneTestArry.ShootErrorResp);
		utils.CommonUtils.log("-----------------------------");
		utils.CommonUtils.log("uselessBulletReq = ", CommonConstant._huntSceneTestArry.uselessBulletReq);
		utils.CommonUtils.log("uselessBulletResp = ", CommonConstant._huntSceneTestArry.uselessBulletResp);
		utils.CommonUtils.log("-----------------------------");
		utils.CommonUtils.log("hitFishReq = ", CommonConstant._huntSceneTestArry.hitFishReq);
		utils.CommonUtils.log("hitFishResp = ", CommonConstant._huntSceneTestArry.hitFishResp);
		utils.CommonUtils.log("fishDeadResp = ", CommonConstant._huntSceneTestArry.fishDeadResp);
	}

	public getFlyingBulletChips(): number {
		let chips: number = 0;
		for (let key in BatteryController.Instance.m_totalBulletIdDict) {
			chips += BatteryController.Instance.m_totalBulletIdDict[key].multi * NetRoom.Instance._curRoomInfo.ante;
		}
		return chips;
	}
}