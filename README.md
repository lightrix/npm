# [Lightrix] build scripts and config

| Repo            | Link                                              | Version                                                                                                                             |
| --------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [Configuration] | https://github.com/Lightrix/npm/tree/main/config  | [![npm (scoped)](https://img.shields.io/npm/v/@lightrix/config?color=black&label=%20&logo=npm&logoColor=black)][@lightrix/config]   |
| [Scripts]       | https://github.com/Lightrix/npm/tree/main/scripts | [![npm (scoped)](https://img.shields.io/npm/v/@lightrix/scripts?color=black&label=%20&logo=npm&logoColor=black)][@lightrix/scripts] |

## Installation

Add configs:

`npm install -D -E @lightrix/config`

Setup scripts:

`npm install -D -E @lightrix/scripts`

## Usage

`package.json`

```json
{
	"name": "my-awesome-package",
	"scripts": {
		"build": "lightrix build src/*.ts"
	},
	"devDependencies": {
		"@lightrix/config": "0.0.6",
		"@lightrix/scripts": "0.0.19"
	}
}
```

or with a custom esbuild config file:

```json
{
	"scripts": {
		"build": "lightrix build src/*.ts -c esbuild.ts"
	}
}
```

See an example of a config file in [esbuild.ts](scripts/src/config/esbuild.ts)

`tsconfig.json`

```json
{
	"extends": "@lightrix/config/base/ts",
	"include": ["src"],
	"compilerOptions": {
		"outDir": "dist"
	}
}
```

The script will automatically compile your build files with [esbuild] and add
TypeScript types.

[@lightrix/config]: https://npmjs.org/@lightrix/config
[@lightrix/scripts]: https://npmjs.org/@lightrix/scripts
[configuration]: https://github.com/Lightrix/npm/tree/main/config
[scripts]: https://github.com/Lightrix/npm/tree/main/scripts
[lightrix]: https://lightrix.help
[esbuild]: https://npmjs.org/esbuild
