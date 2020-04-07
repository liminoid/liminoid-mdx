const visit = require('unist-util-visit');

const LANGS = ['python', 'py'];
const PROPS = ['packages', 'console', 'edit', 'scope', 'onResult'];

module.exports = () => (tree, file) => {
  tree.children.unshift({
    type: 'import',
    value: "import Liminoid from 'liminoid-react'"
  });

  visit(tree, 'code', node => {
    if (node.meta && LANGS.includes(node.lang)) {
      // transform node into a Liminoid block
      const props = node.meta
        .split(';')
        .map(kv => kv.split(/=(?!>)/).map(e => e.trim()))
        .filter(prop => {
          try {
            new Function(`"use strict";return (${prop[1]})`)();
            return true;
          } catch (err) {
            console.log(`Error parsing code block meta: ${prop.join('=')}`);
          }
        });

      node.type = 'jsx';
      node.value = `<Liminoid ${props
        .filter(([k, v]) => PROPS.includes(k))
        .map(([k, v]) => `${k}={${v}}`)
        .join(' ')} code={\`${node.value}\`} />`;
    }

    return node;
  });
};
