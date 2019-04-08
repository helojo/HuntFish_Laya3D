
import SoundManager = Laya.SoundManager;
import Handler = Laya.Handler;
import Sound from "../constant/SoundNameConstant";
import GameConfig from "../GameConfig";
import { utils } from "../utils/CommonUtil";

export class SoundsManager {

    private _soundConfig: JSON;//鱼的声音配置
    private _musicChannel: Laya.SoundChannel = null;
    private _soundChannelList: any;
    private _soundVolume: number = 100;
    private _musicVolume: number = 100;
    private _isBlur: boolean = false;
    private _musicBgName: string = null;
    constructor() {
        let self = this;
        this._soundChannelList = {};
        var url: string = "configfile/soundConfig.json";
        Laya.loader.load(url, Handler.create(this, function () {
            self._soundConfig = Laya.loader.getRes(url);
        }));
        // SoundManager.autoStopMusic = true;

        // //Laya.Browser.onIPhone||
        // if (Laya.Browser.onIOS || Laya.Browser.onIPhone || Laya.Browser.onIPad) {
        //     var musicButton: Laya.Sprite = new Laya.Sprite();
        //     musicButton.x = 0;
        //     musicButton.y = 0;
        //     musicButton.size(GameConfig.width, GameConfig.height);
        //     musicButton.alpha = 0;
        //     Laya.stage.addChild(musicButton);
        //     musicButton.on(Laya.Event.CLICK, this, () => { this.onClickIOS(musicButton) });
        // }
        Laya.stage.on("blur", this, this._stageOnBlur);
        Laya.stage.on("focus", this, this._stageOnFocus);
        Laya.stage.on("visibilitychange", this, this._visibilityChange);
    }
    /**
     * 在3D场景中 ios 适配声音 用于自带的背景声音
     * @param obj 
     */
    private onClickIOS(obj: Laya.Sprite): void {
        utils.CommonUtils.log("ios");
        Laya.stage.removeChild(obj);
        obj.onDisable();
        this.playMusic(Sound.soundHeadArr.bgSoundHead + Sound.soundBgArr.hallBgMusic);
    }

    /**
     * 声音配置
     */
    public getSoundCofig(): JSON {

        return this._soundConfig;
    }
    /**
     * 
     * @param v 设置背景音乐
     */
    public setMusicVolume(v: number): void {

        this._musicVolume = v;
        this._musicChannel.volume = this._musicVolume / 100;
    }

    /**
     * 
     * @param v 设置音效
     */
    public setSoundVolume(v: number): void {
        this._soundVolume = v;
        this.updateSoundVolume(v / 100);
    }

    /**
     * 获得背景音乐的声音大小
     */
    public getMusicVolume(): number {
        return this._musicVolume;
    }

    /**
     * 获得音效的声音大小
     */
    public getSoundVolume(): number {
        return this._soundVolume;
    }

    /**
     * 
     * @param str 背景音乐名称
     */
    public playMusic(str: string): void {
        if (this._musicChannel) {
            this._musicChannel.stop();
            Laya.SoundManager.destroySound(this._musicChannel.url);
        }
        this._musicBgName = str;
        this._musicChannel = SoundManager.playSound("sounds/SceneSound/" + str + ".mp3", 0);
        if (this._musicChannel == null) return;
        this._musicChannel.volume = this._musicVolume / 100;

    }

    /**
     * 
     * @param roomType 房间类型
     */
    public playMusicRoom(roomType: CommonMsg.room_type): void {
        switch (roomType) {
            case 1:
                this.playMusic(Sound.soundBgArr.playBgMusic1);
                break;
            case 2:
                this.playMusic(Sound.soundBgArr.playBgMusic2);
                break;
            case 3:
                this.playMusic(Sound.soundBgArr.playBgMusic3);
                break;
            default:
                break;
        }
    }


    /**
     * 
     * @param head 是按钮还是鱼
     * @param str 对应的音效
     */
    public playSound(head: string, str: string): void {
        var soundName: string = head + str;
        if (this._isBlur || this._soundVolume == 0) return;
        var channel: Laya.SoundChannel;
        channel = SoundManager.playSound(soundName + ".wav", 1, new Handler(this, () => { this.onComplete(head + str) }));
        if (channel) {
            channel.volume = this._soundVolume / 100;
        }
        else {
            return;
        }
        if (!this._soundChannelList[soundName])
            this._soundChannelList[soundName] = new Array<Laya.SoundChannel>();
        this._soundChannelList[soundName].push(channel);
    }

    /**
     * 
     * @param type 鱼对应的声音列表
     */
    public fishTypeToSoundNum(type: number): string {
        //if (type == 32) { type = 27 };
        //if (type > 26 && type < 32) { type = type % 26 };
        return this._soundConfig[type - 1]["soundid"];
    }

    /**
     * 
     * @param str 播放完成的那个音效
     */
    private onComplete(str: string): void {
        Laya.SoundManager.destroySound(str);
    }

    /**
     * 停止音乐
     */
    public stopMusic(): void {
        if (this._musicChannel) {
            this._musicChannel.stop();
            this._musicChannel.offAll();
            this._musicChannel = null;
        }
    }

    /**
     * 停止音效
     */
    public stopSound(): void {
        for (const key in this._soundChannelList)
            this.stopSoundName(key);
    }

    /**
      * 更新声音音量
      * @param v 
      */
    private updateSoundVolume(v: number): void {
        for (const key in this._soundChannelList) {
            if (this._soundChannelList.hasOwnProperty(key)) {
                var array: Array<laya.media.SoundChannel> = this._soundChannelList[key];
                for (let i = 0; i < array.length; i++) {
                    if (array[i])
                        array[i].volume = v;
                }
            }
        }
    }

    /**
     * 根据声音名字关闭声音
     * @param soundName 
     */
    public stopSoundName(soundName: string): void {
        if (!soundName) return;
        if (this._soundChannelList[soundName]) {
            var array = this._soundChannelList[soundName];
            for (let i = 0; i < array.length; i++) {
                if (array[i]) {
                    array[i].stop();
                    array[i].offAll();
                    array[i] = null;
                }
            }
            this._soundChannelList[soundName].length = 0;
        }
        Laya.SoundManager.destroySound(soundName);
    }

    /**
     * 停止所有的声音
     */
    public stopAll(): void {
        SoundManager.stopAll()
    }

    /**
     * 暂停背景音乐
     */
    public pauseMusic(): void {
        this._musicChannel && this._musicChannel.pause();
    }

    /**
     * 继续播放背景音乐
     */
    public resumeMusic(): void {
        if (this._musicChannel)
            this._musicChannel.resume();
        else
            this.playMusic(this._musicBgName);
        // this._musicChannel && this._musicChannel.resume();
    }
    /**
     * 前后台切换
     */
    private _visibilityChange() {
        if (Laya.stage.isVisibility) {
            this._stageOnFocus();
        } else {
            this._stageOnBlur();
        }
    }

    /**
     * 失去焦点
     */
    private _stageOnBlur() {
        this._isBlur = true;
        this.pauseMusic();
        this.stopSound();
    }

    /**
     * 获取焦点
     */
    private _stageOnFocus() {
        this._isBlur = false;
        this.resumeMusic();
    }
}