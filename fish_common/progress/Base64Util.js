var Base64Util = {
    /**
     * base64解码
     * @param {Object} str
     */
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",

    base64decode: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        return output;
    },

    /**
     * utf8转utf16
     * @param {Object} str
     */
    utf8to16: function (str) {
        var out, i, len, c;
        var char2, char3;
        out = "";
        len = str.length;
        i = 0;
        while (i < len) {
            c = str.charCodeAt(i++);
            switch (c >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    out += str.charAt(i - 1);
                    break;
                case 12:
                case 13:
                    char2 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0xF) << 6) | (char2 & 0x3F));
                    break;
                case 14:
                    char2 = str.charCodeAt(i++);
                    char3 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 &
                        0x3F) << 0));
                    break;
            }
        }
        return out;
    },

    DecodeValue: function (base64Str) {
        if (base64Str) {
            var value = this.utf8to16(this.base64decode(base64Str));
            console.log(base64Str + "的值是" + value);
            return value;
        } else {
            console.log("base64没取到" + base64Str + "的值");
        }

    },

    /**
     * 获取指定的URL参数值 URL:https://static.fg.blizzmi.cn/game?type=h5&gamecode=fish_mm&language=zh-cn&username=&token=6DA4E2C33BFA9906
     * 参数：paramName URL参数
     * 调用方法:getParam("language")
     * 返回值:zh-cn
     */
    getUrlParam: function (paramName) {
        var paramValue = "";
        var isFound = !1;
        var searchUrl = location.search;
        if (searchUrl.indexOf("?") == 0 && searchUrl.indexOf("=") > 1) {
            var arrSource = unescape(searchUrl).substring(1, searchUrl.length).split("&");

            var i = 0;
            while (i < arrSource.length && !isFound) {
                if (arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = !0;
                }
                i++;
            }

        }
        return paramValue;
    }
}