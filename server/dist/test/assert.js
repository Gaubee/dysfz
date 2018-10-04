"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const equal = require("deep-equal");
class AssertTool {
    constructor() {
        if (global.process && global.process.version) {
            this.isTrue = this.isTrue_inTerminal;
        }
    }
    get chalk() {
        if (!this._chalk) {
            this._chalk = require("chalk");
        }
        return this._chalk;
    }
    isTrue(condition, deep = 1) {
        const des = this._getDescribeAndClear();
        if (condition) {
            return ["✅ %cpass" + des, "color:green"];
        }
        const err = new Error(des);
        if (err.stack) {
            const stacks = err.stack.split("\n");
            stacks.splice(1, deep);
            err.stack = stacks.join("\n");
        }
        return [err, "❌ %cfail" + des, "color:red"];
    }
    isTrue_inTerminal(condition, deep = 1) {
        const des = this._getDescribeAndClear();
        const { chalk } = this;
        if (condition) {
            return [chalk.green("✅ pass" + des)];
        }
        const err = new Error(des);
        if (err.stack) {
            const stacks = err.stack.split("\n");
            stacks.splice(1, deep);
            err.stack = stacks.join("\n");
        }
        return [err, chalk.read("❌ fail" + des)];
    }
    deepEqual(a, b) {
        return equal(a, b);
    }
    deepEqualForLog(a, b, deep = 2) {
        const condition = this.deepEqual(a, b);
        return {
            condition,
            log_args: [...this.isTrue(condition, deep), a, ...(condition ? [] : ["!==", b])],
        };
    }
    deepEqualWithLog(a, b) {
        const { condition, log_args } = this.deepEqualForLog(a, b, 3);
        const err = !condition && log_args.shift();
        console.log(...log_args);
        err &&
            console.log("%c" +
                err.stack
                    .split("\n")
                    .slice(1)
                    .join("\n"), "color:red");
    }
    _getDescribeAndClear() {
        const des = this._describe;
        if (des !== undefined) {
            this._describe = undefined;
            return ": " + des;
        }
        return "";
    }
    describe(str) {
        this._describe = str;
        return this;
    }
    des(str) {
        return this.describe(str);
    }
}
const assert = new AssertTool();
exports.default = assert;
//# sourceMappingURL=assert.js.map