import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const getJson = async (glob: string) =>
	JSON.parse(
		(
			await fs.promises.readFile(`${dirname(__filename)}${glob}`, "utf-8")
		).toString()
	);

export default getJson;
