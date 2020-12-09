#!/usr/bin/env -S deno run --unstable --allow-read --allow-write
// Copyright 2020 justjavac(迷渡). All rights reserved. MIT license.
import { tips } from "./tips.ts";
import { tips as tipsZhCN } from "./tips_zh_CN.ts";

const REGEX = /<!-- BEGIN -->[\W\w]*<!-- END -->/;

const readme = await Deno.readTextFile("./README.md");
const contentEn = readme.replace(REGEX, createList(tips));
await Deno.writeTextFile("./README.md", contentEn);

const readmeZhCN = await Deno.readTextFile("./README_zh_CN.md");
const contentZhCN = readmeZhCN.replace(REGEX, createList(tips, tipsZhCN));
await Deno.writeTextFile("./README_zh_CN.md", contentZhCN);

function createList(en: readonly string[], zh?: readonly string[]): string {
  if (zh == null) {
    return `<!-- BEGIN -->
${en.map((x, i) => `${i + 1}. ${x}`).join("\n\n")}
<!-- END -->`;
  }
  return `<!-- BEGIN -->
${en.map((x, i) => createItem(x, i, zh[i])).join("\n\n")}
<!-- END -->`;
}

function createItem(en: string, i: number, zh = "-"): string {
  return `${i + 1}. > ${en}\n\n    ${zh}`;
}
