/// <reference types="cheerio" />
import { RequestInit } from "node-fetch";
export declare class FetchTool {
    private _retry_times?;
    retryTimes(v?: number): number;
    fetch(url_str: string, init?: RequestInit): Promise<CheerioStatic>;
}
