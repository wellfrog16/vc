<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcInputThousand v-model="result" :controls="controls" :precision="2">
                <template #prefix>
                    <span>￥</span>
                </template>
                <template #suffix>
                    <span>RMB</span>
                </template>
            </VcInputThousand>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="操作">
            <ElButton @click="setNum(1234567.89)">设置1234567.89</ElButton>
            <ElButton @click="setNum(-1234)">设置-1234</ElButton>
            <ElButton @click="setNum(undefined)">清空</ElButton>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：显示控制按钮">
            <VcChoiceBoolean v-model="controls" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            {{ result === undefined ? '-' : result }}
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcInputThousand from '../input-thousand.vue'

const result = ref<number>()
const controls = ref(false)
function setNum(num: number | undefined) { result.value = num }
</script>
