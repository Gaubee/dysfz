import fetch, { RequestInit, Request } from "node-fetch";
import * as url from "url";
import * as cheerio from "cheerio";
import { source_site, deault_agent } from "./config";

export class FetchTool {
	private _retry_times?: number;
	retryTimes(v?: number) {
		if (typeof v === "number") {
			return (this._retry_times = v);
		}
		v = this._retry_times;
		this._retry_times = undefined;
		return v || Infinity;
	}

	async fetch(url_str: string, init?: RequestInit) {
		{
			const url_info = url.parse(url_str);
			if (!url_info.protocol) {
				url_info.protocol = source_site.protocol;
			}
			if (!url_info.host) {
				url_info.host = source_site.host;
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
				const res = await fetch(url_str, init);
				return cheerio.load(await res.text());
			} catch (err) {
				console.error(err);
			} finally {
				retry_times -= 1;
			}
		} while (retry_times > 0);
	}
}
