import { exec } from "child_process";
import { deepmerge } from "deepmerge-ts";
import esbuild from "esbuild";
import FastGlob from "fast-glob";

import type { BuildOptions } from "esbuild";
import type { Pattern } from "fast-glob";

import defaultConfig from "../config/esbuild.js";
import { importFile } from "../lib/utils.js";

export default async (
	scripts: Pattern[],
	options?: { config?: string; tsconfig?: string }
) => {
	const pipe = [];

	for (const glob of scripts) {
		for (const file of await FastGlob(glob)) {
			pipe.push(file);
		}
	}

	const _config = deepmerge(defaultConfig, {
		entryPoints: Object.fromEntries(
			pipe.map((file) => [
				file.replace("src/", "").split(".").slice(0, -1.0).join("."),
				file,
			])
		),
	} satisfies BuildOptions);

	await esbuild.build(
		options?.config
			? deepmerge(_config, await importFile(options.config))
			: _config
	);

	if (options?.tsconfig) {
		exec(`tsc -p ${options?.tsconfig}`);
	} else {
		exec("tsc");
	}
};
