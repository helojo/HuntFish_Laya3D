import GameManger from "../manager/GameManger";
import GameFacade from "../GameFacade";

export enum LangType {
    CHINESE,
    ENGLISH,
    CHANGESEHK,
}

export default class Lang {

    /**
     * 语言类型转换
     * @param lang 
     */
    public static langToType(lang: string): LangType {
        var type: LangType = LangType.CHINESE;
        switch (lang) {
            case "zh-cn":
                type = LangType.CHINESE;
                break;
            case "en-us":
                type = LangType.ENGLISH;
                break;
            case "zh-hk":
                type = LangType.CHANGESEHK;
                break;
            default:
                type = LangType.CHINESE;
                break;
        }
        return type;
    }

    static freeTranWalletCh = {
        conServer: "连接服务器超时，请重新操作",
        operationInvalid: "操作无效",
        autoAddWallet: "系统向FG游戏存入{0}元",
        reqFail: "请求中心钱包失败",
        clipNoMoney: "余额不足，请前往充值",
        setMoney: "请设置带入游戏的金额",
        jpBonus: "该记录是JP奖金",
        reqTooFast: "请求中心钱包太快",
        centerNotEnough: "中心钱包余额不足，请前往充值",
    };

    static freeTranWalletEn = {
        conServer: "The connection server is out of time, please reoperate",
        operationInvalid: "This operation is invalid",
        autoAddWallet: "The system saves {0} to the FunGame",
        reqFail: "Request center purse failed",
        clipNoMoney: "The balance of the central purse is insufficient. Please go to recharge",
        setMoney: "Please set up the amount of money to bring into the game.",
        jpBonus: "This record is JP Bonus.",
        reqTooFast: "The request center wallet is too fast",

    }
    static lvFundCh = {
        tipFundBuy: "已消耗{0}成功购买{1}",
        tipLevelReceived: "已成功领取等级奖金{0}元",
        tipsLevelBuy: "消耗金币{0},是否确定?",
        tipsGoldLess: "金币不足，请充值后再购买",
        tipLog: "试玩帐号无等级体系，请登录游戏体验最新功能",
        tipPurchaseFailed: "购买失败，请稍候重试。",
        tipReceiveFailed: "领取失败，请稍候重试。",
        tipActEnd: "活动已结束。",
    }
    static lvFundEn = {
        tipFundBuy: "You have spent {0}to buy {1} successfully",
        tipLevelReceived: "You have received the level bonus {0} yuan successfully",
        tipsLevelBuy: "Consumption of gold coins {0}s, is it OK?",
        tipsGoldLess: "Gold is not enough, please recharge before purchase",
        tipLog: "The demo account has no rating system，please log in game to experience the latest functions",
        tipPurchaseFailed: "Purchase failed, please try again later",
        tipReceiveFailed: "Failed to receive, please try again later",
    }

}