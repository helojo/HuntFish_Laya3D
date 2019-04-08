import GameFacade from "../GameFacade";
import BaseManager from "./BaseManager";
import { FishBaseConfig } from "../config/FishBaseConfig";
import FishBaseConfigData from "../game/Fish/FishBaseConfigData";
import { utils } from "../utils/CommonUtil";

export default class ConfigManager extends BaseManager {


    private _fishBaseConfig: String;
    /** 鱼基础数据配置*/
    public get FishBaseConfig(): String {
        return this._fishBaseConfig;
    }

    private _fishPathConfig: { [pathID: number]: FishWayPoint } = {};//正常鱼路径
    private _fishPathConfigTranform: { [pathID: number]: FishWayPoint } = {};// 转换x y后的鱼路径
    /** 鱼路劲数据配置(key:fishPathID   value:FishWayPoint)*/
    public get FishPathConfig() {
        return GameFacade.Instance.HuntSceneMng._bTransform ? this._fishPathConfigTranform : this._fishPathConfig;
        // if (!GameFacade.Instance.HuntSceneMng._bTransform) {
        //     return this._fishPathConfig;
        // }
        // else {
        //     utils.CommonUtils.log("------------------- _fishPathConfigTranform --------------------");
        //     return this._fishPathConfigTranform;
        // }
    }

    private _fishOffsetConfig: Laya.WeakObject = new Laya.WeakObject();
    /** 鱼位置偏移数据配置(key:fishTypeID   value:FishWayPoint)*/
    public get FishOffsetConfig(): Laya.WeakObject {
        return this._fishOffsetConfig
    }


    public _fishPathLengthConfig: { [key: number]: Laya.WeakObject } = {};
    public GetfishPathLengthKey(fishType: number, pathID: number) {
        return fishType * 1000000 + pathID;
    }

    /** 是否执行了init*/
    private _bCompleteInit: boolean = false;
    public Init() {
        if (false == this._bCompleteInit) {
            this._bCompleteInit = true;
            let self = this;

            GameFacade.Instance.ResourceMng.PreloadingRes<String>("configfile/fishBaseConfig.json", Laya.Loader.JSON, function (loadedRes: String) {
                self._fishBaseConfig = loadedRes;
                FishBaseConfigData.FishSwimConfig.ParseFishBehaviorData();
            });

            GameFacade.Instance.ResourceMng.PreloadingRes<Laya.WeakObject>("configfile/fishPathConfig.json", Laya.Loader.JSON, function (loadedRes: Laya.WeakObject) {
                for (let iterator in loadedRes) {
                    let fwp = new FishWayPoint(iterator, self.GetPathLength(loadedRes[iterator]));
                    let fwp2 = new FishWayPoint(iterator, self.GetPathLength(loadedRes[iterator]));
                    self._fishPathConfig[iterator] = fwp;
                    self._fishPathConfigTranform[iterator] = fwp2;
                }

                TransformFishConfig();
            });

            GameFacade.Instance.ResourceMng.PreloadingRes<Laya.WeakObject>("configfile/fishOffsetConfig.json", Laya.Loader.JSON, function (loadedRes: Laya.WeakObject) {
                for (let iterator in loadedRes) {
                    let fwp = new FishWayPoint(iterator, self.GetPathLength(loadedRes[iterator]));
                    self._fishOffsetConfig.set(iterator, fwp);
                }
            });

            var TransformFishConfig = function () {
                let fishConfig = self._fishPathConfigTranform;
                for (let key in fishConfig) {
                    let points = fishConfig[key]._points;
                    for (var i = 0; i < points.length; i++) {
                        points[i].x = -points[i].x;
                        points[i].y = -points[i].y;
                    }
                }
                utils.CommonUtils.log("-----------  self._fishPathConfig = ", self._fishPathConfig);
                utils.CommonUtils.log("-----------  self._fishPathConfigTranform = ", self._fishPathConfigTranform);
            }
        }
    }

    /**
     * 计算并返回路径长度
     * @param waypoints 路径上所有的点
     */
    private GetPathLength(waypoints: string[]): Array<Object> {
        let totalLength: number = 0;
        var vector3Arr: Array<Laya.Vector3> = new Array<Laya.Vector3>();
        for (let index = 0; index < waypoints.length - 1; index++) {
            let arr: string[] = waypoints[index].replace('(', '').replace(')', '').split(',');
            /** x轴乘以-1是因为json数据从unity引擎导出来的，其坐标系与laya坐标系x值正好相反*/
            let vec: Laya.Vector3 = new Laya.Vector3(-1 * Number(arr[0]), Number(arr[1]), Number(arr[2]));

            let arr1: string[] = waypoints[index + 1].replace('(', '').replace(')', '').split(',');
            let vec1: Laya.Vector3 = new Laya.Vector3(-1 * Number(arr1[0]), Number(arr1[1]), Number(arr1[2]));
            vector3Arr.push(vec);
            if (1 + index == waypoints.length - 1)
                vector3Arr.push(vec1);
            totalLength += Laya.Vector3.distance(vec, vec1);
        }
        return new Array<Object>(vector3Arr, totalLength);
    }
}


export class FishWayPoint {
    public _key: string;
    public _points: Array<Laya.Vector3>;
    public _wayLength: number;
    public constructor(key: string, objs: Array<Object>) {//points: Laya.Vector3[], wayLength: number) {
        this._key = key;
        this._points = objs[0] as Array<Laya.Vector3>;
        this._wayLength = objs[1] as number;
    }
}


export class FishPathLength {
    public _nodeBeginPoint: number;
    /** 鱼某段路劲的移动速率*/
    public _SpeedRate: number;
    public _pathLength: number;
    public constructor(point: number, speed: number, length: number) {
        this._nodeBeginPoint = point;
        this._SpeedRate = speed;
        this._pathLength = length;
    }
}