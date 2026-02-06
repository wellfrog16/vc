<template>
    <VcScrollbar always>
        <div
            v-for="(item, index) in myData"
            :key="item.value"
            :class="[$style.item, { [$style.active]: actived === item.value }]"
            @click="e => handleClick(item, e)"
        >
            <div :class="$style.label">
                <slot :data="item" :index="index"><VcIconifyIcon v-if="item.icon" :name="item.icon" :class="$style.icon" />{{ item.label }}</slot>
            </div>
            <div v-if="actions.length" :class="$style.actions">
                <VcButton v-if="actions.includes('create')" type="success" link :icon="{ type: 'el', name: 'Plus' }" />
                <VcButton v-if="actions.includes('modify')" type="primary" link :icon="{ type: 'el', name: 'Edit' }" />
                <VcButton v-if="actions.includes('delete')" type="danger" link :icon="{ type: 'el', name: 'Delete' }" />
            </div>
        </div>
        <div v-if="isEmpty && !loading" :class="$style.empty">{{ emptyText }}</div>
        <div v-if="loading" :class="$style.loading">
            <el-icon class="is-loading"><Loading /></el-icon>{{ loadingText }}
        </div>
    </VcScrollbar>
</template>

<script setup lang="ts">
import type { IExplorerListEmits, IExplorerListItemProps, IExplorerListProps } from './explorer-list'
import { Loading } from '@element-plus/icons-vue'
import VcButton from '../button/button.vue'
import { injectState } from '../explorer/explorer'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'
import VcScrollbar from '../scrollbar/scrollbar.vue'

const props = withDefaults(defineProps<IExplorerListProps>(), {
    actions: () => [],
    data: () => [],
    emptyText: '没有数据',
    loadingText: '数据加载中...',
})
const emits = defineEmits<IExplorerListEmits>()

const { filterKeyword } = injectState()
const actived = ref<string | number>()

const filterMethod = props.filterMethod || ((keyword: string, item: IExplorerListItemProps) => {
    return item.label.toLowerCase().includes(keyword.toLowerCase())
})

const myData = computed(() => {
    return props.group && filterKeyword.value[props.group]
        ? props.data.filter(item => filterMethod(filterKeyword.value[props.group!], item))
        : props.data
})
const isEmpty = computed(() => myData.value.length === 0)

function handleClick(item: IExplorerListItemProps, e: MouseEvent) {
    actived.value = item.value
    emits('click', item.value, item.original, e)
}
</script>

<style lang="scss" module>
.item {
    padding: 4px 8px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background-color: var(--el-color-primary-light-9);

        .actions {
            display: inline-flex;
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

.empty,
.loading {
    padding: 4px 8px;
    display: flex;
    align-items: center;
    column-gap: 4px;
    color: var(--el-text-color-secondary);
}
</style>
