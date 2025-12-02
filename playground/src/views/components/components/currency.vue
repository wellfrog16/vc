<template>
    <el-space size="large" alignment="center" fill :style="{ display: 'flex' }">
        <div>
            <HCurrency v-model="result" v-model:format-value="formatValue" :code="['CNY', 'USD', 'EUR', 'JPY', 'TWD', 'KRW']" flag prefix prepend append />
        </div>
        <div>
            <HCurrency v-model="result" v-model:format-value="formatValue" code="EUR" flag prefix prepend append />
        </div>
        <el-text>你输入了：<el-text type="primary">{{ result }}</el-text></el-text>
        <el-text>你输入了：<el-text type="primary">{{ formatValue }}</el-text></el-text>
    </el-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const result = ref('')
const formatValue = ref('')
</script>
