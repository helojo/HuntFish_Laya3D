import GameFacade from "../../../GameFacade";
import CommonConstant from "../../../constant/CommonConstant";
import { utils } from "../../../utils/CommonUtil";

export class AddWebpage {

    /**
     * 返利活动创建内嵌弹框
     */
    public static createIframe(): void {
        //点按钮的时候 游戏加上转菊花效果，然后执行以下代码
        var iframeDiv = document.createElement("div");
        document.body.appendChild(iframeDiv);
        iframeDiv.id = "iframeDiv";
        iframeDiv.style.position = "fixed";
        iframeDiv.style.width = "100%";
        iframeDiv.style.height = "100%";
        iframeDiv.style.overflow = "hidden";
        //iframeDiv.style.display = "none";

        var iframe = document.createElement("iframe");
        iframeDiv.appendChild(iframe);
        iframe.style.width = "100%";
        iframe.style.height = "100%";

        if(GameFacade.Instance.GameMng.actUrl.indexOf("?")>0){
            iframe.src = GameFacade.Instance.GameMng.actUrl + "&game_id=" + GameFacade.Instance.GameMng.game_id; //换成活动页面
        }
        iframe.src = GameFacade.Instance.GameMng.actUrl + "?game_id=" + GameFacade.Instance.GameMng.game_id; //换成活动页面
        iframe.style.zIndex = "9999999999";
        iframe.onload = function () {
            //iframeDiv.style.display = "inline";
        }

        var closeBtn = document.createElement("img");
        var obj = document.getElementById("gameVersion");
        if (obj) {
          var gameVersion = obj.getAttribute("value");
          closeBtn.src = "../fish_common/fullScreen/button_gb.png?v=" + gameVersion;
        }
        closeBtn.style.position = "absolute";
        closeBtn.style.right = "0";
        closeBtn.style.top = "0";
        iframeDiv.appendChild(closeBtn);
        closeBtn.onclick = function () {
            var div = document.getElementById("iframeDiv");
            div.parentElement.removeChild(div);
        }

        var onResize = function () {
            var isLandscape = document.body.clientWidth > document.body.clientHeight;
            var scaleX = document.body.clientWidth / (isLandscape ? 1920 : 1080);
            var scaleY = document.body.clientHeight / (isLandscape ? 1080 : 1920);
            var scale = scaleX > scaleY ? scaleY : scaleX;
            closeBtn.style.width = 94 * scale * 1.2 + "px"; //缩放
            closeBtn.style.height = 96 * scale * 1.2 + "px";
            closeBtn.style.right = 94 * scale * 0.5 + "px";
            closeBtn.style.top = 96 * scale * 0.5 + "px"; //留一点是防止点到Safari那些浏览器缩小
        }

        onResize();
        window.addEventListener("resize", onResize);
    }

    // /**
    //  *返回主页面
    //  */
    // public static addBackMainPage(): void {

    //     var iframeDiv = document.createElement("div");
    //     document.body.appendChild(iframeDiv);
    //     iframeDiv.id = "iframeDiv";
    //     iframeDiv.style.position = "fixed";
    //     iframeDiv.style.width = "100%";
    //     iframeDiv.style.height = "100%";
    //     iframeDiv.style.overflow = "hidden";
    //     //iframeDiv.style.display = "none";

    //     var iframe = document.createElement("iframe");
    //     iframeDiv.appendChild(iframe);
    //     iframe.style.width = "100%";
    //     iframe.style.height = "100%";

    //     iframe.src = GameFacade.Instance.GameMng.lobbyUrl; //换成活动页面
    //     iframe.style.zIndex = "9999999999";
    //     iframe.onload = function () {
    //         //iframeDiv.style.display = "inline";
    //     }
    // }

    // /**
    //  * 关闭页面
    //  */
    // public static closePage(): void {
    //     var userAgent = navigator.userAgent;

    //     if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Presto") != -1) {
    //         window.history.back();
    //         window.close();
    //     }
    //     else if (userAgent.indexOf('Android') !=-1 || userAgent.indexOf('iPhone') !=-1) {
    //         window.location.replace("about:blank");
    //         //window.history.back();
    //         //window.close();
    //     }
    //     else {
    //         window.opener = null;
    //         window.open("", "_self");
    //         window.close();
    //     }
    // }

}