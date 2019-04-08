/**
 * 游戏相关事件
 */
export default class GameEvent
{
    public static CONNECT:string="SOCKET_CONNECT";      //socket连接
    public static SOCKET_CLOSE:string="SOCKET_CLOSE";   //socket断开
    public static SOCKET_ERROR:string="SOCKET_ERROR";   //socket出错
    public static LOADCOMPLETE:string="LOADCOMPLETE";   //游戏资源加载完成
    public static GAME_START:string ="GAME_START";      //游戏开始
    public static GAME_CONTINUE:string ="GAME_CONTINUE";//游戏继续
    public static GAME_RECONNECT:string ="GAME_RECONNECT";//断线重连
    public static HUNT_AUTOATTACK:string ="HUNT_AUTOATTACK";//自动攻击开始、取消
    public static HUNT_LOCKATTACK:string ="HUNT_LOCKATTACK";//锁定攻击开始、取消
    public static HUNT_HUNTEDFISH:string ="HUNT_HUNTEDFISH";//自动攻击捕到鱼

}

