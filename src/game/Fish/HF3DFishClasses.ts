import FishInfo from "./FishInfo";
import { FishBase } from "./FishBase";
import FishController from "../../controller/FishController";
import NetLogin from "../../net/ProtoHander/NetLogin";
import { utils } from "../../utils/CommonUtil";
import GameFacade from "../../GameFacade";
import CommonConstant from "../../constant/CommonConstant";
import EnumData from "../../Enum/EnumData";
module HF3DFishClasses {
    export class Fish01 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish02 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish03 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish04 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish05 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish06 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }


    export class Fish07 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish08 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish09 extends FishBase {

        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }


    export class Fish10 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish11 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish12 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish13 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish14 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish15 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }


    export class Fish16 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }

        protected GetFishSize(): number {
            return CommonConstant.OutWallOffset_shark;
        }
    }

    export class Fish17 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish18 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish19 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish20 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
            // this._firstChild.transform.localPosition = new Laya.Vector3(0, 0, 500);
            //this._firstChild.transform.localScale = new Laya.Vector3(51, 51, 51);
        }
        protected GetFishSize(): number {
            return CommonConstant.OutWallOffset_shark;
        }
    }

    export class Fish21 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish22 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish23 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }

        /**
      * 鱼预警
      */
        protected FishWarn(): void {
            super.FishWarn();
            GameFacade.Instance.HuntSceneMng.warnShow(this._fishInfo._mFishType);
        }
        protected GetFishSize(): number {
            return CommonConstant.OutWallOffset_shark;
        }
    }

    export class Fish24 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class Fish25 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
            Laya.timer.loop(6000, this, this.PlaySwimmingAction2);
        }
        /// <summary>鱼的动作逻辑</summary>
        /// <param name="enum_fish_state"></param>
        protected PlayAction(enum_fish_state: EnumData.ENUM_FISH_STATE): boolean {
            let self = this;
            if (null == self._Animator || null == self._FishAniClass) return;
            ////   if (self._fishActionState == enum_fish_state) return false;
            self._fishActionState = enum_fish_state;

            switch (enum_fish_state) {
                case EnumData.ENUM_FISH_STATE.SWIMMING:
                    return self.PlayAnimation(self._FishAniClass._SwimName);
                case EnumData.ENUM_FISH_STATE.SHOW://停留动画（嬉戏）
                    self.mowner.transform.lookAt(self._cameraTrans.up, Laya.Vector3.Up, false);
                    return self.PlayAnimation(self._FishAniClass._StayName);
                case EnumData.ENUM_FISH_STATE.PAUSE:
                    return false;
                case EnumData.ENUM_FISH_STATE.HITTED:
                    return self.PlayAnimation(self._FishAniClass._HitName);
                case EnumData.ENUM_FISH_STATE.DEATH:
                    return self.PlayAnimation(self._FishAniClass._DeadName);
                default:
                    return false;
            }
        }
        protected PlayAnimation(aniName: string): boolean {
            if (aniName && aniName != "") {
                let aniStatesMap = this._Animator.getControllerLayer(0)._statesMap;
                let animatorState: Laya.AnimatorState = aniStatesMap[aniName];
                if (animatorState)
                    this._Animator.crossFade(aniName, 0.5);//使用这个接口好像会造成鱼闪的bug
                return true;
            }
            return false;
        }
        /**
             * 鱼预警
             */
        protected FishWarn(): void {
            super.FishWarn();
            GameFacade.Instance.HuntSceneMng.warnShow(this._fishInfo._mFishType);
        }

        protected GetFishSize(): number {
            return CommonConstant.OutWallOffset_mermaid;
        }

        protected PlaySwimmingAction2() {
            let self = this;
            if (self.PlayAnimation("Swim2")) {
                Laya.timer.once(3000, self, function () {
                    self.PlayAction(EnumData.ENUM_FISH_STATE.SWIMMING);
                });
            }
        }
    }

    export class Fish26 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }

        /**
       * 鱼预警
       */
        protected FishWarn(): void {
            super.FishWarn();
            GameFacade.Instance.HuntSceneMng.warnShow(this._fishInfo._mFishType);
        }

        protected GetFishSize(): number {
            return CommonConstant.OutWallOffset_ship;
        }

    }

    /** 炸弹鱼*/
    export class Fish27 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }

        /**获取屏幕中，能被炸弹鱼炸到的鱼*/
        public GetRelatedFishsId(): (number | Long)[] {
            let getFishRate = function (type: number) {
                for (var i = 0; i < fishInfo.length; i++) {
                    if (fishInfo[i].fish_type == type) {
                        return fishInfo[i].fish_rate;
                    }
                }
            }

            let relatedFishsIdArr: Array<number | Long> = [];
            let fishObjDic = FishController.Instance.FishObjDict;
            let fishInfo = NetLogin.Instance._playerLoginInfo.fish_info;
            for (let key in fishObjDic) {
                let isInWall = fishObjDic[key].CheckIsFishInWall();
                let type = fishObjDic[key]._MFishInfo._mFishType;
                let rate = utils.CommonUtils.numberFixed(getFishRate(type));
                if (rate <= 30 && isInWall) {
                    relatedFishsIdArr.push(fishObjDic[key]._MFishInfo._mFishId);
                }
            }
            return relatedFishsIdArr;
        }
    }


    export class FishKing1 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class FishKing2 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class FishKing3 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class FishKing4 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }

    export class FishKing5 extends FishBase {
        Init(fishInfo: FishInfo): void {
            super.Init(fishInfo);
        }
    }
}
export default HF3DFishClasses;