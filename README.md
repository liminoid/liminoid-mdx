<div align="center">

  <h1>🔵🔴 liminoid-mdx 🔴🔵</h1>

<strong>Interactive local-first Python documents.... that are as easy as putting code fences in your Markdown!</strong>

</div>

<div align="center">
  <h4>
    <a href="https://liminoid.io/guides/markdown/">
      Documentation
    </a>
    <span> | </span>
    <a href="https://discord.gg/sa7MwxY">
      Chatroom
    </a>
    <span> | </span>
    <a href="https://twitter.com/liminoid_io">
      Twitter
    </a>
    <span> | </span>
    <a href="https://stackoverflow.com/questions/tagged/liminoid">
      Stack Overflow
    </a>
    <span> | </span>
    <a href="https://liminoid.io/contributing/">
      Contributing
    </a>
  </h4>
</div>

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
        remarkPlugins: [liminoid]
      }
    }
  ]
};
```

```sh
$ yarn start #=> ... Project is running at http://localhost:8080/
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
        use: 'babel-loader'
      },
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader',
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins: [liminoid]
            }
          }
        ]
      }
    ]
  }
};
```

```sh
$ yarn start #=> ... Project is running at http://localhost:8080/
```

## `meta`

<!-- prettier-ignore -->
|  name  | default |   values  |  description  |
| :--------: | :-----: | :------: | :---------: |
| `packages` |  `[]`   | `Array`: [package names currently avalable](https://github.com/iodide-project/pyodide/tree/master/packages) in Pyodide   |  Uses Pyodide's [`loadPackage()`](https://pyodide.readthedocs.io/en/latest/using_pyodide_from_webworker.html#loading-packages) to preload packages   |
|  `console`  | `true`  | `Boolean`: `true` or `false` | `false` disables the HTML console which displays the results. |
|   `edit`   | `true`  |  `Boolean`: `true` or `false`   |  `false` disables the `textarea` input while still allowing the embedded code to be run. |
|   `scope`   | `false`  |  `Boolean`: `true` or `false`   |  `false` creates a new `Repl()` for the component with its own Python context. `true` shares the `Repl()` context between editors globally, i.e. one editor can reference variables from another. |

## Contributing/Requests

Open an [issue](https://github.com/liminoid/liminoid-mdx/issues) or post a message in the [chatroom](https://discord.gg/sa7MwxY). If you would like to contribute to the project (code, documentation, tutorials, etc.) see the [contributing guide](https://liminoid.io/contributing/) for how to get started 🙌

## Citing

While not required, when using (or extending) Liminoid for academic work, citations are appreciated 🙏

```
@software{liminoid,
  author = {Jonathan Dinu},
  title = {Liminoid: Liminoid: Web assembly toolkit for building local-first analytics applications},
  url = {https://github.com/liminoid},
  version = {0.0.1},
  month = {March},
  year = {2020}
}
```

## License

All original work licensed under either of:

- [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
- [MIT license](http://opensource.org/licenses/MIT)

at your option.

> Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
