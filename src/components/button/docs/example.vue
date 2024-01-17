<template>
    <Wrapper>
        <template #default="{ direction }">
            <ElDescriptionsItem label="展示区">
                <div :class="$style[direction]">
                    <HButton :icon="{ name: 'Search' }" type="primary" :size="mySize">Eleme 图标</HButton>
                    <HButton :icon="{ type: 'awesome', name: 'fas fa-dog' }" type="primary" :size="mySize">Awesome 图标</HButton>
                    <HButton :icon="{ type: 'svg', name: 'test' }" type="primary" :size="mySize">SVG 图标</HButton>
                </div>
                <div :class="$style[direction]">
                    <HButton :icon="{ name: 'Search', position: 'right' }" type="primary" :size="mySize">Eleme 图标</HButton>
                    <HButton :icon="{ type: 'awesome', name: 'fas fa-dog', position: 'right' }" type="primary" :size="mySize">Awesome 图标</HButton>
                    <HButton :icon="{ type: 'svg', name: 'test', position: 'right' }" type="primary" :size="mySize">SVG 图标</HButton>
                </div>
            </ElDescriptionsItem>
            <ElDescriptionsItem label="参数：大小">
                <HChoice v-model="mySize" :options="sizeOption" />
            </ElDescriptionsItem>
            <ElDescriptionsItem label="展示区：节流">
                <HButton type="primary" :size="mySize" @click="handleClick">快速点击</HButton>
            </ElDescriptionsItem>
            <ElDescriptionsItem label="展示区：提示">
                <HButton type="warning" :size="mySize" :confirm="myType" @click="handleClick">点击会有二次确认</HButton>
            </ElDescriptionsItem>
            <ElDescriptionsItem label="参数：类型">
                <HChoice v-model="myType" :options="typeOption" />
            </ElDescriptionsItem>
            <ElDescriptionsItem label="结果">
                <div>节流间隔 800 毫秒，执行次数：{{ updated }}</div>
            </ElDescriptionsItem>
        </template>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoice from '@/components/choice/index.vue'
import useExample from '@/components/svg-icon/useExample'
import HButton from '../index.vue'

useExample()
const mySize = ref('')
const sizeOption = [
    { label: '默认', value: '' },
    { label: '小', value: 'small' },
    { label: '大', value: 'large' },
]

const myType = ref<any>('messagebox')
const typeOption = [
    { label: '无', value: undefined },
    { label: 'messagebox', value: 'messagebox' },
    { label: 'popconfirm', value: 'popconfirm' },
]

const updated = ref(0)
const handleClick = () => { updated.value += 1 }
</script>

<style lang="scss" module>
.vertical {
    float: left;
    width: 50%;

    button + button {
        margin-top: 8px;
        margin-left: 0 !important;
    }
}

.horizontal {
    margin-top: 8px;
}
</style>
