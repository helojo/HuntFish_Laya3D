import GameFacade from "../../../GameFacade";
import EventConstantResponse from "../../../constant/EventConstantResponse";
import NetAct from "../../../net/ProtoHander/NetAct";
import { Enum } from "../../../../libs/protobuf-library";
import EnumData from "../../../Enum/EnumData";
import STATUS = EnumData.ACTSTATUS;
import { utils } from "../../../utils/CommonUtil";
export default class RebateAct extends Laya.Script {

    /** 活动时间显示*/
    private timeTex: fairygui.GLabel;
    /**活动状态控制 */
    private con: fairygui.Controller;
    /**主面板 */
    private com: fairygui.GComponent;
    /**活动状态 */
    private actS: STATUS = STATUS.ACTSHOWSTARTBEFORE;
    private showStartTime: number;
    private showEndTime: number;
    private actStartTime: number;
    private actEndTime: number;
    constructor() { super() };
    onAwake() {
        GameFacade.Instance.EventMng.add(EventConstantResponse.ACTLISTRESP, this, this.actInfo);
        NetAct.Instance.actListReq();

    }

    public setTimeLabel(com: fairygui.GComponent) {
        this.timeTex = com.getChild("time").asLabel;
        this.con = com.getController("c1");
        this.com = com;
        this.com.visible = false;
        this.timeTex.text = "00:00:00";
    }



    /**
     * 活动详情
     */
    private actInfo(data: ActMsg.Iact_info) {
        utils.CommonUtils.log(data);
        if (data.type != 7) {
            this.actClose();
            return;
        }
        this.showStartTime = data.show_start_time;
        this.showEndTime = data.show_end_time;
        this.actStartTime = data.start_time;
        this.actEndTime = data.end_time;
        if (utils.CommonUtils.getNowActualTimeStamp() >= this.showStartTime * 1000) {
            this.actS = STATUS.ACTSHOWSTART_START;
            this.actshowStart();
        }
        if (utils.CommonUtils.getNowActualTimeStamp() >= this.actStartTime * 1000) {
            this.actS = STATUS.ACTSTART_END;
            this.actStart();
        }
        if (utils.CommonUtils.getNowActualTimeStamp() >= this.actEndTime * 1000) {
            this.actS = STATUS.ACTEND_SHOWEND;
            this.actClose();
        }
        if (utils.CommonUtils.getNowActualTimeStamp() >= this.showEndTime * 1000) {
            this.actS = STATUS.ACTSHOWENDAFTER;
            this.actClose();
        }
        // console.log(this.actS);
        // console.log("showStartTime:" + this.showStartTime);
        // console.log("showEndTime:" + this.showEndTime);
        // console.log("actStartTime:" + this.actStartTime);
        // console.log("actEndTime:" + this.actEndTime);
        // console.log("nowTime:" + utils.CommonUtils.getNowActualTimeStamp());
    }
    /**
 * 打开活动前的提示图标
 */
    private actshowStart() {
        this.com.visible = true;
        this.con.setSelectedIndex(1);
    }
    /**
     * 打开活动时的提示图标
     */
    private actStart() {
        this.com.visible = true;
        this.con.setSelectedIndex(0);
    }
    /**
     * 关闭图标
     */
    private actClose() {
        this.com.visible = false;
    }

    onUpdate() {
        if (this.actS == STATUS.ACTSHOWSTARTBEFORE || this.actS == STATUS.ACTSHOWENDAFTER || this.actS == STATUS.ACTEND_SHOWEND) {
            return;
        }
        else if (this.actS == STATUS.ACTSHOWSTART_START) {
            var str: string = utils.CommonUtils.getTimeDifference(this.actStartTime);
            if (str != null) {
                this.timeTex.text = str;
            }
            else {
                this.actS = STATUS.ACTSTART_END;
                this.actStart();
            }

        }
        else if (this.actS == STATUS.ACTSTART_END) {

            var str: string = utils.CommonUtils.getTimeDifference(this.actEndTime);
            if (str != null) {
                this.timeTex.text = str;
            }
            else {
                this.actS = STATUS.ACTSHOWENDAFTER;
                this.actClose();
            }
        }
    }
    onDisable() {
        GameFacade.Instance.EventMng.remove(EventConstantResponse.ACTLISTRESP, this, this.actInfo);
    }

}