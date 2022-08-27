import { pathToFileURL } from "node:url";
import ts from "typescript";
import fs from "fs";

const importFile = async (file: string) => {
	const ext = file.split(".").pop();

	if (ext == "ts") {
		const compilerOptions = ts.convertCompilerOptionsFromJson(
			JSON.parse(
				(
					await fs.promises.readFile(
						"node_modules/@playform/config/tsconfig.json"
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

export default { importFile };
