---
title: "postcss"
date: "2020-02-19"
permalink: "postcss"
---

## 什么是 postcss

-   postcss 一种对 css 编译的工具，类似 babel 对 js 的处理，常见的功能如：

    -   使用下一代 css 语法
    -   自动补全浏览器前缀
    -   自动把 px 代为转换成 rem
    -   css 代码压缩等等

-   与 less sass 的区别

    -   less sass 是预处理器，用来支持扩充 css 语法。
    -   postcss 既不是 预处理器也不是 后处理器，其功能比较广泛，而且重要的一点是，postcss 可以和 less/sass 结合使用

-   关于取舍

    -   虽然可以结合 less/sass 使用，但是它们还是有很多重复功能，用其中一个基本就 ok 了。
    -   postcss 鼓励开发者使用规范的 CSS 原生语法编写源代码，支持未来的 css 语法，就像 babel 支持 ES6。
    -   less、sass 扩展了原生的东西，它把 css 作为一个子集，但这不好保持向后兼容。
    -   总体来说区别不大，看个人喜好吧

-   使用方法，这里在 vuecli 里面示例

    -   安装

    ```sh
    npm install postcss-loader –save-dev
    ```

    -   postcss 配置
        项目根目录新建 postcss.config.js 文件，里面配置一些插件

    ```js
    module.exports = {
        plugins: [require("autoprefixer")({})]
    };
    ```

    -   .browserslistrc 配置

    ```sh
    > 1%
    last 2 versions
    last 10 Chrome versions
    last 5 Firefox versions
    Safari >= 6
    ie > 8
    ```

## 常用的 postcss 插件

-   Autoprefixer(前缀补全，全自动的，无需多说)

    -   安装

    ```sh
    npm install Autoprefixer --save-dev
    ```

-   postcss-cssnext(使用下个版本的 css 语法,语法见 cssnext (css4)语法)

    -   安装

    ```sh
    npm install postcss-cssnext --save-dev
    ```

    ::: danger 注意
    别忘了在 postcss.config.js 配置：'postcss-cssnext':{},cssnext 包含了 autoprefixer ，都安装会报错
    :::

-   postcss-pxtorem(把 px 转换成 rem)

    -   安装

    ```sh
    npm install postcss-pxtorem --save-dev
    ```

    -   配置项

    ```js
    {
        rootValue: 100, // html节点设的font-size大小，由于chrome最小12px，所以基值要设置大写
        unitPrecision: 5, // 转rem精确到小数点多少位
        propList: ['font', 'font-size', 'line-height', 'letter-spacing'], // 指定转换成rem的属性，支持 * ！
        selectorBlackList: [], // str或reg ，指定不转换的选择器，str时包含字段即匹配
        replace: true,
        mediaQuery: false, // 媒体查询内的px是否转换
        minPixelValue: 0 // 小于指定数值的px不转换
    }
    ```

## cssnext (css4)语法

cssnext 和 css4 并不是一个东西，cssnext 使用下个版本 css 的草案语法

相当于一个变量，变量的好处显而易见，重复使用

### 自定义属性

-   定义
    在 :root 选择器定义一个 css 属性

```css
:root {
    --mianColor: #ffc001;
}
```

-   使用
    使用 var(xx) 调用自定义属性

```css
.test {
    background: var(--mianColor);
}

/*编译后*/
.test {
    background: #ffc001;
}
```

比如在网站颜色上的使用，避免复制粘贴颜色

### 自定义属性集

一个变量里存了多个属性

-   定义

在 :root 选择器定义一个 css 属性集

```css
:root {
    --fontCommon: {
        font-size: 14px;
        font-family: 微软雅黑;
    }
}
```

-   使用
    使用 @apply xx 调用属性集

```css
.test {
    @apply --fontCommon;
}

/*编译后*/
.test {
    font-size: 14px;
    font-family: 微软雅黑;
}
```

### 大小计算

一般用于 px rem 等的计算
语法：cale(四则运算)

```css
/*css3*/
.test {
    width: calc(100% - 50px);
}
/*css4 允许变量*/
:root {
    --fontSize: 1rem;
}
h1 {
    font-size: calc(var(--fontSize) * 2);
}

/*编译后*/
.test {
    font-size: 32px;
    font-size: 2rem;
}
```

### 自定义定义媒体查询

-   定义
    语法 @custom-media xx (条件) and (条件)

```css
@custom-media --small-viewport (max-width: 30rem);
```

另外 css4 可以使用>= 和 <= 代替 min-width 、max-width

-   使用

```css
@media (width >= 500px) and (width <= 1200px) {
}
@media (--small-viewport) {
}

/*编译后*/
@media (min-width: 500px) and (max-width: 1200px) {
}
@media (max-width: 30rem) {
}
```

### 自定义选择器

-   定义
    语法：@custom-selector :name selector1, selector2;

#### @custom-selector 后必须有空格

```css
@custom-selector :--test .test1, .test2;
```

-   使用
    语法：:name

```css
:--test {
    color: #fff;
}

/*编译后*/
.test1,
.test2 {
    color: #fff;
}
```

注：与伪类使用，相互组合

```css
@custom-selector :--test .test1, .test2;
@custom-selector :--testClass :hover, :focus;
:--test:--testClass {
    color: #fff;
}

/*编译后*/
.test1:hover,
.test2:hover,
.test1:focus,
.test2:focus {
    color: #fff;
}
```

### 选择器嵌套

支持嵌套后，css 代码就不那么混乱了，而且方便

-   直接嵌套
    语法 &

    ```css
    .test {
        & span {
            color: white;
        }
    }

    /*编译后*/
    .test span {
        color: white;
    }
    ```

-   指定如何嵌套

    语法：@nest ... & ...,&指定位置

    ```css
    a {
        @nest span & {
            color: blue;
        }
    }

    /*编译后*/
    span a {
        color: blue;
    }
    ```

-   自动嵌套（媒体查询中）
    媒体查询中自动嵌套到内部

```css
.test {
    @media (min-width: 30rem) {
        color: yellow;
    }
}

/*编译后*/
@media (min-width: 30rem) {
    .test {
        color: yellow;
    }
}
```

-   color() 调整颜色

示例，使用 color(value alpha(百分比)) 调整颜色

```css
.test {
    color: color(red alpha(-10%));
}

/*编译后*/
.test {
    color: rgba(255, 0, 0, 0.9);
}
```

-   font-family 新增值 system-ui
    system-ui 采用所有系统字体作为后备字体

```css
body {
    font-family: system-ui;
}

/*编译后*/
body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue;
}
```
