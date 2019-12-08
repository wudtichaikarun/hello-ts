# Compiler options and project configuration

- Complier options
  - common options
  - discovering available options
- Creating project with tsconfig.json
  - specifying compiler options
  - list files to include or exclude

---

## Specifying compiler options

- command line (tsc)
- options inside an IDE
- build tasks
- inside tsconfig.json file

> common compiler options [Document-link](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

- `--module` or `--m`
- `--moduleResolution`
- `--target` or `--t`
- `--watch` or `--w`
- `--outDir`
- `--noImplicitAny`

In terminal type

`tsc --t ES5 --outDir js --m commonjs --sourceMap src/index.ts`

or `tsc --t ES5 --outDir js --m commonjs --sourceMap src/index.ts --watch` for watch mode
