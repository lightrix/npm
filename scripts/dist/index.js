import { Command as o } from "commander";
import t from "./command/build-swc.js";
import c from "./command/build.js";
const i=new o;i.name("lightrix").description("Build tools").version("0.0.8"),i.command("build").description("Build scripts").argument("<scripts...>","Scripts to build").option("-c, --config <file>","ESBuild config file").action(c),i.command("build:swc").description("Build scripts (with swc").argument("<scripts...>","Scripts to build").option("-c, --config <file>","SWC config file").action(t),i.parse();
