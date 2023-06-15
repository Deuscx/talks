---
theme: seriph
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
title: Custom Components
routerMode: 'hash'
---

# Custom Componet

内置组件展示页

---

buildIn Component

<div class="grid grid-cols-2 gap-2">

<Arrow x1="10" y1="20" x2="100" y2="200" />

<AutoFitText :max="200" :min="100" modelValue="Some text"/>

<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>

<Link to="3">Go to slide 3</Link>

</div>

---

<WordIndex word="hello" :deleted="[1]" :added="[2]"/>

<Counter />
---

# 动画

<div class="grid grid-cols-2">

  <!-- 组件用法：在你按下 “下一步” 之前，这是不可见的 -->
  <v-click>

  Hello World

  </v-click>

  <!-- 指令用法：在你第二次按下 “下一步” 之前，这是不可见的 -->
  <div v-click class="text-xl p-2">

  Hey!

  </div>
</div>

 ```typescript
  <!-- 组件用法：在你按下 “下一步” 之前，这是不可见的 -->
  <v-click>

  Hello World

  </v-click>

  <!-- 指令用法：在你第二次按下 “下一步” 之前，这是不可见的 -->
  <div v-click class="text-xl p-2">

  Hey!

  </div>
 ```

---

# Rety

<Rety />

---

# Sandbox

<Sandbox src="https://codesandbox.io/p/sandbox/serene-euclid-nmvzcm?embed=1"/>

---

# Icons

```html
<!-- An orange alarm from Material Design Icons -->
<div class="i-mdi-alarm text-orange-400" />
<!-- A large Vue logo -->
<div class="i-logos-vue text-3xl" />
<!-- Sun in light mode, Moon in dark mode, from Carbon -->
<button class="i-carbon-sun dark:i-carbon-moon" />
<!-- Twemoji of laugh, turns to tear on hovering -->
<div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />

```

<div class="w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4">
<!-- An orange alarm from Material Design Icons -->
<div class="i-mdi-alarm text-orange-400" />
<!-- A large Vue logo -->
<div class="i-logos-vue text-3xl" />
<!-- Sun in light mode, Moon in dark mode, from Carbon -->
<button class="i-carbon-sun dark:i-carbon-moon" />
<!-- Twemoji of laugh, turns to tear on hovering -->
<div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
</div>

---

# WordList

<WordLinkList word="hello"/>



---
src: './reuse/thanks.md'
---
