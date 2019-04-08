import CommonConstant from "../../constant/CommonConstant";
import { utils } from "../../utils/CommonUtil";
import BatteryController from "../../controller/BatteryController";
import SelectPanel from "../Panel/SelectPanel";

export default class SelectItem{
    private m_fishImg:fairygui.GLoader;
    private m_value:fairygui.GLabel;
    private m_controller:fairygui.Controller;
    private m_type:number;
    private m_selectPanel:SelectPanel;
    
    public get FishType() : number {
        return this.m_type;
    }
    
    
    constructor(owner:fairygui.GComponent, panel:SelectPanel){
        this.m_fishImg = owner.getChild("FishImg").asLoader;
        this.m_value = owner.getChild("Value").asLabel;
        this.m_controller = owner.getController("c1");
        this.m_selectPanel = panel;
    }

    public ChangeUI(value:number, fishType:number){
        if(value != 0){
            this.m_value.text = (utils.CommonUtils.numberFixed(value)).toFixed(2);
        }
        else{
            this.m_value.visible = false;
        }
        this.m_fishImg.url = CommonConstant._preCommonPath + fishType;
        this.m_type = fishType;
    }

    public Onclicked(){
        let bclicked:boolean = this.m_controller.selectedIndex == 1? false: true;
        this.SetClicked(bclicked);
    }

    public SetClicked(bClicked:boolean){
        this.m_controller.selectedIndex = bClicked? 1: 0;
        //选中状态
        if(bClicked){
            this.m_selectPanel.m_autoAttackArr[this.m_type] = true;
        }
        else{
            this.m_selectPanel.m_autoAttackArr[this.m_type] = false;        
        }
    }
}