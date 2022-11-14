import * as fs from "fs";
import { pathToFileURL } from "node:url";
import ts from "typescript";
import getJson from "./getJson.js";

/**
 * It takes a file path, checks if it's a TypeScript file, if it is, it compiles it to JavaScript, and
 * then imports it
 * @param {string} file - The file to import.
 * @returns The default export of the file.
 */
export const importFile = async (file: string) => {
	const ext = file.split(".").pop();

	if (ext === "ts") {
		const compilerOptions = ts.convertCompilerOptionsFromJson(
			(await getJson("/../../../config/base/ts.json"))?.compilerOptions,
			"."
		);

		const host = ts.createCompilerHost(compilerOptions.options);
		const program = ts.createProgram([file], compilerOptions.options, host);
		program.emit();

		await fs.promises.writeFile(
			file.replace(".ts", ".js"),
			ts.transpile(
				(await fs.promises.readFile(file, "utf-8")).toString(),
				compilerOptions.options
			)
		);
	}

	return (await import(pathToFileURL(file).toString().replace(".ts", ".js")))
		.default;
};

export default () => ({ importFile });
