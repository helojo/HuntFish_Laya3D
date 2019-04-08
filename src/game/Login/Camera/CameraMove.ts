export class cameraMove extends Laya.Script {
    private camera:Laya.Camera;
    private num:number;

    constructor() { super() };
    onAwake() {
     this.camera= this.owner as Laya.Camera;
     this.camera.transform.rotationEuler= new Laya.Vector3(0,180,-0);
     this.num=0;
     Laya.timer.frameLoop(1,this,this.cameraMove);
    }

    /**
     * 摄像机移动
     */
    private cameraMove(){
        var x= this.num++;
        var y=Math.sin(x*0.01);
        this.camera.transform.rotationEuler= new Laya.Vector3(0,180+y,-0);
    }
}