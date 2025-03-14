import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import DemoBlock from '../.vuepress/components/table/demo.vue'


export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    app.component('DemoBlock', DemoBlock)
  },
  setup() { },
  rootComponents: [],
})
