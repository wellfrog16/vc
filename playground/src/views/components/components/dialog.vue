<template>
    <div>
        <HButton @click="() => toggleVisible()">打开</HButton>
        <HDialog v-model="visible" title="测试" show-fullscreen show-default-footer max-height="500px">
            <HButton :time="0" @click="handleAdd">增加内容</HButton>
            <HButton :time="0" @click="handleRemove">减少内容</HButton>
            <div v-for="item in line" :key="item">啤酒、饮料、矿泉水，花生、瓜子、大鸡腿</div>
        </HDialog>
    </div>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { ref } from 'vue'

const line = ref(5)
const visible = ref(false)

const toggleVisible = useToggle(visible)

function handleAdd() {
    line.value += 5
}
function handleRemove() {
    line.value -= 5
}
</script>
