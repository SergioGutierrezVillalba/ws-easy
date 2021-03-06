import { Server as WebSocketServer } from 'ws';

import WebSocketEvent from "./WebSocketEvent";
import StandardEvents from "./StandardEvents";

export default class WebSocketCloseEvent implements WebSocketEvent {

    callback: (wss: WebSocketServer) => void;;
    name = StandardEvents.close;
    wss!: WebSocketServer;

    constructor() {
        this.callback = () => { };
    }

    getCallback(): (wss: WebSocketServer) => void {
        return this.callback;
    }

    setCallback(cb: (wss: WebSocketServer, ...args: any[]) => void): void {
        this.wss.on(StandardEvents.close, cb);
        this.callback = cb;
    }

    using(wss: WebSocketServer): WebSocketEvent {
        this.wss = wss;
        return this;
    }

}