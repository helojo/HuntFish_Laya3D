import GComponent = fairygui.GComponent;
import GSlider = fairygui.GSlider;
import GameFacade from "../../GameFacade";
import Sound from "../../constant/SoundNameConstant";
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import CommonConstant from "../../constant/CommonConstant";
import ResourceManger from "../../manager/ResourceManger";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";

export default class Setting extends BasePanel {
    private musicSli: GSlider;
    private soundSli: GSlider;

    public constructor() {
        super();
        if (GameFacade.Instance.OthMng.isHaveSettingPanel) return;
        else GameFacade.Instance.OthMng.isHaveSettingPanel = true;
        GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiSettingPath.image, CommonConstant._fuiSettingPath.fui, this, this.onLoadSetting);
        GameFacade.Instance.SceneMng.bProhibitWalletBtn = true;
    }

    /**
     * 加载设置
     */
    private onLoadSetting(): void {
        this.m_fui = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiSettingPath.Package, "Setting", "SettingPanel");
        var closeBtn: fairygui.GButton = this.m_fui.getChild("close").asButton;
        closeBtn.onClick(this, this.onClose);
        this.musicSli = this.m_fui.getChild("musicSli").asSlider;
        this.soundSli = this.m_fui.getChild("soundSli").asSlider;
        this.musicSli.value = GameFacade.Instance.SoundMng.getMusicVolume();
        this.soundSli.value = GameFacade.Instance.SoundMng.getSoundVolume();
        this.musicSli.on(fairygui.Events.STATE_CHANGED, this, this.onMusicChange);
        this.soundSli.on(fairygui.Events.STATE_CHANGED, this, this.onSoundChange);

    }

    /**
     * 
     * @param targentCom 关闭目标
     */
    private onClose(): void {
        GameFacade.Instance.SceneMng.bProhibitWalletBtn = false;
        GameFacade.Instance.OthMng.isHaveSettingPanel = false;
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.onClose);
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.SettingPanel);
    }

    /**
     * 改变音乐滑动条
     */
    private onMusicChange() {
        GameFacade.Instance.SoundMng.setMusicVolume(this.musicSli.value);
    }

    /**
     * 改变音效滑动条
     */
    private onSoundChange() {
        GameFacade.Instance.SoundMng.setSoundVolume(this.soundSli.value);
    }
}