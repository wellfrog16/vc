<template>
    <HConfigProvider :button="buttonConfig">
        <el-space size="large">
            <HButton type="warning" @click="handleClick">有二次确认的删除</HButton>
            <HButton type="warning" :confirm="{ type: 'none' }" @click="handleClick">阻止二次确认的 删除</HButton>
        </el-space>
    </HConfigProvider>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

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
