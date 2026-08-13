<template>
    <VcScrollbar always :class="$style.scrollbar">
        <el-checkbox-group v-model="myValue" :disabled="checkboxGroupDisabled" @change="val => emits('valueChange', val)">
            <div
                v-for="(item, index) in myData"
                :key="item.value"
                :class="[$style.item, { [$style.active]: actived === item.value }]"
                @click="() => handleClick(item)"
            >
                <slot name="item" :data="item" :index="index">
                    <div :class="$style.label">
                        <el-checkbox v-if="showCheckbox" :value="item.value">
                            <slot name="label" :data="item" :index="index"><VcIconifyIcon v-if="item.icon" :name="item.icon" :class="$style.icon" />{{ item.label }}</slot>
                        </el-checkbox>
                        <slot v-else name="label" :data="item" :index="index"><VcIconifyIcon v-if="item.icon" :name="item.icon" :class="$style.icon" />{{ item.label }}</slot>
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
                                :disabled="myDisabled(action, item)"
                                @click="emits(action as any, item.value, item)"
                            />
                        </template>
                    </div>
                    <slot :data="item" :index="index" name="extra-label" />
                </slot>
            </div>
        </el-checkbox-group>

        <template v-if="$slots.empty" #empty>
            <slot name="empty" />
        </template>
        <template v-if="$slots.loading" #loading>
            <slot name="loading" />
        </template>
        <template v-if="$slots['no-more']" #no-more>
            <slot name="no-more" />
        </template>
    </VcScrollbar>
</template>

<script setup lang="ts">
import type { IExplorerListEmits, IExplorerListItem, IExplorerListProps } from './explorer-list'
import VcButton from '../button/button.vue'
import { injectExplorerPanelState } from '../explorer-panel/explorer-panel'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'
import VcScrollbar from '../scrollbar/scrollbar.vue'

const props = withDefaults(defineProps<IExplorerListProps>(), {
    actions: () => [],
    data: () => [],
    highlightCurrent: true,
    confirmParams: (item: IExplorerListItem) => {
        return { msg: `确定要删除 ${item.label} 吗？` }
    },
    filterMethod: (keyword: string, item: IExplorerListItem) => {
        return item.label.toLowerCase().includes(keyword.toLowerCase())
    },
    disabled: false,
    cancelHighlight: false,
})
const emits = defineEmits<IExplorerListEmits>()

const { filterKeyword } = injectExplorerPanelState()
const myValue = useVModel(props, 'modelValue', emits)
const actived = ref<string | number>()

const actionsMapping: Record<string, any> = {
    create: { title: '新增', type: 'primary', icon: 'Plus' },
    modify: { title: '修改', type: 'primary', icon: 'Edit' },
    remove: { title: '删除', type: 'danger', icon: 'Delete' },
    up: { title: '上移', type: 'success', icon: 'Top' },
    down: { title: '下移', type: 'success', icon: 'Bottom' },
}

const myData = computed(() => {
    return filterKeyword.value
        ? props.data.filter(item => props.filterMethod(filterKeyword.value, item))
        : props.data
})

const cursorStyle = computed(() => props.highlightCurrent ? 'pointer' : 'unset')

function handleClick(item: IExplorerListItem) {
    if (!props.highlightCurrent) { return }

    // 点击高亮，则取消高亮
    if (props.cancelHighlight && actived.value === item.value) {
        actived.value = undefined
        emits('itemClick', undefined, item)
        return
    }
    actived.value = item.value
    emits('itemClick', item.value, item)
}

const checkboxGroupDisabled = computed(() => {
    if (props.disabled === undefined) { return false }
    if (typeof props.disabled === 'boolean') { return props.disabled }
    return false
})
function myDisabled(action: string, item: IExplorerListItem) {
    if (typeof props.disabled === 'function') { return props.disabled(action, item) }
    return props.disabled
}

defineExpose({
    setActive: (value?: string | number) => {
        actived.value = value
    },
})
</script>

<style lang="scss" module>
.item {
    align-items: center;
    box-sizing: border-box;
    color: var(--el-text-color-regular);
    cursor: v-bind(cursorStyle);
    display: flex;
    font-size: var(--el-font-size-base);
    justify-content: space-between;
    line-height: 1;
    min-height: 32px;
    padding: 4px 8px;

    &:hover {
        background-color: var(--vc-highlight-bg-color, var(--el-fill-color-light));

        .actions {
            align-items: flex-start;
            display: inline-flex;
        }
    }

    &.active {
        background-color: var(--vc-highlight-bg-color, var(--el-fill-color-light));
        color: var(--el-color-primary);
    }
}

.label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    --el-checkbox-height: 24px;

    :global(.iconify) {
        margin-right: 4px;
    }

    :global {
        .el-checkbox {
            width: 100%;
        }

        .el-checkbox__label {
            color: var(--el-text-color-regular) !important;
            cursor: pointer !important;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}

.actions {
    column-gap: 4px;
    display: none;

    > button {
        border: 1px solid var(--el-border-color-light) !important;
        font-size: 1.2em;
        margin-left: 0 !important;

        &:hover {
            border-color: var(--el-border-color-dark) !important;
        }
    }
}

.remove {
    transform: translateY(-1px);
}

.scrollbar {
    margin: 0 -8px;
}
</style>
