import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

export default async (glob: string) =>
	JSON.parse(
		(
			await fs.promises.readFile(
				`${dirname(fileURLToPath(import.meta.url))}${glob}`,
				"utf-8"
			)
		).toString()
	);
