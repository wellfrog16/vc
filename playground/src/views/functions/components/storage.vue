<template>
    <el-descriptions border :column="1">
        <el-descriptions-item label="目前的值">{{ currentStorageValue }}</el-descriptions-item>
        <el-descriptions-item label="操作">
            <el-space>
                <el-input v-model="myValue" />
                <el-button type="primary" @click="() => setStorageValue(myValue)">设置</el-button>
                <el-button type="warning" @click="() => setStorageValue('')">清空</el-button>
            </el-space>
        </el-descriptions-item>
        <el-descriptions-item label="使用情况">
            <el-button type="primary" @click="getStorageInfo()">检测</el-button>
        </el-descriptions-item>
        <el-descriptions-item label="localStorage"><el-text>{{ localSpace }}</el-text></el-descriptions-item>
        <el-descriptions-item label="localStorage 剩余空间">
            <el-text v-loading="loading">{{ remainingSpace }}</el-text>
        </el-descriptions-item>
        <el-descriptions-item label="sessionStorage"><el-text>{{ sessionSpace }}</el-text></el-descriptions-item>
    </el-descriptions>
</template>

<script setup lang="ts">
import { storage } from '@wfrog/vc-utils'

const TEST_KEY = 'wfrog-utils-test-key'
const currentStorageValue = ref(storage.get(TEST_KEY))
const myValue = ref('')
const localSpace = ref('')
const sessionSpace = ref('')
const remainingSpace = ref('')
const loading = ref(false)

function setStorageValue(value: string) {
    storage.set(TEST_KEY, value)
    currentStorageValue.value = storage.get(TEST_KEY)
}

async function getStorageInfo() {
    const info = storage.info()
    localSpace.value = info.localSpace
    sessionSpace.value = info.sessionSpace
    loading.value = true
    remainingSpace.value = await info.remainingSpace()
    loading.value = false
    return storage.info()
}
</script>
