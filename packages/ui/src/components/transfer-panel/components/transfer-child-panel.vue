<template>
    <div :class="$style['transfer-child-panel']">
        <ElInput
            v-model="keyword"
            :placeholder="placeholder"
            clearable
            :prefix-icon="Search"
            @keydown.enter="handleFilter"
            @clear="handleFilter"
            @change="handleFilter"
            @input="keywordChange"
        >
            <template #suffix>
                <ElText v-if="isSource" size="small" type="info">{{ title }} {{ data?.length || 0 }}</ElText>
                <ElText v-else size="small" type="info">已选择 {{ choicedData?.length || 0 }}</ElText>
            </template>
        </ElInput>
        <VcScrollbar always>
            <div
                v-for="(item, index) in myData"
                :key="item.value"
                :class="[$style.item, { [$style.active]: isSource && (myValue as any)?.includes(item.value), [$style.source]: isSource }]"
                @click="() => isSource && handleClick(item)"
            >
                <div :class="$style.label">
                    <slot :data="item" :index="index"><VcIconifyIcon v-if="item.icon" :name="item.icon" :class="$style.icon" />{{ item.label }}</slot>
                </div>
                <div v-if="!isSource" :class="$style.actions">
                    <VcButton link :icon="{ type: 'el', name: 'Close' }" type="danger" :confirm="{ type: 'none' }" stop @click="handleClick(item)" />
                </div>
            </div>
        </VcScrollbar>
        <div :class="$style.operation" @click="handleOperation">
            <ElText v-if="isSource" size="small" type="info">全选</ElText>
            <ElText v-else size="small" type="info">清空</ElText>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ITransferChildItem, ITransferChildPanelEmits, ITransferChildPanelProps } from './transfer-child-panel'
import { Search } from '@element-plus/icons-vue'
import { debounce } from 'lodash-es'
import VcButton from '../../button/button.vue'
import VcIconifyIcon from '../../iconify-icon/iconify-icon.vue'
import VcScrollbar from '../../scrollbar/scrollbar.vue'

const props = withDefaults(defineProps<ITransferChildPanelProps>(), {
    placeholder: '查询',
    debounce: 300,
})

const emits = defineEmits<ITransferChildPanelEmits>()

const myValue = useVModel(props, 'modelValue', emits)
const keyword = ref<string>('')
const filterKeyword = ref<string>('')
const isSource = computed(() => props.type === 'source')
const choicedData = computed(() => {
    // 不会保持添加的顺序
    // return props.data?.filter(item => (props.modelValue as any[])?.includes(item.value))

    // 保持添加的顺序，效率不如手动维护，但是方便
    const result: ITransferChildItem[] = []
    myValue.value?.forEach(item => {
        const target = props.data?.find(child => child.value === item)
        target && result.push(target)
    })
    return result
})
const myData = computed(() => {
    const typeData = isSource.value ? props.data : choicedData.value
    const filterData = typeData?.filter(item => item.label.includes(filterKeyword.value))
    return filterData
})

function handleClick(item: ITransferChildItem) {
    if ((myValue.value as any[])?.includes(item.value)) {
        myValue.value = (myValue.value as any[]).filter((v: any) => v !== item.value)
        emits('change', 1, item)
    }
    else {
        myValue.value = [...(myValue.value as any[]), item.value]
        emits('change', -1, item)
    }
}

function handleFilter() {
    filterKeyword.value = keyword.value
}

function handleOperation() {
    myValue.value = isSource.value ? props.data?.map(item => item.value) as string[] | number[] : []
    emits('change', isSource.value ? 1 : -1)
}

const keywordChange = debounce(() => handleFilter(), props.debounce)
</script>

<style lang="scss" module>
.transfer-child-panel {
    display: flex;
    flex-direction: column;
    padding: 4px;
    position: relative;
    row-gap: 4px;
    width: v-bind(width);
}

.item {
    padding: 4px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--el-font-size-base);
    color: var(--el-text-color-regular);
    min-height: 32px;
    box-sizing: border-box;
    line-height: 1;

    &.source {
        cursor: pointer;
    }

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
        border: 1px solid var(--el-border-color-light) !important;

        &:hover {
            border-color: var(--el-border-color-dark) !important;
        }
    }
}

.operation {
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--el-bg-color-page);
    cursor: pointer;

    &:hover {
        :global(.el-text) {
            color: var(--el-color-primary);
        }
    }
}
</style>
