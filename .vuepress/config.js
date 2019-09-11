const { mdConf, themeConf, localesConf } = require('./config/')
module.exports = {
  locales: localesConf,
  markdown: mdConf,
  themeConfig: themeConf,
  plugins: ['@vuepress/back-to-top']
}
