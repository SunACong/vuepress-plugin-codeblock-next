# VuePress 代码块插件：让你的文档活起来

> 一个基于 vuepress-plugin-demoblock-plus 的 VuePress 2.x 代码块插件，让你的文档不再是静态的代码展示，而是可以即时运行和交互的技术平台。

## 🌟 这个插件解决了什么问题？

写技术文档时，我们经常需要展示各种代码示例。但传统的代码块只能展示代码本身，读者需要复制到本地才能看到实际效果，这样既不直观，也打断了阅读体验。有了这个插件，你可以：

- 直接在文档中运行 Vue 组件示例
- 一键展开/收起源代码
- 随时复制代码到本地使用

## ✨ 主要特性

- 🚀 完整支持 VuePress 2.x（已在 2.0.0-rc.7 版本验证）
- 💻 在 Markdown 中直接写 Vue 示例，所见即所得
- 📦 一键收起/展开/复制代码，操作更便捷
- 🎨 支持自定义组件和第三方组件展示
- 🔧 配置简单，开箱即用

## 🔧 快速上手

### 安装

```bash
pnpm add vuepress-plugin-codeblock-next
```

### 配置

在 VuePress 配置文件中添加插件：

```js
import { demoblockPlugin } from 'vuepress-plugin-codeblock-next'

export default {
  plugins: [
    demoblockPlugin({
      // 配置选项
    })
  ]
}
```

## 🎯 使用示例

在 Markdown 中这样写：

````markdown
::: demo 一个简单的计数器示例
```vue
<template>
  <div class="box">
    <button @click="count++">点击了 {{ count }} 次</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<style>
.box {
  padding: 20px;
  background: #f0f0f0;
  border-radius: 4px;
}
button {
  padding: 8px 16px;
  background: #3eaf7c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #2c8f63;
}
</style>
```
:::
````

## 🤝 参与贡献

欢迎提交 Issue 和 PR！无论是 bug 反馈、新功能建议，还是文档改进，都可以帮助这个项目变得更好。

- 仓库地址：[vuepress-plugin-codeblock-next](https://github.com/sunbyte/vuepress-plugin-codeblock-next)
- 问题反馈：[Issues](https://github.com/sunbyte/vuepress-plugin-codeblock-next/issues)

## 📄 开源协议

[MIT](./LICENSE) © 2025 sunbyte

---

如果这个项目对你有帮助，欢迎给个 ⭐️ 支持一下！