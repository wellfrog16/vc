export function kebabToPascal(name: string) {
    return name
        .split('-')
        .filter(Boolean)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('')
}

export function createTemplate(componentName: string) {
    const pascalName = kebabToPascal(componentName)

    // 组件模板
    const componentTemplate = `<template>
    <div>
        <span>空组件</span>
    </div>
</template>

<script setup lang="ts">
import type { I${pascalName}Props } from './${componentName}'

const props = withDefaults(defineProps<I${pascalName}Props>(), {})
const emits = defineEmits<{
    (e: 'click', event: Event): void
}>()
</script>

<style lang="scss" module></style>
`

    // 类型模板
    const typesTemplate = `export interface I${pascalName}Props {
  // 在这里定义组件的 props
}
`

    // 安装模板
    const installTemplate = `import type { SFCWithInstall } from '@/utils/typescript'
import { withInstall } from '@/utils'

import Component from './${componentName}.vue'

export const Vc${pascalName}: SFCWithInstall<typeof Component> = withInstall(Component)
export default Vc${pascalName}
`

    // docs模板
    const docsTemplate = `# ${componentName}

## 功能

功能说明

## 功能示例

<Example />

## 最小示例

<<< ./simple.vue{3}

## API

<Usage />

<script setup>
import Example from "./example.vue";
import Usage from "./usage.vue";
</script>
`

    // example模板
    const docsExampleTemplate = `<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <Vc${pascalName} v-model="myColor" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="颜色控制">
            <VcChoice v-model="myColor" :options="colors" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：逻辑控制">
            <VcChoiceBoolean v-model="flag" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcChoice from '@/components/choice/choice.vue'

const colors = [
    { label: '粉红', value: 'deeppink' },
]

const myColor = ref('deeppink')
const flag = ref(false)
</script>

<style lang="scss" module></style>
`

    // simple模板
    const docsSimpleTemplate = `<template>
    <Wrapper>
        <Vc${pascalName} />
    </Wrapper>
</template>

<script lang="ts" setup>
import Vc${pascalName} from '../${componentName}.vue'
</script>
`

    // useage模板
    const docsUsageTemplate = `<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'boolean | string | number', defaultValue: '-' },
        { param: 'target', description: '', type: 'string | HTMLElement', defaultValue: '下一行' },
        { param: '-', rowType: 'paramType', description: '描述' },
        { param: '参数', description: '描述', type: 'IValue', defaultValue: 'false' },
        { param: '其他', description: 'el-switch 的属性、事件', type: 'https://element-plus.org/zh-CN/component/switch#api' },
    ],
    types: [
        { param: 'IValue', description: 'string | number | boolean' },
    ],
    events: [
        { name: 'close', description: '对话框关闭的回调', param: '-' },
    ],
    slots: [
        { name: 'default', description: '内容区域' },
    ],
}
</script>
`

    // playground 模板
    const playgroundTemplate = `<template>
    <el-space size="large" direction="vertical" alignment="left">
        <vc-${componentName} />
        <el-text>结果：<el-text type="primary">{{ result }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
const result = ref('')
</script>

<style lang="scss" module></style>
`

    return {
        component: componentTemplate,
        types: typesTemplate,
        install: installTemplate,
        docs: docsTemplate,
        docsExample: docsExampleTemplate,
        docsSimple: docsSimpleTemplate,
        docsUsage: docsUsageTemplate,
        playground: playgroundTemplate,
    }
}
