import { Command } from "commander";

import build from "./command/build.js";

const program = new Command();

program
	.name("playform")
	.description("CLI to some JavaScript build scripts")
	.version("0.0.2");

program
	.command("build")
	.description("Build scripts")
	.argument("<scripts...>", "Scripts to build")
	.option("-c, --config <file>", "ESBuild config file")
	.action(build);

program.parse();
