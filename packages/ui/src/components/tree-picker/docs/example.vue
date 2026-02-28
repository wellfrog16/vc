<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区：">
            <el-form disabled>
                <VcTreePicker
                    v-model="result"
                    :options="treeData"
                    :multiple="multiple"
                    :block="block"
                    :width="width"
                    :props="cascaderProps"
                    filterable
                    :disabled="false"
                />
            </el-form>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：单/多选">
            <VcChoice v-model="multiple" :options="multipleOption" @change="handleMultipleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：内联/块级">
            <VcChoice v-model="block" :options="blockOption" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：宽度">
            <VcChoice v-model="width" :options="widthOption" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="演示：任意节点单选">
            <VcChoiceBoolean v-model="showDemo1" @change="handleShowDemo1Change" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">{{ result }}</ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import type { IChoiceProps } from '@/components/choice/choice'
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcChoice from '@/components/choice/choice.vue'
import VcTreePicker from '../tree-picker.vue'
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

const block = ref(false)
const blockOption: IChoiceProps['options'] = [
    { label: '内联', value: false },
    { label: '块级（需要设置默认宽度）', value: true },
]

const width = ref('450px')
const widthOption: IChoiceProps['options'] = [
    { label: '默认', value: '' },
    { label: '350px', value: '350px' },
    { label: '450px', value: '450px' },
]

const showDemo1 = ref(false)
const cascaderProps = ref({
    checkStrictly: false,
})
function handleShowDemo1Change(value: boolean) {
    if (!value) { return }
    multiple.value = false
    result.value = ''
    cascaderProps.value = {
        checkStrictly: true,
    }
}
</script>
