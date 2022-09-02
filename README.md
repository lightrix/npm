# My build scripts and config

| Repo            | Link                                                    | Version                                                                                                                                         |
| --------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Configuration] | https://github.com/NikolaRHristov/npm/tree/main/config  | [![npm (scoped)](https://img.shields.io/npm/v/@nikolarhristov/config?color=black&label=%20&logo=npm&logoColor=black)][@nikolarhristov/config]   |
| [Scripts]       | https://github.com/NikolaRHristov/npm/tree/main/scripts | [![npm (scoped)](https://img.shields.io/npm/v/@nikolarhristov/scripts?color=black&label=%20&logo=npm&logoColor=black)][@nikolarhristov/scripts] |

## Installation

Add configs:

`npm install -D -E @nikolarhristov/config`

Setup scripts:

`npm install -D -E @nikolarhristov/scripts`

## Usage

`package.json`

```json
{
	"name": "my-awesome-package",
	"scripts": {
		"build": "nikola build src/*.ts"
	},
	"devDependencies": {
		"@nikolarhristov/config": "0.0.1",
		"@nikolarhristov/scripts": "0.0.1"
	}
}
```

or with a custom esbuild config file:

```json
{
	"scripts": {
		"build": "nikola build src/*.ts -c esbuild.ts"
	}
}
```

See an example of a config file in [esbuild.ts](scripts/src/config/esbuild.ts)

`tsconfig.json`

```json
{
	"extends": "@nikolarhristov/config/tsconfig.json",
	"include": ["src"],
	"compilerOptions": {
		"outDir": "dist"
	}
}
```

The script will automatically compile your build files with [esbuild] and add
TypeScript types.

[@nikolarhristov/config]: https://npmjs.org/@nikolarhristov/config
[@nikolarhristov/scripts]: https://npmjs.org/@nikolarhristov/scripts
[configuration]: https://github.com/NikolaRHristov/npm/tree/main/config
[scripts]: https://github.com/NikolaRHristov/npm/tree/main/scripts
[esbuild]: https://npmjs.org/esbuild
