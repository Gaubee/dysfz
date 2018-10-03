import { AppUrl } from '@/service/AppUrl';
import SocketIO from 'socket.io-client';

type RequestOptions = {
    query?: any
    params?: any
}
export const default_server_url = location.protocol + "//" + location.hostname + ':9201';
export class AppFetch {
    constructor(private _server_url: string) {
    }
    get<T>(url: AppUrl, req_opts?: RequestOptions) {
        return this._request(url.toString(), req_opts) as Promise<T>;
    }
    private _io = SocketIO(this._server_url)
    isOnline = false;
    getOnLineStatus() {

    }
    _request(url: string, req_opts?: RequestOptions) {
        console.log(this._io);
        return {}
    }

    /// 默认实例
    private static _default_instance?: AppFetch
    static get instance() {
        return this._default_instance || (this._default_instance = new AppFetch(default_server_url));
    }
}
