"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const url = require("url");
const cheerio = require("cheerio");
const config_1 = require("./config");
class FetchTool {
    retryTimes(v) {
        if (typeof v === "number") {
            return (this._retry_times = v);
        }
        v = this._retry_times;
        this._retry_times = undefined;
        return v || Infinity;
    }
    async fetch(url_str, init) {
        {
            const url_info = url.parse(url_str);
            if (!url_info.protocol) {
                url_info.protocol = config_1.source_site.protocol;
            }
            if (!url_info.host) {
                url_info.host = config_1.source_site.host;
            }
            url_str = url.format(url_info);
        }
        // console.log("url_str", url_str);
        if (!init) {
            init = {};
        }
        if (!isFinite(init.timeout)) {
            init.timeout = 3500;
        }
        if (!init.agent) {
        }
        let retry_times = this.retryTimes();
        do {
            try {
                const res = await node_fetch_1.default(url_str, init);
                return cheerio.load(await res.text());
            }
            catch (err) {
                console.error(err);
            }
            finally {
                retry_times -= 1;
            }
        } while (retry_times > 0);
    }
}
exports.FetchTool = FetchTool;
//# sourceMappingURL=fetch_tool.js.map