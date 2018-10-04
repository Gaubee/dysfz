"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const downloader_test_1 = require("./downloader.test");
(async function main() {
    console.log("test start!");
    await downloader_test_1.default();
    console.log("done");
})().catch(console.error);
//# sourceMappingURL=test.js.map