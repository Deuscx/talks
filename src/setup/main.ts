import { defineAppSetup } from '@slidev/types'
import ElementPlus from 'element-plus'
import { CheckboxIndicator, CheckboxRoot } from 'radix-vue'
export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(ElementPlus)
  app.component('CheckboxIndicator',CheckboxIndicator)
  app.component('CheckboxRoot',CheckboxRoot)
})
