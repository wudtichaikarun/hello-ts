# Modules versus Namespaces

| Modules                               |              Namespaces              |
| ------------------------------------- | :----------------------------------: |
| Tool for organizing code              |       Tool for organizing code       |
| Native support in Node.js             |      No special loader required      |
| Browsers supported with module loader | Prevents global namespace pollution  |
| Supports ES2015 module syntax         | Best for smaller client applications |
| Facilitated code reuse                |                                      |
| Modules are the future!               |                                      |

## How to run code

1. In terminal run `tsc --target ES5 src/index.ts --outFile out.js`
2. In terminal run out.js
