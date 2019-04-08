import CommonConstant from "../../constant/CommonConstant";
import HuntedPanel from "../Panel/HuntedPanel";
import { utils } from "../../utils/CommonUtil";

export default class HuntedItem {
    private m_fishImg: fairygui.GLoader;
    private m_amount: fairygui.GLabel;
    private m_value: fairygui.GTextField;
    private m_huntedPanel: HuntedPanel;
    private m_amountNum: number;
    private m_valueNum: number;
    public GameObject: fairygui.GComponent;

    constructor(owner: fairygui.GComponent, panel: HuntedPanel) {
        this.m_fishImg = owner.getChild("FishImg").asLoader;
        this.m_amount = owner.getChild("Amount").asLabel; this.m_amount.ensureSizeCorrect();
        this.m_value = owner.getChild("Value").asTextField; this.m_value.ensureSizeCorrect();

        this.m_huntedPanel = panel;
        this.GameObject = owner
    }

    //id从1开始
    public InitUI(value: number, fishType: number) {
        this.m_amountNum = 1;
        this.m_valueNum = value;
        this.m_amount.text = this.m_amountNum.toString();
        this.m_value.text = this.m_valueNum.toFixed(2);
        this.m_fishImg.url = CommonConstant._preCommonPath + fishType;

    }

    public AddAmount(value: number) {
        this.m_amountNum++;
        this.m_valueNum += value;
        this.m_amount.text = this.m_amountNum.toString();
        this.m_value.text = this.m_valueNum.toFixed(2);
        utils.CommonUtils.huntedItemValueFontSize(this.m_value);
    }
}