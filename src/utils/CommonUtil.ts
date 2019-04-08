import EnumData from "../Enum/EnumData";

import NetLogin from "../net/ProtoHander/NetLogin";
import GameFacade from "../GameFacade";
import CommonConstant from "../constant/CommonConstant";

/**
* name 
*/
export module utils {
	export class CommonUtils {

		public static isDebug: boolean = true;
		private static KEYSTR64: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

		constructor() {

		}

		/**
		 * 获得平台需要的value 数据
		 * @param id id名字
		 */
		public static getValue(id: string): string {
			if (document.getElementById(id) == null) return;
			var v: string = document.getElementById(id).getAttribute("value");
			var v2: string = this.utf8to16(this.decodeByBase64(v));
			return v2;
		}

		/**
		 * 获得当前网页的地址
		 */
		public static getLocalHref(): string {
			return window.location.href;
		}
		public static decodeByBase64(input: string): string {
			var output = [],
				chr1, chr2, chr3,
				enc1, enc2, enc3, enc4,
				i = 0;

			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

			while (i < input.length) {
				enc1 = CommonUtils.KEYSTR64.indexOf(input.charAt(i++));
				enc2 = CommonUtils.KEYSTR64.indexOf(input.charAt(i++));
				enc3 = CommonUtils.KEYSTR64.indexOf(input.charAt(i++));
				enc4 = CommonUtils.KEYSTR64.indexOf(input.charAt(i++));

				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;

				output.push(String.fromCharCode(chr1));

				if (enc3 !== 64) {
					output.push(String.fromCharCode(chr2));
				}
				if (enc4 !== 64) {
					output.push(String.fromCharCode(chr3));
				}
			}

			return output.join('');
		}

		/**
		 * utf8转utf16
		 * @param {Object} str
		 */
		public static utf8to16(str: string): string {
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
						out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
						break;
				}
			}
			return out;
		};

		//GameMng.serverIp = "ws://192.168.10.93"; GameMng.serverPort = 27070; GameFacade.Instance.GameMng.isLoacalDev = true; //国强
		//GameMng.serverIp = "ws://192.168.10.43"; GameMng.serverPort = 27070; GameFacade.Instance.GameMng.isLoacalDev = true; //家乐
		//GameMng.serverIp = "ws://dev-by-1.blizzmi.local"; GameMng.serverPort = 50062; GameFacade.Instance.GameMng.isLoacalDev = true; //dev

		public static decode(id: string, value: string): any {
			var element = document.getElementById(id);
			if (element) {
				var attribute = element.getAttribute(value);
				if (id === "myVersion") {
					return attribute;
				}

				return this.decodeByBase64(attribute);
			}

			switch (id) {
				case "sip":
					return utils.CommonUtils.decodeByBase64("WyJ3c3M6XC9cL2Zpc2gteHh4LmRldi5ibGl6em1pLmNuMTIzIiwid3NzOlwvXC9maXNoLWFiYy5kZXYuYmxpenptaS5jbjEyMyIsIndzczpcL1wvZmlzaC0xMjMuZGV2LmJsaXp6bWkuY24xMjMiLCJ3c3M6XC9cL2Zpc2gtYWJjLmRldi5ibGl6em1pLmNuIiwid3NzOlwvXC9maXNoLWJsaXp6bWkuY25zIiwid3NzOlwvXC9maXNoLWJsaXp6bWkuY25zIiwid3NzOlwvXC9maXNoLWFiYi5ibGl6em1pLmNuIl0=");
				case "serverIp":
					GameFacade.Instance.GameMng.isLoacalDev = true;
					//return "ws://192.168.10.93"; // 国强
					//return "ws://192.168.10.43"; // 家乐
					return "ws://dev-by-1.blizzmi.local"; //dev
				case "lobbyUrl":
					return utils.CommonUtils.decodeByBase64("aHR0cHM6Ly9sb2JieS53YW50Z2FtZS5vcmcvP3R5cGU9aDU=");
				case "serverPort":
					//	return 27070;
					return 50062;
				case "token":
					return utils.CommonUtils.decodeByBase64("ODAxQjY5NEQ0QTYxNUYyNA==");
				case "historyUrl":
					return utils.CommonUtils.decodeByBase64("aHR0cHM6Ly9jZG4ubHZ5ZXRvd24uY29tL2hpc3Rvcnk/c2VydmVyX2lkPTI1JmNsaWVudD1oNQ==");
				case "return":
					return utils.CommonUtils.decodeByBase64("MQ==");
				case "play_type":
					return 0;
				case "sheet":
					return 0;
			}

			return "";
		}

		public static dateformat(time: number, fmt: string): string {
			let date = new Date(time);
			let o = {
				"M+": date.getMonth() + 1, //月份
				"d+": date.getDate(), //日
				"h+": date.getHours(), //小时
				"m+": date.getMinutes(), //分
				"s+": date.getSeconds(), //秒
				"q+": Math.floor((date.getMonth() + 3) / 3), //季度
				"S": date.getMilliseconds() //毫秒
			};
			if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (var k in o)
				if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			return fmt;
		};

		/**
		 * 数据转换 数据转化成千元符（用于金币格式）
		 * @param num 钱
		 */
		public static numberFormat(num: number): string {
			var coinStr: string = (num / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
			return coinStr;
		}

		/**
       * 金币字体设置自动大小
       */
		public static coinAutoFontSize(coinText: fairygui.GTextField): void {
			var coinLeng: number = coinText.text.length;
			var coinFontSize: number = 22;
			if (coinLeng > 10) {
				coinFontSize = 28 - coinLeng;
			}
			coinText.fontSize = coinFontSize;
		}
		/**
		   * 名字字体设置自动大小
		   */
		public static nameAutoFontSize(coinText: fairygui.GTextField): void {
			var coinLeng: number = coinText.text.length;
			var coinFontSize: number = 25;
			if (coinLeng > 13) {
				coinFontSize = 25 - (coinLeng - 13) * 1.5;
			}
			coinText.fontSize = coinFontSize;
		}

		public static huntedItemValueFontSize(value: fairygui.GTextField) {
			var len: number = value.text.length;
			var fontSize: number = 18;
			if (len >= 7) {
				fontSize = 16 - (len - 7);
			}

			value.fontSize = fontSize;
		}

		/** 服务器的数值面额转换*/
		public static numberFixed(num: number): number {
			return num / 100;
		}
		/**
		   * 金币字体设置自动大小
		   */
		public static coinGunAutoFontSize(coinText: Laya.FontClip): void {
			var coinLeng: number = coinText.value.length;
			var coinFontSize: number = 12;
			if (coinLeng > 13) {
				coinFontSize = 25 - coinLeng;
			}

		}
		/**
		 * 是否是首次进房
		 */
		public static isFirstEnterRoom: boolean = true;

		/**
		 * 时间戳的转化
		 * @param timeStamp 
		 */
		public static numberToDataTime(timeStamp: number): string {
			var d = new Date(timeStamp);
			if (timeStamp.toString().length == 10) {
				d = new Date(timeStamp * 1000);
			}
			var str = d.getFullYear() + '-';
			str += (d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : "0" + (d.getMonth() + 1);
			str += '-';
			str += d.getDate() >= 10 ? d.getDate() : "0" + d.getDate();
			str += " "
			str += d.getHours() >= 10 ? d.getHours() : "0" + d.getHours();
			str += ':'
			str += d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes();
			str += ':'
			str += d.getSeconds() >= 10 ? d.getSeconds() : "0" + d.getSeconds();
			return str;
		}

		/**
		 * 获得时间戳差（一般用于活动）
		 * @param t 
		 */
		public static getTimeDifference(t: number): string {
			var budgetTime = new Date(t * 1000)
			var nowTime = new Date(this.getNowActualTimeStamp());
			var dataDiff = budgetTime.getTime() - nowTime.getTime();
			var str: string = null;
			if (t * 1000 >= this.getNowActualTimeStamp()) {
				var day = dataDiff / (1000 * 60 * 60 * 24);
				day = Math.floor(day);
				str = day > 0 ? day + "D " : "";
				var hours = (dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
				hours = Math.floor(hours);
				str += hours >= 10 ? hours : "0" + hours;
				str += ":";
				var minutes = (dataDiff % (1000 * 60 * 60)) / (1000 * 60);
				minutes = Math.floor(minutes);
				str += minutes >= 10 ? minutes : "0" + minutes;
				str += ":";
				var seconds = (dataDiff % (1000 * 60)) / 1000;
				seconds = Math.round(seconds);
				str += seconds >= 10 ? seconds : "0" + seconds;
			}
			else {
				str = null;
			}
			return str;
		}

		/**
		 * 实际同步服务端的时间（现在时间同步服务端的时间）
		 */
		public static getNowActualTimeStamp(): number {
			return this.getNowTimeStamp() + this.getOffsetTime();
		}
		/**
		 * 现在时间戳
		 */
		public static getNowTimeStamp(): number {

			return Date.now();
		}
		/**
		 * 获得偏移时间
		 */
		public static getOffsetTime(): number {

			return NetLogin.Instance._timeOffset;
		}
		/**
		 * 昵称格式的转化
		 * @param name 
		 */
		public static nickNameToFormat(name: string): string {

			var n: string = name;
			if (n.length > 10) {
				n = n.substr(0, 10);
			}
			return n;
		}

		public static nickNameWithSymbol(name: string): string {

			var n: string = name;
			if (n.length > 10) {
				n = n.substr(0, 10) + "...";
			}
			return n;
		}
	    /**
        * jp转类型
        * @param num 中奖等级
        */
		public static jpWinnerToType(num: number): string {
			var str: string;
			switch (num) {
				case 1:
					str = "一等奖";
					break;
				case 2:
					str = "二等奖";
					break;
				case 3:
					str = "三等奖";
					break;
				case 4:
					str = "四等奖";
					break;
			}
			return str;
		}

		// public static check_MoneyText(exInput: Laya.TextInput, max: number, min: number, slider: Laya.HSlider = null, MoneySupply: game.MoneySupplyDialog = null): void {
		// 	let str = exInput.text;
		// 	var end: string = "";
		// 	let arr: Array<any> = [];
		// 	// console.log(str + "str");
		// 	if (str.indexOf(".") != -1) {
		// 		end = str.substr(str.indexOf("."), str.length);
		// 		if (end.length > 3)
		// 			end = end.substr(0, 3);
		// 		// console.log(end + "^^^");
		// 		arr = str.substr(0, str.indexOf(".")).split("");
		// 	}
		// 	else
		// 		arr = str.split("");



		// 	var len: number = str.length;
		// 	var a: Array<number> = [];

		// 	for (var i = 0; i < arr.length; i++) {
		// 		if (Number(arr[i]) || arr[i] == "0") {
		// 			var n: number = Number(arr[i]);
		// 			a.push(n)
		// 		}
		// 	}

		// 	var money: number = Number(a.join(""));
		// 	var n: number = 10;
		// 	var x: number = 0;
		// 	if (end != "" && end.length > 1) {
		// 		if (end.length == 3) n = 100;

		// 		x = Number(end.substr(1, end.length)) / n;
		// 	}
		// 	// console.log(money + "money");

		// 	if (money + x > max / 100) {
		// 		money = max / 100;
		// 		exInput.text = String(max / 100);
		// 		this.check_MoneyText(exInput, max, min, slider);


		// 	} else if (money + x < min / 100) {
		// 		money = min / 100;
		// 		exInput.text = String(min / 100);

		// 		this.check_MoneyText(exInput, max, min, slider);
		// 	}
		// 	else
		// 		exInput.text = this.formatNum_00(money) + end;



		// 	if (slider != null) { //进度条有问题。
		// 		var num: number = Number(money + end) / max;
		// 		if (MoneySupply)
		// 			MoneySupply.isSliderEvent = false;
		// 		slider.value = num * 10000;

		// 	}


		// }


		public static formatNum_00(num: number, insertSign: string = ","): string {
			var s: string = num.toString();
			var n: string;
			var arr: Array<any>;
			if (s.indexOf(".") == -1)
				n = "";
			else {
				arr = s.split("");
				arr.splice(arr.indexOf("."), 1);
				n = "." + arr.splice(arr.length - 2, 2).join("");
				s = arr.join("");
			}
			arr = [];
			var str: string = Number(num).toString();
			var idx: number = 0;
			for (var i: number = str.length - 1; i >= 0; i--) {
				idx++;
				if (idx == 3 && i != 0) {
					idx = 1;
					str = str.substring(0, i) + insertSign + str.substr(i);
					i--;
				}
			}
			return str + n;
		}


		public static check_Phone_Text(inputString: string): string {


			let str = inputString;
			var end: string = "";
			let arr: Array<any> = [];
			// console.log(str + "str");
			if (str.indexOf(".") != -1) {
				end = str.substr(str.indexOf("."), str.length);
				if (end.length > 3)
					end = end.substr(0, 3);
				if (end.indexOf(".") > -1 && end.lastIndexOf(".") > -1 && end.indexOf(".") != end.lastIndexOf(".")) {
					end = ".0";
				}
				// console.log(end + "^^^");
				arr = str.substr(0, str.indexOf(".")).split("");
			}
			else
				arr = str.split("");



			var len: number = str.length;
			var a: Array<number> = [];

			for (var i = 0; i < arr.length; i++) {
				if (Number(arr[i]) || arr[i] == "0") {
					var n: number = Number(arr[i]);
					a.push(n)
				}
			}

			var money: number = Number(a.join(""));
			var n: number = 10;
			var x: number = 0;
			if (end != "" && end.length > 1) {
				if (end.length == 3) n = 100;

				x = Number(end.substr(1, end.length)) / n;
			}

			return this.formatNum_00(money) + end;

		}

		public static Check_Input(text) {
			if (text == "00" || text == "." || text.match(/[^0-9.]/g)) {
				text = text.substring(0, text.length - 1);
			}
			if (text.match(/./g) && text.match(/./g).length > 1 || text.match(/[^0-9.]/g)) {
				text = text.substring(0, text.length - 1);
			}
			if (text.split(/./)[1] && text.split(/./)[1].length == 3) {
				text = text.substring(0, text.length - 1);
			}
			if (isNaN(text) || text == null || text == "") {
				if (text.length > 1) text = 0;
			}
			else {
				text = text >= 0 ? text : 0;
			}

			return text;
		}


		public static getLimitString(str: string, limitLen: number) {
			var curName = '';
			var curNameSize = 0;
			while (curNameSize < limitLen && str[curName.length] != null) {
				curNameSize += str.charCodeAt(curName.length) <= 126 ? 1 : 2;
				curName += str[curName.length];
			}
			if (curName.length < str.length) {
				curName = curName.substr(0, (curName.charCodeAt(curName.length - 1) <= 126 ? curName.length - 2 : curName.length - 1));
				curName += '...';
			}
			return curName;
		};

		public static stringFormat(content: string, args: Array<any>): string {
			for (var i: number = 0; i < args.length; i++) {
				var regexp = new RegExp('\\{' + i + '\\}', 'gi');
				content = content.replace(regexp, args[i]);
			}

			return content;
		}


		public static getDateStr(year: number, month: number, day: number, config: any): Array<any> {
			config = config || { minDate: "1900-01-01", maxDate: "2099-12-31" };
			utils.CommonUtils.log(utils.CommonUtils.stringFormat("year: {0}, month: {1}, day: {2}", [year, month, day]));
			var arry: Array<any> = [];

			//计算某年某月有多少天,如果是二月，闰年28天否则29天
			var setMonthDays: Function = function (year: number, month: number): number {
				var er: number = year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28;
				return [31, er, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
			}
			//得到指定月的上个月最后一天传进来按12月算
			var getPervMonthLastDay: Function = function (year: number, month: number): number {
				return new Date(year, month - 1, 0).getDate();
			}

			//补齐数位
			var digit: Function = function (num: number): string {
				return num < 10 ? "0" + num : num.toString();
			}

			//当前月第一天是星期几
			var date: number = setMonthDays(year, month);
			var weekday: number = new Date(year, month - 1, 1).getDay();
			//根据这个星期算前面几天的上个月最后几天
			var prevLastDay = weekday !== 0 ? weekday : weekday + 7;
			//得到上个月最后一天
			var pervMonthlastDay: number = getPervMonthLastDay(year, month);
			var currentMonthDays: number = getPervMonthLastDay(year, month + 1);
			//上月最后几天循环
			var lastdays: number = pervMonthlastDay - prevLastDay;
			//判断是否超出允许的日期范围
			var startDay: number = 1;
			var minArr: Array<number> = config.minDate.split("-");
			var maxArr: Array<number> = config.maxDate.split("-");
			var endDay: number = currentMonthDays;
			var thisDate: Date = new Date(year, month, day);
			var firstDate: Date = new Date(year, month, 1);
			var lastDate: Date = new Date(year, month, currentMonthDays);
			var minTime: Date = new Date(minArr[0], minArr[1], minArr[2]);
			var maxTime: Date = new Date(maxArr[0], maxArr[1], maxArr[2]);
			var minDateDay: number = minTime.getDate();

			if (minTime > lastDate) {
				startDay = currentMonthDays + 1;
			} else if (minTime >= firstDate && minTime <= lastDate) {
				startDay = minDateDay;
			} else if (minTime >= firstDate) {

			}

			if (maxTime) {
				var maxDateDay: number = maxTime.getDate();
				if (maxTime < firstDate) {
					endDay = startDay;
				} else if (maxTime >= firstDate && maxTime <= lastDate) {
					endDay = maxDateDay;
				}
			}

			//循环上月剩余的天数
			for (var p: number = prevLastDay - 1; p >= 0; p--) {
				var py: number = 0;
				var pm: number = 0;
				var preCls: number = 0;
				var preDays: number = digit(pervMonthlastDay - p);
				month === 1 ? (py = year - 1, pm = 13) : (py = year, pm = month);
				var thatpretm: number = parseInt(py.toString() + digit(pm - 1).toString() + preDays.toString());
				var minpretm: number = parseInt(minArr[0].toString() + digit(minArr[1]).toString() + digit(minArr[2]).toString());
				var maxnexttm: number = parseInt(maxArr[0].toString() + digit(maxArr[1]).toString() + digit(maxArr[2]).toString());
				var inTime: string = thatpretm >= minpretm && thatpretm <= maxnexttm ? "prevdate" : "disabled";
				arry.push({
					inTime: inTime,
					py: py,
					pm: pm - 1,
					pd: preDays
				})
			}

			//循环本月的天数,将日期按允许的范围分三段拼接
			for (var i: number = 1; i < startDay; i++) {
				i = digit(i);
				arry.push({
					inTime: "disabled",
					py: year,
					pm: month,
					pd: i
				});
			}

			for (var j: number = startDay; j <= endDay; j++) {
				j = digit(j);
				arry.push({
					inTime: day == j ? "action" : "normal",
					py: year,
					pm: month,
					pd: j
				})
			}

			for (var k: number = endDay + 1; k <= currentMonthDays; k++) {
				k = digit(k);
				arry.push({
					inTime: "disabled",
					py: year,
					pm: month,
					pd: k
				})
			}

			//循环补上下个月的开始几天
			var nextDayArr = [], nextMonthStartDays = 42 - prevLastDay - setMonthDays(year, month);
			for (var n = 1; n <= nextMonthStartDays; n++) {
				var ny, nm, nextCls;
				n = digit(n);
				month >= 12 ? (ny = year + 1, nm = 0) : (ny = year, nm = month);
				var thatnexttm = parseInt(ny.toString() + digit(parseInt(nm) + 1).toString() + digit(n).toString()),
					minnexttm = parseInt(minArr[0].toString() + digit(minArr[1]).toString() + digit(minArr[2]).toString()),
					maxnexttm = parseInt(maxArr[0].toString() + digit(maxArr[1]).toString() + digit(maxArr[2]).toString());
				nextCls = thatnexttm <= maxnexttm && thatnexttm >= minnexttm ? "nextdate" : nextCls = "disabled";
				arry.push({
					inTime: nextCls,
					py: ny,
					pm: nm + 1,
					pd: n
				})
			}
			// utils.CommonUtils.log(JSON.stringify(arry));
			return arry;
		}

		public static formatNumber(num: number) {

			num = num / 100;
			var sign: boolean = num >= 0;
			num = Math.abs(num);
			var str: string = num.toString();
			if (str.indexOf(".") > -1 && str.split(".")[1].length > 2) {
				var index: number = str.indexOf(".");
				var len: number = str.length;
				str = str.substring(0, index + 3);
			}
			var value: string = str.replace(/(^|\s)\d+/g, function (m: string) {
				return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',');
			});


			return sign ? value : "-" + value;
		};

		public static formatNumberWith00(num: number) {
			let value = this.formatNumber(num);
			utils.CommonUtils.log("value = ", value);
			let i = value.indexOf(".");
			if (i == -1) //没有.
			{
				value += "." + "00";
			}
			else if (i == value.length - 2) {
				value += "0";
			}

			return value;
		}

		public static just_num(exInput: string): string {
			let str = exInput;
			var end: string = "";
			let arr: Array<any> = [];
			// console.log(str + "str");
			if (str.indexOf(".") != -1) {
				end = str.substr(str.indexOf("."), str.length);
				if (end.length > 3)
					end = end.substr(0, 3);

				arr = str.substr(0, str.indexOf(".")).split("");
			}
			else
				arr = str.split("");



			var len: number = str.length;
			var a: Array<number> = [];

			for (var i = 0; i < arr.length; i++) {
				if (Number(arr[i]) || arr[i] == "0") {
					var n: number = Number(arr[i]);
					a.push(n)
				}
			}

			var money: number = Number(a.join(""));
			if (end != "" && end.length > 1) {
				let endTemp = ".";
				let endArr: Array<any> = [];
				endArr = end.substr(1, end.length).split("");
				for (var i = 0; i < endArr.length; i++) {
					if (Number(endArr[i]) || endArr[i] == "0") {
						endTemp += Number(endArr[i]);
					}
				}
				end = endTemp;
			}
			return money + end;

		}

		public static log(message?: any, ...optionalParams: any[]): void {
			if (CommonUtils.isDebug) {
				console.log(message, ...optionalParams);
			}

		}
		public static warn(message?: any, ...optionalParams: any[]): void {
			if (CommonUtils.isDebug) {
				console.warn(message, ...optionalParams);
			}

		}
		public static random(min: number, max: number): number {
			return Math.floor(Math.random() * (max - min)) + min;
		}

		public static randomFloat(min: number, max: number): number {
			return Math.random() * (max - min) + min;
		}

		public static distance(x1, y1, x2, y2): number {
			return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
		}

		public static setItem(key: string, value: string): void {
			Laya.LocalStorage.setItem(key, value);
		}

		public static getItem(key: string): string {
			return Laya.LocalStorage.getItem(key);
		}

		public static getTimeByTimeZone(time: number, index: number): number {
			if (typeof index !== 'number') return;
			var d: Date = new Date();
			//本地时间与GMT时间的时间偏移差
			var offset: number = d.getTimezoneOffset() * 60000;
			//得到现在的格林尼治时间
			var utcTime: number = time + offset;
			return utcTime + 3600000 * index;
		}

		public static httpRequest(url: string, context: any = null, onCompleteHandler: Function = null, onErrorHandler: Function = null,
			onProcessHandler: Function = null, data: any = null, method: string = "post", responseType: string = "json", headers: any[] = null, ): Laya.HttpRequest {

			var xhr: Laya.HttpRequest = new Laya.HttpRequest();
			xhr.once(Laya.Event.COMPLETE, context, (function (request: Laya.HttpRequest): Function {
				return function (e: any) {
					onCompleteHandler.apply(context, [e, request.data]);
				};
			})(xhr));
			xhr.once(Laya.Event.ERROR, context, onErrorHandler);
			xhr.once(Laya.Event.PROGRESS, context, onProcessHandler);
			xhr.send(url, data, "get", responseType, []);

			return xhr;
		}

		/***
         *  是否为app版本
         */
		public static isApp(): boolean {
			let userAgent: string = navigator.userAgent.toLowerCase()
			return userAgent.indexOf("browser_type/android_app") != -1;
		}

		/** 是否需要适配*/
		public static isIphonXAdapte(): boolean {

			var angle = 0;

			//如果是APP大厅,设备是iphoneX 刘海的高度44pt
			//横屏 左旋：90  右旋：-90
			if (window.orientation) {
				angle = window.orientation as number;
			}
			// else if (screen.msOrientation) {
			// 	angle = screen.msOrientation.;
			// }
			//utils.CommonUtils.log("----------screen.msOrientation = ", screen.msOrientation);
			//utils.CommonUtils.log("----------angle = ", angle);

			if (navigator.userAgent.indexOf("Devcice_Type/iPhoneX") > -1) {
				//utils.CommonUtils.log("----isIphonX 是也");
				if (angle >= 0) {
					return true;
				}
			}
			return false;
		}


		/**
		 * 将屏幕坐标转换到世界坐标
		 * @param cam 相机
		 * @param sourcePos 视口坐标
		 */
		public static ScreenToWorldPoint(cam: Laya.Camera, sourcePos: Laya.Vector3) {
			let bOrthographic = cam.orthographic;
			cam.orthographic = true;
			cam.orthographicVerticalSize = 11.5;
			var outPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
			cam.convertScreenCoordToOrthographicCoord(sourcePos, outPos);
			outPos.z = 0;
			cam.orthographic = bOrthographic;

			return outPos;
		}

		/**
		 * 给对象添加组件并返回添加的组件
		 * @param trans 待添加组件的对象
		 * @param type 组件类型
		 */
		public static CustomAddComponent(trans: Laya.Sprite3D, type: any) {
			let component = trans.getComponent(type);
			if (null == component)
				component = trans.addComponent(type);
			return component;
		}

		public static CreatLayaImg(path: string, pos: Laya.Point, parent: Laya.Node, anchorX: number = 0.5, anchorY: number = 0.5): Laya.Image {
			var img = new Laya.Image(path);
			img.anchorX = anchorX;
			img.anchorY = anchorY;
			img.pos(pos.x, pos.y);
			//img.mouseThrough = false;
			//img.mouseEnabled = true;
			parent.addChild(img);
			return img;
		}

		public static CreatLayaLabel(pos: Laya.Point, width: number, parent: Laya.Node, fontSize: number) {
			var label = new Laya.Label("");//info.getChild("UserNameLabel").asLabel;
			label.pos(pos.x, pos.y);
			label.align = "center";
			label.width = width;
			label.fontSize = fontSize;
			parent.addChild(label);

			return label
		}

		public static CreatFontClip(pos: Laya.Point, skin: string, sheet: string, parent: Laya.Node, width: number) {
			var fontclip: Laya.FontClip = new Laya.FontClip(skin, sheet);
			fontclip.align = "center";
			fontclip.width = width;
			fontclip.pos(pos.x, pos.y);
			fontclip.spaceX = -3;
			fontclip.zOrder = EnumData.SCREEN_ZODER.BounsFont;
			parent.addChild(fontclip);

			return fontclip;
		}
	}
}