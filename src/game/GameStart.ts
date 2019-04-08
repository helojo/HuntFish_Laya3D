import GameFacade from "../GameFacade";
import GameEvent from "../constant/GameEvent";
import { utils } from "../utils/CommonUtil";
import EnumData from "../Enum/EnumData";
import CommonConstant from "../constant/CommonConstant";
import LoadingPanel from "./Panel/LoadingPanel";
import GameManger from "../manager/GameManger";
export default class GameStart {
    private m_scene3D: Laya.Scene3D;
    constructor() {
        GameFacade.Instance.Init();
        this.LoadLoadingRes();
    }

    /**
     * 预先加载 loading 界面资源
     */
    private LoadLoadingRes() {
        let self = this;
        Laya.loader.load(
            [{ url: CommonConstant._fuiLoadingPath.image, type: Laya.Loader.IMAGE },
            { url: CommonConstant._fuiLoadingPath.fui, type: Laya.Loader.BUFFER },
            { url: CommonConstant._loadingBgPath, type: Laya.Loader.IMAGE },
            { url: CommonConstant._fuiHelpPath.image, type: Laya.Loader.IMAGE },
            { url: CommonConstant._fuiHelpPath.fui, type: Laya.Loader.BUFFER },
            { url: CommonConstant._fuiHallPath.image, type: Laya.Loader.IMAGE },
            { url: CommonConstant._fuiHallPath.fui, type: Laya.Loader.BUFFER },
            { url: CommonConstant._fuiCommonUIPath.image, type: Laya.Loader.IMAGE },
            { url: CommonConstant._fuiCommonUIPath.fui, type: Laya.Loader.BUFFER }],
            Laya.Handler.create(this, () => {
                fairygui.UIPackage.addPackage(CommonConstant._fuiLoadingPath.Package);
                fairygui.UIPackage.addPackage(CommonConstant._fuiHelpPath.Package);
                fairygui.UIPackage.addPackage(CommonConstant._fuiHallPath.Package);
                fairygui.UIPackage.addPackage(CommonConstant._fuiCommonUIPath.Package);
                GameFacade.Instance.SceneMng.EnterHallScene(self.GameEnter.bind(self));
            }));
    }

    /**
     * 连接服务器
     */
    private GameEnter() {
        window["g_RemoveSplash"]();
        this.registEvent();
        this.startConnect();
    }


    private registEvent(): void {
        GameFacade.Instance.SocketMng.AddEvent();
    }

    private startConnect(): void {

        utils.CommonUtils.log("startConnect");
        let GameMng = GameFacade.Instance.GameMng;
        GameFacade.Instance.SocketMng.connenct(GameMng.serverIp, GameMng.serverPort, EnumData.EnumSocketType.GAME, GameMng.token);
    }
}