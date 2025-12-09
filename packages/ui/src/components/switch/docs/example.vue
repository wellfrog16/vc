<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <ElSpace>
                <HSwitch
                    v-model="result"
                    :before-change="beforeChange"
                    active-text="开"
                    inactive-text="关"
                    active-value="Open"
                    inactive-value="Close"
                    :loading="loading"
                    :disabled="isDisabled"
                    :confirm="confirm"
                />
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="值">{{ result }}</ElDescriptionsItem>
        <ElDescriptionsItem label="模拟：异步切换">
            <ElRadioGroup v-model="delay">
                <ElRadioButton :value="0">立即执行</ElRadioButton>
                <ElRadioButton :value="1000">延迟一秒</ElRadioButton>
            </ElRadioGroup>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：禁用组件">
            <ElSwitch
                v-model="isDisabled"
                active-text="启用"
                inactive-text="禁用"
                :active-value="false"
                :inactive-value="true"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：二次确认">
            <ElSwitch
                v-model="confirm"
                active-text="启用"
                inactive-text="关闭"
                :active-value="true"
                :inactive-value="false"
            />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { promiseTimeout } from '@vueuse/core'
import { ElDescriptionsItem, ElRadioButton, ElRadioGroup, ElSpace, ElSwitch } from 'element-plus'
import { ref } from 'vue'

import Wrapper from '@/components/example-wrapper.vue'
import HSwitch from '../switch.vue'

const result = ref('Open')
const delay = ref(0)
const loading = ref(false)
async function beforeChange() {
    if (delay.value === 0) { return true }
    loading.value = true
    await promiseTimeout(delay.value)
    loading.value = false
    return true
}

const isDisabled = ref(false)
const confirm = ref(false)
</script>
