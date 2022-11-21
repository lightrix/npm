import type { PluginBuild } from "esbuild";
declare const _default: {
    format: "esm";
    minify: true;
    outdir: string;
    platform: "node";
    target: string;
    write: true;
    plugins: {
        name: string;
        setup(build: PluginBuild): void;
    }[];
};
export default _default;
