<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HChoiceBoolean v-model="result" :value-type="valueType" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ result }}</span></ElDescriptionsItem>
        <ElDescriptionsItem label="参数：结果类型">
            <HChoice v-model="valueType" :options="options" @change="handleChange" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import HChoice from '@/components/choice/choice.vue'
import HChoiceBoolean from '../choice-boolean.vue'

const result = ref<boolean | number>(false)

const valueType = ref<'boolean' | 'number'>('boolean')
const options = [{ label: '逻辑型', value: 'boolean' }, { label: '数值型', value: 'number' }]

function handleChange() {
    result.value = valueType.value === 'number' ? (result.value ? 1 : 0) : !!result.value
}
</script>
