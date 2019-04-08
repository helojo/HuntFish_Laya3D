import BasePanel from "./BasePanel";
import AutoAttackPanel from "./AutoAttackPanel";
import GameFacade from "../../GameFacade";
import GameEvent from "../../constant/GameEvent";
import HuntedItem from "../Item/HuntedItem";
import NetLogin from "../../net/ProtoHander/NetLogin";
import { utils } from "../../utils/CommonUtil";
import BatteryController from "../../controller/BatteryController";
import EnumData from "../../Enum/EnumData";
import FishController from "../../controller/FishController";
import Sound from "../../constant/SoundNameConstant";

/**
 * 捕猎界面自动攻击面板--显示已自动捕到的鱼的面板
*/
export default class HuntedPanel extends BasePanel {
    private m_control: AutoAttackPanel;
    private m_list: fairygui.GList;
    private m_huntedItemDic: { [type: number]: HuntedItem };
    private _cancelBtn: fairygui.GButton;
    private _changeBtn: fairygui.GButton;
    constructor(owner: fairygui.GComponent, control: AutoAttackPanel) {
        super();
        this._cancelBtn = owner.getChild("CancelBtn").asButton;
        this._changeBtn = owner.getChild("ChangeBtn").asButton;
        this._cancelBtn.asButton.onClick(this, this.OnCancelBtnClick);
        this._changeBtn.asButton.onClick(this, this.OnChangeBtnClick);
        this.m_list = owner.getChild("List").asList;
        this.m_control = control;
        this.m_fui = owner;
        this.m_huntedItemDic = {};
        this.sound();
    }

    public ShowSelf(visible: boolean) {
        this.m_fui.visible = visible;
    }

    private OnChangeBtnClick() {
        this.m_control.ShowSelectPanel();
    }
    private OnCancelBtnClick() {
        this.m_list.removeChildrenToPool();
        GameFacade.Instance.EventMng.dispatch(GameEvent.HUNT_AUTOATTACK, false);
        this.m_control.OncloseBtnClick();
        this.ClearPanel();
    }

    /**
     * 
     * @param args 
     */
    public OnHuntedFish(args: any) {
        if (this.m_list == null || this.m_list == undefined) return;
        let bouns: number = args[0];
        let type: number = args[1];

        if (GameFacade.Instance.HuntSceneMng._bSelectedFish) {
            //存在一种特殊情况，刚重新选择了要自动攻击的鱼的同时，之前自动攻击状态的鱼被打死，所以在此处要多一层判断
            if (BatteryController.Instance.gAutoAttackArr[type] != true) {
                return;
            }
        }
        else {
            //鱼王不处理
            if (FishController.Instance.IsFishKing(type)) return;
        }

        var huntedItem: HuntedItem = null;
        if (this.m_huntedItemDic[type]) {
            huntedItem = this.m_huntedItemDic[type];
            huntedItem.AddAmount(utils.CommonUtils.numberFixed(bouns));
        }
        else {
            utils.CommonUtils.log("this.m_list = ", this.m_list);
            let item: fairygui.GComponent = this.m_list.addItemFromPool().asCom;
            huntedItem = new HuntedItem(item, this);
            let fishInfo = NetLogin.Instance._playerLoginInfo.fish_info;
            for (var i = 0; i < fishInfo.length; i++) {
                if (type == fishInfo[i].fish_type) {
                    //var rate = fishInfo[i].fish_rate;
                    huntedItem.InitUI(utils.CommonUtils.numberFixed(bouns), type);
                    this.m_huntedItemDic[type] = huntedItem;
                    return;
                }
            }
        }
    }

    public ClearPanel() {
        this.m_list.removeChildrenToPool();
        this.m_huntedItemDic = {};
    }
    /**
    * 播放声音
    */
    private sound(): void {
        this._cancelBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick) });
        this._changeBtn.asButton.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick) });
    }
    /**
    * 
    * 播放按钮点击声音
    */
    private onPlaySound(str: string): void {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, str);
    }
}