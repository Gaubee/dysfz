import downloaderTest from "./downloader.test";

(async function main() {
	console.log("test start!");
	await downloaderTest();

	console.log("done");
})().catch(console.error);
