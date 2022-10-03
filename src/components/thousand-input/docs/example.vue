<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HThousandInput v-model="result" v-model:format-value="formatValue" :pad-decimal="padDecimal" @change="handleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="操作">
            <ElButton @click="setNum('123456789')">设置123456789</ElButton>
            <ElButton @click="setNum('6666.02')">设置6666.02</ElButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：补零">
            <HChoiceBoolean v-model="padDecimal" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果：值">{{ result }}</ElDescriptionsItem>
        <ElDescriptionsItem label="结果：格式化">{{ formatValue }}</ElDescriptionsItem>
        <ElDescriptionsItem label="@change">{{ changeValue }}</ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HThousandInput from '../index.vue'

const result = ref<string>('')
const formatValue = ref<string>('')
const changeValue = ref<string[]>()
const padDecimal = ref(true)
const setNum = (num: string) => { result.value = num }

const handleChange = (val: string[]) => {
    changeValue.value = val
}
</script>
