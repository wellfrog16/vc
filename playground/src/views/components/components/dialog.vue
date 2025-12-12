<template>
    <div>
        <vc-button @click="() => toggleVisible()">打开</vc-button>
        <vc-dialog v-model="visible" title="测试" show-fullscreen show-default-footer max-height="500px">
            <vc-button :time="0" @click="handleAdd">增加内容</vc-button>
            <vc-button :time="0" @click="handleRemove">减少内容</vc-button>
            <div v-for="item in line" :key="item">啤酒、饮料、矿泉水，花生、瓜子、大鸡腿</div>
        </vc-dialog>
    </div>
</template>

<script setup lang="ts">
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
