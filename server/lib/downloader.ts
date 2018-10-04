import { FetchTool } from "./fetch_tool";
import fetch from "node-fetch";
import cheerio from "cheerio";
export class Downloader extends FetchTool {
	async getPageCount() {
		const $ = await this.fetch('/');
		return parseInt(
			$(".pageturn .last")
				.first()
				.text()
		);
	}
}
