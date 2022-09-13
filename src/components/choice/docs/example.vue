<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HChoice v-model="result1" :options="data" :multiple="multiple" />
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
        <ElDescriptionsItem label="结果">{{ result1 }}</ElDescriptionsItem>
        <ElDescriptionsItem />
        <ElDescriptionsItem label="展示区：模拟异步">
            <ElSpace>
                <HChoice v-if="asyncChoiceVisible" v-model="result2" :options="asyncData" />
                <ElButton @click="reload">重新加载</ElButton>
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">{{ result2 }}</ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { ElButton, ElDescriptionsItem, ElSpace, ElSwitch } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoice from '../index.vue'

const data = ['小龙虾', '毛血旺', '剁椒鱼头', '冰激凌']
const asyncData = () => new Promise<number[]>(resolve => {
    setTimeout(() => {
        resolve(Array.from({ length: 5 }, v => Math.ceil(Math.random() * 10000)))
    }, 1000)
})
const result1 = ref<string | string[]>('')
const result2 = ref<number>(1)
const multiple = ref(false)
const asyncChoiceVisible = ref(true)

const reload = () => {
    asyncChoiceVisible.value = false
    nextTick(() => {
        asyncChoiceVisible.value = true
    })
}

const handleChange = (value: string | number | boolean) => {
    result1.value = value ? [] : ''
}
</script>
