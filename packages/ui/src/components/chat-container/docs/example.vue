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
import { ElDescriptionsItem, ElInputNumber } from 'element-plus'
import { ref } from 'vue'

import HButton from '@/components/button/button.vue'
import HChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import Wrapper from '@/components/example-wrapper.vue'
import HChatContainer from '../chat-container.vue'

const content = ref('')
const keepBottom = ref(false)
const stopHeight = ref(30)

let timer: NodeJS.Timeout | null
const templateText = '这是一段测试文本，。1'
function randomChar() {
    const randomIndex = Math.floor(Math.random() * templateText.length)
    return templateText[randomIndex]
}

function fillContent() {
    if (timer) { return }
    timer = setInterval(() => {
        content.value += randomChar()
        content.value = content.value.replace(/1/g, '<br />')
    }, 50)
}

function stopFill() {
    if (!timer) { return }
    clearInterval(timer)
    timer = null
}

function clearContent() {
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
