<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区：同步">
            <HTreePicker v-model="result" :options="treeData" :multiple="multiple" width="300px" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：异步">
            <ElSpace>
                <HTreePicker v-if="asyncTreePickerVisible" v-model="result" :options="asyncTreeData" :multiple="multiple" width="300px" />
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
        <ElDescriptionsItem label="结果">{{ result }}</ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { ElButton, ElDescriptionsItem, ElSpace, ElSwitch } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import treeData from './data'
import HTreePicker from '../index.vue'

const result = ref<string | string[]>('')
const multiple = ref(false)
const asyncTreePickerVisible = ref(true)

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
