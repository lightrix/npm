import { Command } from "commander";
import type { Pattern } from "fast-glob";
import FastGlob from "fast-glob";
import esbuild from "esbuild";
import fs from "fs";
import { exec } from "child_process";

const program = new Command();

program
	.name("playform")
	.description("CLI to some JavaScript build scripts")
	.version("0.0.1");

program
	.command("build")
	.description("Build scripts")
	.argument("<scripts...>", "Scripts to build")
	.action(async (scripts: Pattern[]) => {
		let pipe = [];

		for (const glob of scripts) {
			for (const file of await FastGlob(glob)) {
				pipe.push(file);
			}
		}

		const outDir = "./dist";

		await esbuild.build({
			entryPoints: pipe,
			format: "esm",
			minify: true,
			outdir: outDir,
			platform: "node",
			target: "node14",
			write: true,
			plugins: [
				{
					name: "clean-dist",
					setup(build) {
						build.onStart(async () => {
							try {
								await fs.promises.rm(outDir, {
									recursive: true,
								});
							} catch (error) {}
						});
					},
				},
			],
		});

		exec("tsc");
	});

program.parse();
