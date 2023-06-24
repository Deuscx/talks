---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
drawings:
  persist: false
css: unocss
routerMode: 'hash'
# transition: slide-left | slide-right
---

<h1 flex="~ col">
<div>前端协同编辑技术</div>
</h1>

---
layout: intro
---

## Table Of Content

<Toc :maxDepth="1"/>

---

# 什么是协同编辑

协同编辑是指多个用户同时编辑同一个文档或文件的过程。在协同编辑中，多个用户可以同时编辑同一个文档，而不会出现版本冲突或数据丢失的问题。这种技术通常用于团队协作和实时编辑
---

## 协同编辑应用

### Git

[Git](https://link.zhihu.com/?target=https%3A//git-scm.com/) 和 [GitHub](https://link.zhihu.com/?target=https%3A//github.com/) 主要被软件工程师用来进行源代码的协作

一个非常典型的异步非实时传播场景，你需要思考文件夹名称命名、架构、设计模式、逻辑实现等等，最后再将代码通过 Git 同步到远程仓库给其他消费者消费。

优点：可以完全脱机工作，它速度快，可以给用户完全的控制权，而且适合长期保存数据

缺点：在多人开发的项目,信息的滞后性就会导致**代码冲突**。并不具备实时、细粒度协作的能力

![Git](https://git-scm.com/images/logos/2color-lightbg@2x.png)

---

### Google Docs

用户首先将他们的编辑请求发送到一个中心服务器，该服务器协调所有编辑请求并将它们组合成一个单一的文档。

优点：作为用户，你可以相信，当你在任何设备上打开文件时，你看到的是最新的内容，用的是最新的版本。因为它是以服务端的副本作为唯一，用于保证所有用户的文档是一致的

缺点：所有权和控制权的完全丧失：服务器上的数据才是最重要的，而你的客户端设备上的任何数据都是不重要的，它只是缓存。大多数网络应用程序对离线支持很差或者根本不支持：如果你的网络出现哪怕是片刻的故障，你的工作就会被锁定。

![](https://raw.githubusercontent.com/Deuscx/pic/master/Untitled.png)

---

# AFFINE

一个本地优先的软件，使用一种新的协同编辑技术，称为无冲突可复制数据类型（Conflict-free replicated data type，CRDT）
优点：

1. **网络可选**：无论是否在线，用户随时可以读取和写入数据。网络连接可用时，本机设备会自动和其他设备同步。
2. **安全和隐私**：和传统基于云的解决方案不通，本地优先软件不存在一个保存了用户所有数据的集中式数据库，您的本地设备只存储您自己的数据,本地优先软件具有很好的安全性和隐私性。
3. **数据所有权和控制权**：不会限制您访问本机副本数据，你被允许在任何时候通过任何方式复制和修改这些数据，而无需通过服务提供商的 API 去访问数据。

<div flex="~ justify-center">
<img class="w-100" src="https://user-images.githubusercontent.com/79301703/230892907-5fd5c0c5-1665-4d75-8a35-744e0afc36a5.gif" />
</div>

---
layout: section
---

# 多人协同需要解决的问题

- 脏路径问题
- 并发冲突问题


---

## 脏路径问题

原始数据： <WordIndex word="WORD"/>

用户A在索引3后面添加`L` `Insert(3,L)` <WordIndex word="WORLD" :added="[3]"/>

用户B在删除了索引2的字符 `Del(2)` , 也就是R <WordIndex word="WORD" :deleted="[2]"/>


<v-clicks>  
 
当双方将数据分享给对方后

用户A： WORD → Insert(3, L) → WORLD  → Del(2) →WOLD  

用户B:  WORD → Del(2) →  WOD →  INSERT(3,L) →WODL  (x)

用户B先进行的删除操作导致了它后面数据的索引发生变化，那么基于同步过来的操作直接应用就会出现，这种情况称为脏路径问题
</v-clicks>


---

## 并发冲突问题

原始数据： A

用户A改写为B，用户B改写为C

交换数据之后：
<v-clicks>

用户A： A → B  → C
  
用户B:  A → C  → B
  
按照默认处理他们把各自的操作通过消息服务传给对方，则会造成左边最终显示居右、右边最终显示居左，数据出现不一致，这种情况称为并发冲突，他们基于相同的位置修改了相同的属性。
</v-clicks>


---

## 冲突处理方案

冲突处理的解决方案其实已经相对成熟，包括：

1. **编辑锁**：当有人在编辑某个文档时，系统会将这个文档锁定，避免其他人同时编辑。
2. **diff-patch**：基于 Git 等版本管理类似的思想，对内容进行差异对比、合并等操作，包括 GNU diff-patch、Myer’s diff-patch 等方案。
3. **最终一致性实现**：包括 Operational Transformation（OT）、 Conflict-free replicated data type(CRDT，称为无冲突可复制数据类型)。

编辑锁的实现方式简单粗暴，但会直接影响用户体验。diff-patch 可以对冲突进行自助合并，也可以在冲突出现时交给用户处理。OT 算法是 Google Docs 中所采用的方案，Affine使用的则是 CRDT。

---
layout: section
---

# OT VS CRDT

---

## OT

OT 全称是 Operational Transformation，它的核心思想是操作转换，通过转换数据修改操作解决协同编辑中的各种问题。

OT的实现需要一**个中心服务器**，它能够协调不同用户之间的编辑冲突。当两个用户同时修改同一篇文档时，服务器会通知这两个用户，并将用户的修改操作**序列化**，然后根据操作序列的先后顺序进行合并，最终以一致的方式呈现给所有用户。

它代表着一种思想，将编辑的行为本身定义成一些原子操作，然后通过 transform 转换成另一种操作

---
layout: two-cols
---

A 和 B 的操作都需要经过中心化的服务去做 OT 转换, 经过OT转换 Insert(3,L) 转换成了 Insert(2,L)

OT 转换 可以自己去实现具体的转换算法，也可以利用社区成熟的 ot.js, sharedb 库来实现

- 可视化工具来观察操作的转换变化: <https://operational-transformation.github.io/>

::right::

<img src="https://raw.githubusercontent.com/Deuscx/pic/master/20230624171242.png" />

---

## OT总结

OT的优点在于它能够提供强一致性，即所有用户看到的文档都是相同的。然而，它的缺点在于需要中心服务器，这意味着服务器需要处理大量的负载和网络流量。

<img class="w-lg" src="https://raw.githubusercontent.com/Deuscx/pic/master/ot-offline.png" />

---

## CRDT

CRDT 在文档协同上的核心思想是**为每一个操作的字符分配唯一的标识符**，同时为了保证收敛，即使删除字符也会为此保留元数据，这就导致对内存的开销是非常大的。
在YJS中的实现：每个 item 分配一个唯一 ID，其结构为 `ID(clientID, clock)` ，前者用于唯一标识某个 YDoc 对应的客户端，而后者则属于一种名为 [Lamport timestamp](https://en.wikipedia.org/wiki/Lamport_timestamp) 的逻辑时间戳，可以认为这就是个从零开始递增的计数器

```jsx
// Yjs 中的 ID 源码
class ID {
  constructor (client: number, clock: number) {
    // 客户端的唯一 ID
    this.client = client
    // 逻辑时间戳
    this.clock = clock
  }
}
```

---

## 数据模型

<img w-xs src="https://raw.githubusercontent.com/Deuscx/pic/master/20230624172635.png" />

- 最下面的 “AB” 标识初始状态
- 上面的每一根线代表一个Insert操作
- 每一个操作都有一个唯一标识符比如 `C0,0` 操作中的 0,0 就是一个标识符第一个 0 指示用户编号第二个 0 指示操作序列

一个用户在 AB之间插入C，CB之间插入D
另一个用户期望插入 “E” 在 ”A“ 和 ”B“ 之间，**但是这个操作是与前面插入 ”C“ 的操作（C0, 0）是并发操作**。

---

原始问题：

- 用户A： WORD → Insert(3, L) → WORLD  → Del(2) →WOLD
- 用户B:    WORD → Del(2) →  WOD →  INSERT(3,L) →WODL  (x)

转换成：

- 用户A： WORD → Insert( R→ `L` → D ) → WORLD   → WOLD
- 用户B:    WORD → Del(O→ ~~`R`~~   → D ）→  WO~~R~~D  →  WO~~R~~LD

> 删除并不是直接去掉，而是把item标记为删除

---

## CRDT 总结

CRDT不需要中心服务器，它可以通过各种方式实现分布式冲突解决。CRDT的核心思想是将数据类型分解成一组操作，这些操作可以按任意顺序进行合并。这使得每个用户都可以在本地执行修改操作，而无需通过服务器进行协调。

<img w-xs src="https://raw.githubusercontent.com/Deuscx/pic/master/20230624172915.png"/>

---

## OT 与 CRDT 的两者对比总结

| OT | CRDT |
| --- | --- |
| 需要依赖一个中心化的服务来做 OT 转换 | 去中心化，可以直接 P2P，天然支持离线编辑 |
| 需要依赖复杂度高的算法保证一致性 | 通过数据结构的设计来保证一致性 |
| 几乎不占用内存 | 需要一定的内存开销 |
| 实现简单 | 实现难度较大 |

---
layout: section
---

# YJS

> Yjs is a high-performance [CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) for building collaborative applications that sync automatically.
>  
> It exposes its internal CRDT model as ***shared data types*** that can be manipulated concurrently. Shared types are similar to common data types like `Map` and `Array`. They can be manipulated, fire events when changes happen, and automatically merge without merge conflicts.

---

## YJS模块

<img src="https://raw.githubusercontent.com/Deuscx/pic/master/YJS-module.png" w-xs/>

ConnectionProvider

- y-websocket/ y-webrtc - 提供协同编辑时的消息通讯，包含服务端实现和前端集成的SDK
Datebase Provider
- y-redis / y-indexeddb - 持久化数据，用于离线编辑 、存储到数据库
其他：
- y-protocols - 定义消息通讯协议，包括消息服务初始化、内容更新、鉴权、感知系统等

在上层 Yjs 支持任何大部分主流编辑器的接入，因为 Yjs 也可以理解为一套独立的数据模型，它与每种编辑器本身的数据模型是不同的，所以每种编辑器想要接入 Yjs 都必须实现一个中间绑定层，用于编辑器数据模型与 Yjs 数据模型转换

---

## 数据结构建模

首先 Yjs 在工程上建模 CRDT 所用到的基础数据结构是 双向链表， 我们称之为 Item ， 它会为每个操作所产生的字符分配一个唯一的 ID。这个唯一 ID 是带有 Lamport timestamp 逻辑时间戳的对象，由 client （用户标示符）和 clock （逻辑时间戳）组成

``` ts
// Yjs 中的 ID 源码
class ID {
  constructor (client: number, clock: number) {
    // 客户端的唯一 ID
    this.client = client
    // 逻辑时间戳
    this.clock = clock
  }
}
```

---

## Clock

clock 可以认为是一个从零开始递增的计数器，他有两种更新方式

- 自更新: localClock += 1
- 当接收到远程事件时: localClock = max(localClock, remoteClock) + 1

这种机制看似简单，但实际上使我们获得了数学上性质良好的全序结构。这意味着只要再配合比较 clientID 的大小，即可令任意两个 item 之间均可对比获得逻辑上的先后关系。

<img w-xl src="https://raw.githubusercontent.com/Deuscx/pic/master/20230624173827.png"/>

当用户依次输入 ABC 时，会为此产生 3 个 Item，这对于大文件来说是非常吃内存的，但为了能解决并发冲突这里面的元数据信息又是需要保留的。但仔细观察可以发现这 3 个 Item 是连续的，Yjs 内部对其就做了一些优化。通过字符偏移重新优化成了一个 Item 对象

---

## YJS共享数据类型

Yjs 对使用者提供了包含map， array，text等6种的数据类型。基础使用方法如下:

```ts {monaco} {height: '350px'}
import * as Y from 'yjs'

// 应用中的全部协作状态均可在单个 YDoc 容器中承载
// 将该实例传入 WebSocket 等协议的 provider 后即可支持网络同步
const doc = new Y.Doc()

// 在 YDoc 上可以创建不同类型的顶层 YModel 实例
// 这里创建了一个顶层名为 root 的 YMap
const yRoot = doc.getMap('root')

// 也可以用 class 构造器来实例化独立的 YMap 等 YModel
// 可直接用 get set delete 等常见 API 对 YModel 增删改查
const yPoint = new Y.Map()
yPoint.set('x', 0)
yPoint.set('y', 0)

// YMap 的值也可以是 YMap，从而构造出嵌套的数据类型
yRoot.set('point', yPoint)

// YMap 中还可以存入 YText 等其他 YModel，形成复合的数据类型
const yName = new Y.Text()
yName.insert(0, 'Wilson Edwards')
yRoot.set('name', yName)
```

---

共享数据类型提供 和原生类型相同的API，但对上层而言，并发更新时潜在的状态冲突已经被 Yjs 自动解决了：

```jsx
// 可以用 2 份独立的 YDoc 实例来模拟 2 个客户端
const doc1 = new Y.Doc()
const doc2 = new Y.Doc()
const yText1 = doc1.getText()
const yText2 = doc2.getText()

// 在某份 YDoc 更新时，应用二进制的 update 数据到另一份 YDoc 上
doc1.on('update', (update) => Y.applyUpdate(doc2, update))
doc2.on('update', (update) => Y.applyUpdate(doc1, update))

// 制造两次存在潜在冲突的更新
yText1.insert(0, 'Edwards')
yText2.insert(0, 'Wilson')

// CRDT 算法可保证两份客户端中的状态始终一致
yText1.toJSON() // WilsonEdwards
yText2.toJSON() // WilsonEdwards
```

在代码示例中，首先创建了两个 Doc 实例 (doc1 和 doc2)，两者都挂载了一个 Y.Text实例。然后分别向 doc1 和 doc2 的 Y.Text 实例中插入元素，监听doc的update事件，使用applyUpdate同步数据。模拟 Yjs 中的并发更新。

---

## Awareness

Awareness功能是协同应用的一个重要组成部分。用于知道其他人正在做什么，一般通过传递鼠标位置 ，提示信息，让用户主观的避免冲突。

<img src="https://raw.githubusercontent.com/Deuscx/pic/master/20230624174553.png"/>

```jsx
// All of our network providers implement the awareness crdt
const awareness = provider.awareness

// You can observe when a user updates their awareness information
awareness.on('change', changes => {
  console.log(Array.from(awareness.getStates().values()))
})

// You can think of your own awareness information as a key-value store.
// We update our "user" field to propagate relevant user information.
awareness.setLocalStateField('user', {
  name: 'Emmanuelle Charpentier',
  color: '#ffb61e' 
})
```

---

## UndoManager

撤销和回做的设计准则：

- 用户只能撤销自己的改动，这个对其他人状态的命运有很大的关系。
- 用户从状态 A 独立撤销 N 次之后再重做 N 次，要能回到 A。

```ts
import * as Y from 'yjs'

const ytext = doc.getText('text')
const undoManager = new Y.UndoManager(ytext)

ytext.insert(0, 'abc')
undoManager.undo()
ytext.toString() // => ''
undoManager.redo()
ytext.toString() // => 'abc'
```

---

# Todo App

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450" src="https://codesandbox.io/p/sandbox/crazy-bohr-l4z4wn?file=%2Fsrc%2Ftodo.ts%3A1%2C1&embed=1" allowfullscreen></iframe>
yjs 协同的原理是将协同数据和应用数据绑定起来，协同数据负责保持多个副本数据的一致，应用数据负责编辑器内的各类操作和展示。

---

<div class="grid grid-cols-2 gap-4">

<h2>应用数据</h2>
<h2>协同数据</h2>

```ts
[
  {
    id: string,
    title: string,
    complete: boolean
  }
]
```

```ts {monaco}
Y.Array(
  Y.Map({
    id: string,
    title: string,
    complete: boolean
  })
)
```

</div>

---

## 实现步骤

1. 创建provider
2. 通过provider初始化数据
3. 监听协同数据变化同步到应用数据
4. 将应用数据的变化同步到协同数据

---

### 1.创建provider

```ts
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

const VERSION = 10

// Create the doc
export const doc = new Y.Doc()

// Create a websocket provider (but don't connect just yet)
export const provider = new WebsocketProvider(
  'wss://demos.yjs.dev',
  `draw-demo-${VERSION}`,
  doc,
  {
    connect: false,
  },
)

// Export the provider's awareness API
export const awareness = provider.awareness

// 协同数据
export const yTodos: Y.Array<Y.Map<any>> = doc.getArray(`todos-${VERSION}`)

export const undoManager = new Y.UndoManager(yTodos)
```

---


2.初始化数据

```ts
const todos = ref<Y.Map<any>[]>([])
function handleConnect() {
    todos.value = yTodos.toArray()
}
provider.on('sync', handleConnect)
```

3.监听协同数据变化同步到应用数据

```ts
// observe the yTodos shared array.
// When the todos change, update the todos ref.
function handleChange(e) {
    const _todos = yTodos.toArray()
    todos.value = _todos
}
yTodos.observe(handleChange)

```

---

4. 将应用数据的变化同步到协同数据

```vue

<script setup lang="ts">
import type * as Y from 'yjs'

const props = defineProps<{
  todo: Y.Map<any>
}>()
const { toggleTodo } = useTodos()
// 通过协同数据初始化应用数据
const complete = ref(props.todo.get('complete'))

function _toggleTodo() {
  toggleTodo(props.todo.get('id'))
}
</script>

<template>
  <label>
    <input v-model="complete" class="toggle" type="checkbox" @change="_toggleTodo">
    {{ todo.get('title') }}
  </label>
</template>

```
---
hideInToc: true
---
# 总结

CRDT 可以带来的核心优势是实现本地优先应用，**去中心化**。

去中心化的前提是在客户端应用和实施 CRDT，因为现有的协作软件，也完全可以使用在其服务端软件中应用 CRDT 技术去解决数据冲突。比较有代表性的是 Affine, NoteBook 等。

如果感兴趣，一些资料：
- [Conflict-Free Replicated Data Types (CRDT) for Distributed JavaScript Apps. - YouTube](https://www.youtube.com/watch?v=M8-WFTjZoA0&feature=youtu.be&themeRefresh=1)
- [CRDTs: The Hard Parts - YouTube](https://www.youtube.com/watch?v=x7drE24geUw&feature=youtu.be)
- 5000x faster CRDTs: An Adventure in Optimization
  

---
hideInToc: true
src: './reuse/thanks.md'
---
