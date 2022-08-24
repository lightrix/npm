import { deepmerge } from "deepmerge-ts";
import { exec } from "child_process";

import esbuild from "esbuild";
import FastGlob from "fast-glob";

import type { Pattern } from "fast-glob";

import utils from "../lib/utils.js";
import defaultConfig from "../config/esbuild.js";

export default async (scripts: Pattern[], options?: { config?: string }) => {
	let pipe = [];

	for (const glob of scripts) {
		for (const file of await FastGlob(glob)) {
			pipe.push(file);
		}
	}

	const _config = deepmerge(defaultConfig, {
		entryPoints: pipe,
	});

	await esbuild.build(
		options?.config
			? deepmerge(_config, await utils.importFile(options.config))
			: _config
	);

	exec("tsc");
};
