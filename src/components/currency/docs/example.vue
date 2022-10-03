<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HCurrency v-model="result1" code="CNY" :flag="flag" :prefix="prefix" :pad-decimal="padDecimal" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果：值">{{ result1 }}</ElDescriptionsItem>
        <ElDescriptionsItem />
        <ElDescriptionsItem label="展示区">
            <HCurrency v-model="result2" v-model:format-value="formatValue" :code="code" :flag="flag" :prefix="prefix" :pad-decimal="padDecimal" @change="handleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：旗子">
            <HChoiceBoolean v-model="flag" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：前缀">
            <HChoiceBoolean v-model="prefix" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：补零">
            <HChoiceBoolean v-model="padDecimal" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果： 值">{{ result2 }}</ElDescriptionsItem>
        <ElDescriptionsItem label="结果：格式化">{{ formatValue }}</ElDescriptionsItem>
        <ElDescriptionsItem label="@change">{{ changeValue }}</ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HCurrency from '../index.vue'
import type { ICurrencyCode } from '../currency'

const code: ICurrencyCode[] = ['CNY', 'USD', 'EUR', 'JPY', 'TWD', 'KRW']

const result1 = ref('123456')
const result2 = ref('')
const formatValue = ref('')
const changeValue = ref<string[]>()
const flag = ref(true)
const prefix = ref(true)
const padDecimal = ref(true)

const handleChange: any = (val: string[]) => {
    changeValue.value = val
}
</script>
