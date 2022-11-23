import type { BuildOptions, PluginBuild } from "esbuild";
import * as fs from "fs";

const outDir = "dist";

export default {
	format: "esm",
	minify: true,
	outdir: outDir,
	platform: "node",
	target: "esnext",
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
					} catch (_error) {}
				});
			},
		},



	],
} satisfies BuildOptions;
