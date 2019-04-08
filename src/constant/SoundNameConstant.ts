export default class Sound{
    /**
     * 三个声音类别
     */
    static soundHeadArr={
        bgSoundHead:"sounds/SceneSound/",//背景音乐文件夹
        fishSoundHead:"sounds/FishSound/",//鱼音效文件夹
        keySoundHead:"sounds/KeySound/"//按键音效文件夹
    }

    /**
     * 背景音乐
     */
    static soundBgArr={
         loginBgMusic:"LoginScene",//登录场景的背景音乐
         hallBgMusic:"HallScene",//大厅场景的背景音乐
         playBgMusic1:"Rate0.1",//0.1倍场的背景音乐
         playBgMusic2:"Rate1",//1倍场的背景音乐
         playBgMusic3:"Rate10",//10倍场的背景音乐
         fishMatrix:"FishMatrix",//鱼阵的背景音
    }
 
    /**
     * 鱼的声音
     */
    static soundFishArr={
         fishDying:"FishDying",//需要添加鱼的序列号
         frozonFish:"FrozonFish",//冰冻鱼
         fullSceneBomb:"FullSceneBomb",//全屏炸弹
    }

    /**
     * 按键声音
     */
    static soundKeyArr={
         bigFishCoin:"BigFishCoin",//半转盘金币
         bossFishCoin:"BossFishCoin",//大转盘金币
         bossWarning:"BossWarning",//boss预警
         changeGun:"ChangeGun",//换枪
         onClick:"Click",//点击
         onClose:"Close",//关闭
         coin:"Coin",//普通金币
         getCoin:"GetCoin",//获得金币
         luckAward:"LuckAward",//幸运奖金
         onOpen:"Open",//打开面板
         rateSelect:"RateSelect",//选择倍率场
         shoot1:"Shoot1",//低级子弹
         shoot2:"Shoot2",//中级子弹
         shoot3:"Shoot3",//高级子弹
         turntable:"Turntable",//转盘
         windowChange:"WindowChange",//改变窗口
         rateWindow:"RateWindow",//倍率场弹框
         warn:"Warn",//预警来袭
         wave:"Wave",//波浪
    }

}
