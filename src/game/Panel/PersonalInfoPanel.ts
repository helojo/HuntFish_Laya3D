import GComponent = fairygui.GComponent;
import GSlider = fairygui.GSlider;
import GameFacade from "../../GameFacade";
import Sound from "../../constant/SoundNameConstant";
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import CommonConstant from "../../constant/CommonConstant";
import ResourceManger from "../../manager/ResourceManger";
import NetRoleInfo from "../../net/ProtoHander/NetRoleInfo";
import NetLogin from "../../net/ProtoHander/NetLogin";
import EventConstantResponse from "../../constant/EventConstantResponse";
import NetRoom from "../../net/ProtoHander/NetRoom";
import EventNetResponse from "../../net/ProtoHander/EventNetResponse";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";

export default class PersonalInfoPanel extends BasePanel {
    private introGroup: fairygui.GGroup;
    private introTs: fairygui.Transition;
    public constructor() {
        super();
        if (GameFacade.Instance.OthMng.isHavePersonInfoPanel) return;
        else GameFacade.Instance.OthMng.isHavePersonInfoPanel = true;
        GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiPersonalInfoPath.image, CommonConstant._fuiPersonalInfoPath.fui, this, this.onLoad);
        GameFacade.Instance.EventMng.add(EventConstantResponse.LVINFORESP, this, this.lvInfo);
        GameFacade.Instance.EventMng.add(EventNetResponse.SyncChipsResp, this, this.syncChip);
    }

    /**
     * 加载设置
     */
    private onLoad(): void {
        this.m_fui = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiPersonalInfoPath.Package, "PersonalInfo", "PersonalInfo");

        var playNameTex = this.m_fui.getChild("nameTex").asLabel;
        playNameTex.text = NetLogin.Instance.RoleInfo.nickname;
        var idTex = this.m_fui.getChild("idTex").asLabel;
        idTex.text = NetLogin.Instance.RoleInfo.account;
        this.introGroup = this.m_fui.getChild("introGr").asGroup;
        this.introGroup.visible = false;
        this.introTs = this.m_fui.getTransition("t0");
        var helpBtn: fairygui.GButton = this.m_fui.getChild("intrBtn").asButton;
        helpBtn.onClick(this, this.onHelp);
        var closeBtn: fairygui.GButton = this.m_fui.getChild("closeBtn").asButton;
        closeBtn.onClick(this, this.onClose);
        NetRoom.Instance.SyncChipsReq();
        NetRoleInfo.Instance.lvInfoReq();
    }

    /**
    * 获得同步金币
    * @param data 
    */
    private syncChip(data: RoomMsg.sync_chips_resp): void {
        var coinTex = this.m_fui.getChild("coinTex").asLabel;
        coinTex.text = (Number(data.chips) / 100).toFixed(2);
    }
    /**
     * 等级信息
     */
    private lvInfo(): void {
        var lvTex = this.m_fui.getChild("lvTex").asLabel;
        lvTex.text = NetRoleInfo.Instance.lvInfo.lv + "级";
        this.expFormat();
    }
    /**
     * 经验值
     */
    private expFormat() {
        var v1: number = NetRoleInfo.Instance.lvInfo.exp as number;
        var v2: number = NetRoleInfo.Instance.lvInfo.need_exp as number;
        var currExpTex = this.m_fui.getChild("currExpTex").asLabel;
        currExpTex.text = v1 + "/" + v2;
        var currExpSli = this.m_fui.getChild("expSli").asSlider;
        var currExpPreTex = this.m_fui.getChild("expPreTex").asLabel;
        if (NetLogin.Instance.RoleInfo.need_exp == 0) {
            currExpSli.value = 0;
            currExpPreTex.text = "0.00%";
        }
        else {
            currExpSli.value = v1;
            currExpSli.max = v2;
            currExpPreTex.text = (v1 / v2 * 100).toFixed(0) + "%";
        }
    }

    /**
     * 帮助按钮
     */
    private onHelp(): void {
        this.introGroup.visible = true;
        this.introTs.play();
    }
    /**
     * 
     * @param targentCom 关闭目标
     */
    private onClose(): void {
        GameFacade.Instance.OthMng.isHavePersonInfoPanel = false;
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.onClose);
        GameFacade.Instance.EventMng.remove(EventConstantResponse.LVINFORESP, this, this.lvInfo);
        GameFacade.Instance.EventMng.remove(EventNetResponse.SyncChipsResp, this, this.syncChip);
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.PersonalInfoPanel);
    }

}