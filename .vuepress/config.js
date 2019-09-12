const { mdConf, themeConf, localesConf } = require('./config/')

module.exports = {
    locales: localesConf,
    markdown: mdConf,
    themeConfig: themeConf,
    base: '/blog/',
    // base: '/',
    dest: 'vuepress',
    serviceWorker: true,
    head: [
        ['link', { rel: 'icon', href: '/app.png' }],
        ['link', { rel: 'apple-touch-icon', href: '/app.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    plugins: [
        require('./plugins/my-router'),
        require('./plugins/my-loader'),
        require('vuepress-plugin-viewer'),
        // '@vuepress/plugin-back-to-top',
        /*[
            require('@vuepress/plugin-pwa'),
            {
                serviceWorker: true,
                updatePopup: {
                    message: '发现页面有新内容',
                    buttonText: '刷新'
                }
            }
        ],*/
        [
            'vuepress-plugin-comment',
            {
                choosen: 'gitalk',
                options: {
                    clientID: 'a6be3d6e792487f8db55',
                    clientSecret: '21d851acad8096547cc52ea2724b91e7238285b1',
                    repo: 'blog',
                    owner: 'vs2pk0',
                    admin: ['vs2pk0'],
                    id: '<%- frontmatter.commentid || frontmatter.permalink %>', // Ensure uniqueness and length less than 50
                    distractionFreeMode: false, // Facebook-like distraction free mode
                    labels: ['Gitalk', 'Comment'],
                    title: '「评论」<%- frontmatter.title %>'
                }
            }
        ]
    ]
}
