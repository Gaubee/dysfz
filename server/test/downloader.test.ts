import { Downloader } from "../lib/downloader";
import assert from "./assert";
const downloader = new Downloader();

export default async function test() {
	const total_page_num = await downloader.getPageCount();
	assert.des(`getPageCount must return an number: ${total_page_num}`).deepEqualWithLog(isFinite(total_page_num), true);
}
