---
theme: penguin
colorSchema: 'auto'
layout: intro
highlighter: shiki
title: 原子化CSS
routerMode: 'hash'
hideInToc: true
---

# 原子化CSS时代

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

## 目录

<Toc listClass="list-none! flex items-center flex-col gap-2 mt-16" :maxDepth="1"/>

--- 
layout: new-section
---

# CSS发展进程

CSS的出现

CSS的可维护性问题

CSS方法论

---

## CSS发展进程

在 2003 年之前，CSS 并没有在 Web 开发中大量使用. 大部分样式通过原生标签属性实现
早期的时候，页面布局通常使用的是 HTML 表格，在行和列中组织内容，这种方式虽然有效，但是把内容和表现杂糅在一块了，如果你想改变网页的布局就得需要修改大量的 HTML 代码。

<div class="grid grid-cols-2 gap-4">

```html
<table>
  <tr>
    <th>Posts</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td align="center"><b>123</b></td>
    <td align="center"><i>4.56k</i></td>
  </tr>
</table>
```
<div>

上述代码的所有样式都是用 HTML 实现的:

- 对于布局，我们使用 `<table>`
- align 属性用于对齐
- 非语义化标签：`b` ，`i`  用于文本格式

</div>
</div>

---

## CSS的出现

<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/scalable-css-evolution-light.00a21e8e.gif" class="h-200px"/>

随着浏览器对 CSS 功能的支持，CSS 的出现推动了结构（HTML）和样式（CSS）的分离，人们开始把所有的布局代码从 HTML 中移除放入到 CSS 中

一旦开发人员开始大量使用 CSS，就会遇到可扩展性和可维护性问题。

---

## 选择器重复

使用原生CSS 时我们首先遇到的 CSS 的问题就是代码重复。每当我们定义伪类、伪元素或媒体查询时，我们都必须复制 CSS 选择器：

```css
/* class definition */
.product_title { }

/* pseudo-class and pseudo-element */
.product_title:hover { }
.product_title::after { }

/* media query */
@media (min-width: 768px) {
  .product_title { }
  .product_title::after { }
}
```

在重命名、移动或删除等重构过程中，处理大量重复的类可能会变得很棘手。

---

## 命名冲突

我们定义的所有 CSS 规则最终都将位于单个**全局命名空间**中。如果不规范命名，重用的类名通常包含常见名词，例如 `.modal`、`.button`、`.overlay` 等。当项目一旦庞大，对于同名的css，它们就会被覆盖
```css
// 被覆盖
.button {
  color: red;
}

.button {
  color: blue;
}
```

此问题的标准解决方案是添加特定于项目的**前缀**。例如element-plus的 `el` 前缀: `el-button`

前缀并不能保证名称的唯一性。例如，在处理许多大文件时，我们如何确定没有其他人添加了 .abc-heading-large 类？当然，我们可以搜索整个代码库以查看是否已经定义了同名的类，但这仅适用于静态类。

<!--
CSS 缺乏对命名空间的支持，因此语言本身并不能帮助我们防止样式覆盖。此问题的标准解决方案是添加特定于项目的前缀，例如abc-heading-large。

然而，前缀并不能保证名称的唯一性。例如，在处理许多大文件时，我们如何确定没有其他人添加了 .abc-heading-large 类？当然，我们可以搜索整个代码库以查看是否已经定义了同名的类，但这仅适用于静态类。

对于动态类，例如：
```tsx
const classname = `abc-heading-${isPromo ? "large" : "small"}`;
```

在这种情况下，确保没有任何命名冲突可能会成为一个相当大的挑战。
-->

---

## 类命名困难

缺失命名规范，不同人不同的风格，没有什么可读性，给类取名字一个十分痛苦的事情，大多数时候类名不伦不类，难以读懂。

> 计算机科学两件最难的事情：缓存失效，命名

<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231026073035.png" class="h-200px"/>


---

## 无用代码

在大型项目中，我们通常会遇到许多未使用的 CSS 代码。
通常发生在：

- 我们删除了 HTML 标记，但**忘记删除关联的样式**。
- 我们想要删除关联的样式，但我们**不知道它们是否在代码库中的其他地方使用**。因此，我们选择不删除现有样式，而不是冒破坏现有代码的风险。

这些未使用的代码会增加文件大小，从而增加加载时间。并使代码库越来越难以管理。

<!-- TODO: 添加个Demo -->
---

## 方法论

为了更明确的管理 CSS，开始有人提出一些 CSS 的方法论，使 CSS 也能具有良好的**重用性**、**维护性**和**延展性**。
比较有名的CSS方法论大致上分为这三个：

- OOCSS
- SMACSS
- BEM
<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231026075544.png" height="w-180px"/>

---

## OOCSS

OOCSS（Object Oriented CSS）是 Nicole Sullivan 在 2008 年提出的一种 CSS 方法论。它的核心思想是将 CSS 样式分为两个部分：结构和皮肤。

结构可以定义为 CSS 中定义元素的大小、边距与位置的部分。皮肤就是CSS的样式，比如颜色、字型大小、border-color、box-shadow 等等

<div class="grid grid-cols-2 gap-4">

```css
.button{
        width: 100px;
        height: 40px;
        background: red;
}
```

```css
/* 结构与样式分离*/ 
.button{
        width: 100px;
        height: 40px;
}

.theme {
        background: red;
}
```

</div>

---
layout: text-image
media: https://assets.toptal.io/images?url=https%3A%2F%2Fuploads.toptal.io%2Fblog%2Fimage%2F126676%2Ftoptal-blog-image-1532003633585-029d918ef1d38dd3573bb593bb87cdda.png
---

## SMACSS 

SMACSS 认为 CSS 有 5 个类别，我们通过这 5 种类别来拼凑出完整的 class

- Base 基础样式
- Layout 布局样式
- Module 模块样式 (组件)
- State 状态样式
- Theme 主题样式

根据结构分类，并定义出Base风格，最小化各浏览器的差异，遵守其Layout、Module、State规则可以有良好的重用性和维护性，并分离CSS与HTML，进而帮助简化选择器的深度

<!-- https://www.toptal.com/css/smacss-scalable-modular-architecture-css -->

---

## BEM（ block, element, modifier）
BEM 是一个分层系统，它把网站分为三层，这三层分别为 **块层、元素层、修饰符层**

- **块层**: 一个独立并可重复使用的页面组件。命名若有则需要以破折号 `-` 串接
- **元素层**：Block中不可分离的元素。命名以Block名称作为前缀，以双下划线`__`分割
- **修饰层**: 表示**状态或属性**。使用`--`两个破折号分隔组件名称及其修饰符

以表单搜索为例：

<div class="grid grid-cols-2">

```html
<form class="search-field">
  <!-- .... -->
  <button 
  class="search-field__button search-field__button--disabled">
  Search
  </button>
</form>
```

<img src="https://static.coderbridge.com/img/techbridge/images/arvinh/BEM_BE_example.png"/>

</div>

BEM 的规范很容易理解，对于新手来说命名规则上也很友好，缺点就是可能会导致class名字非常长，并且没有遵循传统的命名规范。后来出现的原子化CSS又把这个非传统方式带到了一个新的高度。

---
layout: new-section
---

# 什么是原子化CSS

原子化CSS简介

语义 VS 非语义

原子化CSS的优点


---

## 原子化CSS简介

原子化 CSS 是一种 CSS 的架构方式，它倾向于小巧且用途单一的 class，并且会以**视觉效果**进行命名。

不同于BEM规则的CSS，原子的意思就是将CSS进行拆分，每个样式都有一个唯一的CSS规则，例子如下：

<div class="grid grid-cols-2 gap-2">

语义化：

非语义化：

```html
<button class="button button--state-danger">
  Danger button
</button>
```

```html
<button
  class="bg-red-500 hover:bg-red-400 
  text-white font-bold py-2 px-4 rounded"
>
  Button
</button>
```

</div>

---

## 语义 VS 非语义

单规则 CSS 选择器具有最高程度的**复用性**。 比如我们需要实现 文本内容同时为粗体和绿色
<div class="grid grid-cols-2 gap-4">

```css
/** 语义化CSS */
.title {
  font-weight: bold;
  color: green;
}
```

```css
/* 非语义化 */
.font-bold{
        font-weight: bold;
}

.text-green{
        color: green;
}
```

只有当我们希望文本内容同时为粗体和绿色时，我们才能使用上面的标题类。例如，要使用粗体和红色的不同标题，我们必须创建一个新类。

我们添加到 CSS 选择器的 CSS 规则越多，它就会变得越具体，从而在样式及其用法之间创建紧密耦合。
</div>

将实现分成两个单独的类，我们可以**单独使用它们或将它们与其他类组合**。提高了复用性

---

## 为什么不使用内联CSS

对原子化CSS的常见反应是: “这不就是内联样式吗？”

<div class="bg-red text-white font-bold w-fit">Hello</div>


<div class="grid grid-cols-2 gap-2">

内联样式写法：

原子化CSS写法：

```html
<div style="background-color: red; 
            color: white; 
            font-weight: bold;">
Hello
</div>
```


```html
<div class="bg-red text-white font-bold">Hello</div>
```

</div>


原子化CSS相比内联样式更有优势:
- 可以预定义样式
- 支持响应式设计
- 支持伪类样式

---

## 预定义样式

通过设置预定义的样式,提供 design token 的设计规范: breakpoint, 字体颜色, 字体名等

<div class="flex gap-4">
<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231027072145.png" class="w-300px"/>
<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231030214143.png" class="h-300px"/>
</div>


---

## 响应式设计
内联样式无法使用媒体查询，但是原子化CSS可以使用 `breakpoint前缀:[基础样式]`  来实现响应式设计。

`sm`等同于 `@media (min-width: 640px) { ... }`。一共支持 `sm`,`md`, `lg`, `xl`,`2xl`5种前缀
<the-console>
<iframe src="https://unocss.dev/play/?html=DwIwrgLhD2B2AEBjANgQwM7oLwCIQHMBaAJwFMATedAWwC4DD8zSFrz6iRkxScA%2BAFDx4AIUgxYA4AHpwUOHyA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcESgF84WKBBBwA5FxUS6dPUiQYAHpFjpsAQy4AbeJhz4iJYKQAUyVFDO9ABccADaVKhhehJcdDA6ALSBThh65IhwUk7QoXq0aHpwagC6sqhUZVR0ABbQMLEwdKERqKj%2BbTFxCSCJtfWNenkwVjCJTqRwI5Zj0Pa4pBhwdQBuGFDB02Mj9k5mqGrl4QD0AHrcrMSJPgB0ANQAlAAkxxk%2BYRnZ0CUPALwAfB02nBaDAuFBcHAAAaxKB0aCJSB4EZQOAcaCYVGrdbBdFQTHJDBoZYQNYbDikQloRIAVgADFNRrTLE4QRBDJhiWAAEyMmaJJ4IL5QNRQyLFEqVWQiBTNcLimWMZQQHwPI6K5isdgXPj8VXq%2BTiKS4Oh%2BcWoOgSXYYUIARhu3KOqAkaFweRqrDAzWOx3oIButWO%2BzaajVlSQoaQQA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4XyA" class="w-full h-300px"/>
</the-console>
---

## 伪类样式

内联样式无法实现 hover, focus等伪类样式。 原子化CSS可以通过 `[伪类]:[基础样式]` 的格式来实现
<the-console>
<iframe src="https://unocss.dev/play/?html=DwIwrgLhD2B2AEBjANgQwM7oLwCIQHMBaAJwFMATeAC2gDdTiAuAw-M02HAPgCh54AQpBiwewAPTgocLkA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAgjDFMAEYCuMwWAnpVQ16jAJIBjYnSHVaDGAFVcESgF84WKBBBwA5FxUS6dPUiQYAHpFjpsAQy4AbeJhz4iJYKQAUyVFDO9ABccADaVKhhehJcdDA6ALSBThh65IhwUk7QoXq0aHpwagC6sqhUZVR0ABbQMLEwdKERqKj%2BbTFxCSCJtfWNenkwVjCJTqRwI5Zj0Pa4pBhwdQBuGFDB02Mj9k5mqGrl4QD0AHrcrMSJPgB0ANQAlAAkxxk%2BYRnZ0CUPALwAfB02nBaDAuFBcHAAAaxKB0aCJSB4EZQOAcaCYVGrdbBdFQTHJDBoZYQNYbDikQloRIAVgADFNRrTLE4QRBDJhiWAAEyMmaJJ4IL5QNRQyLFEqVWQiBTNcLimWMZQQHwPI6K5isdgXPj8VXq%2BTiKS4Oh%2BcWoOgSXYYUIARhu3KOqAkaFweRqrDAzWOx3oIButWO%2BzaajVlSQoaQQA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4XyA" class="w-full h-300px" />
</the-console>
---

## 传统方案

制作原子化 CSS 的传统方案其实就是提供所有你可能需要用到的 CSS 工具。例如，你可能会用**预处理器**（这里选用的是 SCSS）生成如下代码：

<div class="grid grid-cols-2 gap-4">

```css
// style.scss

@for $i from 1 through 10 {
  .m-#{$i} {
    margin: $i / 4 rem;
  }
}
```

<div>
编译结果为：

```css
.m-1 { margin: 0.25 rem; }
.m-2 { margin: 0.5 rem; }
/* ... */
.m-10 { margin: 2.5 rem; }
```
</div>

</div>

现在你可以直接使用 `class="m-1"` 来设置边距。用这种方式的缺点:
1. 不能使用除了 1 到 10 之外的边距
2. 即使不使用，编译后的代码仍然会占用空间

<!--
现在你可以直接使用 class="m-1" 来设置边距。但正如你所见，用这种方法的情况下，你不能使用除了 1 到 10 之外的边距，而且，即使你只使用了其中一条 CSS 规则，但还是要为其余几条规则的文件体积买单。如果之后你还想支持不同的 margin 方向，使用比如 mt 代表 margin-top，mb 代表 margin-bottom 等，加上这 4 个方向以后，你的 CSS 大小会变成原来的 5 倍。如果再有使用到像 :hover 和 :focus 这样的伪类时，体积还会得更变大。以此类推，每多加一个工具类，往往意味着你 CSS 文件的大小也会随之增加。
-->

---

## 传统方案-缺点

传统的方式不仅会消耗不必要的资源（生成了但未使用），甚至有时更是无法满足你的需求

<img src="https://raw.githubusercontent.com/Deuscx/pic/master/imagesunocss-traditional-way-zh.png" />

---

## 按需生成

<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/unocss-on-demand-way-zh.png" />

通过调换 "生成" 和 "扫描" 的顺序，"按需" 会为你节省浪费的计算开销和传输成本，同时可以灵活地实现预生成无法实现的动态需求。


---
layout: new-section
---

# Unocss的使用

什么是Unocss

Unocss的规则与预设

---

## 什么是Unocss

UnoCSS 是一个**引擎**，而非一款**框架**，因为它**并未提供核心工具类**，所有功能可以通过预设和内联配置提供。

特点：

- 📝**原子化**: 提供大量具体的原子化样式，关注每个属性
- 🎨**好看**：默认主题样式好看，提供默认主题，动画等预设
- 🤹**构建优化**：无解析、无抽象语法树、无扫描。它比 Windi CSS 或 Tailwind JIT 快5倍。
- 🛠**完全可定制**：无核心工具，所有功能通过预设提供
- 🌙**dark模式、响应式**: 自带黑暗模式，响应式支持
- 📦**生态丰富**： 围绕它已经有丰富的生态,模板库，组件等

---

## 基础使用方法

Unocss的所有功能可以通过**规则**和**预设**提供

- 定义规则

您可以通过在您的本地 **[配置文件](https://alfred-skyblue.github.io/unocss-docs-cn/guide/config-file)** 中提供规则来定义自定义 CSS 工具类。
<div class="grid grid-cols-2 gap-4">

```tsx
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [['m-1', { margin: '1px' }]]
})
```

这将在您的项目中添加一个新的 CSS 工具类 `m-1`。由于 UnoCSS 是按需加载的，在您的代码库使用它之前不会产生任何作用。因此，假设我们有一个像这样的组件

```html
<div class="m-1">Hello</div>
```

```css
.m-1 {
  margin: 1px;
}
```
</div>

---

## 定义动态规则

为了使其更加灵活，您可以通过将规则的第一个参数（我们称之为匹配器）更改为正则表达式，并将其主体更改为函数，从而使规则变得动态化，例如：

```ts
// uno.config.ts
export default defineConfig({
  rules: [
-    ['m-1', { margin: '1px' }]
+    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  ],
})
```

其中，回调函数的第一个参数为匹配结果，所以你可以对它进行解构以获得正则表达式的匹配组。

通过这样做，现在您可以拥有任意的 margin 工具类，如 `m-1`、`m-100` 或 `m-52.43`。并且，UnoCSS 只在您使用它们时才会生成这些工具。

<div class="grid grid-cols-2 gap-4">
```html
<div class="m-1">Hello</div>
<div class="m-7.5">World</div>
```

```css
.m-1 {
  margin: 1px;
}
.m-7.5 {
  margin: 7.5px;
}
```
</div>

---

## shortcut 快捷方式

shortcut可以让您将多个规则组合成单个简写。可以按照功能,组件进行区分，用于复用

<div class="grid grid-cols-2 gap-2">

```tsx
shortcuts: {
  // general
  'n-bg-base': 'bg-white dark:bg-[#151515]',
  'n-bg-active': 'bg-gray:5',
  'n-bg-hover': 'bg-gray:3',
  'n-border-base': 'border-gray/20',
  // shortcuts to multiple utilities
  'btn-base': 'py-2 px-4 font-semibold rounded-lg shadow-md',
  'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  // single utility alias
  'red': 'text-red-100',
  // glass
  'n-glass-effect': 'backdrop-blur-6 bg-white/80 dark:bg-[#151515]/90',
  'n-navbar-glass': 'sticky z-10 top-0 n-glass-effect',
}
```

<div>
未使用shortcut:
```html
<div class="py-2 px-4 font-semibold rounded-lg shadow-md 
text-white bg-green-500 hover:bg-green-700">
  Button
</div>
```

使用shortcut:
```html
<div class="btn-base btn-green"> Button </div>
```

<div class="btn-base btn-green w-fit"> Button </div>

</div>

</div>

---

## shortcut 动态快捷方式

除了普通的映射之外，UnoCSS 还允许您定义动态快捷方式。

类似于**[Rules](https://alfred-skyblue.github.io/unocss-docs-cn/config/rules)**，动态快捷方式是一个匹配器 RegExp 和一个处理函数的组合。

<div class="grid grid-cols-2 gap-4">
<div>


```tsx
shortcuts: [
  // you could still have object style
  {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md'
  },
  // dynamic shortcuts
  [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`]
]
```

有了这个，我们可以使用 `btn-green` 和 `btn-red` 来生成以下 CSS：

</div>

```css
.btn-green {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  --un-bg-opacity: 1;
  background-color: rgba(74, 222, 128, var(--un-bg-opacity));
  border-radius: 0.5rem;
  --un-text-opacity: 1;
  color: rgba(220, 252, 231, var(--un-text-opacity));
}
.btn-red {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  --un-bg-opacity: 1;
  background-color: rgba(248, 113, 113, var(--un-bg-opacity));
  border-radius: 0.5rem;
  --un-text-opacity: 1;
  color: rgba(254, 226, 226, var(--un-text-opacity));
}
```

</div>

---

## 主题

UnoCSS 有一个内置的主题，它包含了一些常用的工具类，例如 `bg-red-500` 和 `text-green-100`。
UnoCSS 也支持像 Tailwind / Windi 中的主题系统。在用户级别上，您可以在配置中指定 theme 属性，它将与默认主题进行深度合并。

<div class="grid grid-cols-2">

```tsx
theme: {
  // ...
  colors: {
    // class="text-very-cool"
    'veryCool': '#0000ff', 
    'brand': {
      //class="bg-brand-primary"
      'primary': 'hsla(var(--hue, 217), 78%, 51%)', 
      'success': '#67c23a',
      'warning': '#e6a23c',
      'danger': '#f56c6c',
      'error': '#f56c6c',
      'info': '#909399'
    }
  },
}
```

<div>

```html
<div class="text-very-cool"> Text Very Cool</div>
```

<div class="text-very-cool"> Text Very Cool</div>

</div>

</div>

---

## 定义预设

一旦您创建了一些规则，您可以将它们提取到一个预设中，并与他人分享。例如，您可以为您公司的设计系统创建一个预设，并与您的团队共享。

<div class="grid grid-cols-2 gap-4">

```tsx
// my-preset.ts
import { Preset } from 'unocss'

export const myPreset: Preset = {
  name: 'my-preset',
  rules: [
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
  ],
  variants: [/* ... */],
  shortcuts: [/* ... */]
  // ...
}
```

```tsx
// uno.config.ts
import { defineConfig } from 'unocss'
import { myPreset } from './my-preset'

export default defineConfig({
  presets: [
    myPreset // your own preset
  ],
})
```

</div>

---

## 官方预设规则

| 包名 | 描述 |
| --- | --- |
| @unocss/preset-uno | 默认预设 |
| @unocss/preset-mini | 最小但包含必要的规则和变体 |
| @unocss/preset-wind | Tailwind / Windi CSS 预设 |
| @unocss/preset-attributify | 启用属性化模式的其他规则 |
| @unocss/preset-tagify | 启用 Tagify 模式的其他规则 |
| @unocss/preset-icons | 由 Iconify 提供支持的纯 CSS 图标解决方案 |
| @unocss/preset-web-fonts | 支持 Web 字体（如 Google Fonts 等 |

---

## 默认预设
该预设尝试提供流行的功能优先框架（包括 Tailwind CSS、Windi CSS、Bootstrap、Tachyons 等）的共同超集。
例如，`ml-3`（Tailwind）、`ms-2`（Bootstrap）、`ma4`（Tachyons）和 `mt-10px`（Windi CSS）都是有效的。

<div class="grid grid-cols-2 gap-4">

```tsx
// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [presetUno()]
})
```

```css
.ma4 {
  margin: 1rem;
}
.ml-3 {
  margin-left: 0.75rem;
}
.ms-2 {
  margin-inline-start: 0.5rem;
}
.mt-10px {
  margin-top: 10px;
}
```

</div>


--- 

## 图标预设

在 UnoCSS 中使用纯 CSS 图标。

与可变修饰结合，你甚至可以根据悬停状态或颜色模式来切换图标。您可以从 **[Icônes](https://icones.js.org/)** 或 **[Iconify](https://icon-sets.iconify.design/)** 获取所有可用的图标集。你可以从一百余个热门图标集合（Material Design Icons， Ant Design Icons 等等）中获得 **超过一万个图标** 供你按需使用。
<div class="grid grid-cols-2 gap-4">

```html
<!-- Phosphor 图标中的基本锚点图标 -->
<div class="i-ph-anchor-simple-thin" />
<!-- 来自 Material Design 图标的橙色闹钟 -->
<div class="i-mdi-alarm text-orange-400 hover:text-teal-400" />
<!-- 大号 Vue 标志 -->
<div class="i-logos-vue text-3xl hover:rotate-180" />
<!-- Light 模式下显示太阳，Dark 模式下显示月亮，引用自 Carbon -->
<button class="i-carbon-sun dark:i-carbon-moon" />
<!-- Twemoji 笑脸，悬停时变成眼泪 -->
<div
  class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"
/>
```

<div class="flex text-12 gap-4">
<!-- Phosphor 图标中的基本锚点图标 -->
<div class="i-ph-anchor-simple-thin" />
<!-- 来自 Material Design 图标的橙色闹钟 -->
<div class="i-mdi-alarm text-orange-400 hover:text-teal-400" />
<!-- 大号 Vue 标志 -->
<div class="w-2em h-2em i-logos-vue text-3xl transform transition-800 hover:rotate-180" />
<!-- Light 模式下显示太阳，Dark 模式下显示月亮，引用自 Carbon -->
<ThemeToggle />
<!-- Twemoji 笑脸，悬停时变成眼泪 -->
<div
  class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"
/>
</div>

</div>

---

## 图标预设使用 

可以通过[**Icônes**](https://icones.js.org/) 搜索需要的图标预设集。通过 npm 安装需要的`@iconify-json/[the-collection-you-want]` 图标集


<the-console>
<iframe src="https://icones.js.org" class="w-full h-350px" />
</the-console>

---

## 属性化预设

假设你有一个使用 原子化CSS 工具类的按钮。当列表变得越来越长时，它变得很难阅读和维护。
使用属性化模式，你可以将工具类分成属性：

<div class="grid grid-cols-2 gap-4">

```html
<button
  class="
  bg-blue-400 hover:bg-blue-500 
  text-sm text-white 
  font-mono font-light 
  py-2 px-4 
  rounded border-2 border-blue-200 
  dark:bg-blue-500 dark:hover:bg-blue-600"
>
  Button
</button>
```

```html
<button
  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200"
>
  Button
</button>
```

</div>

在更好的按类型进行组织的同时，也节省了重复输入相同前缀的时间。

---
layout: new-section
---

# 原子化CSS使用实践
 推荐工具

 推荐使用方法

 AI与原子化CSS


---

## 推荐工具-Unocss插件

使用 vscode 的编辑器，建议安装自动补全插件

<img class="w-100 h-20 mb-4" src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231024070153.png" />

<div class="grid grid-cols-2 gap-2" >
<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231024070602.png" />
<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231026080757.png"/>
</div>

---

## 推荐工具-交互式文档


<the-console>
<iframe class="w-full h-400px bg-white" src="https://unocss.dev/interactive/" />
</the-console>

---

## 推荐工具-在线playground

<the-console>
<iframe class="w-full h-400px" src="https://unocss.dev/play/" />
</the-console>

---

## 使用方法 - Figma To Code

在一些简单的业务场景上，原子化CSS有非常大的优势，比如快速开发响应式H5, 官网页面,复杂度较低的中后台系统

Figma To Code 插件可以将设计稿转换为代码，支持原子化CSS的导出
<div class="flex gap-4">
  <img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231026212121.png" class="h-40"/>
  <img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231026205922.png" class="h-300px"/>
</div>

---

## 复杂的场景
当面对复杂的场景，比如一些复杂动画, 不常见的属性。原子化CSS就显得力不从心了。这时候就需要使用组件库
<div class="flex h-300px">
  <img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231027073151.png"/>
</div>

- 一些使用少的自定义属性: `[mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]`
- html结构复杂的场景, 需要的class较多
- 复杂的动画: `animation frame`

---

## 使用方法 - CSS组件库

选择基于原子化CSS搭建的纯CSS库：daisyui

- 大量简化了CSS 类名的书写

<div class="grid grid-cols-2 gap-2">

<div>
<img v-click-hide src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231030214346.png" class="h-300px"/>
<img v-after src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231030214434.png" class="h-300px"/>
</div>


<div class="card bg-base-200 w-80">
  <div class="card-body">
    <input placeholder="Email" class="input input-bordered" />
    <label class="label cursor-pointer">
      Accept terms of use
      <input type="checkbox" class="toggle" />
    </label>
    <label class="label cursor-pointer">
      Submit to newsletter
      <input type="checkbox" class="toggle" />
    </label>
    <button class="btn btn-neutral">Save</button>
  </div>
</div>

</div>
---

## 使用方法 - CSS组件库

**不使用任何JavaScript**，使用HTML5 + 原子化CSS 实现一些交互功能

<div class="grid grid-cols-2 gap-2">

```html
<label class="swap">
  <input type="checkbox" />
  <div class="swap-on">ON</div>
  <div class="swap-off">OFF</div>
</label>
```

```html
<button class="btn" onclick="my_modal_1.showModal()">
open modal
</button>
<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">
      Press ESC key or click the button below to close
    </p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```

<label class="swap">
  <input type="checkbox" />
  <div class="swap-on">ON</div>
  <div class="swap-off">OFF</div>
</label>

<dialog id="my_modal" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">
      Press ESC key or click the button below to close
    </p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
<button class="btn w-fit" onclick="my_modal[0].showModal()">
open modal
</button>


</div>


---

## 使用方法 - headless UI

如果想要实现 原生HTML5无法实现的功能，并且可以有很高的自定义性。可以使用headless UI + 原子化CSS

> Headless UI 一套基于 React Hooks 的组件开发设计理念，强调只负责组件的状态及交互逻辑，而不管标签和样式。 其本质思想其实就是关注点分离：将组件的“状态及交互逻辑”和“UI 展示层”实现解耦。

<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231026213439.png" class="h-200px"/>

Headless UI 和 普通组件库的对比
- Headless UI支持**样式完全自定义**，普通组件仅支持小改动；
- Headless UI 使用成本高，需要自定义样式；普通组件开箱即用；

---

## headless UI库
主流的headless UI库有：
- [headlessui](https://headlessui.dev/)
- [radix](https://www.radix-ui.com/)  
举个例子: 以checkbox为例, Headless ui具有更高的自定义性。如何把Label放在左边?
<div class="grid grid-cols-2 gap-4">

```vue
<el-checkbox v-model="checked1" label="Label" size="large" />
```

<example-checkbox/>

```html
<div class="flex items-center">
  <div>Label</div>
  <CheckboxRoot  class="bg-blue flex items-center justify-center h-[15px] w-[15px] rounded">
    <CheckboxIndicator > 
      <div class="i-carbon-checkmark"></div> 
    </CheckboxIndicator>    
  </CheckboxRoot>
</div>
</div>
```

<div class="flex items-center">
  <div>Label</div>
  <CheckboxRoot class="bg-blue flex items-center justify-center h-[15px] w-[15px] rounded">
    <CheckboxIndicator> 
      <div class="i-carbon-checkmark"></div> 
    </CheckboxIndicator>    
  </CheckboxRoot>
</div>
</div>

---

## Shadcn
[shadcn/ui](https://ui.shadcn.com/)基于radix ui，提供了一套统一的样式规范（UI Kit）。使用shadcn中的某个组件，不是通过npm安装shadcn这个包，来引入组件。而是直接复制该组件的代码到项目目录下（当然，整个复制过程是通过cli工具完成的）。

在保证高度自定义度的同时，也提供了一个好看的样式预设，提高了开发UI的速度
<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231026223048.png" class="h-300px"/>

---

## shadcn 使用

1. 添加组件 button
```bash
npx shadcn-ui@latest add button
```

2.将会创建一个`button.tsx` 到本地src，提供好看预设的同时，样式代码完全由自己控制

<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Ba2I-xwpsxuQ5RjXcYycFA.png" class="h-300px"/>

<!-- https://medium.com/@Kelly_CHI/shadcn-ui-tailwind-components-6fd4f1959147 -->
---

## AI与原子化CSS
Vercel推出了一款AI代码生成工具,[v0](https://v0.dev/) 可以快速生成前端组件代码。

使用方法:
1. 用自然语言描述需求
<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231027070000.png" class="h-20"/>

2.v0会根据需求生成组件代码
<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231027070105.png" class="h-200px"/>

---

## V0.dev

我们可以继续对不满意的地方提出修改意见，比如「背景请使用渐变蓝色」
<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231027070209.png"/>
此时，会生成一个新的版本（这里是v1）。具体来说，每个修改意见都会产生一个新的版本

---

## 使用V0.dev代码

v0生成的组件代码中，样式与UI分别基于两个库：
- 样式：基于原子化CSS
- UI：基于shadcn

<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231027070750.png" class="h-300px"/>
shadcn的组件可以根据需要增加自定义样式

---

## v0.dev为什么使用原子化CSS
在有限的未来，大模型输出的token限制还会一直存在，而「原子化CSS」相比「语义化CSS」能用更少的字符表达更丰富的样式信息。

对比下面两段代码：

「原子化CSS」的实现：

```html
<div class="m-1"></div>
```
「语义化CSS」的实现：

```html
<div class="container"></div>

.container {
  margin: 0.25rem;
}
```
显然，从大模型的字符输出消耗来看，「原子化CSS」能用更少字符表达同样的样式。

---
layout: new-section
---

# 原子化CSS总结

原子化的优点

原子化CSS使用建议

---

## 原子化的优点
1. 没有了命名的烦恼，按照功能命名
2. 没有相关嵌套，整体可读性加强
3. 没有重复 CSS 类， 一个功能对应一个类名，一个类名一个功能。
4. 没有新增 CSS 文件了。所有类名都是有工具库提供，项目中无需新增类了。

---

## 原子化CSS使用建议
1. 过分原子化的样式会导致代码难以维护
2. 选择合适的基础框架和工具，比如Ant Design、element-plus，Headless UI 配合原子化工具类

原子化的 CSS 可以帮助我们的项目解决 CSS 命名，代码重复，不断膨胀的问题，但它也不是一劳永逸的，实际使用中还是会有问题，关键在与开发者自身的取舍，权衡利弊。不要一个规则用到底，遇到问题也不变通。

---
hideInToc: true
src: './reuse/qa.md'
---

---
hideInToc: true
src: './reuse/thanks.md'
---

