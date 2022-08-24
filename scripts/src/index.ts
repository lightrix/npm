import { Command } from "commander";

import build from "./lib/build.js";

const program = new Command();

program
	.name("playform")
	.description("CLI to some JavaScript build scripts")
	.version("0.0.1");

program
	.command("build")
	.description("Build scripts")
	.argument("<scripts...>", "Scripts to build")
	.action(build);

program.parse();
