import { Command } from "commander";
import type { Pattern } from "fast-glob";

const program = new Command();

program
	.name("playform")
	.description("CLI to some JavaScript string utilities")
	.version("0.0.1");

program
	.command("build")
	.description("Build scripts")
	.argument("<scripts>", "Scripts to build")
	.action((glob: Pattern) => {
		console.log(glob);
	});

program.parse();
