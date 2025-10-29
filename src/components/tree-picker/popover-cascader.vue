<template>
    <div v-if="multiple" :class="$style.selected">
        <ElScrollbar>
            <ElTree
                ref="treeRef"
                default-expand-all
                :node-key="cascaderProps.value"
                :props="treeProps"
                :filter-node-method="filterNode"
                :empty-text="emptyText"
                v-bind="$attrs"
            />
        </ElScrollbar>
    </div>
    <ElCascaderPanel
        ref="cascaderPanelRef"
        v-model="myValue"
        :props="cascaderProps"
        v-bind="$attrs"
        @expand-change="emits('expandChange')"
        @change="handleCascaderChange"
    />
</template>

<script setup lang="ts">
import { computed, nextTick, useTemplateRef } from 'vue'
import { useVModel } from '@vueuse/core'
import { ElCascaderPanel, ElScrollbar, ElTree } from 'element-plus'

// import type { CascaderOption, CascaderProps, CascaderValue } from 'element-plus/es/components/cascader-panel/src/node.d'
// import type { CascaderNode, CascaderOption, CascaderProps } from 'element-plus/es/components/cascader-panel'
import type { CascaderOption, CascaderProps, CascaderValue } from 'element-plus/es/components/cascader-panel'

interface IPropType {
    modelValue: number | number[]
    multiple?: boolean
    emptyText?: string
    props: CascaderProps
}

const props = withDefaults(defineProps<IPropType>(), {
    emptyText: '尚未选择',
})
const emits = defineEmits<{
    (e: 'update:modelValue', value: number | number[]): void
    (e: 'change', value: CascaderValue, node: any): void
    (e: 'expandChange'): void
    (e: 'choiced'): void
}>()

const myValue = useVModel(props, 'modelValue', emits)

const cascaderProps = computed(() => ({
    ...props.props,
    label: props.props.label || 'label',
    value: props.props.value || 'value',
    children: props.props.children || 'children',
    multiple: props.multiple,
    emitPath: false,
}))

const treeProps = computed(() => ({
    label: props.props.label || 'label',
    children: props.props.children || 'children',
}))

// 过滤复选选择的树节点
const filterNode = (value: CascaderValue[], data: CascaderOption) => {
    console.log('filterNode', value, data)
    if (!value) { return true }
    return value.includes(data[cascaderProps.value.value] as string)
}

// 树过滤，el-tree内部调用filterNode
const treeRef = useTemplateRef('treeRef')
const filterTree = (val: CascaderValue) => {
    nextTick(() => treeRef.value?.filter(val))
    emits('expandChange')
}

// const cascaderPanelRef = useTemplateRef<InstanceType<typeof ElCascaderPanel>>('cascaderPanelRef')
const cascaderPanelRef = useTemplateRef('cascaderPanelRef')
const handleCascaderChange = (val: CascaderValue) => {
    const node = cascaderPanelRef.value?.getCheckedNodes(true)
    emits('change', val, node)
    if (!props.multiple) {
        emits('choiced')
    }
    else {
        filterTree(val)
    }
}
</script>

<style lang="scss" module>
.wrapper {
    display: flex;

    :global(.el-cascader-menu) {
        min-width: 80px;
    }
}

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
