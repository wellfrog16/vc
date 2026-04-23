<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcInput v-model="result" :width="width" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：宽度">
            <VcChoice v-model="width" :options="widthOptions" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            {{ result }}
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoice from '@/components/choice/choice.vue'
import VcInput from '../input.vue'

const widthOptions = [
    { label: '未设定', value: '' },
    { label: '150px', value: '150px' },
    { label: '300px', value: '300px' },
]

const result = ref('')
const width = ref('')
</script>
