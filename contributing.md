# Contributing

## Compiling npm folders

Compile npm folders using `npm run compile-npm`.

This process will convert locally required modules (`./`) into `starry.`. Also, it will include other required modules in its package deps. (Please avoid nesting `../` deps, I don't have anything in place for that.)
