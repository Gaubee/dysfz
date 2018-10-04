#!/usr/bin/env node

"use strict";

const Search = require("../lib/search");
const meow = require("meow");
const chalk = require("chalk");
const readline = require("readline");
const request = require("request");
const cheerio = require("cheerio");

const cli = meow(
    `
Usage
    $ dysfz <Options>

Options
    --name, -n 资源名称，可以使用关键词
`,
    {
        flags: {
            name: {
                type: "string",
                alias: "n",
            },
        },
    }
);

if (!cli.flags.name) {
    console.log("请输入资源关键词");
    process.exit(0);
}

let base_url = "http://www.dysfz.cc/key/";

const search = new Search(cli.flags);

let url = encodeURI(base_url + cli.flags.name + "/");

const headers = search.headers;

let select = json => {
    return new Promise((resolve, reject) => {
        let data = json.pop(0).href;
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question("请选择序号:  ", answer => {
            console.log("请稍等...");
            rl.close();
        });
        resolve(data);
    });
};
let asyncGet = async function(json) {
    let data = json.pop(0).href;
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    await rl.question("请选择序号:  ", answer => {
        console.log("请稍等...");
        rl.close();
        request(
            {
                url: data,
                headers: headers,
            },
            (err, res, body) => {
                const $ = cheerio.load(body);
                const data = {
                    title: $(".main h1").text(),
                    info: $(".main .info").html(),
                    detail: $(".main .detail").html(),
                };
                console.log(data);
                // let baidu_title = $("div.detail hr")
                //     .first()
                //     .next()
                //     .next()
                //     .text();
                // let baidu_href = $("div.detail hr")
                //     .first()
                //     .next()
                //     .next()
                //     .find("a")
                //     .last()
                //     .attr("href");
                // let xunlei = $("div.detail hr")
                //     .last()
                //     .nextAll("p")
                //     .find("a");
                // console.log(chalk.cyan(baidu_title));
                // console.log(chalk.cyan(baidu_href + "\n"));
                // let result = [];
                // xunlei.each(function(i, elem) {
                //     result.push({
                //         title: $(this).text(),
                //         href: $(this).attr("href"),
                //     });
                // });
                // result.forEach((item, index) => {
                //     console.log(chalk.cyan(`${index + 1} -  ${item.title}`));
                //     console.log(chalk.cyan(`网页链接: ${item.href} \n`));
                // });
            }
        );
    });
};

search
    .searchItem(url)
    .then(result => {
        let json = JSON.parse(result).html;
        console.log(chalk.bold.blue("搜索到的资源如下，请选择你想要的资源的序号"));
        json.forEach((item, index) => {
            console.log(chalk.cyan(`${index + 1} -  ${item.title}`));
            console.log(chalk.cyan(`网页链接: ${item.href}`));
        });
        return json;
    })
    .then(json => {
        asyncGet(json);
    });
