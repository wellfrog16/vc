<template>
    <VcScrollbar always :class="$style.scrollbar">
        <div v-show="!loading">
            <div
                v-for="(item, index) in myData"
                :key="item.value"
                :class="[$style.item, { [$style.active]: actived === item.value }]"
                @click="e => handleClick(item, e)"
            >
                <slot name="item" :data="item" :index="index">
                    <div :class="$style.label">
                        <slot name="label" :data="item" :index="index"><VcIconifyIcon v-if="item.icon" :name="item.icon" :class="$style.icon" />{{ item.label }}</slot>
                    </div>
                    <div v-if="actions.length" :class="$style.actions">
                        <template v-for="action in actions" :key="action">
                            <slot v-if="action === 'action'" name="action" :data="item" :index="index" />
                            <VcButton
                                v-else
                                v-bind="actionsMapping[action]"
                                :confirm="action === 'remove' ? confirmParams(item) : undefined"
                                :class="action === 'remove' ? $style.remove : undefined"
                                link
                                :icon="{ type: 'el', name: actionsMapping[action].icon }"
                                stop
                                @click="emits(action as any, item.value, item)"
                            />
                        </template>
                    </div>
                    <slot :data="item" :index="index" name="extra-label" />
                </slot>
            </div>
        </div>
        <div v-if="isEmpty && !loading && !pending" :class="$style.empty">{{ emptyText }}</div>
        <div v-if="loading" :class="$style.loading">
            <ElIcon class="is-loading"><Loading /></ElIcon>{{ loadingText }}
        </div>
    </VcScrollbar>
</template>

<script setup lang="ts">
import type { IExplorerListEmits, IExplorerListItem, IExplorerListProps } from './explorer-list'
import { Loading } from '@element-plus/icons-vue'
import VcButton from '../button/button.vue'
import { injectExplorerPanelState } from '../explorer-panel/explorer-panel'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'
import VcScrollbar from '../scrollbar/scrollbar.vue'

const props = withDefaults(defineProps<IExplorerListProps>(), {
    actions: () => [],
    data: () => [],
    emptyText: '没有数据',
    loadingText: '数据加载中...',
    highlightCurrent: true,
    confirmParams: (item: IExplorerListItem) => {
        return { msg: `确定要删除 ${item.label} 吗？` }
    },
})
const emits = defineEmits<IExplorerListEmits>()

const { filterKeyword } = injectExplorerPanelState()
const actived = ref<string | number>()

const actionsMapping: Record<string, any> = {
    create: { title: '新增', type: 'primary', icon: 'Plus' },
    modify: { title: '修改', type: 'primary', icon: 'Edit' },
    remove: { title: '删除', type: 'danger', icon: 'Delete' },
    up: { title: '上移', type: 'success', icon: 'Top' },
    down: { title: '下移', type: 'success', icon: 'Bottom' },
}

const filterMethod = props.filterMethod || ((keyword: string, item: IExplorerListItem) => {
    return item.label.toLowerCase().includes(keyword.toLowerCase())
})

const myData = computed(() => {
    return filterKeyword.value
        ? props.data.filter(item => filterMethod(filterKeyword.value, item))
        : props.data
})
const isEmpty = computed(() => myData.value.length === 0)

function handleClick(item: IExplorerListItem, e: MouseEvent) {
    if (!props.highlightCurrent) { return }
    actived.value = item.value
    emits('itemClick', item.value, item, e)
}

defineExpose({
    setActive: (value: string | number) => {
        actived.value = value
    },
})
</script>

<style lang="scss" module>
.item {
    padding: 4px 8px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--el-font-size-base);
    color: var(--el-text-color-regular);
    min-height: 32px;
    box-sizing: border-box;
    line-height: 1;

    &:hover {
        background-color: var(--el-color-primary-light-9);

        .actions {
            display: inline-flex;
            align-items: flex-start;
        }
    }

    &.active {
        color: var(--el-color-primary);
        background-color: var(--el-color-primary-light-9);
    }
}

.label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    :global(.iconify) {
        margin-right: 4px;
    }
}

.actions {
    display: none;
    column-gap: 4px;

    > button {
        margin-left: 0 !important;
        font-size: 1.2em;
        border: 1px solid var(--el-border-color-light) !important;

        &:hover {
            border-color: var(--el-border-color-dark) !important;
        }
    }
}

.remove {
    transform: translateY(-1px);
}

.empty,
.loading {
    padding: 4px 8px;
    display: flex;
    align-items: center;
    column-gap: 4px;
    color: var(--el-text-color-secondary);
}

.scrollbar {
    margin: 0 -8px;
}
</style>
