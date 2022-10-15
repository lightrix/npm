import { Command } from "commander";

import build from "./command/build.js";

const program = new Command();

program.name("lightrix").description("Build tools").version("0.0.8");

program
	.command("build")
	.description("Build scripts")
	.argument("<scripts...>", "Scripts to build")
	.option("-c, --config <file>", "ESBuild config file")
	.action(build);

program.parse();
