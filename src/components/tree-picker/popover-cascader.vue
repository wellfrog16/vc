<template>
    <div v-if="multiple" :class="$style.selected">
        <ElScrollbar>
            <ElTree
                ref="treeRef"
                default-expand-all
                :node-key="cascaderProps.value"
                :props="treeProps"
                :empty-text="emptyText"
                :data="options"
                :filter-node-method="filterNode"
            />
        </ElScrollbar>
    </div>
    <ElCascaderPanel
        ref="cascaderPanelRef"
        v-model="myValue"
        :props="cascaderProps"
        :options="options"
        v-bind="$attrs"
        @expand-change="emits('expandChange')"
        @change="handleCascaderChange"
    />
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, useTemplateRef, watch } from 'vue'
import { useVModel } from '@vueuse/core'
import { ElCascaderPanel, ElScrollbar, ElTree } from 'element-plus'

import type { CascaderNode, CascaderOption, CascaderProps, CascaderValue } from 'element-plus/es/components/cascader-panel'

interface IPropType {
    modelValue: string | number | string[] | number[] | undefined
    multiple?: boolean
    emptyText?: string
    props: CascaderProps
    options: CascaderOption[]
}

const props = withDefaults(defineProps<IPropType>(), {
    emptyText: '尚未选择',
})
const emits = defineEmits<{
    (e: 'update:modelValue', value: string | number | string[] | number[] | undefined): void
    (e: 'change', value?: CascaderValue | null, node?: CascaderNode[]): void
    (e: 'expandChange'): void
    (e: 'choiced'): void
}>()

const myValue = useVModel(props, 'modelValue', emits)

const cascaderProps = computed(() => ({
    label: props.props.label || 'label',
    value: props.props.value || 'value',
    children: props.props.children || 'children',
    multiple: props.multiple,
    emitPath: false,
    ...props.props,
}))

const treeProps = computed(() => ({
    label: props.props.label || 'label',
    children: props.props.children || 'children',
}))

// 过滤复选选择的树节点
const filterNode = (value: CascaderValue[], data: CascaderOption) => {
    if (!value) { return false }
    return value.includes(data[cascaderProps.value.value] as string)
}

// 树过滤，el-tree内部调用filterNode
const treeRef = useTemplateRef('treeRef')
const filterTree = (val: CascaderValue | null | undefined) => {
    nextTick(() => treeRef.value?.filter(val))
    emits('expandChange')
}

// const cascaderPanelRef = useTemplateRef<InstanceType<typeof ElCascaderPanel>>('cascaderPanelRef')
const cascaderPanelRef = useTemplateRef('cascaderPanelRef')
const handleCascaderChange = (val?: CascaderValue | null) => {
    const node = cascaderPanelRef.value?.getCheckedNodes(true)
    emits('change', val, node)
    if (!props.multiple) {
        emits('choiced')
    }
    else {
        filterTree(val)
    }
}

const filterTreeWatch = watch(myValue, val => props.multiple && filterTree(val || ''), { immediate: true })
onBeforeUnmount(() => filterTreeWatch.stop())
</script>

<style lang="scss" module>
.selected {
    box-sizing: border-box;
    flex: 1 1 180px;
    min-width: 180px;
    height: 206px;
    margin-right: 8px;
    border: 1px solid #e4e7ed;
    border-radius: 4px;

    :global {
        .el-scrollbar {
            height: 100%;
        }

        .el-tree {
            height: 100%;
            margin: 6px 20px 6px 0;
        }

        .el-scrollbar__wrap {
            overflow-x: hidden;
        }

        .el-tree__empty-block {
            transform: translateX(10px);
        }
    }
}
</style>
