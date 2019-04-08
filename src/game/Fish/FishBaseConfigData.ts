import GameFacade from "../../GameFacade";
import { FishBaseConfig } from "../../config/FishBaseConfig";

/**
 * 重新定义表结构类FishBaseConfig，方便程序调用处理
 */
export module FishBaseConfigData {
    /** 鱼路劲节点数据类*/
    export class PathNodeInfo {
        /** 鱼某段路劲的节点起始点*/
        public _NodeBeginPoint: number;
        /** 鱼某段路劲的移动速率*/
        public _SpeedRate: number;
        /** 鱼某段路劲的生命时长*/
        public _LifeTime: number = 0;
        /** 鱼某段路劲的路程长度*/
        public _pathLength: number;
    }

    /** 鱼的行为数据类*/
    export class FishBehavior {
        /** 停留行为的起始节点*/
        public _StayPath: number = 0;
        /** 停留行为的时长*/
        public _StayTime: number = 0;
        /** 存放路径节点速率（下标为偶数的是key值路劲占比，下标为奇数的是value为速率，顺序相邻的两个为一组）*/
        public _PathNodeSpeed: Array<PathNodeInfo> = new Array<PathNodeInfo>();
        /** 鱼的生命总时长*/
        public _FishTotalLiftTime: number = 0;
    }

    /** 鱼的动作数据类*/
    export class FishAniClass {
        //动画名
        public _SwimName: string;
        public _HitName: string;
        public _DeadName: string;
        public _StayName: string;
        //动画耗时
        public _HitTime: number;
        public _DeadTime: number;
        public _StayTime: number;
    }

    export class FishSwimConfig {
        /** 鱼的行为数据列表（key为鱼类型ID;value为鱼行为类）*/
        public static _FishBehaviorDict: Laya.WeakObject = new Laya.WeakObject();
        /** 鱼的动作数据列表（key为鱼类型ID;value为鱼动作类）*/
        public static _FishAnimateDict: Laya.WeakObject = new Laya.WeakObject();

        /** 配置数据预处理，方便调用*/
        public static ParseFishBehaviorData(): void {
            this._FishBehaviorDict = new Laya.WeakObject();
            this._FishAnimateDict = new Laya.WeakObject();
            let dict = GameFacade.Instance.ConfigMng.FishBaseConfig;
            for (let iterator in dict) {
                let element = dict[iterator];
                let fbc = new FishBaseConfig(element);
                let stay = fbc._StatyBehavior;
                let stayData = stay.split(',');
                let speed = fbc._SpeedBehavior;
                //游动行为 停留  和 速度变化
                let fishBehavior = new FishBehavior();
                if (stayData.length > 1) {
                    fishBehavior._StayPath = Number(stayData[0]);
                    fishBehavior._StayTime = Number(stayData[1]);
                }

                if ("" != speed) {
                    let speedData = speed.split('|');
                    for (let i = 0; i < speedData.length; i++) {
                        let speedTemp = speedData[i].split(',');
                        let tinfo: PathNodeInfo = new PathNodeInfo();
                        tinfo._NodeBeginPoint = Number(speedTemp[0]);
                        tinfo._SpeedRate = Number(speedTemp[1]);
                        fishBehavior._PathNodeSpeed.push(tinfo);
                    }
                }
                this._FishBehaviorDict.set(fbc._FishTypeID, fishBehavior);

                //动画
                let aniClass = new FishAniClass();
                let swimAni = fbc._SwimAni;
                let deadAni = fbc._DeadAni.split(',');
                let hitAni = fbc._HitAni.split(',');
                let stayAni = fbc._StayAni1.split(',');
                aniClass._SwimName = swimAni;
                if (deadAni.length > 1) {
                    aniClass._DeadName = deadAni[0];
                    aniClass._DeadTime = Number(deadAni[1]);
                }
                if (hitAni.length > 1) {
                    aniClass._HitName = hitAni[0];
                    aniClass._HitTime = Number(hitAni[1]);
                }
                if (stayAni.length > 1) {
                    aniClass._StayName = stayAni[0];
                    aniClass._StayTime = Number(stayAni[1]);
                }
                this._FishAnimateDict.set(fbc._FishTypeID, aniClass);
            }
        }

        /**
         * 复制鱼行为数据
         * @param type 鱼规格类型ID
         */
        public static CopyFishBehaviorData(type: number) {
            let fb: FishBehavior = new FishBehavior();
            let fbd: FishBehavior = FishSwimConfig._FishBehaviorDict.get(type);
            fb._StayPath = fbd._StayPath;
            fb._StayTime = fbd._StayTime;
            fb._PathNodeSpeed = new Array<PathNodeInfo>();
            for (let index = 0; index < fbd._PathNodeSpeed.length; index++) {
                const element = fbd._PathNodeSpeed[index];
                let tpni = new PathNodeInfo();
                tpni._NodeBeginPoint = element._NodeBeginPoint;
                tpni._SpeedRate = element._SpeedRate;
                fb._PathNodeSpeed.push(tpni);
            }
            return fb;
        }

    }
}
export default FishBaseConfigData