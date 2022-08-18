<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <ElSpace>
                <HConfirmSwitch
                    v-model="result"
                    :before-change="beforeChange"
                    active-text="开"
                    inactive-text="关"
                    active-value="Open"
                    inactive-value="Close"
                    :loading="loading"
                    :disabled="isDisabled"
                />
                <span>值：{{ result }}</span>
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="模拟：异步切换">
            <ElRadioGroup v-model="delay">
                <ElRadioButton :label="0">立即执行</ElRadioButton>
                <ElRadioButton :label="1000">延迟一秒</ElRadioButton>
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
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { promiseTimeout } from '@vueuse/core'
import { ElDescriptionsItem, ElRadioButton, ElRadioGroup, ElSpace, ElSwitch } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HConfirmSwitch from '../index.vue'

const result = ref('Open')
const delay = ref(0)
const loading = ref(false)
const beforeChange = async () => {
    loading.value = true
    await promiseTimeout(delay.value)
    loading.value = false
    return true
}

const isDisabled = ref(false)
</script>
