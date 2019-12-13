(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{177:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"ant-design-vue-项目搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ant-design-vue-项目搭建"}},[t._v("#")]),t._v(" ant-design-vue 项目搭建")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("创建 vue 项目")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("vue create xxx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR 使用图形化界面进行创建")]),t._v("\nvue ui\n")])])])]),t._v(" "),n("li",[n("p",[t._v("安装 ant-design-vue")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save ant-design-vue\n")])])])]),t._v(" "),n("li",[n("p",[t._v("配置 main.js")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 完整引入")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" Vue from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" Antd from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ant-design-vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" App from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ant-design-vue/dist/antd.css'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Vue.config.productionTip "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    Vue.use"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Antd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    /* eslint-disable no-new */\n    new Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),t._v(",\n    components: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" App "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    template: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<App/>'")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 局部导入组件")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" Vue from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Button, message "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ant-design-vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" App from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    Vue.config.productionTip "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    /* v1.1.2 */\n    Vue.component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Button.name, Button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Vue.component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Button.Group.name, Button.Group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    /* v1.1.3+ 自动注册Button下组件，如Button.Group */\n    Vue.use"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    Vue.prototype."),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$message")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    /* eslint-disable no-new */\n    new Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),t._v(",\n    components: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" App "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    template: "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<App/>'")]),t._v(",\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("修改 ant 兼容 ie 浏览器")]),t._v(" "),n("ul",[n("li",[t._v("安装所需插件")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save @babel/polyfill @babel/runtime\n")])])]),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D @babel/plugin-transform-runtime @babel/preset-env\n")])])]),n("ul",[n("li",[t._v("修改 main.js")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("# 加入\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"core-js/stable"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"regenerator-runtime/runtime"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("修改 babel.config.js")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    presets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@vue/cli-plugin-babel/preset"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                corejs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    vesion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    proposals"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    useBuiltIns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"entry"')]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/plugin-transform-runtime"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("修改.browserslistrc 文件")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("%\nlast "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" versions\n")])])]),n("ul",[n("li",[t._v("重新运行项目即可")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);