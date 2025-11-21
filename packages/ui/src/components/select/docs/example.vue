<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HSelect v-if="visible" v-model="result1" :options="options1" clearable :multiple="multiple" :block="isBlock" placeholder="请选择" />
            <ElButton :class="$style.button" @click="reload">重新加载</ElButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：单/多选">
            <ElSwitch
                v-model="multiple"
                inactive-text="单选"
                active-text="多选"
                :active-value="true"
                :inactive-value="false"
                @change="handleChange"
            />
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
        <ElDescriptionsItem label="结果"><span>{{ result1 }}</span></ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：逻辑型">
            <HSelect v-model="result2" :options="options2" clearable :block="isBlock" placeholder="请选择" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ result2 }}</span></ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import type { IChoiceOption } from '../../choice/useChoice'
import { ElButton, ElDescriptionsItem, ElSwitch } from 'element-plus'
import { nextTick, ref } from 'vue'
import Wrapper from '@/components/example-wrapper.vue'
import HSelect from '../select.vue'

const data1: IChoiceOption = [
    { label: '小龙虾', value: 1 },
    { label: '毛血旺', value: 2 },
    { label: '剁椒鱼头', value: 3 },
    { label: '冰激凌', value: 4 },
    { label: '金汤肥牛', value: 5 },
]

const data2: IChoiceOption = [
    { label: '已完成', value: true },
    { label: '未完成', value: false },
]

function options1() {
    return new Promise<IChoiceOption>(resolve => {
        setTimeout(() => resolve(data1), 1000)
    })
}

function options2() {
    return new Promise<IChoiceOption>(resolve => {
        setTimeout(() => resolve(data2), 1000)
    })
}

const result1 = ref<number | number[]>()
const result2 = ref(false)
const multiple = ref(false)
const isBlock = ref(false)
const visible = ref(true)

function reload() {
    visible.value = false
    nextTick(() => {
        visible.value = true
    })
}

function handleChange(value: string | number | boolean) {
    reload()
    result1.value = value ? [] : undefined
}
</script>

<style lang="scss" module>
.button {
    margin-left: 8px;
}
</style>
