
export class FishBaseConfig {
    /// <summary>
    /// 鱼类型ID
    /// </summary>
    public _FishTypeID: number;

    /// <summary>
    /// 死亡音效索引
    /// </summary>
    public _FishDeadIndex: number;

    /// <summary>
    /// 死亡文字
    /// </summary>
    public _LastWord: string;

    /// <summary>
    /// 冰块大小
    /// </summary>
    public _IceBlockScale: number[];

    /// <summary>
    /// 冰块欧拉角
    /// </summary>
    public _IceBlockAngel: number[];

    /// <summary>
    /// 鱼停留行为（路径点，停留时间毫秒）
    /// </summary>
    public _StatyBehavior: string;

    /// <summary>
    /// 鱼游动速度变化(路径点，速度倍率)
    /// </summary>
    public _SpeedBehavior: string;

    /// <summary>
    /// 游泳动画
    /// </summary>
    public _SwimAni: string;

    /// <summary>
    /// 死亡动画
    /// </summary>
    public _DeadAni: string;

    /// <summary>
    /// 被击动画
    /// </summary>
    public _HitAni: string;

    /// <summary>
    /// 停留动画1
    /// </summary>
    public _StayAni1: string;

    /// <summary>
    /// 停留动画2
    /// </summary>
    public _StayAni2: string;

    public constructor(obj:string)  {
        this._FishTypeID = obj['FishTypeID'];
        this._FishDeadIndex = obj['FishDeadIndex'];
        this._LastWord = obj['LastWord'];
        this._IceBlockScale = obj['IceBlockScale'];
        this._IceBlockAngel= obj['IceBlockAngel'];
        this._StatyBehavior = obj['StatyBehavior'];
        this._SpeedBehavior = obj['SpeedBehavior'];
        this._SwimAni = obj['SwimAni'];
        this._DeadAni = obj['DeadAni'];
        this._HitAni = obj['HitAni'];
        this._StayAni1 = obj['StayAni1'];
        this._StayAni2 = obj['StayAni2'];
    }

    // private static Dictionary<uint, FishBaseConfigCSVConfig> dictionary = new Dictionary<uint, FishBaseConfigCSVConfig>();

    // /// <summary>
    // /// 通过FishTypeID获取FishBaseConfigCSVConfig的实例
    // /// </summary>
    // /// <param name="FishTypeID">索引</param>
    // /// <returns>FishBaseConfigCSVConfig的实例</returns>
    // public static FishBaseConfigCSVConfig Get(uint FishTypeID)  {
    //     return dictionary[FishTypeID];
    // }

    // /// <summary>
    // /// 获取字典
    // /// </summary>
    // /// <returns>字典</returns>
    // public static Dictionary<uint, FishBaseConfigCSVConfig> GetDictionary()  {
    //     return dictionary;
    // }

    // /// <summary>
    // /// 获取所有键
    // /// </summary>
    // /// <returns>所有键</returns>
    // public static uint[] GetKeys()  {
    //     int count = dictionary.Keys.Count;
    //     uint[] keys = new uint[count];
    //     dictionary.Keys.CopyTo(keys, 0);
    //     return keys;
    // }

    // /// <summary>
    // /// 获取所有实例
    // /// </summary>
    // /// <returns>所有实例</returns>
    // public static FishBaseConfigCSVConfig[] GetValues()  {
    //     int count = dictionary.Values.Count;
    //     FishBaseConfigCSVConfig[] values = new FishBaseConfigCSVConfig[count];
    //     dictionary.Values.CopyTo(values, 0);
    //     return values;
    // }
}
