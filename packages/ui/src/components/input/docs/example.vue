<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <el-text>前置</el-text>
            <VcInput v-model="result" :block="isBlock" :width="width" clearable />
            <el-text>后置</el-text>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：内联/块级">
            <ElSwitch
                v-model="isBlock"
                inactive-text="内联"
                active-text="块级"
                :active-value="true"
                :inactive-value="false"
            />
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
const isBlock = ref(false)
const width = ref('')
</script>
