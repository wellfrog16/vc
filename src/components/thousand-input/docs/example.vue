<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HThousandInput v-model="result" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="操作">
            <ElButton @click="setNum('123456789')">设置123456789</ElButton>
            <ElButton @click="setNum('6666.02')">设置6666.02</ElButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">{{ result }}</ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HThousandInput from '../index.vue'

const result = ref<string>('')
const setNum = (num: string) => { result.value = num }
</script>
