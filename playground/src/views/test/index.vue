<template>
    <div>
        <VcButton @click="dialogVisible = true">打开</VcButton>
    </div>
    <VcDialog v-model="dialogVisible" width="800px" height="600px">
        <VcExplorer explorer-key="table-scroll-load-test">
            <VcExplorerPanel size="280px">
                <VcExplorerFilter />
                <VcExplorerList
                    :data="listData"
                    :scroll-load="true"
                    :scroll-load-disabled="listNoMore"
                    scroll-load-root-margin="20px"
                    :loading="listLoading"
                    @load-more="handleListLoadMore"
                />
                <div :class="$style.tip">
                    已加载 {{ listData.length }} 条，{{ listNoMore ? '没有更多' : '滚动加载更多' }}
                </div>
            </VcExplorerPanel>
            <VcExplorerPanel>
                <VcExplorerTools :tools="[]" />
                <VcExplorerTable
                    :loading="loading"
                    :data="tableData"
                    :column-config="columnConfig"
                    :scroll-load="true"
                    :scroll-load-disabled="noMore"
                    scroll-load-root-margin="20px"
                    @load-more="handleLoadMore"
                />
                <div :class="$style.tip">
                    已加载 {{ tableData.length }} 条，{{ noMore ? '没有更多' : '滚动加载更多' }}
                </div>
            </VcExplorerPanel>
        </VcExplorer>
    </VcDialog>
</template>

<script setup lang="ts">
import type { IColumnConfig } from '@wfrog/vc-ui/es/components/explorer-column-table/type'

interface RowItem {
    id: string
    name: string
    date: string
    amount: number
}

const PAGE_SIZE = 20
const MAX_COUNT = 100

const listData = ref(generateListData(0, PAGE_SIZE))
const listLoading = ref(false)
const listNoMore = computed(() => listData.value.length >= MAX_COUNT)

const columnConfig = ref<IColumnConfig[]>([
    { id: 1, prop: 'id', label: '编号', width: 100 },
    { id: 2, prop: 'name', label: '名称', minWidth: 160 },
    { id: 3, prop: 'date', label: '日期', width: 140 },
    { id: 4, prop: 'amount', label: '金额', width: 120, align: 'right' },
])

const dialogVisible = ref(false)
const tableData = ref<RowItem[]>(generateData(0, PAGE_SIZE))
const loading = ref(false)
const noMore = computed(() => tableData.value.length >= MAX_COUNT)

function generateData(start: number, count: number): RowItem[] {
    return Array.from({ length: count }).map((_, i) => {
        const index = start + i + 1
        return {
            id: `NO${String(index).padStart(4, '0')}`,
            name: `订单名称 ${index}`,
            date: `2026-08-${String((index % 30) + 1).padStart(2, '0')}`,
            amount: Math.round(Math.random() * 10000) / 100,
        }
    })
}

function generateListData(start: number, count: number) {
    return Array.from({ length: count }).map((_, i) => {
        const index = start + i + 1
        return {
            label: `测试分类 ${index}`,
            value: `${index}`,
            icon: 'carbon:data-table',
        }
    })
}

function handleListLoadMore() {
    if (listLoading.value || listNoMore.value) { return }

    listLoading.value = true
    setTimeout(() => {
        const next = generateListData(listData.value.length, PAGE_SIZE)
        listData.value.push(...next)
        listLoading.value = false
    }, 2000)
}

function handleLoadMore() {
    if (loading.value || noMore.value) { return }

    loading.value = true
    setTimeout(() => {
        const next = generateData(tableData.value.length, PAGE_SIZE)
        tableData.value.push(...next)
        loading.value = false
    }, 2000)
}
</script>

<style lang="scss" module>
.tip {
    border-top: 1px solid var(--el-border-color-light);
    color: var(--el-text-color-secondary);
    font-size: 12px;
    padding: 8px 12px;
}
</style>
