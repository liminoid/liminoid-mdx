> ⚠️ Package has moved to [run-the-docs](https://www.npmjs.com/package/run-the-docs) and development has moved to [psychothan/run-the-docs](https://github.com/psychothan/run-the-docs) ⚠️

## Installation

```sh
$ yarn add liminoid-mdx
```

or

```sh
$ npm install --save liminoid-mdx
```

## Usage

For a more comprehensive guide to using the package see the [documentation](https://liminoid.io/guides/markdown/) or browse the [examples](examples). Any code fences with `py` or `python` and at least one of the [meta tags](#meta) will be rendered as an interactive Python editor that executes code in the browser.

````markdown
```python packages=['numpy']; edit=true
import numpy as np

np.random.rand(3,2)
```
````

> multiple meta tags must be seperated with a `;`

### Liminoid CLI

```sh
$ liminoid serve my-doc.mdx
```

### Webpack

```sh
$ npm init mdx webpack
$ cd webpack-mdx
$ yarn add liminoid-mdx
```

```js
// webpack.config.js
const liminoid = require('liminoid-mdx');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader',
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins: [liminoid],
            },
          },
        ],
      },
    ],
  },
};
```

```sh
$ yarn start #=> ... Project is running at http://localhost:8080/
```

### Gatsby

```sh
$ npm init mdx gatsby
$ cd gatsby-mdx
$ yarn add liminoid-mdx
```

```js
// gatsby.config.js
const liminoid = require('liminoid-mdx');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        // ...
        remarkPlugins: [liminoid],
      },
    },
  ],
};
```

```sh
$ yarn start #=> ... Project is running at http://localhost:8000/
```

## `meta`

<!-- prettier-ignore -->
|  name  | default |   values  |  description  |
| :--------: | :-----: | :------: | :---------: |
| `packages` |  `[]`   | `Array`: [package names currently avalable](https://github.com/iodide-project/pyodide/tree/master/packages) in Pyodide   |  Uses Pyodide's [`loadPackage()`](https://pyodide.readthedocs.io/en/latest/using_pyodide_from_webworker.html#loading-packages) to preload packages   |
|  `console`  | `true`  | `Boolean`: `true` or `false` | `false` disables the HTML console which displays the results. |
|   `edit`   | `true`  |  `Boolean`: `true` or `false`   |  `false` disables the `textarea` input while still allowing the embedded code to be run. |
|   `scope`   | `false`  |  `Boolean`: `true` or `false`   |  `true` creates a new `Repl()` for the component with its own Python context. `false` shares the `Repl()` context between editors globally, i.e. one editor can reference variables from another. |
|   `onResult`   | `undefined`  |  `Function`: [function expression][f_exp] or reference  |  callback function that receives the results when the code is run. `(res, err) => { ... }` |

## Contributing/Requests

Open an [issue](https://github.com/liminoid/liminoid-mdx/issues) or post a message in the [chatroom](https://discord.gg/sa7MwxY). If you would like to contribute to the project (code, documentation, tutorials, etc.) see the [contributing guide](https://liminoid.io/contributing/) for how to get started 🙌

## Citing

While not required, when using (or extending) Liminoid for academic work, citations are appreciated 🙏

```
@software{liminoid,
  author = {Jonathan Dinu},
  title = {Liminoid: Web assembly toolkit for building local-first interactive analytics applications},
  month = {March},
  year = {2020},
  version = {0.0.1},
  doi = {10.5281/zenodo.3754953},
  url = {https://github.com/liminoid},
}
```

## License

All original work licensed under either of:

- [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
- [MIT license](http://opensource.org/licenses/MIT)

at your option.

> Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
