import { utils } from "../utils/CommonUtil";
import ProtoBuf from "./ProtoBuf";

/**
 * PackageIn
 */
export default class PackageIn extends Laya.Byte {
    constructor(source: ArrayBuffer, start: number = 0) {
        super();
        this.endian = Laya.Socket.BIG_ENDIAN;

        // 提取协议号
        this.writeArrayBuffer(source, start, 2);

        this.pos = 0;
        this._ReadHeader();
        this.clear();
        this.writeArrayBuffer(source, 2);
    }

    public get data(): any {
        return this._data;
    }
    public set data(v: any) {
        this._data = v;
    }

    private _data: any;

    public get start(): number {
        return this._start;
    }
    private _start: number;


    // 实际有效长度
    public get validLength(): number {
        return this._validLength;
    }
    private _validLength: number = 0;


    public get code(): number {
        return this._code;
    }
    private _code: number = -1;


    private _ReadHeader(): void {
        this._code = this.getUint16();
    }

    public unpack() {
        let buffer: ArrayBuffer = this.buffer;
        this.data = this.decode(ProtoBuf.decode(this.code), new Uint8Array(buffer));
    }
    /**
    * 解码
    */
    private decode(cls: { decode<T>(reader: (protobuf.Reader | Uint8Array)) }, data: Uint8Array): protobuf.Message<any> {
        // console.log(` cls:${cls}`);

        if (!cls) return null;
        return cls.decode(data);
    }

}
