import { exec as a } from "child_process";
import { deepmerge as f } from "deepmerge-ts";
import c from "esbuild";
import l from "fast-glob";
import g from "../config/esbuild.js";
import { importFile as n } from "../lib/utils.js";
var y=async(i,t)=>{let r=[];for(const e of i)for(const m of await l(e))r.push(m);const o=f(await g(),{entryPoints:r});await c.build(t!=null&&t.config?f(o,await n(t.config)):o),a("tsc")};export { y as default };

