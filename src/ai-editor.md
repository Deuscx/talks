---
theme: seriph
background: https://cover.sli.dev
class: text-center
highlighter: shiki
lineNumbers: false
colorSchema: dark
routerMode: 'hash'
hideInToc: true
---


#  AI 编辑器实践


---

## 目录

<Toc :maxDepth="1"/>

---
layout: image-right
image: https://raw.githubusercontent.com/Deuscx/pic/master/images/v2-783c8accc1dd3521526ecf406b34008a_r.png
backgroundSize: contain
---

# 编辑器的发展历程


## 纯文本阶段


- 代表工具：早期的VIM 编辑器 / Windows 自带的记事本软件
- 主要特点：仅能进行简单的文本编辑，对于代码的显示没有任何特殊处理，代码看起来像天书，缺乏对编程的辅助功能。

---
layout: image-right
image: https://code.visualstudio.com/assets/updates/December/render-key-binding.png
backgroundSize: contain
---

## 现代化阶段

- 代表工具：Visual Studio、XCode、Sublime，Idea等
- 主要特点：
  - <span text-green>语法高亮</span>：根据不同的语法元素（如关键字、变量、函数等）显示不同的颜色，帮助开发者快速识别代码结构。
  - <span text-blue>代码补全</span>: 基于LSP协议，支持多种语言的智能感知、自动完成功能。
  - <span text-violet>版本控制集成</span>：与Git等版本控制系统集成，方便代码的版本管理和协同工作。
  - <span text-orange>插件系统</span> ：支持通过插件扩展编辑器的功能，如代码格式化、代码检查等。
  - 等等


---
layout: image-right
image: https://code.visualstudio.com/assets/home/home-screenshot-copilot-light.png
backgroundSize: contain
---

## AI 智能生成阶段

- 代表工具：GitHub Copilot、Cursor、Zed AI。
- 主要特点：
  - 先写注释生成代码：辅助生成代码能大幅提升效率，减少重复性工作。
  - 上下文理解：能够理解代码的上下文，并根据上下文生成代码。

---

# Cursor AI 编辑器

<div>

基于VS Code的开源代码来进行的二次开发，没有像Github Copilot一样作为VS Code的插件来编写。

打破了Vscode 插件的局限性,进行了诸多优化和改进

<img src="/ai_editor/cursor.png" />
</div>

<!-- https://cursor101.com/zh/tutorial/learn-cursor-tab -->
---
layout: image-right
image: https://code.visualstudio.com/assets/docs/copilot/inline-suggestions/js-suggest.png
backgroundSize: contain
---

## 代码提示

Github Copilot 主要基于上下文进行插入代码的操作。

虽然这已经很有帮助，但它的功能仅限于<span text-teal>追加新代码</span>
在 Github Copilot 官方的例子中:

你需要在JavaScript文件中输入函数头：
```js
function calculateDaysBetweenDates(begin, end) {
```

然后GitHub Copilot会自动建议提示的其余部分。这样的操作只是追加了一段代码，并没有修改当前的代码。

<!-- 

而Cursor 则提供了多种方式来修改代码和生成代码-->
---

## Tab 功能 

Cursor 则提供了强大的<span v-mark.green="0">Tab功能</span>，具备<span text-green>修改代码</span>的能力。

<div >
<div grid="~ cols-3 gap-4">

<div >
1. 多行编辑功能
<div>Tab功能会根据你当前光标处的修改去生成多行代码补全建议</div>

示例：输入了Block后，类似的其他地方也会提示你应该补充Block。
<n-image class="mt-4" src="/ai_editor/cpp_edits.webp" />

</div>


<div >
2. 智能重写
<div > 在进行代码重写（或修改）时，Cursor的代码修改建议会通过提示框的形式展现出来。</div>
<n-image class="mt-4" src="/ai_editor/cursor-tab-smart-rewrite.png" />
</div>

<div >
3. 光标预测
<div > Cursor 可预测你的下一个光标位置，以便你无缝地更改代码</div>
<n-image class="mt-4" src="/ai_editor/cursor-tab-cursor-prediction.png" />
</div>

</div>

</div>

<!-- 
Cursor的Tab功能不只是简单的代码补全。它还能聪明地改写你已经写好的代码 


所以在你修改了代码的某个地方之后，Cursor会自动提示你其他地方的代码也需要同步修改， 所以这时候你就只需要一路的Tab按下去就行了，爽到飞起。
-->

---

## 提示栏(Cmd K)功能

Cursor 通过使用<kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>K</kbd>快捷键，弹出提示栏，用户可以在提示栏中输入prompt，来生成或修改局部的代码。

<div grid="~ cols-2 gap-4">

<div>
1. 内联编辑

按下<kbd>Cmd</kbd> + <kbd>K</kbd>时选中某段代码，Cursor将根据你在提示栏中输入的内容修改选中的代码。
<n-image class="mt-4" src="/ai_editor/cursor-cmdk-edit.png" />
</div>

<div>
2. 内联生成

按下<kbd>Cmd</kbd> + <kbd>K</kbd>时未选中任何代码，Cursor将根据你在提示栏中输入的内容生成新的代码。
<n-image class="mt-4" src="/ai_editor/cursor-cmdk-inline-generation.png" />
</div>



</div>

<!-- 
Tab功能是AI辅助编码的最直接形式（直接生成代码），那么提示栏(Cmd K)就是用户需要引导AI怎么做的最快速方式，这弥补了 AI 不能完全理解用户意图的缺陷。
-->
---

## Chat 功能

Chat(Cmd+L) 提供了多轮对话的方式，当遇到比较抽象或不明确的问题时，一次回答可能解决不了所有疑问。

通过多次对话，AI可以逐步弄清楚问题的细节，给出更准确和全面的答案。这种对话方式不仅能帮你更好地理解问题，还能引导你找到最好的解决方案。

所以 Chat(Cmd+L) 功能非常适合以下的场景：

- 解答编程概念问题，学习新技术或框架
- 获取代码建议和最佳实践
- 调试和错误排查

<n-image class="w-100 absolute right-20 bottom-20" src="/ai_editor/cursor-chat-chat-base2.png" />

<!-- 
就像 ChatGPT 聊天窗口一样，Cursor 的 Chat 功能提供了最灵活的编程辅助能力。任何问题，你都可以在这里提问。

但是有两个关键的不同点是，Cursor提供了：

基于@的上下文快速引用能力
代码修改的 Apply 能力
-->
---

### Apply 功能

Cursor 的 Apply 功能可以轻松地把 AI 在聊天中给出的代码建议直接用到你的项目中。

<div grid="~ cols-2 gap-4">

<div>
1. 在聊天中提问后给出代码建议, 点击 Apply 按钮，将代码应用到当前文件中 

<n-image class="mt-4" src="/ai_editor/cursor-chat-apply.png" />
</div>

<div>
2. 应用代码块后，可以查看修改的 diff 内容
<n-image class="mt-4" src="/ai_editor/cursor-chat-apply-accept.png" />

</div>

</div>

---

### 上下文引用

在AI辅助编程中，上下文的使用至关重要，可以通过输入<kbd>@</kbd>符号来引用上下文。

- 虽然AI知道很多东西，但它也不是无所不知的。有时候，它可能对某些特定的技术领域不太了解。
- 每个项目都有其独特的结构、逻辑和需求。没有上下文，AI 很难理解如何针对你当前项目的场景去解决这个问题。

<div grid="~ cols-2 gap-4">

<div>
<img class="mt-4 w-90" src="/ai_editor/cursor-chat-context-menu.png" />
</div>


<div text-sm mt-4>

1. Files: 引用整个文件的内容(包括图像文件)
2. Code: 引用当前文件中的特定代码片段
3. Folders: 引用整个文件夹中的所有文件
4. Codebase: 引用整个代码库的内容
5. Web: 引用互联网内容
6. Git: 引用 git 的 commits、diffs 或 PR
7. Docs: 访问外部文档

</div>


</div>

<!-- 
Files（文件）：让你引用整个文件的内容(包括图像文件)
Code（代码片段）：允许你引用当前文件中的特定代码片段
Folders（文件夹）：使你能够引用整个文件夹中的所有文件
Codebase（代码库）：允许你引用整个代码库的内容 
 - 其实@Codebase的原理就是使用的RAG技术，它会把你当前项目的所有文件进行向量化处理，然后储存在本地。
Web 允许 Chat 在回答问题时搜索和引用网络上的信息。
Git: 引用 git 的 commits、diffs 或 PR
Docs: 访问外部文档
-->
---

## Composer 功能 <sup text-purple bg-purple:15 px1.5 rounded text-sm>New</sup>

相较于提示栏功能（<kbd>Cmd+K</kbd>），Composer(<kbd>Cmd+Shift+I</kbd>) 支持<span  v-mark.green="0">多文件</span>编辑和完整应用程序生成

- 同时编辑多个文件
- 根据高级指令生成整个应用程序
- 利用对项目结构的上下文理解

<n-image class="mt-2" src="/ai_editor/cursor-composer.png" />


<!-- https://cursor101.com/zh/article/cursor-composer -->

---
layout: image-right
image: /ai_editor/rules-for-ai.png
backgroundSize: contain
---
## Cursor Rules
Cursor Rules是为 Cursor 中的 AI 助手设置的自定义指令，指导其在解释代码、生成建议和回答查询时的行为。 

与ChatGPT中的system prompt类似, 可以用来设置AI的行为准则。

好处: 
- 提高代码一致性和质量
- 简化您的开发工作流程

---

一般Cursor Rules 包含以下几个部分：



- <span :class="$clicks === 1 ? 'text-green' : ''">角色</span>
- <span :class="$clicks === 2 ? 'text-blue' : ''">技能</span>
- <span :class="$clicks === 3 ? 'text-orange' : ''">行为准则/限制</span>


```md {*|1|3-4|6-14|*}{at:1}
您是一位专业的AI编程助手，主要专注于生成清晰、易读的Vue代码。

您始终使用最新版本的Vue和JavaScript/TypeScript，并熟悉最新的特性和最佳实践。
您谨慎地提供准确、真实、深思熟虑的答案，并擅长推理。

- 仔细遵循用户的要求，并严格执行。
- 首先逐步思考 用伪代码详细描述您的构建计划。
- 确认后，开始编写代码！
- 始终编写正确、最新、无bug、功能完整且可工作的、安全、高性能和高效的代码。
- 注重可读性，而非过度追求性能。
- 完整实现所有要求的功能。
- 不留下任何待办事项、占位符或遗漏部分。
- 保持简洁。尽量减少其他描述性文字。
- 如果您认为可能没有正确答案，请说明。如果您不知道答案，请直接说不知道，而不是猜测。
```



<!--
理解项目上下文：为 AI 提供关于您项目结构、技术和特定需求的关键信息。
自适应行为：根据 AI 的表现调整其响应，允许您随时间微调其行为。
错误纠正：澄清误解并引导 AI 避免常见错误，提高其建议和代码生成的准确性。

https://dotcursorrules.com/blog/best-cursor-rules-mastering-cursorrules-for-cursor-ide 
-->

---
layout: image-right
image: /ai_editor/2048-game.png
backgroundSize: contain
---

# 使用 Cursor 开发应用案例

从0实现一个2048游戏

2048游戏规则：
用数字填充 4×4 网格，当两个具有相同数字的方块接触时，它们会合并为一个！数字到达2048即为胜利


--- 

1. 初始化项目以及设置.cursorrules

<div grid="~ cols-2 gap-4 mt-4">
<div>
<n-image src="/ai_editor/project-start.png" />
</div>

```md
You are an expert Al programming assistant that primarily focuses on producing clear，readable React and TypeScript code.

You always use the Latest stable version of Typescript, Javascript, Vue, Node.js,  Shadcn UI, TailwindCSS and you are familiar with the Latest features and best practices.

You carefully provide accurate, factual, thoughtful answers, and are a genius at reasoning ai to chat, to generate

Other Rules need to follow:

- Follow the user's requirements carefully & to the Letter.
- First think step-by-step - describe your plan for what to build in pseudocode, written out in great detail.
- Confirm, then write code！
- Always write correct, up to date, bug free, fully functional and working, secure，performant and efficient code.
- Focus on readability over being performant.
- Fully implement all requested functionality.
- Leave No todo's, placeholders or missing pieces.
- Be sure to reference file names.
- Be concise, Minimize any other prose.
- If you think there might not be a correct answer, you say so. If you do not know the answer, say so instead of guessing.

Don't be lazy, write all the code to implement the features I ask for.

```

</div>

---

2. 创建游戏主结构


<div grid="~ cols-2 gap-4 " py-4>
<div >
<n-image src="/ai_editor/2048-game1.png" />
</div>

<n-image src="/ai_editor/2048-game2.gif" />

</div>

---

Apply 对应代码块，进行diff对比

<div grid="~ cols-2 gap-4 mt-4">
<div>
<n-image src="/ai_editor/2048-game3.png" />
</div>
<div>
<n-image src="/ai_editor/2048-game4.png" />
</div>
</div>

---

2. 完善游戏逻辑

<div grid="~ cols-2 gap-4 mt-4">
<div>
添加重新开始按钮
<n-image src="/ai_editor/2048-game5.gif" />
</div>
<div>
3. 最终结果
<n-image src="/ai_editor/2048-game6.gif" />
</div>
</div>

---

# 总结

Cursor AI编辑器优点：
1. 擅长重复的、要求不高的处理体力活
比如：
- 新建一个页面、一个 API
- 拆分与整理代码

2. 出色的代码理解与交互功能
相较与独立的ChatGPT，Cursor 可以通过 <kbd>@</kbd> 向大语言模型提供更精准的上下文信息。 同时Apply 功能可以将AI的代码建议直接应用到项目中, 避免手动复制粘贴。

AI编辑器缺乏的能力：
1. 出现问题定位和调试的能力
2. 对复杂问题进行分解的能力

<!-- 

## AI编辑器的未来展望

- AI编辑器已成为不可逆转的趋势
- 期待更多代码由AI完成，开发者专注于更高层次的设计和创新
- AI辅助编程将持续推动软件开发效率的提升 -->



---

# 实用工具和推荐资源

<script setup lang="ts">
const urls = [
  { title: 'Cursor Rules: 推荐的Cursor规则合集', url: 'https://cursor.directory/' },
  { title: 'POE: 一个可供人们提出问题、获得即时答复并与各种人工智能机器人进行对话的大型平台', url: 'https://poe.com/Claude-3.5-Sonnet' },

  { title: 'Andrej Karpathy: Intro to Large Language Models', url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g' },

]
</script>
<UrlIFrameViewer :urls="urls" />


---
src: './reuse/thanks.md'
---
