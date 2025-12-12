<template>
    <div>
        <HDrawer v-model="visible" title="测试" show-default-footer>
            <div v-for="value in 100" :key="value">{{ value }}：啤酒、饮料、矿泉水，花生、瓜子、大鸡腿</div>
        </HDrawer>
        <HButton @click="() => toggleVisible()">打开抽屉</HButton>
    </div>
</template>

<script setup lang="ts">
const visible = ref(false)

const toggleVisible = useToggle(visible)
</script>
