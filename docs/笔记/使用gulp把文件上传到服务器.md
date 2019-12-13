---
title: "使用gulp把文件上传到服务器"
date: "2019-12-13"
permalink: "使用gulp把文件上传到服务器"
---

## gulp 打包文件上传到服务器

-   安装 gulp(这里使用的 3.9.1 版本)

```sh
npm install gulp@3.9.1 -g
```

-   新建 gulp 任务,找到一个空白文件夹

-   初始化 npm

```sh
npm init
```

-   安装所需要的环境

```sh
服务器安装
npm install gulp@3.9.1 gulp-sftp --save-dev
OR
虚拟云主机安装
npm install gulp@3.9.1 gulp-ftp --save-dev
```

-   新建 gulp 任务

```js
//新建gulpfile.js文件
cd.>gulpfile.js
```

-   打开 gulpfile.js 编写命令

    -   引入必要模块

    ```js
    var gulp = require("gulp");
    //服务器引入这个;
    var ftp = require("gulp-sftp");
    OR;
    //虚拟云主机引入这个;
    var ftp = require("gulp-ftp");
    ```

    -   编写命令

    ```js
    //服务器配置信息
    const serverSeting = {
        host: "服务器域名",
        port: 21, //虚拟主机默认21，服务器默认22
        user: "用户名",
        pass: "密码",
        remotePath: "/需要上传的位置/"
    };
    //把打包好的文件上传到服务器
    gulp.task("server", () => {
        return gulp.src("./需要上传的目录/*_/_").pipe(ftp(serverSeting));
    });
    //默认任务
    gulp.task("default", ["server"], () => {});
    ```

    -   完整代码

    ```js
    const gulp = require("gulp"),
        watch = require("gulp-watch"),
        ftp = require("gulp-ftp");
    //服务器配置信息
    const serverSeting = {
        host: "服务器域名",
        port: 21, //虚拟主机默认21，服务器默认22
        user: "用户名",
        pass: "密码",
        remotePath: "/需要上传的位置/"
    };
    //把打包好的文件上传到服务器
    gulp.task("server", () => {
        return gulp.src("./需要上传的目录/**/*").pipe(ftp(serverSeting));
    });

    //监听文件夹有改动就上传
    gulp.task("watch", () => {
        return watch("./需要上传的目录/**/*", () => {
            gulp.start("server");
        });
    });
    //默认任务
    gulp.task("default", ["server"], () => {});
    ```
