<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HTags v-model="result1" @change="handleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            {{ result1 }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：只能是数字">
            <HTags v-model="result2" :regexp="/^\d+$/" :value-format="valueFormat" error-message="只能输入数字" @change="handleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            {{ result2 }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="只读展示">
            <HTags v-model="result1" readonly />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HTags from '../index.vue'

const result1 = ref<string[]>(['小龙虾', '毛血旺', '剁椒鱼头', '冰激凌'])
const result2 = ref<number[]>([111, 222, 333, 444])

const valueFormat = (val: any) => parseInt(val)

const handleChange = (value: string) => {
    console.log(value)
}
</script>
