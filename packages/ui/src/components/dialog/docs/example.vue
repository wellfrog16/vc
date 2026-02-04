<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcDialog
                v-model="visible"
                title="测试"
                :show-fullscreen="showFullscreen"
                :fullscreen="isFullscreen"
                :show-default-footer="showDefaultFooter"
                :height="height"
                :max-height="maxHeight"
                :box-padding="boxPadding"
            >
                <div>
                    <VcButton :time="0" @click="handleAdd">增加内容</VcButton>
                    <VcButton :time="0" @click="handleRemove">减少内容</VcButton>
                    <div v-for="item in line" :key="item">啤酒、饮料、矿泉水，花生、瓜子、大鸡腿</div>
                    <div>长文本测试左右的 padding，我很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长</div>
                </div>
            </VcDialog>
            <VcButton @click="() => toggleVisible()">打开</VcButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：内容高">
            <VcChoice v-model="height" :options="options" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：最大内容高">
            <VcChoice v-model="maxHeight" :options="options" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：全屏">
            <VcChoiceBoolean v-model="showFullscreen" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：默认全屏">
            <VcChoiceBoolean v-model="isFullscreen" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：内边距">
            <VcChoiceBoolean v-model="boxPadding" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="">
            滚动内容，注意上下边距的不同
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：默认 footer">
            <VcChoiceBoolean v-model="showDefaultFooter" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcButton from '@/components/button/button.vue'
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcChoice from '@/components/choice/choice.vue'
import VcDialog from '../dialog.vue'

const visible = ref(false)
const showFullscreen = ref(true)
const isFullscreen = ref(false)
const showDefaultFooter = ref(false)
const boxPadding = ref(true)
const toggleVisible = useToggle(visible)
const line = ref(1)
const height = ref('')
const maxHeight = ref('')
const options = [{ label: '未设置', value: '' }, { label: '300px', value: '300px' }, { label: '500px', value: '500px' }]

function handleAdd() { line.value += 3 }
function handleRemove() {
    line.value -= 3
    if (line.value < 0) {
        line.value = 0
    }
}
</script>
