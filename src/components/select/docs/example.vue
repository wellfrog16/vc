<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <ElSpace>
                <HSelect v-if="visible" v-model="result" :options="options" clearable :multiple="multiple" placeholder="请选择" />
                <ElButton @click="reload">重新加载</ElButton>
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
        <ElDescriptionsItem label="结果"><span>{{ result }}</span></ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { ElButton, ElDescriptionsItem, ElSpace, ElSwitch } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HSelect from '../index.vue'
import type { IChoiceOption } from '../../choice/useChoice'

const data: IChoiceOption = [
    { label: '小龙虾', value: 1 },
    { label: '毛血旺', value: 2 },
    { label: '剁椒鱼头', value: 3 },
    { label: '冰激凌', value: 4 },
    { label: '金汤肥牛', value: 5 },
]

const options = () => new Promise<IChoiceOption>(resolve => {
    setTimeout(() => resolve(data), 1000)
})

const result = ref<number | number[]>()
const multiple = ref(false)
const visible = ref(true)

const reload = () => {
    visible.value = false
    nextTick(() => {
        visible.value = true
    })
}

const handleChange = (value: string | number | boolean) => {
    result.value = value ? [] : undefined
}
</script>
