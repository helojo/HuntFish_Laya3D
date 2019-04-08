var prePercent = 0; //进度条百分比 屏幕适配的时候用到
var progressLoading = null; //进度条obj
var progressLabel = null; //进度条label
var lodingHeadAniDiv = null; //前面帧动画特效div
var lodingHeadAni = null; //动画效果
var loadingBg = null; //进度条条背景条
var AniRunFinied = false; //动画函数是否结束
var UpdatePorgress = null;

(function () {
    'use strict';
    var originalSizeW = 1136;
    var originalSizeH = 640;
    //进度条距离屏幕中心的位置
    var ProgressLandOffsetY = 207.5; //215-(15/2)
    var ProgressPortOffsetY = 277.5; //285-(15/2)
    if (IsWanli) {
        ProgressLandOffsetY = 257.5; //265-(15/2)
        ProgressPortOffsetY = 427.5; //435-(15/2)
    }

    var splashDiv = document.getElementById("splash");

    var pngConfig = null; //图集资源的配置

    //创建一个进度条 div ，里面装入动画 和 进度条底图
    var parentDiv = document.createElement("div");
    parentDiv.style.width = "0px";
    parentDiv.style.height = "0px";
    parentDiv.id = "progress";
    parentDiv.style.position = "fixed";
    parentDiv.style.left = "30%";
    parentDiv.style.top = "90%";
    parentDiv.style.display = "none";
    splashDiv.appendChild(parentDiv);

    //创建loading 条 底板
    loadingBg = document.createElement('img');
    loadingBg.src = loadingResConfig.ProBarImageUrl;
    loadingBg.style.position = "absolute";
    loadingBg.style.width = "634px";
    loadingBg.style.height = "15px";
    parentDiv.appendChild(loadingBg);

    //创建loading 条
    progressLoading = document.createElement('img');
    progressLoading.src = loadingResConfig.ProBarFarOImageUrl;
    progressLoading.style.position = "absolute";
    progressLoading.style.clip = "rect(0px 0px 16px 0px)";
    progressLoading.style.top = "2px";
    progressLoading.style.left = "2px";
    progressLoading.style.width = "634px";
    progressLoading.style.height = "11px";
    parentDiv.appendChild(progressLoading);
    //获取背景图
    var splashLogoLandscape = document.getElementById("splashLogo-landscape");
    var splashLogoPortrait = document.getElementById("splashLogo-portrait");

    //创建progress label
    progressLabel = document.createElement('div');
    progressLabel.id = "progressLabel";
    progressLabel.style.position = "fixed";
    progressLabel.innerText = "0%";
    progressLabel.style.color = "white";
    progressLabel.style.fontSize = progressConfig.g_fontSize + "px";
    progressLabel.style.display = "none";
    progressLabel.style.textShadow = "#000 1.3px 0 0,#000 0 1.3px 0,#000 -1.3px 0 0,#000 0 -1.3px 0";
    splashDiv.appendChild(progressLabel);

    //获取网络图片配置
    function GetPlatformRes() {
        //获取 图集 json 配置
        var jsonUrl = loadingResConfig.ProBarFarWImageUrl;
        //获取图集资源的配置信息
        var getPngPlist = new XMLHttpRequest();
        getPngPlist.open("get", jsonUrl);
        getPngPlist.responseType = "text";
        getPngPlist.onload = function () {
            try {
                pngConfig = JSON.parse(getPngPlist.responseText);
            } catch (error) {
                console.log("获取的进度条动画资源json配置有误:  ", +error);
            }
            //创建动画
            CreateAni();
            progressLoading.style.top = (loadingBg.clientHeight - progressLoading.clientHeight) * 0.5 + "px";
            progressLoading.style.left = (loadingBg.clientWidth - progressLoading.clientWidth) * 0.5 + "px";
        }
        getPngPlist.send();
    }

    //创建动画
    function CreateAni() {
        //设置一个div  imag父节点
        lodingHeadAniDiv = document.createElement("div");
        lodingHeadAniDiv.style.width = "0px";
        lodingHeadAniDiv.style.height = "0px";
        lodingHeadAniDiv.id = "progressDiv";
        lodingHeadAniDiv.style.position = "absolute";
        lodingHeadAniDiv.style.top = progressConfig.headOffsetY + "px";
        lodingHeadAniDiv.style.left = progressConfig.headOffsetX + "px";
        parentDiv.appendChild(lodingHeadAniDiv);
        //获取动画的图集资源
        lodingHeadAni = document.createElement('div');
        lodingHeadAni.style.backgroundRepeat = 'no-repeat';
        lodingHeadAni.style.width = pngConfig.frames[0].sourceSize.w * getLoadingScale() + "px";
        lodingHeadAni.style.height = pngConfig.frames[0].sourceSize.h * getLoadingScale() + "px";
        //获取后台的资源图片
        lodingHeadAni.style.backgroundImage = 'url(' + loadingResConfig.ProBarFarTImageUrl + ')';
        lodingHeadAniDiv.appendChild(lodingHeadAni);
        var index = 0;

        parentDiv.style.display = "block";
        progressLabel.style.display = "block";
        AdaptUpdate();

        //一定时间调用 不停的切换 背景位置 达到动画帧的效果
        function ProgressAniFun() {
            if (!AniRunFinied) {
                window.requestAnimationFrame(ProgressAniFun);
            }
            lodingHeadAni.style.backgroundPositionX = -pngConfig.frames[index].frame.x * getLoadingScale() + 'px ';
            lodingHeadAni.style.backgroundPositionY = -pngConfig.frames[index].frame.y * getLoadingScale() + 'px';
            index++;
            if (index >= pngConfig.frames.length) {
                index = 0;
            }
        }
        window.requestAnimationFrame(ProgressAniFun);
    }

    if (window.document) {
        GetPlatformRes();
    }

    //获取进度条的缩放比
    function getLoadingScale() {
        if (progressLoading) {
            var scaleOffset = progressLoading.height / progressLoading.naturalHeight;
            //console.log(scaleOffset);
            return scaleOffset;
        }
        return 1;
    }

    function AdaptUpdate() {
        setTimeout(function () {
            /*浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）*/
            var windowWidth = document.documentElement.clientWidth;
            var windowHeight = window.innerHeight > document.documentElement.clientHeight ? window.innerHeight : document.documentElement.clientHeight;
            //横屏
            if (windowWidth > windowHeight) {
                //logo底图缩放比
                var scaleOffsetX = windowWidth / originalSizeW;
                var scaleOffsetY = windowHeight / originalSizeH;
                var scaleMin = Math.min(scaleOffsetX, scaleOffsetY);
                //设置进度条的宽度
                loadingBg.style.width = progressConfig.progressWidht * scaleMin + "px";
                progressLoading.style.width = progressConfig.progressWidht * scaleMin + "px";
                //间隙 + 底图的70%的高度位置
                //（（窗口高度 - 底图高度）*0.5） + 底图的70%的高度位置 //设置进度条的纵向布局
                //var tempH = ((windowHeight - splashLogoLandscape.clientHeight) * 0.5) + (splashLogoLandscape.clientHeight * progressConfig.progLandDivTop);
                //屏幕中心点向下偏移一定像素
                var tempH = (windowHeight * 0.5) + (ProgressLandOffsetY * scaleMin);
                parentDiv.style.top = tempH + "px";
                //设置进度条父节点 横向布局
                var tempWidth = (window.innerWidth - progressLoading.clientWidth) * 0.5;
                //console.log("11window.innerWidth:  " + window.innerWidth + "  progressLoading.clientWidth:  " + progressLoading.clientWidth + "  hengp tempWidth: " + tempWidth);
                parentDiv.style.left = tempWidth + "px";
                if (lodingHeadAniDiv) {
                    lodingHeadAniDiv.style.left = splashLogoLandscape.clientWidth * prePercent + progressConfig.headOffsetX + "px";
                }
                //进度条字体
                var scaleOffset = getBgScale();
                progressLabel.style.fontSize = (progressConfig.g_fontSize * scaleOffset) + "px";
                progressLabel.style.left = (((progressLoading.clientWidth * 0.5) + tempWidth) + (progressConfig.fontOffsetX * scaleOffset)) + "px";
                progressLabel.style.top = (tempH - progressConfig.fontTopByProgress * scaleOffset) + "px";
                UpdatePorgress.updateShow(prePercent);
            } else {
                //竖屏
                var changeWidth = (splashLogoPortrait.clientWidth * 0.8);
                loadingBg.style.width = changeWidth + "px";
                progressLoading.style.width = changeWidth + "px";
                var tempWidth = (windowWidth - splashLogoPortrait.clientWidth) * 0.5 + (splashLogoPortrait.clientWidth - changeWidth) * 0.5;
                parentDiv.style.left = tempWidth + "px";
                //console.log("22window.innerWidth:  " + window.innerWidth + "  progressLoading.clientWidth:  " + progressLoading.clientWidth + "  hengp tempWidth: " + tempWidth);
                //屏幕中心点向下偏移一定像素
                var scaleOffsetY = windowHeight / originalSizeW;
                var tempH = (windowHeight * 0.5) + (ProgressPortOffsetY * scaleOffsetY);
                parentDiv.style.top = tempH + "px";
                //parentDiv.style.top = windowHeight * progressConfig.progPorDivTop + "px";
                if (lodingHeadAniDiv) {
                    lodingHeadAniDiv.style.left = (changeWidth * prePercent) + progressConfig.headOffsetX + "px";
                }
                //进度条字体
                var scaleOffset = getBgScale();
                progressLabel.style.fontSize = (progressConfig.g_fontSize * scaleOffset) + "px";
                progressLabel.style.left = (((progressLoading.clientWidth * 0.5) + tempWidth) + (progressConfig.fontOffsetX * scaleOffset)) + "px";
                //progressLabel.style.top = ((windowHeight * progressConfig.progPorDivTop) - (progressConfig.fontTopByProgress * getLoadingScale())) + "px";
                progressLabel.style.top = tempH - (progressConfig.fontTopByProgress * scaleOffset) + "px";
                UpdatePorgress.updateShow(prePercent);
            }
            //进度条的位置适配
            progressLoading.style.top = (loadingBg.clientHeight - progressLoading.clientHeight) * 0.5 + "px";
            progressLoading.style.left = (loadingBg.clientWidth - progressLoading.clientWidth) * 0.5 + "px";
            //动画特效的位置适配在进度条中间
            if (lodingHeadAni) {
                var scaleT = getLoadingScale();
                lodingHeadAni.style.backgroundSize = progressConfig.backGroundBgWidth * scaleT + "px" + "," + progressConfig.backGroundBgHeight * scaleT + "px";
                lodingHeadAni.style.width = pngConfig.frames[0].sourceSize.w * getLoadingScale() + "px";
                lodingHeadAni.style.height = pngConfig.frames[0].sourceSize.h * getLoadingScale() + "px";
                lodingHeadAniDiv.style.top = -(lodingHeadAni.clientHeight - progressLoading.clientHeight) * 0.5 + "px";
            }
        }, 0);
    }
    if (window.frameElement != null) {
        window.frameElement.addEventListener("resize", AdaptUpdate);
    } else {
        window.addEventListener("resize", AdaptUpdate);
    }

})();

UpdatePorgress = {
    //进度percent  0--1  
    updateShow: function (percent) {
        if (percent <= 1) {
            prePercent = percent;
            //console.log(progressLoading.clientWidth);
            progressLabel.innerText = parseInt(percent * 100) + "%";
            var tempWidth = progressLoading.clientWidth * percent;
            //前面头动画位置
            if (lodingHeadAniDiv) {
                var scaleOffset = progressLoading.height / progressLoading.naturalHeight;
                lodingHeadAniDiv.style.left = tempWidth + (progressConfig.headOffsetX * scaleOffset) + "px";
            }
            //进度条 clip
            var clip = "rect(0px, " + parseInt(tempWidth) + "px ," + progressLoading.clientHeight + "px, 0px)";
            progressLoading.style.clip = clip;
        }
    }
};