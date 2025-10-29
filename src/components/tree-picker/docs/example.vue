<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区：同步">
            <HTreePicker v-model="result" :options="treeData" :multiple="multiple" :block="block" :width="width" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：异步">
            <ElSpace>
                <HTreePicker v-if="asyncTreePickerVisible" v-model="result" :options="asyncTreeData" :multiple="multiple" :block="block" :width="width" />
                <ElButton @click="reloadAsyncTreeData">重新加载</ElButton>
            </ElSpace>
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
        <ElDescriptionsItem label="参数：内联/块级">
            <ElSwitch
                v-model="block"
                inactive-text="内联"
                active-text="块级"
                :active-value="true"
                :inactive-value="false"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：宽度">
            <HChoice v-model="width" :options="widthOption" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ result }}</span></ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { ElButton, ElDescriptionsItem, ElSpace, ElSwitch } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoice from '@/components/choice/index.vue'
import treeData from './data'
import HTreePicker from '../index.vue'

import type { IChoiceOption } from '../../choice/useChoice'

const result = ref<string | string[]>('')
const multiple = ref(false)
const asyncTreePickerVisible = ref(true)
const block = ref(false)
const width = ref('300px')

const widthOption: IChoiceOption = [
    { label: '默认', value: '' },
    { label: '300px', value: '300px' },
    { label: '400px', value: '400px' },
]

const handleChange = (value: string | number | boolean) => {
    result.value = value ? [] : ''
}

const asyncTreeData = () => new Promise<any>(resolve => {
    setTimeout(() => resolve(treeData), 3000)
})

const reloadAsyncTreeData = () => {
    asyncTreePickerVisible.value = false
    nextTick(() => { asyncTreePickerVisible.value = true })
}
</script>
