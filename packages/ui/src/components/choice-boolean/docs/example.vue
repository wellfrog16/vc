<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HChoiceBoolean v-model="result1" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ result1 }}</span></ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：多选">
            <HChoiceBoolean v-model="result2" multiple />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ result2 }}</span></ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElDescriptionsItem } from 'element-plus'
import { ref } from 'vue'
import Wrapper from '@/components/example-wrapper.vue'
import HChoiceBoolean from '../choice-boolean.vue'

const result1 = ref<boolean>(false)
const result2 = ref<boolean[]>([])
</script>
