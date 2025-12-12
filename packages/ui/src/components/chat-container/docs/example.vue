<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcChatContainer :class="$style.container" :keep-bottom="keepBottom">
                <div v-html="content" />
            </VcChatContainer>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="操作">
            <VcButton type="primary" plain @click="fillContent">填充内容</VcButton>
            <VcButton type="primary" plain @click="stopFill">暂停</VcButton>
            <VcButton type="primary" plain @click="clearContent">清空</VcButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：强制底部">
            <VcChoiceBoolean v-model="keepBottom" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：停止距离">
            <ElInputNumber v-model="stopHeight" :min="30" :precision="0" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcButton from '@/components/button/button.vue'
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcChatContainer from '../chat-container.vue'

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
