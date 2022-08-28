import type { BuildOptions, PluginBuild } from "esbuild";
import fs from "fs";

const outDir = "dist";

export default (): BuildOptions => {
	return {
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
};
