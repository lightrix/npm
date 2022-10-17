import { Command } from "commander";

import buildSwc from "./command/build-swc.js";
import build from "./command/build.js";

const program = new Command();

program.name("lightrix").description("Build tools").version("0.0.8");

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
