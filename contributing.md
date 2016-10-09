# Contributing

## Build

Compile npm folders using `npm run build`.

This will run the build script at `build/setup.js` and then do `lerna bootstrap`.

### Build script

The build script contains code that modifies all of the packages under the `packages` directory:

* The main package `starry` is set up.
  * The base `/API.md` is compiled.
  * `index.js` is compiled to include all submodules.
  * `package.json` is compiled to include all submodules as dependencies.
* For each individual submodule:
  * `readme.md` is compiled. This process includes transcluding `doc.md` into it.
  * `package.json` is compiled from `package-src.json`.

## Test

Test using `npm test`.

Obviously, `npm run build` must be run before testing, but I opted not to include this in a `pretest` script to avoid unnecessarily running the setup script (which may take a long time) and `lerna bootstrap` (which might install external deps) every time.

## Publish

Publish using `npm run pub` (`lerna publish --only-explicit-updates`).
