---
title: 'VueCLI3.x'
date: '2019-09-18'
permalink: 'VueCLI3.x'
---

## 安装

::: warning 关于旧版本
Vue CLI 的包名称由 `vue-cli` 改成了 `@vue/cli`。
如果你已经全局安装了旧版本的 `vue-cli` (1.x 或 2.x)，你需要先通过 `npm uninstall vue-cli -g` 或 `yarn global remove vue-cli` 卸载它。
:::

::: tip Node 版本要求
Vue CLI 需要 [Node.js](https://nodejs.org/) 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 [nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
:::

## 安装 node.js

-   下载[node.js](https://nodejs.org/en/)
-   安装好后键入 node -v 以及 npm -v 来测试是否安装成功
-   由于国内镜像下载很慢可以安装淘宝镜像,安装成功后，可以键入 cnpm -v 检查是否安装成功

```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 全局安装 @vue/cli

```sh
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

## 创建项目

```sh
vue create xxx
# OR 使用图形化界面进行创建
vue ui
```

## 运行项目

```sh
npm run start
```

## 引入 scss 全局变量

-   安装 sass-resouces-loader

```sh
npm i sass-resources-loader -D
```

-   进入根项目的 vue.config.js 文件，增加如下配置

```js
const path = require('path')

module.exports = {
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item.use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    resources: [path.resolve(__dirname, 'xxx.scss')]
                })
                .end()
        })
    }
}
```

## 对安卓低版本系统和 IE 上白屏问题解决
-  根目录下新建 .babelrc 文件
** 在项目根目录下新建 .babelrc 文件，跟 package.json 同级。 将以下代码复制到 .babelrc 文件中
```js
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
```
- 修改 babel.config.js
```js
module.exports = {
  presets: [
    [
      "@vue/app",
      {
        "useBuiltIns": "entry",
        polyfills: [
          'es6.promise',
          'es6.symbol'
        ]
      }
    ]
  ]
}
```
- 修改 vue.config.js

```js
module.exports = {
  transpileDependencies: ['webpack-dev-server/client'],
	chainWebpack: config => {
    config.entry.app = ['babel-polyfill', './src/main.js'];
	}
}
```
- 修改 main.js 文件

```js
import '@babel/polyfill';
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
```
- 安装依赖


```sh
npm install --save-dev @babel/core @babel/plugin-transform-runtime @babel/preset-env es6-promise babel-polyfill
```
