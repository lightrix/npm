import fs from "fs";
import { pathToFileURL } from "node:url";
import { dirname } from "path";
import ts from "typescript";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

/**
 * It takes a file path, checks if it's a TypeScript file, if it is, it compiles it to JavaScript, and
 * then imports it
 * @param {string} file - The file to import.
 * @returns The default export of the file.
 */
export const importFile = async (file: string) => {
	const ext = file.split(".").pop();

	if (ext == "ts") {
		const compilerOptions = ts.convertCompilerOptionsFromJson(
			JSON.parse(
				(
					await fs.promises.readFile(
						`${dirname(__filename)}/../../../config/base/ts.json`
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

export default () => ({ importFile });
