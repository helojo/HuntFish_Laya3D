(function () {
    var _maskDiv = null;
    var _layaContainer = null;
    var _layaCanvas = null;
    var IS_SHOW_MASK_DIV = true;
    var _isFull = false;
    var _touchStatus = false;
    var portraitHeight = 75;
    var landscapeHeight = 40;
    var iosPlatform = false;
    if (navigator.platform == "iPhone" || navigator.platform == "iPad") {
        iosPlatform = true;
    }

    var metaScroll = document.getElementById("scroll");
    var newScroll = 1; // 0 是关闭 1 打开默认是打开 ， null 打开。
    if (metaScroll) {
        let value = metaScroll.getAttribute("value");
        newScroll = Base64Util.DecodeValue(value);
    }

    var ScreenMode = {
        None: 0,
        Landscape: 1, // 横屏
        Portrait: 2 // 竖屏
    };

    // setInterval(() => {
    //     console.log("screenSize:", screen.height, screen.width, "windowSize:", window.innerHeight, window.innerWidth,
    //         "layaBrowerSize:", Laya.Browser.height, Laya.Browser.width, "LayaStage:", Laya.stage.height, Laya.stage.width,
    //         "LayaBrowerClientSize:", Laya.Browser.clientHeight, Laya.Browser.clientWidth);
    // }, 1000);

    //鼠标样式修改
    function mouseStyle() {
        var imgUrl = "../fish_common/fullScreen/mouse.png?v=" + comVersion;
        _layaCanvas.style.cursor = "url(" + imgUrl + "),auto";

        //鼠标进来
        _layaCanvas.addEventListener('mouseenter', function (event) {
            _layaCanvas.style.cursor = "url(" + imgUrl + "),auto";
        }, false);

        //鼠标离开
        _layaCanvas.addEventListener('mouseleave', function (event) {
            _layaCanvas.style.cursor = 'auto';
        }, false);
    };

    function updateMode() {
        //if (!(Laya.stage.width == Laya.Browser.width && Laya.stage.height == Laya.Browser.height)) {
        //  Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
        //}
        if (screen.height - window.innerHeight > 30) {
            Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
        }
    }

    function onSafari() {
        var isAppleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
        var isSafari = /safari/i.test(navigator.userAgent);
        var isOtherBrowser = /android|chrome|chromium|crios|fxios|firefox|mxios|maxthon|mercury|opera|opios|micromessenger|qbwebviewtype|qq|qihoo|qihu|360se|sogou|sougou|metasr|baidu|uc|liebao|lb|theworld|2345|ie|msie|trident|presto/ig.test(navigator.userAgent);
        return isAppleDevice && isSafari && !isOtherBrowser;
    }

    function onChrome() {
        var isChromium = window["chrome"];
        var winNav = window.navigator;
        var vendorName = winNav.vendor;
        var isOpera = typeof window["opr"] !== "undefined";
        var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
        var isIOSChrome = winNav.userAgent.match("CriOS");

        if (isIOSChrome) {
            return true;
        } else if (isChromium !== null && typeof isChromium !== "undefined" && vendorName === "Google Inc." && isOpera === false && isIEedge === false) {
            return true;
        } else {
            return false;
        }
    }

    function init() {

        _layaCanvas = Laya.Browser.getElementById("layaCanvas");
        _layaContainer = Laya.Browser.getElementById("layaContainer");
        if (!Laya.Browser.onMobile) {
            mouseStyle();
        }

        setInterval(() => {
            updateMode();
        }, 300);

        if (!Laya.Browser.onMobile) return;
        //是否在iframe中
        if (self.frameElement && self.frameElement.tagName == "IFRAME") return;
        //是否关闭了 滑动
        if (newScroll == 0) return;

        let userAgent = navigator.userAgent.toLowerCase();
        if (Laya.Browser.onPC || !navigator.userAgent) return;
        let isCompanyBrowser = userAgent.indexOf("browser_type/android_app") != -1;
        if (isCompanyBrowser) return;
        if (window.navigator["standalone"]) {
            if (document.getElementById("maskDiv")) {
                document.getElementById("maskDiv").style.visibility = "hidden";
            }
            return;
        }

        /**
         * 全屏处理
         * ios: safari\chrome
         * Andriod: chrome  （安卓端qq浏览器通过meta标签强制全屏）
         */
        if (onSafari() || onChrome()) {
            //手指图
            var imgUrl = "";
            var language = Base64Util.getUrlParam("language");
            if (language == 'en-us') {
                imgUrl = "../fish_common/fullScreen/arrow_en.png?v=" + comVersion;
            } else {
                imgUrl = "../fish_common/fullScreen/arrow.png?v=" + comVersion;
            }


            _maskDiv = document.createElement("div");
            _maskDiv.innerHTML = `<br /><br /><img src="${imgUrl}" /><br />`; // "向上滑动可全屏游戏"
            _maskDiv.setAttribute("style", "position:absolute; text-align:center; font-size:20px; color:#ffffff; left:0px; top:0px; background:rgba(0, 0, 0, 0.5);");
            _maskDiv.setAttribute("id", "maskDiv");
            _maskDiv['onselectstart'] = function () {
                return false;
            };
            _layaContainer.appendChild(_maskDiv);
            _showMaskDiv(false);

            document.addEventListener("scroll", onScroll, false);

            window.addEventListener("focus", onFocus);
            window.addEventListener("blur", onBlur);
        }
        _onResizeHandle();
        Laya.stage.on(laya.events.Event.RESIZE, this, _onResizeHandle);
    }

    function onFocus() {
        _touchEnd();
    }

    function onBlur() {
        _touchEnd();
    }

    function addTouchEvent() {
        document.addEventListener('touchstart', _onTouchStart, false);
        document.addEventListener("touchmove", _touchMoves, false);
        document.addEventListener("touchend", _touchEnd, false);
    }

    function removeTouchEvent() {
        document.removeEventListener('touchstart', _onTouchStart, false);
        document.removeEventListener("touchmove", _touchMoves, false);
        document.removeEventListener("touchend", _touchEnd, false);
    }

    function onScroll(event) {
        setTimeout(function () {
            delayScroll(100, 0, 0);
        }, 150);
    }

    function _onTouchStart(event) {
        _touchStatus = true;
        if (event.touches.length > 1) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    function _touchMoves(event) {
        _touchStatus = true;
        if (event.touches.length > 1) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    function _touchEnd() {
        setTimeout(function () {
            if (onChrome()) {
                if (getScreenMode() == ScreenMode.Portrait) {
                    if (screen.height - window.innerHeight < portraitHeight) {
                        _showMaskDiv(false);
                        SpecialDeal();
                    } else {
                        _showMaskDiv(true);
                    }
                } else {
                    if ((Laya.Browser.onAndroid ? screen.height : screen.width) - window.innerHeight < landscapeHeight) {
                        _showMaskDiv(false);
                    } else {
                        _showMaskDiv(true);
                    }
                }
            } else {
                //暂时laya 竖版全屏 有bug 
                if (getScreenMode() == ScreenMode.Portrait) {
                    _showMaskDiv(false);
                } else {
                    if (Laya.Browser.clientHeight > document.documentElement.clientHeight) {
                        _showMaskDiv(false);
                    } else {
                        _showMaskDiv(true);
                    }
                    let top = Laya.Browser.clientHeight - document.documentElement.clientHeight;
                    let isIpad = navigator.userAgent.toLowerCase().indexOf("ipad") != -1;
                    if (onSafari() && getScreenMode() === ScreenMode.Landscape && top >= 0 && !isIpad) {
                        _showMaskDiv(false);
                    }
                }
            }
        }, 30);

        _touchStatus = false;
    }

    function delayScroll(delay, x, y) {
        Laya.timer.clear(this, onDelayScroll);
        Laya.timer.once(delay, this, onDelayScroll, [x, y]);
    }

    function onDelayScroll(x, y) {
        // window.scroll(x, y);
        scrollView();
    }

    function _onResizeHandle(e = null) {
        if (onSafari() || onChrome()) {
            let screenH = getScreenMode() === ScreenMode.Portrait ? screen.height : screen.width;
            _maskDiv.style.width = Laya.Browser.clientWidth + "px";
            _maskDiv.style.height = screenH + 1 + "px";


            if (_touchStatus === false) {
                _touchEnd();
            }
        }
        if (iosPlatform && onChrome()) {
            //console.log("在IOS上面 加了之后，偏移更是厉害");
        } else {
            _layaCanvas.style.transform = "matrix(" + Laya.stage._canvasTransform.toString() + ")";
        }
    }

    function _showMaskDiv(isShowMaskDiv) {
        _maskDiv.style.visibility = isShowMaskDiv ? "visible" : "hidden";
        _isFull = !isShowMaskDiv;
        isShowMaskDiv ? addTouchEvent() : removeTouchEvent();
        IS_SHOW_MASK_DIV = isShowMaskDiv;
    }

    function scrollView() {
        //android chrome 竖屏全屏出现 画布偏移 问题
        if (!iosPlatform && getScreenMode() == ScreenMode.Portrait && onChrome()) {
            return;
        }
        var doc = window.document;
        window.scrollTo(0, 0);

        var scrollTop = 1,
            getScrollTop = function () {
                return 1; //window.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
            },
            bodycheck = setInterval(function () {
                if (doc.body) {
                    clearInterval(bodycheck);
                    scrollTop = getScrollTop();
                    setTimeout(function () {
                        window.scrollTo(0, scrollTop === 1 ? 0 : 1);
                    }, 10);
                }
            }, 15);
    }

    /**
     * 获取当前屏幕模式:横屏还是竖屏
     */
    function getScreenMode() {
        //return Laya.Browser.width >= Laya.Browser.height ? ScreenMode.Landscape : ScreenMode.Portrait;
        return window.innerWidth >= window.innerHeight ? ScreenMode.Landscape : ScreenMode.Portrait;
    }

    //针对现在有的Laya 适配竖屏全屏 BUG导致画布偏移，我们只能暂时先这么处理
    function SpecialDeal() {
        if (getScreenMode() == ScreenMode.Portrait && onChrome()) {
            let offsetX = Laya.stage._canvasTransform.tx;
            if (window.innerWidth < offsetX) {
                window.scrollTo(100, 100);
            }
        }
    }

    //请求全屏
    function FullScreeRequest() {
        /*判断是否全屏*/ //W3C  //IE11  //火狐 //谷歌
        var isFullscreen = document.fullScreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || false;
        if (!isFullscreen) {
            var el = document.documentElement;
            if (el.requestFullscreen) {
                el.requestFullscreen();
            } else if (el.mozRequestFullScreen) {
                el.mozRequestFullScreen();
            } else if (el.webkitRequestFullscreen) {
                el.webkitRequestFullscreen();
            } else if (el.msRequestFullscreen) {
                el.msRequestFullscreen();
            }
        }
    }

    //取消全屏
    function ExitFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }


    //开始
    init();
}());