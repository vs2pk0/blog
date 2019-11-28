---
title: "ant-design-vue项目搭建"
date: "2019-09-18"
permalink: "ant-design-vue项目搭建"
---

## ant-design-vue 项目搭建

-   创建 vue 项目

    ```sh
    vue create xxx
    # OR 使用图形化界面进行创建
    vue ui
    ```

-   安装 ant-design-vue
    ```sh
    npm i --save ant-design-vue
    ```
-   配置 main.js

    ```sh
        # 完整引入
        import Vue from 'vue';
        import Antd from 'ant-design-vue';
        import App from './App';
        import 'ant-design-vue/dist/antd.css';
        Vue.config.productionTip = false;

        Vue.use(Antd);

        /* eslint-disable no-new */
        new Vue({
        el: '#app',
        components: { App },
        template: '<App/>',
        });
    ```

    ```sh
        # 局部导入组件
        import Vue from 'vue';
        import { Button, message } from 'ant-design-vue';
        import App from './App';

        Vue.config.productionTip = false;

        /* v1.1.2 */
        Vue.component(Button.name, Button);
        Vue.component(Button.Group.name, Button.Group);

        /* v1.1.3+ 自动注册Button下组件，如Button.Group */
        Vue.use(Button);

        Vue.prototype.$message = message;

        /* eslint-disable no-new */
        new Vue({
        el: '#app',
        components: { App },
        template: '<App/>',
        });
    ```

-   修改 ant 兼容 ie 浏览器

    -   安装所需插件

    ```sh
    npm install --save @babel/polyfill @babel/runtime
    ```

    ```sh
    npm install -D @babel/plugin-transform-runtime @babel/preset-env
    ```

    -   修改 main.js

    ```js
    # 加入
    import "core-js/stable";
    import "regenerator-runtime/runtime";
    ```

    -   修改 babel.config.js

    ```js
    module.exports = {
        presets: [
            "@vue/cli-plugin-babel/preset",
            [
                "@babel/preset-env",
                {
                    corejs: {
                        vesion: 3,
                        proposals: true,
                        useBuiltIns: "entry"
                    }
                }
            ]
        ],
        plugins: [["@babel/plugin-transform-runtime"]]
    };
    ```

    -   修改.browserslistrc 文件

    ```sh
    > 1%
    last 2 versions
    ```

    -   重新运行项目即可
