var CONST = require("./const");

module.exports = {
  title: `Today Sean Learned`,
  description: `Sean's Personal Wiki (Today I Learned)`,
  base: "/DEVP/",
  dest: 'build',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'JavaScript',
        children: CONST.JavaScriptList
      }
    ],
    nav: [{
        text: 'GitHub',
        link: 'https://github.com/seanjun21/'
      }, {
        text: 'Blog',
        link: 'https://dev.to/seanjun21/'
      }, {
        text: 'Portfolio',
        link: 'https://seanjun.netlify.com/'
      }
    ]
  },
}
