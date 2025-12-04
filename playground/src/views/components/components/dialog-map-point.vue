<template>
    <el-space direction="vertical" size="large" alignment="left">
        <div>
            <el-button @click="handleClick">打开地图</el-button>
            <HDialogMapPoint v-model="result" v-model:visible="visible" ak="rrK5thxGKxN45pnaH2Gd0ZxyFkr8MaTl" />
        </div>
        <el-text>{{ `lng: ${result.lng}, lat: ${result.lat}` }}</el-text>
    </el-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const result = ref({ lng: 0, lat: 0 })
const visible = ref(false)

function handleClick() {
    visible.value = true
}
</script>
