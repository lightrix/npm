# [Playform] build scripts and config

| Repo            | Link                                              | Version |
| --------------- | ------------------------------------------------- | ------- |
| [Configuration] | https://github.com/Playform/npm/tree/main/config  | 0.0.1   |
| [Scripts]       | https://github.com/Playform/npm/tree/main/scripts | 0.0.1   |

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
		"@playform/scripts": "0.0.1"
	}
}
```

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

[playform]: https://playform.cloud
[configuration]: https://github.com/Playform/npm/tree/main/config
[scripts]: https://github.com/Playform/npm/tree/main/scripts
[esbuild]: https://npmjs.org/esbuild
