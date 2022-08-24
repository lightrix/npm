# [Playform] build scripts and config

| Repo            | Link                                              | Version                                                                                                                             |
| --------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [Configuration] | https://github.com/Playform/npm/tree/main/config  | [![npm (scoped)](https://img.shields.io/npm/v/@playform/config?color=black&label=%20&logo=npm&logoColor=black)][@playform/config]   |
| [Scripts]       | https://github.com/Playform/npm/tree/main/scripts | [![npm (scoped)](https://img.shields.io/npm/v/@playform/scripts?color=black&label=%20&logo=npm&logoColor=black)][@playform/scripts] |

## Installation

Add configs:

`npm install -D -E @playform/config`

Setup scripts:

`npm install -D -E @playform/scripts`

## Usage

`package.json`

```json
{
	"name": "my-awesome-package",
	"scripts": {
		"build": "playform build src/*.ts"
	},
	"devDependencies": {
		"@playform/config": "0.0.1",
		"@playform/scripts": "0.0.2"
	}
}
```

or with a custom esbuild config file:

```json
{
	"scripts": {
		"build": "playform build src/*.ts -c esbuild.ts"
	}
}
```

See an example of a config file in [esbuild.ts](scripts/src/config/esbuild.ts)

`tsconfig.json`

```json
{
	"extends": "@playform/config/tsconfig.json",
	"include": ["src"],
	"compilerOptions": {
		"outDir": "dist"
	}
}
```

Playform will automatically compile your scripts with [esbuild] and add
TypeScript types.

[@playform/config]: https://npmjs.org/@playform/config
[@playform/scripts]: https://npmjs.org/@playform/scripts
[configuration]: https://github.com/Playform/npm/tree/main/config
[scripts]: https://github.com/Playform/npm/tree/main/scripts
[playform]: https://playform.cloud
[esbuild]: https://npmjs.org/esbuild
