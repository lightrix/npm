import esbuild from "esbuild";
import fs from "fs";

const outDir = "./dist";

await esbuild.build({
	entryPoints: ["src/**/*.ts"],
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
});
