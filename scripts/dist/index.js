import{Command as r}from"commander";import o from"./lib/build.js";const i=new r;i.name("playform").description("CLI to some JavaScript build scripts").version("0.0.1"),i.command("build").description("Build scripts").argument("<scripts...>","Scripts to build").action(o),i.parse();
