import BasePanel from "./BasePanel";
import SelectItem from "../Item/SelectItem";
import AutoAttackPanel from "./AutoAttackPanel";
import NetLogin from "../../net/ProtoHander/NetLogin";
import GameFacade from "../../GameFacade";
import EnumData from "../../Enum/EnumData";
import GameEvent from "../../constant/GameEvent";
import BatteryController from "../../controller/BatteryController";
import { utils } from "../../utils/CommonUtil";
import FishController from "../../controller/FishController";
import Sound from "../../constant/SoundNameConstant";

/**
 * 捕猎界面自动攻击面板--选择面板
*/
export default class SelectPanel extends BasePanel {
    private m_list: fairygui.GList;
    private m_control: AutoAttackPanel;
    private m_selectItemDic: Laya.WeakObject = new Laya.WeakObject();
    public m_autoAttackArr: Array<boolean>;
    private _reSelectBtn: fairygui.GButton;
    private _selectAllBtn: fairygui.GButton;
    private _startHuntBtn: fairygui.GButton;
    private _loadLastSetBtn: fairygui.GButton;
    constructor(owner: fairygui.GComponent, control: AutoAttackPanel) {
        super();
        this._reSelectBtn = owner.getChild("ReSelectBtn").asButton;
        this._selectAllBtn = owner.getChild("SelectAllBtn").asButton;
        this._startHuntBtn = owner.getChild("StartHuntBtn").asButton;
        this._loadLastSetBtn = owner.getChild("LoadLastSetBtn").asButton;
        this._reSelectBtn.onClick(this, this.OnReSelectBtnClick);
        this._selectAllBtn.asButton.onClick(this, this.OnSelectAllBtnClick);
        this._startHuntBtn.asButton.onClick(this, this.OnStartHuntBtnClick);
        this._loadLastSetBtn.asButton.onClick(this, this.OnLoadLastSetBtnClick);
        this.m_fui = owner;
        this.m_list = owner.getChild("List").asList;
        this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
        this.m_list.foldInvisibleItems = true; //item不可见时，list不显示
        this.m_control = control;

        this.m_autoAttackArr = new Array(28);
        this.LoadSelectFishConfig();
        this.sound();
    }


    private ChangeItemUI(item: fairygui.GComponent, type: number, rate: number) {
        var selectItem: SelectItem = this.GetSelectItem(item);
        selectItem.ChangeUI(rate, type);
    }

    private GetSelectItem(item: fairygui.GComponent) {
        let key = this.m_list.getChildIndex(item);
        var selectItem: SelectItem = null;
        if (this.m_selectItemDic.has(key)) {
            selectItem = this.m_selectItemDic.get(key);
        }
        else {
            selectItem = new SelectItem(item, this);
            this.m_selectItemDic.set(key, selectItem);
        }

        return selectItem;
    }

    /**
     * 加载鱼的配置信息
    */
    private LoadSelectFishConfig() {
        let fishInfo = NetLogin.Instance._playerLoginInfo.fish_info;
        for (var i = 0; i < fishInfo.length; i++) {
            var type = fishInfo[i].fish_type;
            // //if(type > EnumData.FishSubtype.King_fishf1 && type <= EnumData.FishSubtype.King_fishf5) //27~31 为5个鱼王，只显示一个即可
            // if (type >= EnumData.FishSubtype.King_fishf1 && type <= EnumData.FishSubtype.King_fishf5) //27~31 为5个鱼王，都不显示
            // {
            //     continue;
            // }

            if (FishController.Instance.IsFishKing(type)) continue;
            else if (type > EnumData.FishSubtype.Bomb_fish) {
                return;
            }
            var rate = fishInfo[i].fish_rate;
            let item = this.m_list.addItemFromPool().asCom;
            this.ChangeItemUI(item, type, rate);
        }
    }

    //#region  按钮响应事件
    private OnReSelectBtnClick() {
        for (var i = 0; i < this.m_list._children.length; i++) {
            let selectItem: SelectItem = this.m_selectItemDic.get(i);
            selectItem.SetClicked(false);
        }
    }
    private OnSelectAllBtnClick() {
        for (var i = 0; i < this.m_list._children.length; i++) {
            let selectItem: SelectItem = this.m_selectItemDic.get(i);
            selectItem.SetClicked(true);
        }
    }
    private OnStartHuntBtnClick() {
        GameFacade.Instance.EventMng.dispatch(GameEvent.HUNT_LOCKATTACK, false);
        GameFacade.Instance.EventMng.dispatch(GameEvent.HUNT_AUTOATTACK, true);
        BatteryController.Instance.sAutoAttackArr = [];
        GameFacade.Instance.HuntSceneMng._bSelectedFish = false;
        for (var i = 0; i < this.m_autoAttackArr.length; i++) {
            BatteryController.Instance.gAutoAttackArr.push(this.m_autoAttackArr[i]);
            if (this.m_autoAttackArr[i]) {
                GameFacade.Instance.HuntSceneMng._bSelectedFish = true;
            }
        }

        this.m_control.OncloseBtnClick();
        this.m_control.ClearHuntedPanel();
    }
    private OnLoadLastSetBtnClick() {
        for (var i = 0; i < this.m_list._children.length; i++) {
            let selectItem: SelectItem = this.m_selectItemDic.get(i);
            selectItem.SetClicked(BatteryController.Instance.gAutoAttackArr[selectItem.FishType]);
        }
    }

    /** 点关闭按钮时，不保存选择信息*/
    public RemoveUnuseSelectedItem() {
        this.OnLoadLastSetBtnClick();
    }
    //#endregion

    private onClickItem(item: fairygui.GComponent) {
        let selectItem: SelectItem = this.GetSelectItem(item);
        selectItem.Onclicked();
    }

    public ShowSelf(visible: boolean) {
        this.m_fui.visible = visible;
    }

    /**
     * 播放声音
     */
    private sound(): void {
        this._reSelectBtn.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick) });
        this._selectAllBtn.asButton.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick) });
        this._startHuntBtn.asButton.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick) });
        this._loadLastSetBtn.asButton.onClick(this, () => { this.onPlaySound(Sound.soundKeyArr.onClick) });
    }
    /**
    * 
    * 播放按钮点击声音
    */
    private onPlaySound(str: string): void {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, str);
    }
}