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
