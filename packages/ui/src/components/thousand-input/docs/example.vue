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
        <ElDescriptionsItem label="结果：值"><span>{{ result }}</span></ElDescriptionsItem>
        <ElDescriptionsItem label="结果：格式化"><span>{{ formatValue }}</span></ElDescriptionsItem>
        <ElDescriptionsItem label="@change"><span>{{ changeValue }}</span></ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElButton, ElDescriptionsItem } from 'element-plus'
import { ref } from 'vue'

import HChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import Wrapper from '@/components/example-wrapper.vue'
import HThousandInput from '../thousand-input.vue'

const result = ref<string>('')
const formatValue = ref<string>('')
const changeValue = ref<string[]>()
const padDecimal = ref(true)
function setNum(num: string) { result.value = num }

function handleChange(val: string[]) {
    changeValue.value = val
}
</script>
