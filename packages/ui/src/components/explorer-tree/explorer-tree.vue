<template>
    <VcScrollbar always>
        <ElTree v-show="!loading" ref="treeRef" v-bind="{ ...$attrs, ...treeProps }" :class="$style.tree" :filter-node-method="filterNode" @node-click="handleNodeClick">
            <template #default="{ node }">
                <div :class="$style.node">
                    <div :class="$style.label">
                        <slot :data="node.data" :index="node.index"><VcIconifyIcon v-if="node.data.icon" :name="node.data.icon" :class="$style.icon" />{{ node.data.label }}</slot>
                    </div>
                    <div v-if="actions.length" class="vc-actions" :class="[$style.actions]">
                        <VcButton v-if="actions.includes('create')" type="success" link :icon="{ type: 'el', name: 'Plus' }" />
                        <VcButton v-if="actions.includes('modify')" type="primary" link :icon="{ type: 'el', name: 'Edit' }" />
                        <VcButton v-if="actions.includes('delete')" type="danger" link :icon="{ type: 'el', name: 'Delete' }" />
                    </div>
                </div>
            </template>
        </ElTree>
        <div v-if="loading" :class="$style.loading">
            <ElIcon class="is-loading"><Loading /></ElIcon>{{ loadingText }}
        </div>
    </VcScrollbar>
</template>

<script setup lang="ts">
import type { TreeNodeData } from 'element-plus'
import type Node from 'element-plus/lib/components/tree/src/model/node'
import type { ComponentInternalInstance } from 'vue'
import type { IExplorerTreeEmits, IExplorerTreeProps } from './explorer-tree'
import { Loading } from '@element-plus/icons-vue'
import VcButton from '../button/button.vue'
import { injectState } from '../explorer/explorer'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'
import VcScrollbar from '../scrollbar/scrollbar.vue'

const props = withDefaults(defineProps<IExplorerTreeProps>(), {
    actions: () => [],
    emptyText: '没有数据',
    defaultExpandAll: true,
    loadingText: '数据加载中...',
})
const emits = defineEmits<IExplorerTreeEmits>()

const treeRef = useTemplateRef('treeRef')
const { filterKeyword } = injectState()
const keyword = computed(() => {
    if (!props.group) { return '' }
    return filterKeyword.value[props.group]
})

const treeProps = computed(() => ({
    data: props.data,
    emptyText: props.emptyText,
    defaultExpandAll: props.defaultExpandAll,
    expandOnClickNode: false,
    highlightCurrent: true,
    nodeKey: 'id',
    ...props.treeProps,
}))

function filterNode(value: string, data: TreeNodeData) {
    if (!props.group) { return true }
    const keyword = filterKeyword.value[props.group]
    if (!value || !keyword) { return true }

    return data.label?.toLowerCase().includes(value.toLowerCase()) ?? false
}

function handleNodeClick(data: any, node: Node, instance: ComponentInternalInstance | null, event: MouseEvent) {
    emits('nodeClick', data.value, node, instance, event)
}

watch(keyword, value => {
    treeRef.value?.filter(value)
})
</script>

<style lang="scss" module>
.tree {
    :global {
        .el-tree-node__content {
            display: flex;
            align-items: center;

            &:hover {
                background-color: var(--el-color-primary-light-9);

                .vc-actions {
                    display: inline-flex;
                }
            }
        }

        .is-current {
            > .el-tree-node__content {
                color: var(--el-color-primary);
                background-color: var(--el-color-primary-light-9);
            }
        }

        .el-tree__empty-block {
            text-align: left;
            min-height: unset;
            padding: 4px 8px;
        }

        .el-tree__empty-text {
            position: static;
        }
    }
}

.node {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    padding: 4px 8px 4px 0;
    box-sizing: border-box;
    width: 100px;
}

.label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.icon {
    margin-right: 4px;
}

.actions {
    display: none;
    column-gap: 4px;

    > button {
        margin-left: 0 !important;
        font-size: 1.2em;
    }
}

.loading {
    padding: 4px 8px;
    display: flex;
    align-items: center;
    column-gap: 4px;
    color: var(--el-text-color-secondary);
}
</style>
