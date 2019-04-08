
    /**
 * PackageOut
 */
    export default class PackageOut extends laya.utils.Byte{
        public get code() : number {
            return this._code;
        }
        private _code:number;

        private static _packageIndex:number = 0;


        constructor() {
            super();
            this.endian = Laya.Socket.BIG_ENDIAN;
        }

        /** 数据包初始化 */
        public init(code:number)
        {
            // 清除数据
            this.clear();

            this.writeUint16(code);

            this._code = code;
        }

        public pack(data:protobuf.Message<any>)
        {
            this.writeArrayBuffer(data["__proto__"].constructor.encode(data).finish());
        }
    }

 