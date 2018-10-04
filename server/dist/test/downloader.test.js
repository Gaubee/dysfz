"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const downloader_1 = require("../lib/downloader");
const assert_1 = require("./assert");
const downloader = new downloader_1.Downloader();
async function test() {
    const total_page_num = await downloader.getPageCount();
    assert_1.default.des(`getPageCount must return an number: ${total_page_num}`).deepEqualWithLog(isFinite(total_page_num), true);
}
exports.default = test;
//# sourceMappingURL=downloader.test.js.map