# Contributing

## Build

Compile npm folders using `npm run build`.

This will run the build script at `build/setup.js` and then do `lerna bootstrap`.

### Build script

The build script contains code that modifies all of the packages under the `packages` directory:

* The main package `starry` is set up.
  * `index.js` is compiled to include all submodules.
  * `package.json` is compiled to include all submodules as dependencies.
  * Copy the base `/readme.md` to `starry`.
* For each individual submodule:
  * The files `.gitignore`, `.npmignore`, `tscconfig.json`, and `readme.md` are generated.
  * `package.json` is edited.
  * etc.
* Build `API.md`.

## Test

Test using `npm test`.

## Publish

Publish using `npm run pub` (`npm run build && lerna publish`).
