import { exec } from "child_process";
import { deepmerge } from "deepmerge-ts";
import esbuild from "esbuild";
import type { Pattern } from "fast-glob";
import FastGlob from "fast-glob";
import config from "./../config/esbuild.js";

export default async (scripts: Pattern[]) => {
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
};
