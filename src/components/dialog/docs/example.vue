<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HDialog v-model="visible" title="测试" :show-fullscreen="showFullscreen" :show-default-footer="showDefaultFooter" :height="height" :max-height="maxHeight">
                <HButton :time="0" @click="handleAdd">增加内容</HButton>
                <HButton :time="0" @click="handleRemove">减少内容</HButton>
                <div v-for="item in line" :key="item">啤酒、饮料、矿泉水，花生、瓜子、大鸡腿</div>
            </HDialog>
            <HButton @click="() => toggleVisible()">打开</HButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：内容高">
            <HChoice v-model="height" :options="options" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：最大内容高">
            <HChoice v-model="maxHeight" :options="options" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：全屏">
            <HChoiceBoolean v-model="showFullscreen" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：默认 footer">
            <HChoiceBoolean v-model="showDefaultFooter" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import { useToggle } from '@vueuse/core'
import Wrapper from '@/components/example-wrapper.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HChoice from '@/components/choice/index.vue'
import HButton from '@/components/button/index.vue'
import HDialog from '../index.vue'

const visible = ref(false)
const showFullscreen = ref(true)
const showDefaultFooter = ref(false)
const toggleVisible = useToggle(visible)
const line = ref(1)
const height = ref('')
const maxHeight = ref('')
const options = [{ label: '未设置', value: '' }, { label: '300px', value: '300px' }, { label: '500px', value: '500px' }]

const handleAdd = () => { line.value++ }
const handleRemove = () => {
    line.value--
    if (line.value < 0) {
        line.value = 0
    }
}
</script>
