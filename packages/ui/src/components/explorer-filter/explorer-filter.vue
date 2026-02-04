<template>
    <div :class="$style['explorer-filter']">
        <el-input
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
        <el-button v-if="create" :icon="Plus" :disabled="disabled" @click="emits('create')" />
    </div>
</template>

<script setup lang="ts">
import type { IExplorerFilterProps } from './explorer-filter'
import { Plus, Search } from '@element-plus/icons-vue'
import { debounce } from 'lodash-es'
import { injectState } from '../explorer/explorer'

const props = withDefaults(defineProps<IExplorerFilterProps>(), {
    placeholder: '查询',
    clearable: true,
    padding: 8,
    debounce: 300,
})
const emits = defineEmits<{
    (e: 'filter', keyword: string): void
    (e: 'create'): void
}>()

const { filterKeyword } = injectState()
const keyword = ref<string>('')
function handleFilter() {
    if (filterKeyword.value === keyword.value) { return }
    filterKeyword.value = keyword.value
    emits('filter', filterKeyword.value)
}

const keywordChange = debounce(() => handleFilter(), props.debounce)
</script>

<style lang="scss" module>
.explorer-filter {
    position: sticky;
    padding-bottom: v-bind('`${padding}px`');
    display: flex;
    column-gap: 8px;
}
</style>
