import BaseManager from "./BaseManager";
import LoadingPanel from "../game/Panel/LoadingPanel";
import GameFacade from "../GameFacade";
import EnumData from "../Enum/EnumData";
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import CommonConstant from "../constant/CommonConstant";
/**
* name 
*/

export default class ResourceManger extends BaseManager {

    public LoadAssets2D(resUrl, callBack: Function) {
        Laya.loader.load(resUrl, Laya.Handler.create(this, callBack));
    }

    //释放2d资源     assetsUrl：图集资源路径
    public ReleaseAll2D(assetsUrl: string): void {
        Laya.loader.clearRes(assetsUrl);
    }

    /**
     * 加载UI资源
     * @param image 
     * @param fui 
     * @param load 
     */
    public loadUI(image: string, fui: string, call: any, load: Function): void {
        Laya.loader.load([
            { url: image, type: Loader.IMAGE },
            { url: fui, type: Loader.BUFFER },
        ], Handler.create(call, load))
    }

    /**
     * 加载主面板
     * @param pack 
     * @param panel 
     */
    public getMainCom(pack: string, packName: string, panel: string): fairygui.GComponent {
        fairygui.UIPackage.addPackage(pack);
        var mainCom: fairygui.GComponent = null;
        // // console.log("packName");
        // // console.log(packName);
        // // console.log(panel);
        mainCom = fairygui.UIPackage.createObject(packName, panel).asCom;
        mainCom.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        GameFacade.Instance.SceneMng.AddFUI(mainCom);
        return mainCom;
    }

    /**
     * 移除UI包
     */
    public removeUIPackage(pack: string): void {
        fairygui.UIPackage.removePackage(pack);
    }

    /**
     * 从对象池中获得对象 没有该对象 自动创建对象池
     * @param s 
     * @param cla 
     */
    public getPoolObject(s: string, cla: any): any {
        Laya.Pool.getItemByClass(s, cla);
    }
    /**
     * 回收到对象池中
     * @param obj 
     * @param s 
     */
    public removePoolObject(obj: any, s: string): void {
        Laya.stage.removeChild(obj);
        Laya.Pool.recover(s, obj);
    }
    /**
     * 预加载资源
     * @param resUrl 资源路劲
     * @param loadResCallback 加载完成的回调 
     */
    public PreloadingRes<T>(resUrl, resType: string, loadResCallback: Function) {
        Laya.loader.load([{ url: resUrl, type: resType }],
            Laya.Handler.create(this, function (url: string): void {
                let loadedRes = Laya.loader.getRes(url) as T;
                loadResCallback(loadedRes);
            }
                , [resUrl]));
    }

    public LoadAssets3D<T>(resUrl, loadResCallback: Function, param: any[] = null) {
        Laya.Scene3D.load(resUrl, Laya.Handler.create(this, function (res: T): void {
            loadResCallback(res, param);
        }));
    }
    //加载模型接口（预加载）
    public LoadSprite3D<T>(resUrl, loadResCallback: Function, param: any[] = null) {
        Laya.Sprite3D.load(resUrl, Laya.Handler.create(this, function (res: T): void {
            loadResCallback(res, param);
        }));
    }
    //实例化缓存对象
    public CloneSprite3D(Sp3D: Laya.Sprite3D, parent: Laya.Node): Laya.Sprite3D {
        var s3D: Laya.Sprite3D = Laya.Sprite3D.instantiate(Sp3D, parent) as Laya.Sprite3D;
        s3D.transform.localPosition = new Laya.Vector3(0, 0, 0);
        s3D.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
        s3D.transform.localScale = Laya.Vector3.ONE;
        return s3D;
    }


    /**
     * 释放场景所有资源     assetsUrl：场景的json文件路径
     * @param assetsUrl 
     */
    public ReleaseAll3D(assetsUrl: string): void {
        //加载盘释放的资源配置表
        Laya.loader.load([{ url: assetsUrl, type: Laya.Loader.JSON }],
            Laya.Handler.create(this, this.OnAssetsOK, [assetsUrl]));
    }
    private OnAssetsOK(assetsUrl: string): void {
        //获取加载的数据（Json数组转化成数组）
        var arr: any = Laya.loader.getRes(assetsUrl);
        for (var i: number = arr.length - 1; i > -1; i--) {
            //根据资源路径获取资源（Resource为材质、贴图、网格等的基类）
            var resource: Laya.Resource = Laya.loader.getRes(arr[i].url);
            //资源释放
            if (resource) {
                resource.destroy();
            }
        }
    }

    /**
     * 加载新场景
     * @param newfuiArr 
     * @param newLs 
     * @param callBack 
     */
    public LoadNewScene(newfuiArr, newLs: string, callBack: Function): void {
        let self = this;
        //GameFacade.Instance.SceneMng.ClearBeforUI(); //清理上个scene的ui
        //加载2d资源  Laya.loader.load
        //let loading:LoadingPanel = new LoadingPanel();
        let loading: LoadingPanel = GameFacade.Instance.SceneMng.Create(EnumData.EnumPanelType.LoadingPanel) as LoadingPanel;
        loading.SetContent("加载2d资源 ");
        Laya.loader.load(newfuiArr,
            Laya.Handler.create(this, () => {
                Load3DRes();
            }),
            Laya.Handler.create(this, function (value: number): void {
                if (null != loading) {
                    loading.SetProgress(value);
                }
            }),
            null, 1, true, CommonConstant._groupName_fuiRes
        );

        //预加载3d资源  Laya.loader.create
        function Load3DRes() {
            loading.SetContent("加载3d资源 ");
            Laya.loader.create(newLs,
                Laya.Handler.create(this, function (sc: Laya.Scene3D): void {
                    if (newLs == CommonConstant._huntScenePath) {
                        Laya.loader.create(CommonConstant._gunScenePath, Laya.Handler.create(this, () => {
                            GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.LoadingPanel);
                            callBack(sc);
                        }), null);
                    }
                    else {
                        GameFacade.Instance.SceneMng.close(EnumData.EnumPanelType.LoadingPanel);
                        callBack(sc);
                    }
                }),
                Laya.Handler.create(this, function (value: number): void {
                    if (null != loading) {
                        loading.SetProgress(value);
                    }
                }),
                null, );
        }
    }

    /**
     * 通过资源组名字释放资源
     * @param groupName 资源组名字
     */
    public ReleaseFuiResByGroupName(groupName: string): void {
        Laya.loader.clearResByGroup(groupName);
    }

    /**
     * 加载贴图资源
     */
    public LoadTexture2D(path: string, callBack: Function) {
        Laya.Texture2D.load("unityRes/Texture/" + path, Laya.Handler.create(this, function (t: Laya.Texture2D): void {
            callBack(t);
        }));
    }
}
