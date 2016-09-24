# Contributing

## Build

Compile npm folders using `npm run build`.

This will run the build script at `build/setup.js` and then do `lerna bootstrap`.

### Build script

The build script contains code that modifies all of the packages under the `packages` directory. In particular, it modifies each package's `package.json` and builds its respective `readme.md`.
