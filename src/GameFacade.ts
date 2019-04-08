
//游戏总管理类

import GameManger from "./manager/GameManger";
import EventManager from "./manager/EventManager";
import WalletManager from "./manager/WalletManager";
import SocketManager from "./manager/SocketManager";
import ResourceManger from "./manager/ResourceManger";
import HuntSceneManager from "./manager/HuntSceneManager";
import ProtoBuf from "./net/ProtoBuf";
import ConfigManager from "./manager/ConfigManager";
import SceneManager from "./manager/SceneManager";
import { SoundsManager } from "./manager/SoundsManager";
import TipManager from "./manager/TipManager";
import OtherManager from "./manager/OtherManager";

export default class GameFacade {
    private static _instance: GameFacade = null;

    private _gameMng: GameManger;
    // public AudioMng: manager.AudioManager;
    private _resourceMng: ResourceManger;
    private _socketMng: SocketManager;
    private _eventMng: EventManager;
    private _huntSceneManager: HuntSceneManager;
    private _configManager: ConfigManager;
    private _sceneManager: SceneManager;
    private _soundManager: SoundsManager;
    public _walletManager: WalletManager;
    public _tipManager: TipManager;
    public _otherManager: OtherManager;
    public get GameMng(): GameManger {
        if (null == this._gameMng)
            this._gameMng = new GameManger();
        return this._gameMng;
    }
    public get ResourceMng(): ResourceManger {
        if (null == this._resourceMng)
            this._resourceMng = new ResourceManger();
        return this._resourceMng;
    }
    public get SocketMng(): SocketManager {
        if (null == this._socketMng)
            this._socketMng = new SocketManager();
        return this._socketMng;
    }
    public get EventMng(): EventManager {
        if (null == this._eventMng)
            this._eventMng = new EventManager();
        return this._eventMng;
    }
    public get HuntSceneMng(): HuntSceneManager {
        if (null == this._huntSceneManager)
            this._huntSceneManager = new HuntSceneManager();
        return this._huntSceneManager;
    }
    public get ConfigMng(): ConfigManager {
        if (null == this._configManager)
            this._configManager = new ConfigManager();
        return this._configManager;
    }
    public get SceneMng(): SceneManager {
        if (null == this._sceneManager)
            this._sceneManager = new SceneManager();
        return this._sceneManager;
    }

    public get SoundMng(): SoundsManager {
        if (null == this._soundManager)
            this._soundManager = new SoundsManager();
        return this._soundManager;
    }

    public get WalletMng(): WalletManager {
        if (null == this._walletManager)
            this._walletManager = new WalletManager();
        return this._walletManager;
    }
    public get TipMng(): TipManager {
        if (null == this._tipManager)
            this._tipManager = new TipManager();
        return this._tipManager;
    }
    public get OthMng(): OtherManager {
        if (null == this._otherManager)
            this._otherManager = new OtherManager();
        return this._otherManager;
    }
    /**
     * 初始化所有的管理器类
     */
    Init(): void {
        this.GameMng.Init();
        this.ResourceMng.Init();
        this.SocketMng.Init();
        this.EventMng.Init();
        this.HuntSceneMng.Init();
        this.ConfigMng.Init();
        this.SceneMng.init();
        this.TipMng.Init();
        this.WalletMng.Init();
    }

    public static get Instance(): GameFacade {
        if (this._instance == null) {
            this._instance = new GameFacade();
        }
        return this._instance;
    }
}
