# Card

常用的卡片布局。

:::demo 使用 `size`、`style` 属性来定义 Card 的样式。
```vue
<template>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</template>
```
:::

## 基础用法

基础的卡片用法。

:::demo 使用 `size`、`style` 属性来定义 Card 的样式。

```vue
<template>
  <div class="card-wrap">
    <div class="card">{{ title }}</div>
    <el-button style="margin-left: 10px" type="primary" @click="onClick">点击</el-button>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { ElMessage, ElButton } from 'element-plus'

export default defineComponent({
  setup() {
    const title = ref('vuepress-plugin-codeblock-next')

    const onClick = () => {
      ElMessage('消息')
    }

    return { title, onClick }
  }
})
</script>

<style lang="less">
.card-wrap {
  text-align: center;
  .card {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    color: var(--c-brand);
    background: var(--c-bg);
    border: 1px solid var(--c-brand);
    height: 80px;
    width: 600px;
  }
}
</style>
```

:::


## Setup TypeScript

setup typescript 用法。

:::demo 使用 `size`、`style` 属性来定义 Card 的样式。

```vue
<template>
  <div class="card-wrap">
    <div class="card">{{ title }}</div>
    <el-button style="margin-left: 10px" type="primary" @click="onClick">点击</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage, ElButton } from 'element-plus'

interface IObject {
  [k: string]: any
}

const title = ref<any>('vuepress-plugin-codeblock-next')

const onClick = () => {
  ElMessage({
    message: '消息.',
    type: 'success'
  })
}
</script>

<style lang="less">
.card-wrap {
  text-align: center;
  .card {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    color: var(--c-brand);
    background: var(--c-bg);
    border: 1px solid var(--c-brand);
    height: 80px;
    width: 600px;
  }
}
</style>
```

:::


