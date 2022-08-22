import { deepmerge } from "deepmerge-ts";
import { Command } from "commander";
import type { Pattern } from "fast-glob";
import FastGlob from "fast-glob";
import esbuild from "esbuild";
import { exec } from "child_process";
import type { BuildOptions, PluginBuild } from "esbuild";
import fs from "fs";

const program = new Command();

const outDir = "dist";

const config: BuildOptions = {
	entryPoints: [],
	format: "esm",
	minify: true,
	outdir: outDir,
	platform: "node",
	target: "node14",
	write: true,
	plugins: [
		{
			name: "clean-dist",
			setup(build: PluginBuild) {
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
};

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

		await esbuild.build(
			deepmerge(config, {
				entryPoints: pipe,
			})
		);

		exec("tsc");
	});

program.parse();
