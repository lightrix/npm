import s from"fs";import{pathToFileURL as p}from"node:url";import o from"typescript";import e from"./getJson.js";const a=async t=>{if(t.split(".").pop()==="ts"){const r=o.convertCompilerOptionsFromJson((await e("/../../../config/base/ts.json"))?.compilerOptions,"."),i=o.createCompilerHost(r.options);o.createProgram([t],r.options,i).emit(),await s.promises.writeFile(t.replace(".ts",".js"),o.transpile((await s.promises.readFile(t)).toString(),r.options))}return(await import(p(t).toString().replace(".ts",".js"))).default};var w=()=>({importFile:a});export{w as default,a as importFile};
