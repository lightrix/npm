import e from "fs";
import { pathToFileURL as s } from "node:url";
import { dirname as p, resolve as m } from "path";
import t from "typescript";
import { fileURLToPath as a } from "url";
const n=a(import.meta.url),l=p(n),c=async o=>{if(o.split(".").pop()=="ts"){const r=t.convertCompilerOptionsFromJson(JSON.parse((await e.promises.readFile(m(`${l}/../../node_modules/@playform/config/base/ts.json`))).toString()).compilerOptions,"."),i=t.createCompilerHost(r.options);t.createProgram([o],r.options,i).emit(),await e.promises.writeFile(o.replace(".ts",".js"),t.transpile((await e.promises.readFile(o)).toString(),r.options))}return(await import(s(o).toString().replace(".ts",".js"))).default};var x=()=>({importFile:c});export { x as default, c as importFile };

