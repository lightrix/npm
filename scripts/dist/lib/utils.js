import{pathToFileURL as i}from"node:url";const o=async t=>(await import(i(t).toString().replace(".ts",".js"))).default;var a={importFile:o};export{a as default};
