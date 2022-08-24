import { pathToFileURL } from "node:url";

const importFile = async (file: string) =>
	(await import(pathToFileURL(file).toString().replace(".ts", ".js")))
		.default;

export default { importFile };
