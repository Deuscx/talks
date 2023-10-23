---
theme: penguin
colorSchema: 'auto'
layout: intro
highlighter: shiki
title: Slidev Penguin Theme
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

## Table Of Content

<Toc :maxDepth="1"/>


--- 

# 什么是原子化CSS

原子化 CSS 是一种 CSS 的架构方式，它倾向于小巧且用途单一的 class，并且会以视觉效果进行命名。

```css
.m-0 {
  margin: 0;
}
.text-red {
  color: red;
}
/* ... */
```

--- 

## 传统方案

制作原子化 CSS 的传统方案其实就是提供所有你可能需要用到的 CSS 工具。例如，你可能会用预处理器（这里选用的是 SCSS）生成如下代码：

<div class="grid grid-cols-2 gap-4">
<div>
```css
// style.scss

@for $i from 1 through 10 {
  .m-#{$i} {
    margin: $i / 4 rem;
  }
}
```

编译结果为：

```css
.m-1 { margin: 0.25 rem; }
.m-2 { margin: 0.5 rem; }
/* ... */
.m-10 { margin: 2.5 rem; }
```
</div>
现在你可以直接使用 class="m-1" 来设置边距。但正如你所见，用这种方法的情况下，你不能使用除了 1 到 10 之外的边距，而且，即使你只使用了其中一条 CSS 规则，但还是要为其余几条规则的文件体积买单。如果之后你还想支持不同的 margin 方向，使用比如 mt 代表 margin-top，mb 代表 margin-bottom 等，加上这 4 个方向以后，你的 CSS 大小会变成原来的 5 倍。如果再有使用到像 :hover 和 :focus 这样的伪类时，体积还会得更变大。以此类推，每多加一个工具类，往往意味着你 CSS 文件的大小也会随之增加。
</div>

---

## 传统方案 

传统的方式不仅会消耗不必要的资源（生成了但未使用），甚至有时更是无法满足你的需求

<img src="https://raw.githubusercontent.com/Deuscx/pic/master/imagesunocss-traditional-way-zh.png" />

--- 

## 按需生成

<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/unocss-on-demand-way-zh.png" />

通过调换 "生成" 和 "扫描" 的顺序，"按需" 会为你节省浪费的计算开销和传输成本，同时可以灵活地实现预生成无法实现的动态需求。


---
layout: section
---

# Unocss的使用
- 什么是Unocss
- Unocss的规则与预设

--- 

## 什么是Unocss

UnoCSS 是一个**引擎**，而非一款**框架**，因为它**并未提供核心工具类**，所有功能可以通过预设和内联配置提供。

特点：

- 📝原子化: 提供大量具体的原子化样式，关注每个属性
- 🎨好看：默认主题样式好看
- 🤹构建优化：无解析、无抽象语法树、无扫描。它比 Windi CSS 或 Tailwind JIT 快5倍。
- 🛠完全可定制：无核心工具，所有功能通过预设提供
- 🌙dark模式、响应式: 自带黑暗模式，响应式支持
- 📦生态丰富： 围绕它已经有丰富的生态,模板库，组件等

--- 

## 基础使用方法

Unocss的所有功能可以通过规则和预设提供

- 定义规则

您可以通过在您的本地 **[配置文件](https://alfred-skyblue.github.io/unocss-docs-cn/guide/config-file)** 中提供规则来定义自定义 CSS 工具类。
<div class="grid grid-cols-2 gap-4">

```tsx
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [['m-1', { margin: '1px' }]]
})
```

这将在您的项目中添加一个新的 CSS 工具类 `m-1`。由于 UnoCSS 是按需加载的，在您的代码库使用它之前不会产生任何作用。因此，假设我们有一个像这样的组件

```html
<div class="m-1">Hello</div>
```

`m-1` 将被检测到，并生成以下 CSS：

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
-    ['m-1', { margin: '1px' }]
+    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  ],
})
```

其中，回调函数的第一个参数为匹配结果，所以你可以对它进行解构以获得正则表达式的匹配组。

通过这样做，现在您可以拥有任意的 margin 工具类，如 `m-1`、`m-100` 或 `m-52.43`。并且，UnoCSS 只在您使用它们时才会生成这些工具。

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

shortcut可以让您将多个规则组合成单个简写

```tsx
shortcuts: {
  // shortcuts to multiple utilities
  'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
  'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  // single utility alias
  'red': 'text-red-100'
}
```

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

有了这个，我们可以使用 `btn-green` 和 `btn-red` 来生成以下 CSS：

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

UnoCSS 有一个内置的主题，它包含了一些常用的工具类，例如 `bg-red-500` 和 `text-green-100`。
UnoCSS 也支持像 Tailwind / Windi 中的主题系统。在用户级别上，您可以在配置中指定 theme 属性，它将与默认主题进行深度合并。

```tsx
theme: {
  // ...
  colors: {
    'veryCool': '#0000ff', // class="text-very-cool"
    'brand': {
      'primary': 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"
    }
  },
}
```

--- 

# 定义预设

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
| @unocss/preset-typography | 排版预设 |
| @unocss/preset-rem-to-px | 将 rem 转换为 px 的实用工具 |


--- 

## 默认预设
```tsx
// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [presetUno()]
})
```

该预设尝试提供流行的功能优先框架（包括 Tailwind CSS、Windi CSS、Bootstrap、Tachyons 等）的共同超集。

例如，`ml-3`（Tailwind）、`ms-2`（Bootstrap）、`ma4`（Tachyons）和 `mt-10px`（Windi CSS）都是有效的。

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

--- 

## 图标预设

在 UnoCSS 中使用纯 CSS 图标。

与可变修饰结合，你甚至可以根据悬停状态或颜色模式来切换图标。您可以从 **[Icônes](https://icones.js.org/)** 或 **[Iconify](https://icon-sets.iconify.design/)** 获取所有可用的图标集。你可以从一百余个热门图标集合（Material Design Icons， Ant Design Icons 等等）中获得 **超过一万个图标** 供你按需使用。
<div class="grid grid-cols-2 gap-4">

```html
<!-- Phosphor 图标中的基本锚点图标 -->
<div class="i-ph-anchor-simple-thin" />
<!-- 来自 Material Design 图标的橙色闹钟 -->
<div class="i-mdi-alarm text-orange-400" />
<!-- 大号 Vue 标志 -->
<div class="i-logos-vue text-3xl" />
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
<div class="i-mdi-alarm text-orange-400" />
<!-- 大号 Vue 标志 -->
<div class="i-logos-vue text-3xl" />
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

```bash
pnpm add -D @unocss/preset-icons @iconify-json/[the-collection-you-want]
```

<iframe src="https://icones.js.org" class="w-full h-400px" />

--- 

## 属性化预设

假设你有一个使用 Tailwind 工具类的按钮。当列表变得越来越长时，它变得很难阅读和维护。

```html
<button
  class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600"
>
  Button
</button>
```

使用属性化模式，你可以将工具类分成属性：

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

在更好的按类型进行组织的同时，也节省了重复输入相同前缀的时间。



---
layout: section
---

# 原子化CSS使用实践
- 推荐工具
- 推荐使用场景


---

## 推荐工具

- Unocss插件
使用 vscode 的编辑器，建议安装自动补全插件

<div class="flex flex-col gap-2" >
<img class="w-100 h-20" src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231024070153.png" />
<img src="https://raw.githubusercontent.com/Deuscx/pic/master/images/20231024070602.png" />
</div>

---

## 推荐工具

- 交互式文档

<iframe class="w-full h-400px" src="https://unocss.dev/interactive/" />

--- 

## 推荐工具
- 在线playground

<iframe class="w-full h-400px" src="https://unocss.dev/play/" />
 
