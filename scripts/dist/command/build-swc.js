import{exec as f}from"child_process";import a from"fast-glob";var i=async t=>{let o=[];for(const r of t)for(const e of await a(r))o.push(e);f("tsc")};export{i as default};
