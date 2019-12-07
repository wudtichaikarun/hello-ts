# `tsc` examples

## TODO

- [ ] compile with `lib` as the output directory
- [ ] compile in "watch mode"
- [ ] compile with declaration file output
- [ ] compile to ES2015 vs commonjs modules
- [ ] use a `tsconfig.json`
  - [ ] source maps
  - [ ] declaration maps
  - [ ] module target (`es3` vs `es5` vs `es2017`)

---

## [x] compile with `lib` as the output directory

1. In root directory create file tsconfig.json

```JSON
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2017",
    "outDir": "lib"
  },
  "include": ["src"]
}
```

`"include": ["src"]` -> convert file **.ts to **.js all file in folder src.

`"outDir": "lib"` -> create folder name lib and store all the files converted in there.

Folders tree

```
.
├── readme.md
├── src
│   └── index.ts
└── tsconfig.json
```

---

2. In terminal run `tsc`

Folders tree

```
.
├── lib
│   └── index.js
├── readme.md
├── src
│   └── index.ts
└── tsconfig.json
```

---

Type information

1. add `"declaration": true` and `"sourceMap": true` to file tsconfig.json

```JSON
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2017",
    "outDir": "lib",
    "declaration": true,
    "sourceMap": true
  },
  "include": ["src"]
}
```

2. run command `tsc` in terminal

Folder tree

```
.
├── lib
│   ├── index.d.ts  // <--------- declaration
│   ├── index.js
│   └── index.js.map  // <---------- sourceMap
├── readme.md
├── src
│   └── index.ts
└── tsconfig.json
```
