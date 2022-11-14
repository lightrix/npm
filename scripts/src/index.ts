import { Command } from "commander";

import build from "./command/build.js";
import getJson from "./lib/getJson.js";

const program = new Command();

getJson("/../../package.json").then((json) => {
	program.name("lightrix").description("Build tools").version(json.version);
});

program
	.command("build")
	.description("Build scripts")
	.argument("<scripts...>", "Scripts to build")
	.option("-c, --config <file>", "ESBuild config file")
	.option("-ts, --tsconfig <file>", "TSConfig build file")
	.action(build);

program.parse();
