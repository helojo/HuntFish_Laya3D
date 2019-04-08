var FullScreen_OpenIframe = null;

(function () {
    'use strict';
    var gameContainer = document.getElementById("Cocos2dGameContainer");
    var gameCanvas = document.getElementById("GameCanvas");
    var browserType = null; //浏览器类型
    var slideBg = null;
    var isShowSlide = false;
    var addDocHeight = 1.1;
    var isOpenIframe = false;

    var metaScroll = document.getElementById("scroll");
    var newScroll = 1; // 0 是关闭 1 打开默认是打开 ， null 打开。
    if (metaScroll) {
        let value = metaScroll.getAttribute("value");
        newScroll = Base64Util.DecodeValue(value);
    }
    console.log("newScroll ", newScroll);

    gameContainer.style.textAlign = "center";
    gameContainer.style.position = "fixed";

    //鼠标样式修改
    function mouseStyle() {
        var imgUrl = "../fish_common/fullScreen/mouse.png?v=" + comVersion;
        gameCanvas.style.cursor = "url(" + imgUrl + "),auto";

        //鼠标进来
        gameContainer.addEventListener('mouseenter', function (event) {
            gameCanvas.style.cursor = "url(" + imgUrl + "),auto";
        }, false);

        //鼠标离开
        gameContainer.addEventListener('mouseleave', function (event) {
            gameCanvas.style.cursor = 'auto';
        }, false);
    };

    //创建滑动动画
    function createSlide() {
        //黑色背景
        slideBg = document.createElement("div");
        slideBg.style.width = "100%";
        slideBg.style.height = "100%";
        slideBg.style.backgroundColor = "none";
        slideBg.id = "slideBg";
        slideBg.style.display = "none";
        slideBg.style.zIndex = 10000;
        slideBg.style.justifyItems = "center";
        slideBg.style.alignItems = "flex-start";
        document.body.appendChild(slideBg);

        //手指图
        var imgUrl = "";
        var language = Base64Util.getUrlParam("language");
        if (language == 'en-us') {
            imgUrl = "../fish_common/fullScreen/arrow_en.png?v=" + comVersion;
        } else {
            imgUrl = "../fish_common/fullScreen/arrow.png?v=" + comVersion;
        }
        var ima = document.createElement("img");
        ima.src = imgUrl;
        ima.id = "slide";
        ima.style.zIndex = 10001;
        //ima.style.position = "absolute";
        //ima.style.left = "25%";
        slideBg.appendChild(ima);
    };
    //隐藏滑动动画
    function slideHide() {
        if (slideBg && isShowSlide) {
            isShowSlide = false;
            slideBg.style.display = "none";
            gameContainer.style.opacity = 1;
            slideBg.style.backgroundColor = "none";
            //去除触摸监听
            RemoveTouchEvent();
            setTimeout(() => {
                recoverSize();
            }, 100);
        }
    };

    //显示滑动动画
    function slideShow() {
        if (isOpenIframe) {
            return;
        }
        if (self.frameElement && self.frameElement.tagName == "IFRAME") {
            return;
        }
        if (newScroll == 0) {
            return;
        }
        if (slideBg == null) {
            createSlide();
        }
        recoverSize();
        if (slideBg && isShowSlide == false) {
            isShowSlide = true;
            slideBg.style.display = "grid";
            slideBg.style.justifyItems = "center";
            slideBg.style.alignItems = "flex-start";
            document.body.style.backgroundColor = "black";
            gameContainer.style.opacity = 0.2;
            //添加触摸监听
            AddTouchEvent();
        }
        if (isShowSlide) {
            //页面需要拉长 才能进行滑动
            var addScreenHeight = screen.width;
            if (window.innerWidth < window.innerHeight) {
                addScreenHeight = screen.height;
            }
            if (document.documentElement.scrollHeight < document.documentElement.clientHeight) {
                document.body.style.height = addScreenHeight * addDocHeight + 'px';
            }
            window.scrollTo(0, 0);
        }
    };

    // //滑动动画适配 暂时不用
    // function adaptSlide() {
    //     let gifRate = 142 / 334; //滑动图的长宽比
    //     var slide = document.getElementById("slide");
    //     let tempWidth = document.documentElement.clientWidth * 0.5;
    //     slide.style.width = tempWidth + "px";
    //     slide.style.height = gifRate * tempWidth + "px";
    // };

    //设备浏览器判定
    function browserDistinguish() {
        var ua = navigator.userAgent;
        if (ua.match('Android') == "Android" || navigator.platform.indexOf("Linux aarch") > -1) {
            //谷歌浏览器
            if (ua.indexOf("AppleWebKit") > -1 && ua.indexOf("LieBao") == -1 && ua.indexOf("OPR") == -1 && ua.indexOf("UCBrowser") == -1 && ua.indexOf("MiuiBrowser") == -1) {
                browserType = "Chrome";
                if (ua.indexOf("45.0.") > -1) {
                    browserType = "360Browser";
                }
            }
            //欧鹏浏览器
            if (ua.indexOf("OPR") > -1) {
                browserType = "Opera";
            }
            //猎豹浏览器
            if (ua.indexOf("LieBao") > -1) {
                browserType = "LieBao";
            }
            //uc浏览器
            if (ua.indexOf("UCBrowser") > -1) {
                browserType = "UC";
            }
            //小米浏览器
            if (ua.indexOf("MiuiBrowser") > -1) {
                browserType = "XiaoMi";
            }
            //火狐浏览器
            if (ua.indexOf("Firefox") > -1) {
                browserType = "Firefox";
            }
            //搜狗浏览器
            if (ua.indexOf("SogouMobileBrowser") > -1) {
                browserType = "Sogou";
            }
            //百度浏览器
            if (ua.indexOf("baidubrowser") > -1) {
                browserType = "Baidu";
            }
        } else if (navigator.platform == "iPhone" || navigator.platform == "iPad") {
            if (ua.match(/MicroMessenger/i) == "MicroMessenger") {
                //微信内部打开的H5
                browserType = "WeChatBrowser";
            } else if (ua.indexOf("QBWebViewType") >= 185) {
                //QQ内部打开的H5
                browserType = "QQMicroBrowser";
            } else {
                if (ua.indexOf("AppleWebKit") > -1) {
                    browserType = "Sarfari";
                    if (screen.width > 375) {
                        browserType = "PlusSafari";
                    }
                }
                if (ua.indexOf("MQQBrowser") > -1) {
                    browserType = "IOSQQBrowser";
                }
                if (ua.indexOf("CriOS") > -1) {
                    browserType = "IOSChrome";
                }
                if (ua.indexOf("QihooBrowser") > -1) {
                    browserType = "IOS360Browser";
                }
                //搜狗浏览器
                if (ua.indexOf("SogouMobileBrowser") > -1) {
                    browserType = "IOSSogou";
                }
                //火狐浏览器
                if (ua.indexOf("FxiOS") > -1) {
                    browserType = "IOSFirefox";
                    addDocHeight = 1.3;
                }
                //百度浏览器
                if (ua.indexOf("baidubrowser") > -1) {
                    browserType = "IOSBaidu";
                }
                //uc浏览器
                if (ua.indexOf("UCBrowser") > -1) {
                    browserType = "IOSUC";
                }
                //遨游浏览器
                if (ua.indexOf("MXiOS") > -1) {
                    browserType = "IOSAOYOU";
                }
            }
        }
    };

    //针对不同的浏览器进行全屏处理
    function fullScreenHandle() {
        //console.log("fullScreen listten resize:  " + browserType);
        switch (browserType) {
            case "Chrome":
                if (!document.webkitIsFullScreen) {
                    AddTouchEvent();
                }
                break;
            case "360Browser":
                if (cc.screen.fullScreen()) {
                    gameContainer.style.left = 0;
                }
                break;
            case "Opera":
                break;
            case "LieBao":
                if (!document.webkitIsFullScreen) {
                    AddTouchEvent();
                } else {
                    RemoveTouchEvent();
                }
                break;
            case "UC":
                if (cc.screen.fullScreen()) {
                    gameContainer.style.left = 0;
                } else {
                    cc.screen.requestFullScreen(document.body, null);
                }
                break;
            case "XiaoMi":
                //window.innerHeight >= 350 ? slideHide() : slideShow();
                break;
            case "Firefox":
                if (!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen)) {
                    AddTouchEvent();
                } else {
                    RemoveTouchEvent();
                }
                break;
            case "Sarfari":
                SafariFullScreen();
                break;
            case "IOSChrome":
                if (window.innerWidth < window.innerHeight) {
                    //console.log(`screen.height:${screen.height} ,  window.innerHeight: ${ window.innerHeight}`," 差值：",(screen.height - window.innerHeight));
                    //竖屏下
                    if (screen.height >= 812) {
                        //iphoneX
                        screen.height - window.innerHeight <= 170 ? slideHide() : slideShow();
                    } else {
                        //其他iphone
                        //竖屏下
                        screen.height - window.innerHeight <= 50 ? slideHide() : slideShow();
                    }
                } else {
                    //横屏下
                    screen.width - window.innerHeight <= 20 ? slideHide() : slideShow();
                }
                break;
            case "IOSUC":
                screen.width - window.innerHeight <= 90 ? slideHide() : slideShow();
                break;
            case "IOSQQBrowser":
                //screen.width <= window.innerHeight ? slideHide() : slideShow();
                break;
            case "Sogou":
                break;
            case "IOSFirefox":
                if (window.innerWidth < window.innerHeight) {
                    screen.height - window.innerHeight <= 20 ? slideHide() : slideShow();
                } else {
                    screen.width - window.innerHeight <= 20 ? slideHide() : slideShow();
                }
                break;
            case "IOSBaidu":
                //screen.width <= window.innerHeight ? slideHide() : slideShow();
                break;
            case "Baidu":
                break;
            case "IOSSogou":
                if (window.innerWidth < window.innerHeight) {
                    screen.height - window.innerHeight <= 67 ? slideHide() : slideShow();
                } else {
                    //screen.width - window.innerHeight <= 20 ? slideHide() : slideShow();
                    slideHide();
                }
                break;
            case "PlusSafari":
                break;
            case "IOSAOYOU":
                // if (window.innerWidth < window.innerHeight) {
                //     screen.height - window.innerHeight > 50 ? slideShow() : slideHide();
                // } else {
                //     screen.width - window.innerHeight > 50 ? slideShow() : slideHide();
                //}
                break;
        }
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 1);
    };

    function AddTouchEvent() {
        if (navigator.userAgent.indexOf("Browser_Type/Android_APP") <= -1) {
            document.body.addEventListener("touchend", fullScreenCb, true);
        }
    };

    function RemoveTouchEvent() {
        if (navigator.userAgent.indexOf("Browser_Type/Android_APP") <= -1) {
            document.body.removeEventListener("touchend", fullScreenCb,true);
        }
    };

    function fullScreenCb() {
        if (document.body.requestFullscreen) {
            document.body.requestFullscreen();
        } else if (document.body.webkitRequestFullScreen) {
            document.body.webkitRequestFullScreen();

        } else if (document.body.mozRequestFullScreen) {
            document.body.mozRequestFullScreen();
        }
        gameContainer.style.left = 0;
        RemoveTouchEvent();
    };

    //只有 iphone plus 才会使用到这里
    function SafariFullScreen() {
        if (window.innerWidth < window.innerHeight) {
            window.innerHeight <= document.documentElement.clientHeight?slideShow():slideHide();
        } else {
            window.innerHeight < document.documentElement.clientHeight?slideShow():slideHide();
        }
    };

    //出现滑动图的时候 应该要重新设置一些 body宽高，可能出现横屏有滑动图的情况下转成了竖屏
    function recoverSize() {
        if(isShowSlide){
            return;
        }
        // document.body.style.width = (1 + window.innerWidth) + 'px';
        document.body.style.height = (1 + window.innerHeight) + 'px';
        document.body.style.width = "100%";
        //document.body.style.height = "100%";
    };

    function openIframe(isOpen) {
        isOpenIframe = isOpen;
        if (isOpenIframe) {
            slideHide();
            recoverSize();
        } else {
            fullScreenHandle();
        }
    };

    if (window.document) {
        FullScreen_OpenIframe = openIframe;

        mouseStyle();
        browserDistinguish();
        fullScreenHandle();
        if (browserType == "PlusSafari") {
            setInterval(function () {
                if (isOpenIframe == false) {
                    SafariFullScreen();
                }
            }, 300);
        }

        if (window.frameElement != null) {
            window.frameElement.addEventListener("resize", fullScreenHandle);
        } else {
            window.addEventListener("resize", fullScreenHandle);
        }
    }


})();