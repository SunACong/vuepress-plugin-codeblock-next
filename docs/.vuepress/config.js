import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname } from '@vuepress/utils'
import { demoblockPlugin } from '../../src/node'

const __dirname = getDirname(import.meta.url)

const locales = {
  '/zh': {
    'hide-text': '隐藏代码',
    'show-text': '显示代码',
    'copy-button-text': '复制代码片段',
    'copy-success-text': '复制成功'
  },
  '/': {
    'hide-text': 'Hide',
    'show-text': 'Expand',
    'copy-button-text': 'Copy',
    'copy-success-text': 'Copy success'
  }
}

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    
    locales,
    // navbar
    navbar: [
      { text: '文档', link: '/guide/' }
    ],

    // sidebar
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          link: '/guide/'
        },
        {
          text: '组件',
          link: '/guide/card.md'
        },
        {
          text: '第三方',
          link: '/guide/other.md'
        }
      ]
    }
  }),

  bundler: viteBundler(),

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false, level: [1, 2] },

    // options for markdown-it-toc
    toc: { level: [1, 2] },

    extractHeaders: { level: ['h2', 'h3', 'h4'] },

    // disable line-numbers
    // code: { lineNumbers: false }
  },
  plugins: [
    demoblockPlugin({
      customClass: 'demoblock-custom',
      // theme: 'css-variables',
      theme: 'github-light',
      locales: {
        'hide-text': '隐藏代码',
        'show-text': '显示代码',
        'copy-button-text': '复制代码片段',
        'copy-success-text': '复制成功'
      },
      cssPreprocessor: 'less',
      customStyleTagName: 'style lang="less"',
      scriptImports: ["import * as ElementPlus from 'element-plus'"],
      scriptReplaces: [
        {
          searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue'
        },
        {
          searchValue: /import ({.*}) from 'element-plus'/g,
          replaceValue: (s, s1) => `const ${s1} = ElementPlus`
        }
      ]
    }),
  ]
})
