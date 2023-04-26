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
