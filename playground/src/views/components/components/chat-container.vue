<template>
    <el-space direction="vertical" fill size="large" :style="{ display: 'flex' }">
        <div>
            <vc-chat-container :class="$style.container" :keep-bottom="keepBottom">
                <div v-html="content" />
            </vc-chat-container>
        </div>
        <el-space>
            <el-button @click="fillContent">填充内容</el-button>
            <el-button @click="stopFill">停止填充</el-button>
            <el-button @click="clearContent">清空内容</el-button>
            <el-checkbox v-model="keepBottom">强制保持底部</el-checkbox>
        </el-space>
    </el-space>
</template>

<script setup lang="ts">
const content = ref('')
const keepBottom = ref(false)

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

<style module lang="scss">
.container {
    width: 100%;
    height: 300px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
</style>
