import BaseManager from "./BaseManager";
import GameFacade from "../GameFacade";
import CommonConstant from "../constant/CommonConstant";
import { utils } from "../utils/CommonUtil";
import Sound from "../constant/SoundNameConstant";
export enum TipType {
    QUITGAME,//退出游戏 也可用于返回登录
    REFRESHGAME,//刷新游戏
    YESNOCHOICE,//单单获得玩家选择提示框的yes or no
    ONECLOSE,//只有一个关闭按钮 用于提示作用
    STOPAUTOHUNTFISH,//自动捕鱼的提示框
    FLOATTIP,//飘字提示框不延迟型
    FLOATTIPDELAY,//飘字延迟型
}

export default class TipManager extends BaseManager {

    private currTip: fairygui.GComponent;//当前的提示框(非飘字型)
    private isHaveText: boolean = false;
    private texArray: Array<string> = new Array<string>();
    private m_tipFloat: fairygui.GComponent = null;
    private _tran: fairygui.Transition = null;
    constructor() {
        super();
    };
    public Init() {
        GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiTipPath.image, CommonConstant._fuiTipPath.fui, this, this.onLoadPublic);
    }
    private onLoadPublic() {
        fairygui.UIPackage.addPackage(CommonConstant._fuiTipPath.Package);

    }

    /**
     * 创建提示框
     * @param str 提示内容
     * @param type 提示类型
     */
    public createTip(str: string, type: TipType, call: Function = null) {
        if (this.currTip != null) {
            this.onClose();
        }
        switch (type) {
            case TipType.YESNOCHOICE:
                this.currTip = this.yesAndNoCreateTip(str, call);
                break;
            case TipType.QUITGAME:
                this.currTip = this.onlyYesCreateTip(str);
                this.currTip.getChild("yes").onClick(this, this.quitGame);
                break;
            case TipType.REFRESHGAME:
                this.currTip = this.onlyYesCreateTip(str);
                this.currTip.getChild("yes").onClick(this, this.onClose);
                break;
            case TipType.ONECLOSE:
                this.currTip = this.onlyYesCreateTip(str);
                this.currTip.getChild("yes").onClick(this, this.onClose);
                break;
            case TipType.STOPAUTOHUNTFISH:
                this.currTip = this.onlyYesCreateTip(str);
                this.currTip.getChild("yes").onClick(this, this.onClose);
                break;
            case TipType.FLOATTIP:
                this.floatTip(str);
                break;
            case TipType.FLOATTIPDELAY:
                this.floatTipDelay(str);
                break;
            default:
                break;
        }

    }


    /**
     * 只有一个yes 
     */
    private onlyYesCreateTip(str: string): fairygui.GComponent {
        var tip1 = fairygui.UIPackage.createObject("Public", "tip1").asCom;
        tip1.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        GameFacade.Instance.SceneMng.AddFUI(tip1);
        var c: fairygui.Controller = tip1.getController("c1");
        c.setSelectedIndex(1);
        tip1.getChild("text").text = str;
        tip1.getChild("yes").onClick(this, this.onClose);
        return tip1;
    }
    /**
     * 有yes和no
     */
    private yesAndNoCreateTip(str: string, call: Function): fairygui.GComponent {
        var tip1 = fairygui.UIPackage.createObject("Public", "tip1").asCom;
        tip1.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        GameFacade.Instance.SceneMng.AddFUI(tip1);
        tip1.getChild("text").text = str;
        tip1.getChild("yes").onClick(this, () => { this.callBack(call) });
        tip1.getChild("no").onClick(this, this.onClose);
        return tip1;
    }
    /**
     * 反馈
     */
    private callBack(call: Function) {
        this.onClose();
        return call(true);
    }
    /**
     * 飘字延迟型
     */
    private floatTipDelay(str: string): void {
        if (this.isHaveText) {
            this.texArray.push(str);
        }
        else {
            this.isHaveText = true;
            if (this.m_tipFloat != null) {
                GameFacade.Instance.SceneMng.RemoveFUI(this.m_tipFloat);
            }
            this.m_tipFloat = fairygui.UIPackage.createObject("Public", "tipFloat").asCom;
            this.m_tipFloat.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
            GameFacade.Instance.SceneMng.AddFUI(this.m_tipFloat);
            this.m_tipFloat.getChild("text").text = str;
            this._tran = this.m_tipFloat.getTransition("t0");
            this._tran.play(new Laya.Handler(this, () => {
                this.isHaveText = false;
                if (this.texArray.length > 0) {
                    this.floatTip(this.texArray.shift());
                }
                else {
                    GameFacade.Instance.SceneMng.RemoveFUI(this.m_tipFloat);
                }

            }));
        }
    }

    /**
     * 飘字不延迟
     */
    private floatTip(str: string): void {
        if (this.m_tipFloat != null) {
            GameFacade.Instance.SceneMng.RemoveFUI(this.m_tipFloat);
        }
        this.m_tipFloat = fairygui.UIPackage.createObject("Public", "tipFloat").asCom;
        GameFacade.Instance.SceneMng.AddFUI(this.m_tipFloat);
        this.m_tipFloat.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);

        this.m_tipFloat.getChild("text").text = str;
        this._tran = this.m_tipFloat.getTransition("t0");
        this._tran.play(new Laya.Handler(this, () => {
            GameFacade.Instance.SceneMng.RemoveFUI(this.m_tipFloat);
        }));
    }
    /**
     * 退出游戏 返回大厅
     */
    private quitGame() {
        this.onClose();
        window.close();
    }
    /**
     * 刷新游戏
     */
    private refeshGame() {
        window.open(utils.CommonUtils.getLocalHref());
        this.onClose();
    }

    /**
     * 关闭弹框
     */
    private onClose() {
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.onClose);
        if (this.currTip != null) {
            GameFacade.Instance.SceneMng.RemoveFUI(this.currTip);
        }
    }
    /**
     * 外部因素关闭
     */
    public close() {
        if (this.currTip != null) {
            GameFacade.Instance.SceneMng.RemoveFUI(this.currTip);
        }
        if (this.m_tipFloat != null) {
            this._tran.stop();
            GameFacade.Instance.SceneMng.RemoveFUI(this.m_tipFloat);
        }
    }
}