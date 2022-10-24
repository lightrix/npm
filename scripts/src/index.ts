import { Command } from "commander";

import buildSwc from "./command/build-swc.js";
import build from "./command/build.js";
import getJson from "./lib/getJson.js";

const program = new Command();

getJson(`/../../package.json`).then((json) => {
	program.name("lightrix").description("Build tools").version(json.version);
});

program
	.command("build")
	.description("Build scripts")
	.argument("<scripts...>", "Scripts to build")
	.option("-c, --config <file>", "ESBuild config file")
	.action(build);

program
	.command("build:swc")
	.description("Build scripts (with swc")
	.argument("<scripts...>", "Scripts to build")
	.option("-c, --config <file>", "SWC config file")
	.action(buildSwc);

program.parse();
