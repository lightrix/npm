import i from "fs";
const t="dist";var s=async()=>({format:"esm",minify:!0,outdir:t,platform:"node",target:"node14",write:!0,plugins:[{name:"clean-dist",setup(r){r.onStart(async()=>{try{await i.promises.rm(t,{recursive:!0})}catch{}})}}]});export { s as default };

