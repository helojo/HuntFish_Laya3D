import GComponent = fairygui.GComponent;
import GList = fairygui.GList;
import GObject = fairygui.GObject;
import GButton = fairygui.GButton;
import GLabel = fairygui.GLabel;
import Sound from "../../constant/SoundNameConstant";
import GameFacade from "../../GameFacade";
import EventConstantResponse from "../../constant/EventConstantResponse";
import { utils } from "../../utils/CommonUtil";

export default class WalletKey {
    private walletKeyCom: GComponent;
    private listNum: GList;
    private inputShow: GLabel;
    private max_: number;
    public constructor(max: number) {
        this.max_ = utils.CommonUtils.numberFixed(max);
        this.walletKeyCom = fairygui.UIPackage.createObject("FreeTranWallet", "KeyNumberPanel").asCom;
        this.walletKeyCom.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        GameFacade.Instance.SceneMng.AddFUI(this.walletKeyCom);
        this.inputShow = this.walletKeyCom.getChild("inputShow").asLabel;
        this.walletKeyCom.getChild("no").onClick(this, this.onClickNo);
        this.walletKeyCom.getChild("yes").onClick(this, this.onClickYes);
        this.listNum = this.walletKeyCom.getChild("listNum").asList;
        //this.listNum.setVirtual();
        this.listNum.itemRenderer = new Laya.Handler(this, this.RenderListItem, null, false);
        this.listNum.numItems = 12;
        this.listNum.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
    }

    private RenderListItem(index: number, obj: GObject) {
        var button: GButton = obj.asButton;
        if (index < 9) {
            button.icon = fairygui.UIPackage.getItemURL("FreeTranWallet", (index + 1).toString());
        }
        if (index == 9) {
            button.icon = fairygui.UIPackage.getItemURL("FreeTranWallet", "dot");
        }
        if (index == 10) {
            button.icon = fairygui.UIPackage.getItemURL("FreeTranWallet", "0");
        }
        if (index == 11) {
            button.icon = fairygui.UIPackage.getItemURL("FreeTranWallet", "back");
        }
    }

    /**
     * 点击数值
     * @param obj 
     */
    private onClickItem(obj: fairygui.GObject) {
        var str: string = this.inputShow.text;
        // if (Number(str) >= this.max_) {
        //     this.inputShow.text = this.max_.toString();
        // }
        // else {
        //     this.inputShow.text = this.GetTextString(str, this.listNum.getChildIndex(obj));
        // }
        this.inputShow.text = this.GetTextString(str, this.listNum.getChildIndex(obj));
    }

    /**
     * 通过点击获取转变的字符
     * @param str 
     * @param i 
     */
    private GetTextString(content: string, i: number): string {
        switch (i) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                {
                    content = content + (i + 1);
                    break;
                }
            case 9: // .
                {
                    if (i == 9) {
                        if (content.indexOf(".") != -1) {
                            return content;
                        }
                        content = content + ".";
                    }
                    break;
                }

            case 10: // 0
                {
                    content = content + "0";
                    break;
                }
            case 11: // delete
                {
                    if (content != null) {
                        if (content.length > 1) {
                            content = content.substring(0, content.length - 1);
                        }
                        else if (content.length == 1) {
                            content = "";
                        }
                    }
                    break;
                }


        }
        utils.CommonUtils.log(" -- str = ", content);
        //return utils.CommonUtils.check_Phone_Text(content, this.max_);
        //this.max_ = 2456.77;
        content = utils.CommonUtils.just_num(content);
        utils.CommonUtils.log("Number(content) = ", Number(content));
        if (Number(content) > this.max_) {
            content = this.max_.toString();
        }

        return utils.CommonUtils.check_Phone_Text(content);
    }

    /**
     * no 点击
     */
    private onClickNo() {
        this.walletKeyCom.dispose();
    }

    /**
     * yes 点击 要带回数据 call
     */
    private onClickYes() {
        this.onClickNo();
        GameFacade.Instance.EventMng.dispatch(EventConstantResponse.WALLETKEYNUM, this.inputShow.text);
    }
}