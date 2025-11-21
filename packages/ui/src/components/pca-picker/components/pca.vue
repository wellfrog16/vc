<template>
    <PopoverCascader
        v-model="myValue"
        :options="optionData"
        :props="cascaderProps"
        v-bind="$attrs"
        :multiple="multiple"
        @expand-change="updatePopper"
        @choiced="togglePopoverVisible(false)"
        @change="handleChange"
    />
</template>

<script setup lang="ts">
import type { CascaderNode, CascaderValue } from 'element-plus/es/components/cascader-panel'
import type { IPCAData } from '../pca-picker'

import { useVModel } from '@vueuse/core'
import { computed, toRefs } from 'vue'
import PopoverCascader from '@/components/tree-picker/components/popover-cascader.vue'
import { injectCommonState } from '../pca-picker'

const props = defineProps<{
    modelValue?: number | number[]
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: number | number[]): void
}>()

const { props: commonProps, optionData, updatePopper, togglePopoverVisible, clickItems } = injectCommonState()
const { nameKey, multiple } = toRefs(commonProps)

const cascaderProps = computed(() => ({
    label: nameKey.value,
    value: 'id',
    children: 'childs',
    multiple: multiple.value,
}))

const myValue = useVModel(props, 'modelValue', emits)

function handleChange(value?: CascaderValue | null, node?: CascaderNode[]) {
    if (node && node.length) {
        const item = node.map(n => n.data as unknown as IPCAData)
        clickItems(item)
    }
}
</script>
