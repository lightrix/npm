import e from"fs";const t="dist";var u={format:"esm",minify:!0,outdir:t,platform:"node",target:"node14",write:!0,plugins:[{name:"clean-dist",setup(r){r.onStart(async()=>{try{await e.promises.rm(t,{recursive:!0})}catch{}})}}]};export{u as default};
