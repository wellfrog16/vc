<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcTransferPanel v-model="myValue" title="角色" :data="options" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            {{ myValue }}
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcTransferPanel from '../transfer-panel.vue'

const options = [
    { label: '管理员', value: 1 },
    { label: '编辑', value: 2 },
    { label: '普通用户', value: 3 },
    { label: '游客', value: 4 },
]

const myValue = ref([])
</script>
