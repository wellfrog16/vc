<template>
    <Wrapper>
        <ElDescriptionsItem label="穿梭器面板">
            <VcTransferPanel v-model="myValue" :data="options" block :disabled="disabled" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="穿梭器">
            <VcTransfer v-model="myValue" :data="options" :block="isBlock" :disabled="disabled" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：禁用">
            <VcChoiceBoolean v-model="disabled" />
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
        <ElDescriptionsItem label="结果">
            {{ myValue }}
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcTransferPanel from '../../transfer-panel/transfer-panel.vue'
import VcTransfer from '../transfer.vue'

const options = [
    { label: '管理员', value: 1 },
    { label: '编辑', value: 2 },
    { label: '普通用户', value: 3 },
    { label: '游客', value: 4 },
    { label: '游客', value: 41 },
    { label: '游客', value: 42 },
    { label: '游客', value: 43 },
    { label: '游客', value: 44 },
    { label: '游客', value: 45 },
    { label: '游客', value: 46 },
]

const myValue = ref([])
const disabled = ref(false)
const isBlock = ref(false)
</script>

<style lang="scss" module></style>
