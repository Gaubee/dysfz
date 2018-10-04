declare class AssertTool {
    constructor();
    private _chalk;
    readonly chalk: any;
    isTrue(condition: boolean, deep?: number): (string | Error)[];
    isTrue_inTerminal(condition: boolean, deep?: number): any[];
    deepEqual<T>(a: T, b: T): any;
    deepEqualForLog<T>(a: T, b: T, deep?: number): {
        condition: any;
        log_args: (string | Error | T)[];
    };
    deepEqualWithLog<T>(a: T, b: T): void;
    private _describe;
    private _getDescribeAndClear;
    describe(str: string): this;
    des(str: string): this;
}
declare const assert: AssertTool;
export default assert;
