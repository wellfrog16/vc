<template>
    <div :class="$style.wrapper">
        <!-- <div v-if="multiple" :class="$style.selected">
            <ElScrollbar>
                <ElTree
                    ref="myTree"
                    default-expand-all
                    :data="myOptions"
                    :node-key="cascaderProps.value"
                    :props="myTreeProps"
                    :filter-node-method="filterNode"
                    :empty-text="emptyText"
                />
            </ElScrollbar>
        </div> -->
        <ElCascaderPanel
            ref="cascaderRef"
            v-model="myValue"
            :props="cascaderProps"
            :options="optionData"
            @expand-change="updatePopper"
            @change="handleCascaderChange"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs, useTemplateRef, watch } from 'vue'
import { ElCascaderPanel, ElPopover, ElScrollbar, ElTree } from 'element-plus'
import { useVModel } from '@vueuse/core'

import { injectCommonState } from '../source'
import type { CascaderOption, CascaderProps, CascaderValue } from 'element-plus/es/components/cascader-panel/src/node.d'
import type { CascaderNode } from 'element-plus/es/components/cascader-panel'

import type { IPCAData } from '../source'

const props = defineProps<{
    modelValue?: number | number[]
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: number | number[]): void
    (e: 'change', value: CascaderValue, node?: CascaderNode[]): void
}>()

const { props: commonProps, optionData, popoverVisible, hasHot, hotData, historyData, updatePopper } = injectCommonState()
const { history, historyText, hotText, nameKey, multiple } = toRefs(commonProps)

const cascaderProps = computed(() => ({
    label: nameKey.value,
    value: 'id',
    children: 'childs',
    multiple: multiple.value,
    emitPath: false,
}))

const myValue = useVModel(props, 'modelValue', emits)

const cascaderRef = useTemplateRef('cascaderRef')
const handleCascaderChange = (val: CascaderValue) => {
    const node = cascaderRef.value?.getCheckedNodes(true)
    emits('change', val, node)
    if (!multiple.value) {
        popoverVisible.value = false
    }
    else {
        // filterTree(val)
    }
}
</script>

<style lang="scss" module>
.wrapper {
    width: auto;
}
</style>
