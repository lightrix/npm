import{Command as o}from"commander";import r from"./command/build.js";const i=new o;i.name("playform").description("CLI to some JavaScript build scripts").version("0.0.2"),i.command("build").description("Build scripts").argument("<scripts...>","Scripts to build").option("-c, --config <file>","ESBuild config file").action(r),i.parse();
