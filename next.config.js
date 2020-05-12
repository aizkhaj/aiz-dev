const readingTime = require('reading-time');
const withMdxEnhanced = require('next-mdx-enhanced');
const mdxPrism = require('mdx-prism');


module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  remarkPlugins: [
    require('remark-slug'),
    require('remark-autolink-headings'),
    require('remark-code-titles'),
  ],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: (mdxContent) => ({
      readingTime: readingTime(mdxContent)
    })
  }
})()