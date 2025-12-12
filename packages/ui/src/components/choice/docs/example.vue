<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HChoice v-model="result" :options="options" :multiple="multiple" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：单/多选">
            <ElSwitch
                v-model="multiple"
                active-text="多选"
                inactive-text="单选"
                :active-value="true"
                :inactive-value="false"
                @change="handleChange"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ result }}</span></ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import HChoice from '../choice.vue'

const options = ['小龙虾', '毛血旺', '剁椒鱼头', '冰激凌']

const result = ref<string | string[]>('')
const multiple = ref(false)

function handleChange(value: string | number | boolean) {
    result.value = value ? [] : ''
}
</script>
