---
title: "gulp运行报错解决方案"
date: "2019-12-13"
permalink: "gulp运行报错解决方案"
---

## 解决 primordials is not defined 问题

这个问题是安装的 gulp 和 nodejs 版本不兼容的问题，解决这个问题我们需要降级 nodejs 版本

-   下载 nvm nodejs 版本管理器,[点我下载](https://www.lanzous.com/i7zjdyd)

-   配置 nvm 淘宝镜像

    -   打开 C:\Users\用户名\AppData\Roaming\nvm 目录，找到 settings.txt，并打开,添加以下信息

    ```sh
    node_mirror: https://npm.taobao.org/mirrors/node/
    npm_mirror: https://npm.taobao.org/mirrors/npm/
    ```

-   使用 nvm 降级 nodejs 版本

```js
 nvm install 11.15.0
```

-   切换使用低版本

```js
 nvm use 11.15.0
```

-   查看安装的 nodejs 版本

```js
 nvm list
```
