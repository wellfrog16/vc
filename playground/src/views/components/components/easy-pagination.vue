<template>
    <HEasyPagination v-model:current-page="p" :have-next="haveNext" @current-change="loadList" />
</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus'

const p = ref(1)
const haveNext = computed(() => (p.value < 3))
function loadList(p: number) {
    ElNotification({ message: `触发@current-change，当前第${p}页` })
}
</script>
