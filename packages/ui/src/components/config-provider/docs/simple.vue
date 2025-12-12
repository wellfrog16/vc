<template>
    <Wrapper>
        <VcConfigProvider :button="buttonConfig">
            <VcButton type="warning" @click="handleClick">删除</VcButton>
            <VcButton type="warning" @click="handleClick">删除</VcButton>
        </VcConfigProvider>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import VcButton from '@/components/button/button.vue'
import VcConfigProvider from '../config-provider.vue'

const buttonConfig = {
    confirm: {
        title: '请注意',
        confirmButtonText: '确认删除',
        msg: '这是不可恢复的操作<br>您确认要删除这条数据吗？',
    },
}

function handleClick() {
    ElMessage({ message: '删除成功', type: 'success' })
}
</script>
