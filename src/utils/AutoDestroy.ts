export default class AutoDestroy extends Laya.Script3D {
    private _delayTime: number = 5000;
    private _bDelete: boolean;

    /**
     * 
     * @param dt 延时销毁时间
     * @param bDel 是否删除该节点
     */
    public InitData(dt: number, bDel: boolean): void {
        this._delayTime = dt;
        this._bDelete = bDel;
        this.owner.active = true;
        Laya.timer.once(this._delayTime, this, this.DestroySelf);
    }

    private DestroySelf(): void {
        if (this._bDelete)
            this.owner.destroy();
        else
            this.owner.active = false;
    }
}