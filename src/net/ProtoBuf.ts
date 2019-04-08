
//protobuf数据包的前16字节，大头占前7个字节 小头占后9个字节

export default class ProtoBuf {
    private static ProtoDic: Laya.WeakObject;

    /** 根据大头和小头组合成文件的头*/
    public static build(cmd: number, ccmd: number): number {

        var headCmd = cmd << 9;
        headCmd += ccmd;
        return headCmd;
    }
    /** 根据数据头（16位字节数据），拆解出大头（前7位字节）与小头（后9位字节）*/
    public static Resolve(headCmd:number): any {
        var cmd = headCmd >> 9;
        var ccmd = headCmd << 23;
        var ccmd = ccmd >> 23;
        return [cmd,ccmd];
    }

    /**
     * 根据数据头，得到数据体对应的类
     * @param headCmd 数据头
     */
    public static decode(headCmd: number): any {
        // var value = this.ProtoDic.get(headCmd);
        // var cmd = headCmd >> 9;
        // var ccmd = headCmd << 23;
        // var ccmd = ccmd >> 23;
        return this.ProtoDic.get(headCmd);
    }

    public static registerCMD(cmd: number, data: any) {
        if (null == this.ProtoDic)
            this.ProtoDic = new Laya.WeakObject();
        this.ProtoDic.set(cmd, data);
    }
}
