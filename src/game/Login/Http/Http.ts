import { utils } from "../../../utils/CommonUtil";

export class Http {
    private static xmlhttp;
    //用户发送请求的方法
    public static httpSend(method, url, data, callback, failback): void {

        var xmlhttprequest;
        xmlhttprequest = new XMLHttpRequest();
        if (xmlhttprequest.overrideMimeType) {
            xmlhttprequest.overrideMimeType("text/xml");
        }
        // if () {

        // } else if (window.ActiveXObject) {
        //     var activeName = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        //     for (var i = 0; i < activeName.length; i++) {
        //         try {
        //             xmlhttprequest = new ActiveXObject(activeName[i]);
        //             break;
        //         } catch (e) {

        //         }
        //     }
        // }

        if (xmlhttprequest == undefined || xmlhttprequest == null) {
            utils.CommonUtils.log("XMLHttpRequest对象创建失败！！");
        } else {
            this.xmlhttp = xmlhttprequest;
        }
        try {
            if (this.xmlhttp != undefined && this.xmlhttp != null) {
                method = method.toUpperCase();
                if (method != "GET" && method != "POST") {
                    utils.CommonUtils.log("HTTP的请求方法必须为GET或POST!!!");
                    return;
                }
                if (url == null || url == undefined) {
                    utils.CommonUtils.log("HTTP的请求地址必须设置！");
                    return;
                }
                var tempxmlhttp = this.xmlhttp;
                this.xmlhttp.onreadystatechange = function () {
                    if (tempxmlhttp.readyState == 4) {
                        if (tempxmlhttp.status == 200) {
                            var responseText = tempxmlhttp.responseText;
                            var responseXML = tempxmlhttp.reponseXML;
                            if (callback == undefined || callback == null) {
                                utils.CommonUtils.log("没有设置处理数据正确返回的方法");
                                utils.CommonUtils.log("返回的数据：" + responseText);
                            } else {
                                callback(responseText, responseXML);
                            }
                        } else {
                            if (failback == undefined || failback == null) {
                                utils.CommonUtils.log("没有设置处理数据返回失败的处理方法！");
                                utils.CommonUtils.log("HTTP的响应码：" + tempxmlhttp.status + ",响应码的文本信息：" + tempxmlhttp.statusText);
                            } else {
                                failback(tempxmlhttp.status, tempxmlhttp.statusText);
                            }
                        }
                    }
                };

                //解决跨域的问题
                if (url.indexOf("http://") >= 0) {
                    url.replace("?", "&");
                    url = "Proxy?url=" + url;
                }
                this.xmlhttp.open(method, url, false);

                //如果是POST方式，需要设置请求头
                // if (method == "POST") {
                //     this.xmlhttp.processReqChange("Content-type", "application/x-www-four-urlencoded");
                // }
                //this.xmlhttp.withCredentials = true;
                this.xmlhttp.send(data);
                //this.xmlhttp.send();

                this.xmlhttp.onerror = function (err) {
                    utils.CommonUtils.log("connect error " + err);
                    failback(tempxmlhttp.status, tempxmlhttp.statusText);
                }

            } else {
                utils.CommonUtils.log("XMLHttpRequest对象创建失败，无法发送数据！");
            }
        } catch (error) {
            utils.CommonUtils.warn(error);
        }
    }

    /**
     * 关闭接口
     */
    public static httpAbort(): void {
        if (this.xmlhttp != null || this.xmlhttp != undefined) {
            this.xmlhttp.abort();
        }
    }
}