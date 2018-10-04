"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_tool_1 = require("./fetch_tool");
class Downloader extends fetch_tool_1.FetchTool {
    async getPageCount() {
        const $ = await this.fetch('/');
        return parseInt($(".pageturn .last")
            .first()
            .text());
    }
}
exports.Downloader = Downloader;
//# sourceMappingURL=downloader.js.map