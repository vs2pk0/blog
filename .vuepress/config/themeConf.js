const sidebar = require('./sidebar')

module.exports = {
    repo: 'vs2pk0/blog',
    navbar: true,
    editLinks: true,
    editLinkText: '编辑文档',
    lastUpdated: '更新于',
    sidebar,
    nav: [
        { text: '最新', link: '/guide/' },
        {
            text: '前端',
            items: [
                {
                    text: '基础',
                    items: [
                        {
                            text: 'JavaScript',
                            link: '/JavaScript/'
                        },
                        { text: 'HTML5', link: '/HTML5/' }
                    ]
                }
            ]
        }
    ]
}
