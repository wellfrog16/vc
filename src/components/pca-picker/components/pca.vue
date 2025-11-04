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
import { computed, ref, toRefs, watch } from 'vue'
import { useVModel } from '@vueuse/core'

import PopoverCascader from '@/components/tree-picker/popover-cascader.vue'
import { injectCommonState } from '../source'
import type { IPCAData } from '../source'
import type { CascaderNode, CascaderValue } from 'element-plus/es/components/cascader-panel'

const props = defineProps<{
    modelValue?: number | number[]
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: number | number[]): void
}>()

const { props: commonProps, optionData, hasHot, hotData, historyData, updatePopper, togglePopoverVisible, clickItems } = injectCommonState()
const { history, historyText, hotText, nameKey, multiple } = toRefs(commonProps)

const cascaderProps = computed(() => ({
    label: nameKey.value,
    value: 'id',
    children: 'childs',
    multiple: multiple.value,
}))

const myValue = useVModel(props, 'modelValue', emits)

const handleChange = (value?: CascaderValue | null, node?: CascaderNode[]) => {
    if (node && node.length) {
        const item = node.map(n => n.data as unknown as IPCAData)
        clickItems(item)
    }
}
</script>
