import NetJpPool from "../../../net/ProtoHander/NetJpPool";
import GameFacade from "../../../GameFacade";
import EventConstantResponse from "../../../constant/EventConstantResponse";

export default class jpBeat extends Laya.Script {
    private jpTex: fairygui.GLabel;
    constructor() { super() };
    onAwake() {
        GameFacade.Instance.EventMng.add(EventConstantResponse.JPNUMBER, this, this.jp);
    }
    /**
     * 设置jptext
     * @param jpText 
     */
    public setJpText(jpText: fairygui.GLabel) {
        this.jpTex = jpText;
    }
    /**
     * 监控获得jp
     * @param data 
     */
    public jp(data: number): void {
        this.jpShowNum(data);
    }

    /**
     * 同步jp跳动
     */
    public synJpData() {
        if (NetJpPool.Instance._JpAmount != null) {
            this.jpShowNum(NetJpPool.Instance._JpAmount);
        }
    }
    /**
     * 初始化jp 金额
     * @param data 
     */
    public jpShowNum(num: Long | Number): void {
        this.jpTex.text = (Number(num) * 0.01).toFixed(2);
        if (num == 0) return;
        Laya.timer.loop(2000, this, this.jpNum)
    }

    /**
     * jp跳动
     */
    private jpNum() {
        this.jpTex.text = (Number(this.jpTex.text) + 0.02).toFixed(2);
    }
    // onUpdate() {
    //     var t = Laya.timer.currFrame*0.001;
    //     console.log( Laya.timer.loop );
    //     console.log("t:"+parseInt(t.toString()) );
    //     this.jpTex.text = (Number(this.jpTex.text)+t).toFixed(2);
    // }
}