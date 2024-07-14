---
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: unocss
title: AST
routerMode: 'hash'
---

# AST

Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

目录

- AST的简介
- AST在JavaScript中的应用
  - Eslint
  - babel
- AST在小布会议中的使用

---

# 简介

抽象语法树（Abstract Syntax Tree，AST）是源代码语法结构的一种抽象表示，它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。

---
layout: two-cols
---

# 一个简单的案例

（1+2）* 3

::right::

<img src="https://raw.githubusercontent.com/Deuscx/talks/main/public/ast/ast1.png" class="h-60 rounded shadow" />

---

# AST工具

[AST explorer](https://astexplorer.net/)

<img src="https://raw.githubusercontent.com/Deuscx/talks/main/public/ast/ast2.png">

---

Ast Explore: [(1+2)*3](https://astexplorer.net/#/gist/ddf27440c0d7df3540f77058ea2fb4c2/b88970050a3fdccb9cbe1f88c68219460e7ba5ae)

<img src="https://raw.githubusercontent.com/Deuscx/talks/main/public/ast/ast3.png">

---

# AST中的应用

1. 将 Javascript 代码进行格式化 (eslint/prettier)
2. 将 ES6+ 转化为 ES5 (babel)
3. 代码转换 (jscodeshift/gogocode)
4. 代码压缩 (terser)

---

# AST与编译器

Vue的虚拟DOM，Babel的代码转换

1. Parse: 将字符串转为AST
2. Transform: 对AST进行操作
3. Code Generate: 生成新的代码

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2387b1bb-c44e-487a-a56c-3a89a61f00a3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221030T101533Z&X-Amz-Expires=86400&X-Amz-Signature=63f7175c2b231d348f3dcb441cb9bd78674b00eb11d73d9feb66c46d96cf5d8c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" />

---

# Parse

parse分为词法分析 和 语法分析

- 词法分析
将代码转为一组tokens， 每个token表示一个特有的语法

```
const a = 1

[
 {type: {}, value: 'const', start: 0, end: 5, loc: {}},
 {type: {}, value: 'a', start: 6, end: 7, loc: {}},
 {type: {}, value: '=', start: 8, end: 9, loc: {}},
 {type: {}, value: '1', start: 10, end: 11, loc: {}},
]
```

- 语法分析
将 Tokens 转化为结构化的 AST

---

# Transform

根据当前AST（抽象语法树）生成一个新的AST（抽象语法树)

遍历AST（抽象语法树）的所有节点

<div grid="~ cols-2 gap-4">
<div>

```
{
  type: 'Program',
  body: [{
    type: 'CallExpression',
    name: 'add',
    params: [{
      type: 'NumberLiteral',
      value: '2'
    }, {
      type: 'CallExpression',
      name: 'subtract',
      params: [{
        type: 'NumberLiteral',
        value: '4'
      }, {
        type: 'NumberLiteral',
        value: '2'
      }]
    }]
  }]
}
```

</div>

<div>
<img src="https://raw.githubusercontent.com/Deuscx/talks/main/public/ast/ast4.webp">
</div>
</div>

---

# Code Generate

代码生成阶段:
访问Transformation生成的AST(抽象语法树)或者再结合tokens，按照指定的规则，将“树”上的节点生成新的字符串

[the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)

<img src="https://cloud.githubusercontent.com/assets/952783/21579290/5755288a-cf75-11e6-90e0-029529a44a38.png" center h-50>

---

# AST在JS体系中应用

- ESLint
- Babel

---
layout: two-cols
---


[Start Code](https://astexplorer.net/#/gist/8a0abd40631677e000c874810213a84a/cc221c345758c7d3c771aaeedc32c1e8167cfcbf)

```javascript
// invalid
if(a) console.log(true)

// valid
if(!a){
 console.log(false)
}
```
::right::

```javascript
import type { Rule } from 'eslint'

export default {
  meta: {
    docs: {
      description: 'Disallow IfStatement without blocks',
      category: 'Stylistic Issues',
      recommended: true,
    },
    fixable: 'code',
    // rule options
    schema: [],
  },
  create(context: Rule.RuleContext) {
    return {
      // visitor
    }
  },
}
```
---

# Visitor

访问器最基本的思想是创建一个“访问器”对象，这个对象可以处理不同类型的节点函数
```javascript{all|1-9|10-15|all}
  IfStatement(node) {
        if (!node.consequent)
          return
        if (node.consequent.type === 'BlockStatement')
          return

        context.report({
          node,
          message: 'IfStatement without blocks',
          fix(fixer) {
            return [
              fixer.insertTextBefore(node.consequent, '{'),
              fixer.insertTextAfter(node.consequent, '}'),
            ]
          },
        })
      }
```

---

# Babel

Babel

- [@babel/parser](https://babeljs.io/docs/en/babel-parser) 可以把源码转换成`AST`
- [@babel/traverse](https://babeljs.io/docs/en/babel-traverse) 用于对 `AST` 的遍历，维护了整棵树的状态，并且负责替换、移除和添加节点
- [@babel/generator](https://babeljs.io/docs/en/babel-generator) 可以把`AST`生成源码，同时生成`sourcemap`
- [@babel/types](https://babeljs.io/docs/en/babel-types) 用于 `AST` 节点的 Lodash 式工具库, 它包含了构造、验证以及变换 `AST` 节点的方法，对编写处理 `AST` 逻辑非常有用
- [@babel/core](https://babeljs.io/docs/en/babel-core) Babel 的编译器，核心 API 都在这里面，比如常见的 `transform`、`parse`，并实现了插件功能

---

[Start Code](https://astexplorer.net/#/gist/9582f2374700a25bd47aeff3ed15a670/3c9d9963b468ca900c3f3bd085db91eecbddf9e9)

<div grid="~ cols-2 gap-4">
<div>
```javascript
function testRegex(str){
  const reg = /regex/;
  return str.match(reg)
}
```
</div>


<div>
提升Regex
```javascript
const _reg = /regex/;

function testRegex(str){
  return str.match(_reg)
}
```
</div>
</div>


---

# 步骤分解

1. 找到Program节点
2. 生成新的变量名来重命名，并用reg赋值
3. 生成新的AST

```javascript{all|2|4-7|9-10|all}
RegExpLiteral(path) {
        const program = path.findParent(types.isProgram)

        const name = path.parent.id.name
        const newIdentifier = path.scope.generateUidIdentifier(name)
        path.scope.rename(name, newIdentifier.name)
        const variableDeclaration = types.variableDeclaration('const', [types.variableDeclarator(newIdentifier, path.node)])

        program.node.body.unshift(variableDeclaration)
        path.parentPath.remove()
      },
```
---

# AST在小布会议中的使用

Vue3中的setup


<div grid="~ cols-2 gap-4">
<div h-60vh>
使用响应式 API 来声明响应式的状态，在 setup() 函数中返回的对象会暴露给模板和组件实例。
</div>

<div>
```vue
<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count
    }
  },

  mounted() {
    console.log(this.count) // 0
  }
}
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>

```
</div>
</div>
---

# setup 语法糖

```vue
<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

onMounted(()=>{
   console.log(count.value) // 0
})
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```
---

# 两种语法的对比
Vue3的语法 `Composition API: setup()`  和 `<script setup>`

`<script setup>` 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。相比于普通的 `<script>` 语法，它具有更多优势：

- 更少的样板内容，更简洁的代码。
- 能够使用纯 TypeScript 声明 props 和自定义事件。
- 更好的运行时性能 (其模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象)。
- 更好的 IDE 类型推导性能 (减少了语言服务器从代码中抽取类型的工作)。
- 方便调试

<img src="https://raw.githubusercontent.com/Deuscx/talks/main/public/ast/ast5.png" />
---

# 代码转换方法对比

原始的方法:
- 正则表达式


<img src="https://raw.githubusercontent.com/Deuscx/talks/main/public/ast/ast6.png" />

---
layout: two-cols
---
# AST CodeMode工具


```javascript
import car from 'car';

const suv = car.factory('white', 'Kia', 'Sorento', 2010, 50000, null, true);
const truck = car.factory(
  'silver',
  'Toyota',
  'Tacoma',
  2006,
  100000,
  true,
  true
);
```
::right::

将函数的多个入参封装为一个对象传入，变成下面这样

```javascript
import car from 'car';
const suv = car.factory({
  color: 'white',
  make: 'Kia',
  model: 'Sorento',
  year: 2010,
  miles: 50000,
  bedliner: null,
  alarm: true
});
const truck = car.factory({
  color: 'silver',
  make: 'Toyota',
  model: 'Tacoma',
  year: 2006,
  miles: 100000,
  bedliner: true,
  alarm: true
});
```

---


# 用 jscodeshift 实现

<div grid="~ cols-3 gap-1" m="-t-2">
```javascript
export default (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // find declaration for "car" import
  const importDeclaration = root.find(j.ImportDeclaration, {
    source: {
      type: 'Literal',
      value: 'car'
    }
  });

  // get the local name for the imported module
  const localName = importDeclaration.find(j.Identifier).get(0).node.name;

  // current order of arguments
  const argKeys = [
    'color',
    'make',
    'model',
    'year',
    'miles',
    'bedliner',
    'alarm'
  ];
};
```

```javascript
 // find where `.factory` is being called
  return (
    root
      .find(j.CallExpression, {
        callee: {
          type: 'MemberExpression',
          object: {
            name: localName
          },
          property: {
            name: 'factory'
          }
        }
      })


```

```javascript
      .replaceWith(nodePath => {
        const { node } = nodePath;

        // use a builder to create the ObjectExpression
        const argumentsAsObject = j.objectExpression(
          // map the arguments to an Array of Property Nodes
          node.arguments.map((arg, i) =>
            j.property('init', j.identifier(argKeys[i]), j.literal(arg.value))
          )
        );

        // replace the arguments with our new ObjectExpression
        node.arguments = [argumentsAsObject];

        return node;
      })

      // specify print options for recast
      .toSource({ quote: 'single', trailingComma: true })
  );

```
</div>

---

# 用gogocode实现

```javascript
const argKeys = [
  'color',
  'make',
  'model',
  'year',
  'miles',
  'bedliner',
  'alarm'
];
const argObj = {};
$(code)
  .find(`const $_$1 = car.factory($_$2);`)
  .each(item => {
    const variableName = item.match[1][0].value;
    item.match[2].forEach((match, j) => {
        argObj[argKeys[j]] = match.value;
    });
    item.replaceBy(
        $(`const ${variableName} = car.factory(${JSON.stringify(argObj)})`)
    );
  })
  .root()
  .generate()

```
---

# Transform Setup

<div grid="~ cols-2 gap-1" m="-t-2">

```vue{all|5|6-11|12|13-27|all}
<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import Hello from 'hello.vue'
export default defineComponent({
  components: { Hello },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  emits: ['accepted'],
  setup(props, context) {
    const a = ref(1)
    const b = reactive([])

    function accept() {
      context.emit('accepted')
    }

    return {
      accept,
      a,
      b,
      fn,
    }
  },
})
</script>
```

```vue
<script setup lang="ts">
import { reactive,ref,defineProps,defineEmits } from 'vue'
import Hello from 'hello.vue'
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
const emit = defineEmit(['accepted'])
const a = ref(1)
const b = reactive([])

function accept() {
  emit('accepted')
}
</script>

```
</div>

--- 

# 转换步骤
[GoGoCode PlayGround](https://play.gogocode.io/)

1. 提取出setup中的给个Node节点，并且移除Setup节点

```javascript
script.find('{ setup() {$$$0} }').match.$$$0.forEach((node) => {
    if (node.type !== 'ReturnStatement')
      script.after(node)
})
script.find('setup(){}').remove()
```

[$$$ 通配符](https://gogocode.io/zh/docs/specification/basic#%E5%8C%B9%E9%85%8D%E5%A4%9A%E4%B8%AA%E5%90%8C%E7%B1%BB%E8%8A%82%E7%82%B9)

---

# 转换步骤
2. 移除 defineComponent

```javascript
  // remove defineComponent
  script.find('export default $_$1').each((item) => {
    item.remove()
  })

  // remove import defineComponent
  script.replace(
    'import { $$$1,defineComponent } from \'vue\'',
    'import { $$$1 } from \'vue\'',
  )
```

[replace](https://gogocode.io/zh/docs/specification/basic#%E5%87%BD%E6%95%B0%E6%9B%B4%E5%90%8D)
---

# Summary

- 什么时候使用AST工具?
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/515b3369-c1ee-45b0-83c9-1f53becb3aee/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221030T151058Z&X-Amz-Expires=86400&X-Amz-Signature=7eeea6bba21c249d84d3f608eb43e18a0f8380e1c9b589edd59eeee68de2f1da&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject" h-50vh>

---

# Summary

不足点：

1. 纯JS，缺乏一定类型推导
2. 有一定的学习成本。开发过程中可能会有很多调试的工作。不能和DOM一样
   1. 查询：getElement* , querySelector*
   2. 创建：createElement
   3. 修改：prepend，prepend，before，after，remove，replaceWith
