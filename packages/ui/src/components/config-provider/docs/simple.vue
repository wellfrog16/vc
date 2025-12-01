<template>
    <Wrapper>
        <HConfigProvider :button="buttonConfig">
            <HButton type="warning" @click="handleClick">删除</HButton>
            <HButton type="warning" @click="handleClick">删除</HButton>
        </HConfigProvider>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import HButton from '@/components/button'
import Wrapper from '@/components/simple-wrapper.vue'
import HConfigProvider from '../config-provider.vue'

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
