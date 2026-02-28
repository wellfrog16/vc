<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcTags v-model="result1" @change="handleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ result1 }}</span></ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：只能是数字">
            <VcTags v-model="result2" :regexp="/^\d+$/" :value-format="valueFormat" error-message="只能输入数字" @change="handleChange" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ result2 }}</span></ElDescriptionsItem>
        <ElDescriptionsItem label="禁用展示">
            <VcTags v-model="result1" disabled />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcTags from '../tags.vue'

const result1 = ref<string[]>(['小龙虾', '毛血旺', '剁椒鱼头', '冰激凌'])
const result2 = ref<number[]>([111, 222, 333, 444])

const valueFormat = (val: any) => Number.parseInt(val)

function handleChange(value: string[]) {
    console.log(value)
}
</script>
