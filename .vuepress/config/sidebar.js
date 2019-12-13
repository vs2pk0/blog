// const web = [
//     {
//         title: 'HTML5',
//         collapsable: false,
//         children: ['HTML5/HTML5']
//     },
//     {
//         title: 'JavaScript',
//         collapsable: false,
//         children: ['JS/JavaScript']
//     },
//     {
//         title: 'Gulp',
//         collapsable: false,
//         children: ['Gulp/Gulp']
//     },
//     {
//         title: 'UniApp',
//         collapsable: false,
//         children: ['UniApp/UniApp']
//     }
// ]

const frame = [
    {
        title: "Vue",
        collapsable: false,
        children: ["Vue/VueCLI2.x", "Vue/VueCLI3.x", "Vue/VueCLI4.x"]
    },
    {
        title: "Flutter",
        collapsable: false,
        children: [
            "Flutter/环境搭建",
            "Flutter/编辑器配置",
            "Flutter/创建一个Flutter应用"
        ]
    },
    {
        title: "React",
        collapsable: false,
        children: ["React/搭建本地开发环境", "React/修改配置项"]
    }
];
const tools = [
    {
        title: "前端",
        collapsable: false,
        children: ["webExe", "webPlugin"]
    }
    // {
    //     title: '常用工具',
    //     collapsable: false,
    //     children: ['webPlugin']
    // }
];

const notes = [
    {
        title: "js笔记",
        collapsable: false,
        children: [
            "常用方法",
            "gulp运行报错解决方案",
            "使用gulp把文件上传到服务器"
        ]
    },
    {
        title: "项目搭建",
        collapsable: false,
        children: ["ant-design-vue"]
    }
];

module.exports = {
    // '/docs/前端/': web,
    "/docs/常用框架/": frame,
    "/docs/工具/": tools,
    "/docs/笔记/": notes
};
