---
title: "gulp自动编译为css的vw单位"
date: "2019-12-18"
permalink: "gulp自动编译为css的vw单位"
---

## 解决 移动端适配的问题，px to vw

-   新建 gulpfile.js 文件

-   安装需要的插件

```js
 nvm install --save-dev autoprefixer gulp@3.9.1 gulp-postcss postcss-px-to-viewport
```

-   设置 gulpfile.js[原文](https://www.cnblogs.com/zhangzhicheng/p/8910624.html)

```js
var gulp = require("gulp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var pxtoviewport = require("postcss-px-to-viewport");

gulp.task("styles", function() {
    //pxtoviewport配置，viewportWidth与viewportHeight为设计稿的宽高
    //这样就可以直接使用设计稿的宽高直接开发项目而不需要自己计算一遍
    var processors = pxtoviewport({
        viewportWidth: 375,
        viewportHeight: 667,
        viewportUnit: "vw"
    });

    return gulp
        .src("src/*.css")
        .pipe(postcss([autoprefixer, processors]))
        .pipe(gulp.dest("dest/"));
});

gulp.task("default", ["styles"]);

//监听文件变化，自动编译
var watcher = gulp.watch("src/*.css", ["default"]);

watcher.on("change", function(ev) {
    console.log("File:" + ev.path + " was " + ev.type + " ,running tasks...");
});
```
