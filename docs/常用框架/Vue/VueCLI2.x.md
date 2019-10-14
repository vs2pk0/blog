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
