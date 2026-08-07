<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区：">
            <el-form disabled>
                <VcTreeSelect
                    v-model="result"
                    :options="treeData"
                    :multiple="multiple"
                    :width="width"
                    :check-strictly="checkStrictly"
                    filterable
                    :disabled="false"
                />
            </el-form>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：单/多选">
            <VcChoice v-model="multiple" :options="multipleOption" @change="handleMultipleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：宽度">
            <VcChoice v-model="width" :options="widthOption" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="演示：任意节点单选">
            <VcChoiceBoolean v-model="checkStrictly" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">{{ result }}</ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import type { IChoiceProps } from '@/components/choice/choice'
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcChoice from '@/components/choice/choice.vue'
import VcTreeSelect from '../tree-select.vue'
import { treeData } from './data'

const result = ref<string | string[]>('')
const multiple = ref(false)
const multipleOption: IChoiceProps['options'] = [
    { label: '单选', value: false },
    { label: '多选', value: true },
]
function handleMultipleChange(value: string | number | boolean) {
    result.value = value ? [] : ''
}

const width = ref('')
const widthOption: IChoiceProps['options'] = [
    { label: '默认', value: '' },
    { label: '300px', value: '300px' },
    { label: '400px', value: '400px' },
]

const checkStrictly = ref(false)
</script>
