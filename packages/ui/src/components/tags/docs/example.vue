<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HTags v-model="result1" @change="handleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ result1 }}</span></ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：只能是数字">
            <HTags v-model="result2" :regexp="/^\d+$/" :value-format="valueFormat" error-message="只能输入数字" @change="handleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ result2 }}</span></ElDescriptionsItem>
        <ElDescriptionsItem label="只读展示">
            <HTags v-model="result1" readonly />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElDescriptionsItem } from 'element-plus'
import { ref } from 'vue'
import Wrapper from '@/components/example-wrapper.vue'
import HTags from '../tags.vue'

const result1 = ref<string[]>(['小龙虾', '毛血旺', '剁椒鱼头', '冰激凌'])
const result2 = ref<number[]>([111, 222, 333, 444])

const valueFormat = (val: any) => Number.parseInt(val)

function handleChange(value: string) {
    console.log(value)
}
</script>
