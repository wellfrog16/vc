<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区：">
            <HTreePicker
                v-model="result"
                :options="treeData"
                :multiple="multiple"
                :block="block"
                :width="width"
                :props="cascaderProps"
                filterable
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：单/多选">
            <HChoice v-model="multiple" :options="multipleOption" @change="handleMultipleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：内联/块级">
            <HChoice v-model="block" :options="blockOption" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：宽度">
            <HChoice v-model="width" :options="widthOption" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="演示：任意节点单选">
            <HChoiceBoolean v-model="showDemo1" @change="handleShowDemo1Change" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">{{ result }}</ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoice from '@/components/choice/index.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import type { IChoiceOption } from '@/components/choice/useChoice'
import treeData from './data'
import HTreePicker from '../index.vue'

const result = ref<string | string[]>('')
const multiple = ref(false)
const multipleOption: IChoiceOption = [
    { label: '单选', value: false },
    { label: '多选', value: true },
]
const handleMultipleChange = (value: string | number | boolean) => {
    result.value = value ? [] : ''
}

const block = ref(false)
const blockOption: IChoiceOption = [
    { label: '内联', value: false },
    { label: '块级（需要设置默认宽度）', value: true },
]

const width = ref('450px')
const widthOption: IChoiceOption = [
    { label: '默认', value: '' },
    { label: '350px', value: '350px' },
    { label: '450px', value: '450px' },
]

const showDemo1 = ref(false)
const cascaderProps = ref({
    checkStrictly: false,
})
const handleShowDemo1Change = (value: boolean) => {
    if (!value) { return }
    multiple.value = false
    result.value = ''
    cascaderProps.value = {
        checkStrictly: true,
    }
}
</script>
