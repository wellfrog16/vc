<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HChatContainer :class="$style.container" :keep-bottom="keepBottom">
                <div v-html="content" />
            </HChatContainer>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="操作">
            <HButton type="primary" plain @click="fillContent">填充内容</HButton>
            <HButton type="primary" plain @click="stopFill">暂停</HButton>
            <HButton type="primary" plain @click="clearContent">清空</HButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：强制底部">
            <HChoiceBoolean v-model="keepBottom" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：停止距离">
            <ElInputNumber v-model="stopHeight" :min="30" :precision="0" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem, ElInputNumber } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HButton from '@/components/button/index.vue'

import HChatContainer from '../index.vue'

const content = ref('')
const keepBottom = ref(false)
const stopHeight = ref(30)

let timer = 0
const templateText = '这是一段测试文本，。1'
function randomChar() {
    const randomIndex = Math.floor(Math.random() * templateText.length)
    return templateText[randomIndex]
}

const fillContent = () => {
    if (timer) { return }
    timer = setInterval(() => {
        content.value += randomChar()
        content.value = content.value.replace(/1/g, '<br />')
    }, 50)
}

const stopFill = () => {
    if (!timer) { return }
    clearInterval(timer)
    timer = 0
}

const clearContent = () => {
    content.value = ''
}
</script>

<style lang="scss" module>
.container {
    width: 100%;
    height: 300px;
    border: 1px solid #ccc;
}
</style>
