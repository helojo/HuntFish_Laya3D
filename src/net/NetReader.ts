
import GameFacade from "./../GameFacade";
import PackageIn from "./PackageIn";


    /**
     * NetReader 
     */
    export default class NetReader
    {
        private _packages:Array<PackageIn> = new Array<PackageIn>();
        constructor() 
        {
        }

        public setPassword()
        {

        }

        public decode()
        {

        }

        public addPackage(pkg:PackageIn)
        {
            this._packages.unshift(pkg);
        }

        public hasNext():boolean
        {
            return this._packages.length > 0;
        }

        public handleNext()
        {
            var pkg:PackageIn = this._packages.pop();
            // 由NetWorkManager处理
        }

        public notify()
        {
            var pkgIn:PackageIn;
            while (this._packages.length > 0) 
            {
                pkgIn = this._packages.pop();
                GameFacade.Instance.SocketMng.dispatchMessage(pkgIn.code,pkgIn.data);
            }

        }
    }
 
 