/*
 * @Descripttion: Descripttion
 * @Author: LiLei
 * @Date: 2020-02-19 09:42:00
 * @LastEditors: LiLei
 * @LastEditTime: 2020-02-19 10:16:33
 */
const sidebar = require("./sidebar");

module.exports = {
    repo: "vs2pk0/blog",
    docsBranch: "master",
    navbar: true,
    editLinks: true,
    editLinkText: "编辑文档",
    lastUpdated: "更新于",
    sidebar,
    serviceWorker: {
        updatePopup: true, // Boolean | Object, 默认值是 undefined.
        // 如果设置为 true, 默认的文本配置将是:
        updatePopup: {
            message: "发现页面有新内容",
            buttonText: "刷新"
        }
    },
    nav: [
        { text: "最新", link: "/guide/" },
        {
            text: "笔记",
            items: [
                {
                    text: "js笔记",
                    items: [
                        {
                            text: "常用方法",
                            link: "/常用方法/"
                        },
                        {
                            text: "gulp运行报错解决方案",
                            link: "/gulp运行报错解决方案/"
                        },
                        {
                            text: "使用gulp把文件上传到服务器",
                            link: "/使用gulp把文件上传到服务器/"
                        },
                        {
                            text: "gulp自动编译为css的vw单位",
                            link: "/gulp自动编译为css的vw单位/"
                        }
                    ]
                },
                {
                    text: "项目搭建",
                    items: [
                        {
                            text: "ant-design-vue项目搭建",
                            link: "/ant-design-vue项目搭建/"
                        }
                    ]
                }
            ]
        },
        {
            text: "插件",
            link: "/postcss/"
            // items: [
            //     {
            //         text: 'Flutter入门',
            //         link: '/环境搭建/'
            //     }
            // ]
        }, {
            text: "常用框架",
            link: "/VueCLI2.x/"
            // items: [
            //     {
            //         text: 'Flutter入门',
            //         link: '/环境搭建/'
            //     }
            // ]
        },
        {
            text: "工具",
            items: [
                {
                    text: "前端",
                    items: [
                        {
                            text: "常用软件",
                            link: "/webExe/"
                        },
                        {
                            text: "常用插件",
                            link: "/webPlugin/"
                        }
                    ]
                }
            ]
        }
    ]
};
