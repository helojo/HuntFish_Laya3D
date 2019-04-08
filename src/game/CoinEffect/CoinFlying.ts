import GameFacade from "../../GameFacade";
import CommonConstant from "../../constant/CommonConstant";
import Sound from "../../constant/SoundNameConstant";
import BatteryController from "../../controller/BatteryController";
import EnumData from "../../Enum/EnumData";

/**
 * 金币飞行的逻辑类
 */
export default class CoinFlying extends Laya.Script3D {

    /** 运动时间*/
    private _moveTime: number;
    private _moveTotalTime: number = 0.5;
    private _jumpTotalTime: number = 0.3;

    private _delayTime: number;
    private _bDelete: boolean;
    private _originPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
    private _endPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0);

    private _delPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
    private _jumpPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
    private _averageSpeed: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
    private _jumpSpeed: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
    private _mowner: Laya.Sprite3D;

    private _goldEffect: Laya.Sprite3D;

    private _uid: number | Long;
    private _date: RoomMsg.Ifish_bonus_info;
    //private _jettonshow:number;


    /**
     * 
     * @param dt 延时销毁时间
     * @param endPos 运动的结束位置
     * @param bDel 是否删除该节点
     */
    public InitData(dt: number, endPos: Laya.Vector3, bDel: boolean, uid: number | Long, data: RoomMsg.Ifish_bonus_info, jettonshow: number): void {
        if (null == this.owner) return;

        this._uid = uid;
        this._date = data;
        //this._jettonshow = jettonshow;
        if (null == this.owner) return;
        this._mowner = this.owner as Laya.Sprite3D;
        if (this._mowner.transform == null) return; // todo
        this._delayTime = dt;
        this._bDelete = bDel;
        this._originPos = new Laya.Vector3(this._mowner.transform.position.x, this._mowner.transform.position.y, this._mowner.transform.position.z);
        this._endPos = endPos;
        Laya.Vector3.subtract(this._endPos, this._originPos, this._delPos);
        Laya.Vector3.subtract(new Laya.Vector3(this._delPos.x / 5, this._delPos.y / 5, this._delPos.z), this._originPos, this._jumpPos);
        this._moveTime = 0;
        //Laya.timer.once(dt, this, this.StartMove);

        this.StartMove();
    }

    private StartMove(): void {

        //this._moveTotalTime = Laya.Vector3.distance(this._endPos, this._originPos) / 15;
        Laya.Vector3.scale(this._delPos, 1 / this._moveTotalTime, this._averageSpeed);
        Laya.Vector3.scale(this._jumpPos, 1 / this._jumpTotalTime, this._jumpSpeed);
        //Laya.timer.loop(10, this, this.JumpMove);
        Laya.timer.loop(10, this, this.CurvyMove);

    }

    private JumpMove() {
        if (this._moveTime < this._jumpTotalTime) {
            this._moveTime += 0.02;
            let speedvy = this._jumpSpeed.y * (-2);
            let acceleratedy = (this._jumpPos.y - speedvy * this._jumpTotalTime) / (this._jumpTotalTime * this._jumpTotalTime) * 2; // s = 1/2*g*t2 + vt;
            let POS = new Laya.Vector3(
                this._jumpSpeed.x * this._moveTime,
                speedvy * this._moveTime + acceleratedy * (this._moveTime * this._moveTime) / 2,
                this._jumpSpeed.z * this._moveTime);

            let tendPos = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.add(this._originPos, POS, tendPos);
            this._mowner.transform.position = tendPos;
        }
        else {
            this._moveTime = 0;
            Laya.timer.clear(this, this.JumpMove);
            Laya.timer.loop(10, this, this.CurvyMove);
        }
    }

    private CurvyMove() {
        if (this._moveTime < this._moveTotalTime) {
            this._moveTime += 0.02;
            let speedvy = this._averageSpeed.y * (-2);
            let acceleratedy = (this._delPos.y - speedvy * this._moveTotalTime) / (this._moveTotalTime * this._moveTotalTime) * 2; // s = 1/2*g*t2 + vt;
            let POS = new Laya.Vector3(
                this._averageSpeed.x * this._moveTime,
                speedvy * this._moveTime + acceleratedy * (this._moveTime * this._moveTime) / 2,
                this._averageSpeed.z * this._moveTime);

            let tendPos = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.add(this._originPos, POS, tendPos);
            this._mowner.transform.position = tendPos;
        }
        else {
            Laya.timer.clear(this, this.CurvyMove);
            Laya.timer.once(this._delayTime, this, () => {
                BatteryController.Instance.CoinFlyingFinish(this._uid, this._date);
            })
            this.LoadEndEffect();
            this.DestroySelf();
        }
    }

    private LoadEndEffect(): void {
        if (null == this._goldEffect)
            this._goldEffect = GameFacade.Instance.HuntSceneMng.InstantiateEffect(CommonConstant._huntSceneEffectArray.Gold_Effect);
        this._goldEffect.transform.position = this._mowner.transform.position;
        this._goldEffect.active = true;
        Laya.timer.once(2000, this, function () {
            this._goldEffect.active = false;
        });
    }

    private DestroySelf(): void {
        if (this._bDelete)
            this.owner.destroy();
        else
            this.owner.active = false;
    }
}