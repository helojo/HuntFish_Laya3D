import GameFacade from "../../GameFacade";
import GameEvent from "../../constant/GameEvent";
import { utils } from "../../utils/CommonUtil";
import EventConstantResponse from "../../constant/EventConstantResponse";
import { TipType } from "../../manager/TipManager";
import CommonConstant from "../../constant/CommonConstant";
import EnumData from "../../Enum/EnumData";
import PromptPanel from "../../game/Panel/PromptPanel";
import BatteryController from "../../controller/BatteryController";

export default class NetLogin {
    private static _instance: NetLogin;

    /**
     * 玩家登录信息(个人数据、房间配置、鱼的配置)
     */
    public _playerLoginInfo: LoginMsg.login_resp;
    /**是否是正式登陆 */
    public isOfficial: boolean;
    /**等级开关 */
    public isOnLvSw: boolean = false;

    /** 鱼的配置信息*/
    private _fishConfigDict: Laya.WeakObject;
    /**
     * 游戏token 用于重连
     */
    _JwtToken: string = "";
    /**
     * 登录模式，正常1 重连2
     */
    public _LoginModeCode: number = LoginMsg.login_mode_code.normal;

    public bLoginFaile: boolean = false;


    public bAutoTransfer: boolean = false;
    /**和服务器的时间偏移量 */
    public _timeOffset: number = 0;

    public nRaceId: number = 0;

    public _curRoomIndex: CommonMsg.room_type;

    Init(): void {
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.login_resp, LoginMsg.login_resp, Laya.Handler.create(this, this.LoginResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.time_resp, LoginMsg.time_resp, Laya.Handler.create(this, this.TimeResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.kictout_resp, LoginMsg.kictout_resp, Laya.Handler.create(this, this.KictoutResp, null, false));
        GameFacade.Instance.SocketMng.addHandleByCMD(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.switch_resp, LoginMsg.switch_resp,
            Laya.Handler.create(this, this.switchResp, null, false));
    }

    public static get Instance(): NetLogin {
        if (!this._instance) {
            this._instance = new NetLogin();
        }
        return this._instance;
    }
    /**
    * 玩家角色信息
    */
    public get RoleInfo(): RoleMsg.Irole_info {

        if (null == this._playerLoginInfo)
            return null;
        return this._playerLoginInfo.role;
    }
    /**
     * 房间基本信息列表
     */
    public get RoomInfoList(): LoginMsg.Ilogin_room_info[] {
        if (null == this._playerLoginInfo || null == this._playerLoginInfo.room_info)
            return null;
        return this._playerLoginInfo.room_info;
    }
    /**
     * 鱼配置列表
     */
    public FishInfoList(fishType: number): LoginMsg.Ifish_config {
        if (null == this._fishConfigDict || !this._fishConfigDict.has(fishType))
            return null;
        return this._fishConfigDict.get(fishType);
    }


    /**
     * 是否是自己的uid
     * @param uid 玩家uid
     */
    public IsSelfUid(uid: number | Long) {
        return this.RoleInfo.roleId.toString() == uid.toString();
    }
    //#region socket response

    /**
        * 处理登陆请求回复
        */
    private LoginResp(cmd: number, data: LoginMsg.login_resp): void {

        var reconnect = "正常连接";
        if (NetLogin.Instance._LoginModeCode == LoginMsg.login_mode_code.reconnect) {
            //if (data.reconnect && data.reconnect!=null) {
            GameFacade.Instance.EventMng.dispatch(GameEvent.GAME_RECONNECT);
            reconnect = "断线重连";
        }
        utils.CommonUtils.log("------------------ LoginResp " + reconnect + " data = ", data);

        switch (data.code) {
            case LoginMsg.login_code.SUCCESS:
                {
                    if (NetLogin.Instance._LoginModeCode == LoginMsg.login_mode_code.reconnect) {
                        GameFacade.Instance.EventMng.dispatch(GameEvent.GAME_RECONNECT);
                    }

                    GameFacade.Instance.GameMng.token = data.jwt_token;
                    this._playerLoginInfo = data;
                    this.isOfficial = data.role.is_wallet;
                    this._JwtToken = data.jwt_token;
                    this._fishConfigDict = new Laya.WeakObject();
                    GameFacade.Instance.WalletMng.addToValue = data.role.auto_wallet as number;
                    GameFacade.Instance.WalletMng.isAutoLocal = (data.role.auto_wallet as number) > 0 ? true : false;
                    data.fish_info.forEach(element => {
                        this._fishConfigDict.set(element.fish_type, element);
                    });
                    this.LoginTimeReq();

                    GameFacade.Instance.EventMng.dispatch(EventConstantResponse.LOGINRESROLEINFO, data.role);
                    break;
                }
            case LoginMsg.login_code.FAIL: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.LoginFail);
                break;
            }
            case LoginMsg.login_code.ERR_ACCOUNT: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.AccountError);
                break;
            }
            case LoginMsg.login_code.TOKEN_TIMEOUT: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.TokeTimeOut);
                break;
            }
            case LoginMsg.login_code.TOKEN_ERROR: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.TokeError);
                break;
            }
            case LoginMsg.login_code.OTHER_LOGIN: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.LoginOther);
                break;
            }
            case LoginMsg.login_code.FORCE_KICTOUT: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.LoginOther);
                break;
            }
            case LoginMsg.login_code.MAINTAIN_KICTOUT: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                if (data.err_msg && data.err_msg != "") {
                    promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, data.err_msg);
                }
                else {
                    promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.ForceKictout);
                }
                break;
            }
        }
    }
    /**
     * 服务端时间同步处理
     * @param data 返回结果
     */
    TimeResp(cmd: number, data: LoginMsg.time_resp): void {
        let curDate = new Date().getTime();
        this._timeOffset = Number(data.time) - curDate;
    }
    /**
     * 踢人同步处理
     * 这里不是服务端直接推送，是在onclose时接收服务端传递的参数reason进行解析，自己调用onmessage派发过来
     * @param data 返回结果
     */
    KictoutResp(cmd: number, data: LoginMsg.kictout_resp): void {
        utils.CommonUtils.log("--------KictoutResp-----");
        let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;

        switch (data.code) {
            case LoginMsg.login_code.FAIL: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.LoginFail);
                break;
            }
            case LoginMsg.login_code.ERR_ACCOUNT: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.AccountError);
                break;
            }
            case LoginMsg.login_code.TOKEN_TIMEOUT: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.TokeTimeOut);
                break;
            }
            case LoginMsg.login_code.TOKEN_ERROR: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.TokeError);
                break;
            }
            case LoginMsg.login_code.OTHER_LOGIN: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.LoginOther);
                break;
            }
            case LoginMsg.login_code.FORCE_KICTOUT: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.LoginOther);
                break;
            }
            case LoginMsg.login_code.MAINTAIN_KICTOUT: {
                let promptPanel: PromptPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.PromptPanel) as PromptPanel;
                if (data.err_msg && data.err_msg != "") {
                    promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, data.err_msg);
                }
                else {
                    promptPanel.InitData(EnumData.EnumPromptType.RefeshGame, CommonConstant._PromptContent.ForceKictout);
                }
                break;
            }
            default:
                break;
        }

        GameFacade.Instance.SocketMng.closeSocket();
        BatteryController.Instance.StopLockAttack();
        BatteryController.Instance.StopAutoAttack();
    }

    /**
     * 开关
     * @param cmd 
     * @param data 
     */
    private switchResp(cmd: number, data: LoginMsg.switch_resp): void {
        var info: Array<LoginMsg.switch_info> = data.switch;
        for (let i = 0; i < info.length; i++) {
            if (info[i].type == 2) {//等级开关
                this.isOnLvSw = info[i].is_on;
                GameFacade.Instance.EventMng.dispatch(EventConstantResponse.SWITCHRESP);
            }
            if (info[i].type == 3) {//幸运宝箱开关

            }

        }

    }
    // // /**
    // //  * 更新游戏token处理
    // //  * @param data 返回结果
    // //  */
    // // UpdateToeknpHandle(data: any): void {
    // //     let msg = MsgProtoBuff.update_token_resp.decode(data);
    // //     this.sRoomToken = msg.jwtToken;
    // //     Emitter.emit(MessageConst.login_UpdateTokenMess);
    // // }
    //#endregion socket response

    //#region  socket request

    /**
     * 申请登录
     * @param token 
     * @param account 账号
     * @param lang 语言
     */
    public LoginAccountReq(token: string, account: string, lang?: string): void {
        let req: LoginMsg.login_account_req = new LoginMsg.login_account_req();
        req.token = "123";//token;//用账号方式登录的时候，token固定死，保持与服务器一致
        //req.account = "abc3398";//account;
        req.account = "acc_abc5419" + utils.CommonUtils.random(1, 10000);//account;
        req.lang = lang;
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.login_account_req, req);
    }

    /**
     * 发送时间校准请求
    */
    LoginTimeReq(): void {
        let req: LoginMsg.time_req = new LoginMsg.time_req();
        GameFacade.Instance.SocketMng.sendGameData(NetCodeMsg.cmd.msg_login, LoginMsg.c_cmd.time_req, req);
    }
    //#endregion  socket request
}