import GComponent = fairygui.GComponent;
import GameFacade from "../../GameFacade";
import Sound from "../../constant/SoundNameConstant";
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import CommonConstant from "../../constant/CommonConstant";
import { utils } from "../../utils/CommonUtil";
import { Http } from "../Login/Http/Http";
import BasePanel from "./BasePanel";
import EnumData from "../../Enum/EnumData";

export default class LvRecordsPanel extends BasePanel {
    private list: fairygui.GList;
    private currPage: number = 1;
    private maxPage: number = 12;
    private totalPage: number = 0;
    private numPage: number = 1;
    private dataArr: Array<string>;
    public constructor() {
        super()
        GameFacade.Instance.ResourceMng.loadUI(CommonConstant._fuiLvRecordsPath.image, CommonConstant._fuiLvRecordsPath.fui, this, this.onLoad);
    }

    /**
     * 加载设置
     */
    private onLoad(): void {
        this.m_fui = GameFacade.Instance.ResourceMng.getMainCom(CommonConstant._fuiLvRecordsPath.Package, "LvRecords", "lvRecordsCom");
        this.list = this.m_fui.getChild("infoList").asList;
        this.list.removeChildrenToPool();
        //this.list.on(fairygui.Events.PULL_DOWN_RELEASE,this,this.onPullDownRelease);
        this.list.on(fairygui.Events.PULL_UP_RELEASE, this, this.onPullUpRelease);
        var closeBtn: fairygui.GButton = this.m_fui.getChild("closeBtn").asButton;
        closeBtn.onClick(this, this.onClose);
        ////  console.log("加载");
        this.HttpRecord(this.currPage, this.maxPage);
    }

    private onPullDownRelease(): void {
        ////  console.log("上拉");
        if (this.currPage <= 1) {
            return;
        }
        else {
            this.currPage -= 1;
            this.HttpRecord(this.currPage, this.maxPage);
        }

    }
    private onPullUpRelease(): void {
        ////  console.log("下拉");
        if (this.currPage >= this.numPage) {
            return;
        }
        else {
            this.currPage += 1;
            this.HttpRecord(this.currPage, this.maxPage);
        }

    }

    /**
     * 请求数据
     */
    private HttpRecord(page: number, maX: number): void {
        ////console.log(GameFacade.Instance.GameMng.historyUrl);
        let dataUrl = "?api_type=fund_got_awards&page=" + page + "&size=" + maX;
        if (GameFacade.Instance.GameMng.historyUrl.indexOf('?') > 0) {
            dataUrl = "$api_type=fund_got_awards&page=" + page + "&size=" + maX;
        }
        utils.CommonUtils.log("dataUrl: " + dataUrl);
        utils.CommonUtils.log("requestUrl: " + GameFacade.Instance.GameMng.historyUrl + dataUrl);
        Http.httpSend("GET", GameFacade.Instance.GameMng.historyUrl + dataUrl, null, this.successCallBack.bind(this), this.failCallBack.bind(this));

    }

    /**
     * 成功返回数据
     * @param data 
     */
    private successCallBack(data: string): void {
        ////console.log("历史记录数据");
        var j = {
            "info": {
                "status": 0, "data":
                    [{ "id": "0", "user_id": 0, "action": 0, "game_id": 0, "current_awards": "", "current_got_lev_id": 0, "create_time": 0 }],
                "page_info": { "total": 0, "page_num": 0 }
            }, "page": 0, "game_list_info": [], "timezone": -4
        };
        ////console.log(data);
        if (data != null) {
            j = null;
            j = JSON.parse(data);
        }
        var info = j.info;
        var page = info.page_info;
        var datas = info.data;
        this.numPage = page.page_num;
        // this. list.removeChildrenToPool();
        for (var i: number = 0; i < datas.length; i++) {
            var infoCom: GComponent = this.list.addItemFromPool().asCom;
            infoCom.getChild("lvTex").text = datas[i].current_got_lev_id.toString();
            infoCom.getChild("amountTex").text = datas[i].current_awards.toString();
            infoCom.getChild("accountNumTex").text = datas[i].id.toString();
            infoCom.getChild("timeTex").text = utils.CommonUtils.numberToDataTime(Number(datas[i].create_time)).toString();
            this.list.ensureBoundsCorrect();
        }
    }


    /**
     * 失败返回数据
     */
    private failCallBack(): void {
        this.list.removeChildrenToPool();
        ////console.log("抱歉，你已经失去信息");
    }

    /**
     * 
     * @param targentCom 关闭目标
     */
    private onClose(): void {
        Http.httpAbort();
        GameFacade.Instance.SoundMng.playSound(Sound.soundHeadArr.keySoundHead, Sound.soundKeyArr.onClose);
        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.LvRecordsPanel);
    }

}