import i from "fs";
import { pathToFileURL as s } from "node:url";
import { dirname as p, resolve as m } from "path";
import t from "typescript";
import { fileURLToPath as a } from "url";
const n=a(import.meta.url),l=p(n),c=async o=>{if(o.split(".").pop()=="ts"){const r=t.convertCompilerOptionsFromJson(JSON.parse((await i.promises.readFile(m(`${l}/../../node_modules/@lightrix/config/base/ts.json`))).toString()).compilerOptions,"."),e=t.createCompilerHost(r.options);t.createProgram([o],r.options,e).emit(),await i.promises.writeFile(o.replace(".ts",".js"),t.transpile((await i.promises.readFile(o)).toString(),r.options))}return(await import(s(o).toString().replace(".ts",".js"))).default};var _=()=>({importFile:c});export { _ as default, c as importFile };

