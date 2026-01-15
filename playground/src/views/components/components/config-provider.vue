<template>
    <vc-config-provider :button="buttonConfig" local-cdn="http://frog.dreamersky.com/local-cdn/">
        <el-space size="large">
            <vc-button type="warning" @click="handleClick">有二次确认的删除</vc-button>
            <vc-button type="warning" :confirm="{ type: 'none' }" @click="handleClick">阻止二次确认的 删除</vc-button>
        </el-space>
        <div>
            <vc-qr-code value="i am qrcode" :width="100" :height="100" />
        </div>
    </vc-config-provider>
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
