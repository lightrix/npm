import fs from "fs";
import esbuild, { BuildOptions, Plugin } from "esbuild";

const outDir = "./dist";

const options: BuildOptions = {
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
			setup(build) {
				build.onStart(() => {
					fs.rm(outDir, { recursive: true }, () => {});
				});
			},
		},
	],
};

await esbuild.build(options);
