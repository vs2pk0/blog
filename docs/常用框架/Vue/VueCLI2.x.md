---
title: 'VueCLI2.x'
date: '2019-09-18'
permalink: 'VueCLI2.x'
---

## 安装 node.js

-   下载[node.js](https://nodejs.org/en/)
-   安装好后键入 node -v 以及 npm -v 来测试是否安装成功
-   由于国内镜像下载很慢可以安装淘宝镜像,安装成功后，可以键入 cnpm -v 检查是否安装成功

```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 全局安装 vue-cli 脚手架

```sh
cnpm install -g vue-cli
```

## 全局安装 webpack 脚手架

```sh
cnpm install -g webpack
```

## 创建项目

```sh
vue init webpack 项目名称
cd 项目名称
cnpm i
```

## 运行项目

```sh
npm run dev
```

## 解决安卓低版本兼容问题

- 方案1：在 webpack.config.js 文件中，entry 入口处修改，加入即可
```js

entry:{
    app:['babel-polyfill','./src/main.js']
}
or
entry: {
    "babel-polyfill":"babel-polyfill",//用来解决的兼容性
    app: path.resolve(__dirname, config.entry.module + "/app.js"),
    vendor: config.entry.vendor
}
```

- 方案2：不修改webpack的情况下，在你的主入口文件头部加入，例如：app.js中加入即可

```js
import 'babel-polyfill'
import Vue from 'vue';
Vue.config.debug = true;
```

- 方案3：也就是使用cdn的资源，以js的文件加入到html页面：例如：
```sh
<script src="https://cdn.bootcss.com/babel-polyfill/6.23.0/polyfill.min.js"></script>
```


- 如果你只用到了 axios 对 promise进行兼容，可以只用 es6-promise
```sh
npm install es6-promise --save
```
在 main.js 中的最前面 引入

```js
import 'es6-promise/auto'
```
完成以上配置，ie9兼容就完成了
