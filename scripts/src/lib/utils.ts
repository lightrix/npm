import fs from "fs";
import { pathToFileURL } from "node:url";
import { dirname, resolve } from "path";
import ts from "typescript";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const importFile = async (file: string) => {
	const ext = file.split(".").pop();

	if (ext == "ts") {
		const compilerOptions = ts.convertCompilerOptionsFromJson(
			JSON.parse(
				(
					await fs.promises.readFile(
						resolve(
							`${__dirname}/../../node_modules/@lightrix/config/base/ts.json`
						)
					)
				).toString()
			).compilerOptions,
			"."
		);

		const host = ts.createCompilerHost(compilerOptions.options);
		const program = ts.createProgram([file], compilerOptions.options, host);
		program.emit();

		await fs.promises.writeFile(
			file.replace(".ts", ".js"),
			ts.transpile(
				(await fs.promises.readFile(file)).toString(),
				compilerOptions.options
			)
		);
	}

	return (await import(pathToFileURL(file).toString().replace(".ts", ".js")))
		.default;
};

export default () => ({
	importFile,
});
