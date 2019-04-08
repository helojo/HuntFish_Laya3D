import BaseManager from "./BaseManager";

/**
 * 事件管理
 */

    export default class EventManager extends BaseManager {
        private _event: laya.events.EventDispatcher;

        Init(){
            this._event = new laya.events.EventDispatcher();
        }

        /**
         * 添加一般游戏逻辑事件（不包含协议回调事件） 要防止重复添加，否则会重复调用
         */
        public add(type: string, thisObject: any, listener: Function, once: boolean = false): void {
            if (!once)
                this._event.on(type, thisObject, listener);
            else
                this._event.once(type, thisObject, listener);
        }

        /**
         * 派发一般游戏逻辑事件（不包含协议回调事件）
         */
        public dispatch(type: string, ...args): void {
            this._event.event(type, args);
        }

        /**
         * 移除一般游戏逻辑事件（不包含协议回调事件）
         */
        public remove(type: string, thisObject: any, listener: Function, onceOnly: boolean = false): void {
            this._event.off(type, thisObject, listener, onceOnly);

        }

    }
