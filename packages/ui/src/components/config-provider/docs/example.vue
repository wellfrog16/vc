<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HConfigProvider :button="buttonConfig">
                <HButton :size="size" type="warning" @click="handleClick">点击会有二次确认修改按钮大小</HButton>
            </HConfigProvider>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区">
            <HConfigProvider :button="buttonConfig2">
                <HButton :size="size" type="warning" @click="handleClick2">删除</HButton>
                <HButton :size="size" type="warning" @click="handleClick2">删除</HButton>
            </HConfigProvider>
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElDescriptionsItem, ElMessage } from 'element-plus'
import { ref } from 'vue'

import HButton from '@/components/button/button.vue'
import Wrapper from '@/components/example-wrapper.vue'
import HConfigProvider from '../config-provider.vue'

const size = ref('default')
const buttonConfig = {
    confirm: {
        title: '这是二次提示的标题',
        confirmButtonText: '好的，我确认修改',
        msg: '您确认修改按钮的大小吗？<br>修改后，您可以再次点击按钮恢复大小<br>主要可以用于全局默认的按钮二次确认文案，比如删除确认',
    },
}
const buttonConfig2 = {
    confirm: {
        title: '请注意',
        confirmButtonText: '确认删除',
        msg: '这是不可恢复的操作<br>您确认要删除这条数据吗？',
    },
}

function handleClick() {
    size.value = size.value === 'default' ? 'large' : 'default'
}

function handleClick2() {
    ElMessage({ message: '删除成功', type: 'success' })
}
</script>
