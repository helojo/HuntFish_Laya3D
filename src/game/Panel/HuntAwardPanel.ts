import GameFacade from "../../GameFacade";
import EnumData from "../../Enum/EnumData";
import BatteryController from "../../controller/BatteryController";
import { utils } from "../../utils/CommonUtil";
import CommonConstant from "../../constant/CommonConstant";
import AutoDestroy from "../../utils/AutoDestroy";

/** 爆金币转盘特效*/
export default class HuntAwardPanel extends Laya.Sprite {
    private m_award: Laya.Image;
    private m_fishImg: Laya.Image;
    private m_awardFont: Laya.FontClip; //转盘上的数字
    private m_num: number;
    private m_totalNum: number;
    private m_bPanelEffectFinished = false;
    private m_bAwardTextEffectFinished = false;
    private m_effectPos: Laya.Vector3;
    private m_effectScale: number;
    private m_readLight: Laya.Image;
    private m_uid: number;
    constructor() {
        super();

    }

    public InitPanel(ownerUid, fishType: EnumData.FishSubtype, reward: number, bHalf: boolean) {
        this.visible = true;
        this.m_num = 0;
        this.m_totalNum = utils.CommonUtils.numberFixed(reward);
        this.m_uid = ownerUid;

        var fishPath = CommonConstant._fish20Path;
        var fishPos = new Laya.Point(30, 6);
        switch (fishType) {
            case EnumData.FishSubtype.Fish_20: {
                fishPath = CommonConstant._fish20Path;
                fishPos.setTo(57, 16);
                break;
            }
            case EnumData.FishSubtype.Golden_Shark: {
                fishPath = CommonConstant._fish23Path;
                fishPos.setTo(30, 6);
                break;
            }
            case EnumData.FishSubtype.Mermaid: {
                fishPath = CommonConstant._fish25Path;
                fishPos.setTo(49, 79);
                break;
            }
        }
        this.m_effectPos = new Laya.Vector3(640, 320, 0);
        this.m_effectScale = 1;
        //半屏转盘
        if (bHalf) {
            this.m_effectScale = 0.5;
            let playerPos = BatteryController.Instance.GetBatteryByUid(ownerUid).m_position;
            this.m_effectPos = CommonConstant.HalfAwardPos[playerPos - 1];
        }

        //转盘后的红光
        if (null == this.m_readLight) {
            this.m_readLight = new Laya.Image(CommonConstant._zhuanpanLightPath);
            this.addChild(this.m_readLight);
        }
        this.m_readLight.anchorX = 0.5;
        this.m_readLight.anchorY = 0.5;
        this.m_readLight.scale(this.m_effectScale, this.m_effectScale);
        this.m_readLight.pos(this.m_effectPos.x, this.m_effectPos.y);
        Laya.timer.loop(50, this, () => {
            if (null != this.m_readLight)
                Laya.Tween.to(this.m_readLight, { rotation: this.m_readLight.rotation + 10 }, 50);
        })

        //转盘
        if (null == this.m_award) {
            this.m_award = new Laya.Image(CommonConstant._zhuanpanPath);
            this.addChild(this.m_award);
        }
        this.m_award.anchorX = 0.5;
        this.m_award.anchorY = 0.5;
        this.m_award.scale(this.m_effectScale, this.m_effectScale);
        this.m_award.pos(this.m_effectPos.x, this.m_effectPos.y);
        if (null == this.m_fishImg) {
            this.m_fishImg = new Laya.Image(fishPath);
            this.m_award.addChild(this.m_fishImg);
        }
        else
            this.m_fishImg.skin = fishPath;
        this.m_fishImg.pos(fishPos.x, fishPos.y);
        ////this.addChild(this.m_readLight);
        ////this.addChild(this.m_award);
        ////this.m_award.addChild(this.m_fishImg);

        // 大转盘上的字体
        if (null == this.m_awardFont) {
            this.m_awardFont = new Laya.FontClip(CommonConstant._awardFont, ".+0123456789");
            this.m_award.addChild(this.m_awardFont);
        }
        this.m_awardFont.align = "center";
        this.m_awardFont.pos(215, 260);
        this.m_awardFont.anchorX = 0.5;
        this.m_awardFont.anchorY = 0.5;
        ////this.m_award.addChild(this.m_awardFont);

        this.ShowEffect();
    }

    private PanelEffect() {
        this.m_award.scaleX = 0.1;
        this.m_award.scaleY = 0.1;
        let maxScale = this.m_effectScale + 0.4;
        let minScale = this.m_effectScale - 0.2;
        Laya.Tween.to(this.m_award, { scaleX: 1.1, scaleY: 1.1 }, 100, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.m_award, { scaleX: 0.8, scaleY: 0.8 }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.m_award, { scaleX: this.m_effectScale, scaleY: this.m_effectScale }, 100, null, Laya.Handler.create(this, () => {
                    this.m_bPanelEffectFinished = true;
                }));
            }));
        }));
    }

    private AwardTextEffect() {
        Laya.timer.loop(30, this, this.ChangeNum);
    }
    private ChangeNum() {
        this.m_num += this.m_totalNum / 20;

        if (this.m_num >= this.m_totalNum) {
            this.m_num = this.m_totalNum;
            utils.CommonUtils.log("---------m_totalNum = ", this.m_totalNum);
            this.m_bAwardTextEffectFinished = true;
            Laya.timer.clear(this, this.ChangeNum);
        }

        this.m_awardFont.value = this.m_num.toFixed(2);
    }

    public ShowEffect() {
        let awardLight = GameFacade.Instance.HuntSceneMng.InstantiateEffect(CommonConstant._huntSceneEffectArray.HalfScreenDrawReward);
        awardLight.transform.position = new Laya.Vector3(0, 0, 0);
        //awardLight.active = true;
        let ad: AutoDestroy = utils.CommonUtils.CustomAddComponent(awardLight, AutoDestroy);
        ad.InitData(8000, true);
        this.PanelEffect();
        this.AwardTextEffect();
        this.RemoveAfterEffectFinished();
    }

    private RemoveAfterEffectFinished() {
        var self = this;
        var Check = function () {
            if (self.m_bAwardTextEffectFinished && self.m_bPanelEffectFinished) {
                Laya.timer.clearAll(self);
                //self.m_readLight.destroy(true);
                Laya.Tween.to(self.m_award, { scaleX: 0.5, scaleY: 0.5 }, 100, null, Laya.Handler.create(self, () => {
                    let endPos = BatteryController.Instance.GetBatteryByUid(self.m_uid).GunGpos;
                    Laya.Tween.to(self.m_award, { x: endPos.x, y: endPos.y }, 150, null, Laya.Handler.create(self, () => {
                        self.visible = false;
                        //self.active
                        //self.destroy(true);
                        self.m_bPanelEffectFinished = false;
                        self.m_bAwardTextEffectFinished = false;
                    }));
                }));

            }
        }

        Laya.timer.loop(500, self, Check);
    }
}