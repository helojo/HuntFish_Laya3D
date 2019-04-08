//兼容老版本
var obj = document.getElementById("comontVer");
if (obj) {
    comVersion = obj.getAttribute("value");
}

var LocalLoadRes = (navigator.userAgent.indexOf("APP_Type/wlcasino") > -1) ? true : false;
var Overspread = false; //是否铺满
var IsWanli = (navigator.userAgent.indexOf("APP_Type/wlcasino") > -1) ? true : false; //如果万利的 需要特殊处理 一定要铺满
var loadingResConfig = null;
//函数
var AdaptFun = null;
var getBgScale = null;

(function () {
    var downResCount = 0;
    var logoLandscape = document.getElementById("logo-landscape");
    var logoPortrait = document.getElementById("logo-portrait");
    var splashLogoLandscape = document.getElementById("splashLogo-landscape");
    var splashLogoPortrait = document.getElementById("splashLogo-portrait");
    var splash = document.getElementById("splash");
    var versionLabel = document.getElementById("version-label");
    var gameVersionObj = document.getElementById("gameVersion");
    if (gameVersionObj) {
        gameVersion = gameVersionObj.getAttribute("value");
    }
    versionLabel.innerText = "V " + gameVersion;
    splash.style.backgroundColor = "#000000";
    if (LocalLoadRes && IsWanli) {
        logoPortrait.style.bottom = "0%";
    }
    document.body.style.backgroundColor = "black";

    //检测Loading url 的有效性 获取其中一条链接
    var LoadingUrlValid = function () {
        var resPath = null; //loading连接地址
        //获取loading 的加载 配置链接
        var obj = document.getElementById("gameLoading");
        if (obj) {
            resPath = obj.getAttribute("value");
        }
        if (resPath && LocalLoadRes == false) {
            var resUrl = Base64Util.DecodeValue(resPath);
            var resUrlReq = new XMLHttpRequest();
            resUrlReq.open("get", resUrl);
            resUrlReq.responseType = "text";
            //跨域之后服务器没有返回
            resUrlReq.onload = function () {
                if (resUrlReq.status == 200 || resUrlReq.status == 304) {
                    try {
                        var tempConfig = JSON.parse(resUrlReq.responseText);
                        //进度条配置
                        if (tempConfig && tempConfig.ProBarFarHImageUrl && tempConfig.ProBarFarHImageUrl != "" && LocalLoadRes == false) {
                            Overspread = tempConfig.fit == 1 ? true : false;
                            var progressConfigUrl = tempConfig.ProBarFarHImageUrl;
                            RemoteConfig(tempConfig);
                            //访问其中一条链接 查看是否可用
                            var configHttp = new XMLHttpRequest();
                            configHttp.open("get", progressConfigUrl);
                            configHttp.responseType = "text";
                            configHttp.onload = function () {
                                DownLoadAllRes();
                            };
                            configHttp.onerror = function (err) {
                                LocalConfig();
                            };
                            configHttp.send();
                        } else {
                            LocalConfig();
                        }
                    } catch (error) {
                        console.log("获取资源地址解析错误 :  ", +error);
                        LocalConfig();
                    }
                } else {
                    console.log("loading loadingResConfig " + resUrlReq.status);
                    Overspread = false;
                    LocalConfig();
                }
            }
            //跨域之后服务器没有返回 用err检测
            resUrlReq.onerror = function (err) {
                console.log("loading loadingResConfig request onerror");
                Overspread = false;
                LocalConfig();
            }
            resUrlReq.send();
        } else {
            LocalConfig();
        }
    };

    //本地资源赋值
    var LocalConfig = function () {
        LocalLoadRes = true;
        loadingResConfig = {
            HpImageUrl: "../fish_common/progress/common_loading_l.jpg" + "?v=" + comVersion,
            ProBarFarHImageUrl: "",
            ProBarFarOImageUrl: "../fish_common/progress/progressBar.png" + "?v=" + comVersion,
            ProBarFarTImageUrl: "../fish_common/progress/AniPng.png" + "?v=" + comVersion,
            ProBarFarWImageUrl: "../fish_common/progress/AniPng.json" + "?v=" + comVersion,
            ProBarImageUrl: "../fish_common/progress/progressBarBg.png" + "?v=" + comVersion,
            VpImageUrl: "../fish_common/progress/common_loading_p.jpg" + "?v=" + comVersion,
            version: comVersion,
        };
        if (LocalLoadRes && IsWanli) {
            loadingResConfig.HpImageUrl = "../loading/Hunter/App_loading.jpg" + "?v=" + comVersion;
            loadingResConfig.VpImageUrl = "../loading/Hunter/App_loading_shuban.jpg" + "?v=" + comVersion;
            //备选地址
            loadingResConfig.HpImageUrlBak = "../fish_common/progress/App_loading.jpg" + "?v=" + comVersion;
            loadingResConfig.VpImageUrlBaK = "../fish_common/progress/App_loading_shuban.jpg" + "?v=" + comVersion;
        }
        DownLoadAllRes();
    };

    //远程资源赋值
    var RemoteConfig = function (config) {
        loadingResConfig = {
            HpImageUrl: config.HpImageUrl + "?v=" + config.version,
            ProBarFarHImageUrl: config.ProBarFarHImageUrl + "?v=" + config.version,
            ProBarFarOImageUrl: config.ProBarFarOImageUrl + "?v=" + config.version,
            ProBarFarTImageUrl: config.ProBarFarTImageUrl + "?v=" + config.version,
            ProBarFarWImageUrl: config.ProBarFarWImageUrl + "?v=" + config.version,
            ProBarImageUrl: config.ProBarImageUrl + "?v=" + config.version,
            VpImageUrl: config.VpImageUrl + "?v=" + config.version,
            version: config.version,
        };
    };

    //loading图根据不同尺寸进行适配
    AdaptFun = function () {
        var progressScale = 1.0;
        var verLabelOffset = 34;
        var windowWidth = document.documentElement.clientWidth;
        var windowHeight = window.innerHeight > document.documentElement.clientHeight ? window.innerHeight :
            document.documentElement.clientHeight;
        if (windowHeight < windowWidth) {
            versionLabel.style.fontSize = (progressConfig.g_fontSize * getBgScale()) + "px";
            if (navigator.userAgent.indexOf("Mobile") > -1) {
                versionLabel.style.bottom = (verLabelOffset * getBgScale()) + "px";
            }
            if (navigator.userAgent.indexOf("Devcice_Type/iPhoneX") > -1 || Overspread || IsWanli) {
                appleXAdapt(windowHeight, windowWidth);
            } else {
                normalAdapt(windowHeight, windowWidth);
            }
            logoLandscape.style.display = 'block';
            logoPortrait.style.display = 'none';
        } else {
            versionLabel.style.fontSize = (progressConfig.g_fontSize * getBgScale()) + "px";
            if (navigator.userAgent.indexOf("Mobile") > -1) {
                versionLabel.style.bottom = (verLabelOffset * getBgScale()) + "px";
            }
            logoLandscape.style.display = 'none';
            logoPortrait.style.display = 'block';
            if (navigator.userAgent.indexOf("Devcice_Type/iPhoneX") > -1 || Overspread || IsWanli) {
                appleXAdapt(windowHeight, windowWidth);
            } else {
                normalAdapt(windowHeight, windowWidth);
            }
        }
    };

    //一般适配 iphonex  全屏拉伸适配
    var appleXAdapt = function (windowHeight, windowWidth) {
        if (windowHeight < windowWidth) {
            splashLogoLandscape.width = windowWidth;
            splashLogoLandscape.height = windowHeight;
        } else {
            splashLogoPortrait.width = windowWidth;
            splashLogoPortrait.height = windowHeight;
        }
    };

    //获取loading的缩放尺寸
    getBgScale = function () {
        /*浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）*/
        var windowWidth = document.documentElement.clientWidth;
        var windowHeight = window.innerHeight > document.documentElement.clientHeight ? window.innerHeight :
            document.documentElement.clientHeight;
        var nLogoWidth = 0;
        var nLogoHeight = 0;
        if (windowWidth > windowHeight) {
            nLogoWidth = splashLogoLandscape.naturalWidth > 0 ? splashLogoLandscape.naturalWidth :
                1136;
            nLogoHeight = splashLogoLandscape.naturalHeight > 0 ? splashLogoLandscape.naturalHeight :
                640;
        } else {
            nLogoWidth = splashLogoPortrait.naturalWidth > 0 ? splashLogoPortrait.naturalWidth :
                640;
            nLogoHeight = splashLogoPortrait.naturalHeight > 0 ? splashLogoPortrait.naturalHeight :
                1136;
        }
        var scaleOffsetX = windowWidth / nLogoWidth;
        var scaleOffsetY = windowHeight / nLogoHeight;
        var scaleMin = Math.min(scaleOffsetX, scaleOffsetY);
        return scaleMin;
    };
    //一般适配 有黑边的
    var normalAdapt = function (windowHeight, windowWidth) {
        if (windowHeight < windowWidth) {
            var scaleMin = getBgScale();
            var nLogoWidth = splashLogoLandscape.naturalWidth > 0 ? splashLogoLandscape.naturalWidth :
                1136;
            var nLogoHeight = splashLogoLandscape.naturalHeight > 0 ? splashLogoLandscape.naturalHeight :
                640;
            var landscapeWidth = nLogoWidth * scaleMin;
            var landscapeHeight = nLogoHeight * scaleMin;
            splashLogoLandscape.width = landscapeWidth;
            splashLogoLandscape.height = landscapeHeight;

        } else {
            var nLogoWidth = splashLogoPortrait.naturalWidth > 0 ? splashLogoPortrait.naturalWidth :
                640;
            var nLogoHeight = splashLogoPortrait.naturalHeight > 0 ? splashLogoPortrait.naturalHeight :
                1136;
            var scaleOffsetX = windowWidth / nLogoWidth;
            var scaleOffsetY = windowHeight / nLogoHeight;
            var scaleMin = Math.min(scaleOffsetX, scaleOffsetY);
            var scaleScreen = windowHeight / windowWidth; //竖屏状态下且高宽比大于等于1.34时
            if (scaleScreen >= 1.34) scaleMin = scaleOffsetX;

            var portraitWidth = nLogoWidth * scaleMin;
            var portraitHeight = nLogoHeight * scaleMin;
            splashLogoPortrait.width = portraitWidth;
            splashLogoPortrait.height = portraitHeight;
        }
    };

    //加载背景图
    var LoadingBgRes = function (_resConfig) {
        splashLogoLandscape.src = loadingResConfig.HpImageUrl;
        splashLogoPortrait.src = loadingResConfig.VpImageUrl;
        splashLogoLandscape.onload = function () {
            console.log("loading bg onloaded");
            AdaptFun();

            //关闭原生过渡界面
            SendNativeCloseUi();
        };
    };

    /**
     * 下载资源，如果首选地址下载失败，那么用备用地址
     * @param {*} url 首选地址
     * @param {*} backupUrl 备用地址
     */
    var DownLoadRes = function (url, backupUrl) {
        var secondeUrl = backupUrl;
        var tempUrl = url;
        var configHttp = new XMLHttpRequest();
        configHttp.open("get", url);
        //configHttp.responseType = "text";
        configHttp.onerror = function (err) {
            console.log("load error :  " + url);
            failLoad();
        };
        configHttp.onload = function () {
            if (configHttp.status == 200 || configHttp.status == 304) {
                console.log("load sucess:  " + configHttp.responseURL);
                downResCount++;
                loadEngine();
            } else {
                console.log("load not found:  " + tempUrl);
                failLoad();
            }
        };
        var failLoad = function () {
            //如果备用地址依然失败 那么略过
            if (secondeUrl == undefined || tempUrl == secondeUrl) {
                console.log("load backup resouces faile ", secondeUrl);
                downResCount++;
                loadEngine();
            } else {
                configHttp.open("get", secondeUrl);
                tempUrl = secondeUrl;
                configHttp.send();
            }
        };
        var loadEngine = function () {
            if (downResCount == 6) {
                console.log("load engine");
                LoadingBgRes();
                LoadEngin();
            }
        };
        configHttp.send();
    };

    //下载所有loading资源
    var DownLoadAllRes = function () {
        //下载全部loading资源
        DownLoadRes(loadingResConfig.HpImageUrl, loadingResConfig.HpImageUrlBak);
        DownLoadRes(loadingResConfig.ProBarFarOImageUrl);
        DownLoadRes(loadingResConfig.ProBarFarTImageUrl);
        DownLoadRes(loadingResConfig.ProBarFarWImageUrl);
        DownLoadRes(loadingResConfig.ProBarImageUrl);
        DownLoadRes(loadingResConfig.VpImageUrl, loadingResConfig.VpImageUrlBaK);
    };

    //加载引擎
    var LoadEngin = function () {
        var mainId = document.getElementById("gameMainFile");
        var mainFile = "main.js";
        if (mainId) {
            mainFile = mainId.getAttribute("value");
        } else {
            mainFile = mainFile + "?v=" + gameVersion;
        }
        console.log("加载main  " + mainFile);
        var mainjs = document.createElement('script');
        mainjs.async = false;
        mainjs.src = mainFile;
        document.body.appendChild(mainjs);

        //进度条动画
        var progressAnijs = document.createElement('script');
        progressAnijs.async = false;
        progressAnijs.src = '../fish_common/progress/ProgressAni.js' + '?v=' + comVersion;
        document.body.appendChild(progressAnijs);
    };

    //关闭原生过渡界面
    var SendNativeCloseUi = function () {
        //发送平台关闭显示默认背景
        setTimeout(function () {
            var u = navigator.userAgent;
            if (u.indexOf("Browser_Type/Android_APP") > -1) {
                if (u.indexOf("initcomplete_flag/needinitcomplete") != -1) {
                    var app = navigator.appVersion;
                    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
                    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                    if (isIOS) {
                        //这里APP大厅插入太多的 Andorid值 不好判定是否在安卓
                        if (u.indexOf('IOS_UIWebView') > -1) {
                            // 使用  UIWebView 时执行该方法
                            window.gameInitComplete(""); // for UIWebView
                        } else {
                            window.webkit.messageHandlers.gameInitComplete.postMessage("");
                        }
                    } else {
                        if (isAndroid) {
                            window.AndroidApp.gameInitComplete();
                        }
                    }
                }
            }
        }, 100);
    }

    // // 划动全屏 功能显示
    // gameLogicScroll = function () {
    //     console.log("Scroll", Scroll);
    //     if (self.frameElement && self.frameElement.tagName == "IFRAME") {
    //         //关闭滑动全屏
    //         FullScreen_OpenIframe(true);
    //     } else {
    //         if (!Scroll || Scroll == 1) {
    //             //恢复滑动全屏
    //             FullScreen_OpenIframe(false);
    //         } else if (Scroll == 0) {
    //             //关闭滑动全屏
    //             FullScreen_OpenIframe(true);
    //         }
    //     }
    // }

    //document 添加点击事件
    window.onload = function () {};

    //AdaptFun();
    if (window.frameElement != null) {
        window.frameElement.addEventListener("resize", AdaptFun);
    } else {
        window.addEventListener("resize", AdaptFun);
    }
    LoadingUrlValid();
})();