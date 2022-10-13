import fs from "fs";
import { pathToFileURL } from "node:url";
import { dirname, resolve } from "path";
import ts from "typescript";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * It takes a file path, checks if it's a TypeScript file, if it is, it compiles it to JavaScript, and
 * then imports it
 * @param {string} file - The path to the file to import.
 * @returns The default export of the file.
 */
export const importFile = async (file: string) => {
	const ext = file.split(".").pop();

	if (ext == "ts") {
		const compilerOptions = ts.convertCompilerOptionsFromJson(
			JSON.parse(
				(
					await fs.promises.readFile(
						resolve(
							`${__dirname}/../../node_modules/@playform/config/tsconfig.json`
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

export default () => ({ importFile: importFile });
