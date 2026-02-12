<template>
    <div :class="$style['explorer-filter']">
        <ElInput
            v-model="keyword"
            :placeholder="placeholder"
            :clearable="clearable"
            :prefix-icon="Search"
            :disabled="disabled"
            @keydown.enter="handleFilter"
            @clear="handleFilter"
            @change="handleFilter"
            @input="keywordChange"
        />
        <ElButton v-if="create" :icon="Plus" :disabled="disabled" @click="emits('create')" />
    </div>
</template>

<script setup lang="ts">
import type { IExplorerFilterEmits, IExplorerFilterProps } from './explorer-filter'
import { Plus, Search } from '@element-plus/icons-vue'
import { debounce } from 'lodash-es'
import { injectExplorerPanelState } from '../explorer-panel/explorer-panel'

const props = withDefaults(defineProps<IExplorerFilterProps>(), {
    placeholder: '查询',
    clearable: true,
    paddingBottom: 8,
    debounce: 300,
})
const emits = defineEmits<IExplorerFilterEmits>()

const { filterKeyword } = injectExplorerPanelState()
const keyword = ref<string>('')
function handleFilter() {
    if (filterKeyword.value === keyword.value) { return }
    filterKeyword.value = keyword.value
    emits('filter', keyword.value)
}

const keywordChange = debounce(() => handleFilter(), props.debounce)
</script>

<style lang="scss" module>
.explorer-filter {
    padding-bottom: v-bind('`${paddingBottom}px`');
    display: flex;
    column-gap: 8px;
    border-bottom: 1px solid var(--el-border-color-lighter);
}
</style>
