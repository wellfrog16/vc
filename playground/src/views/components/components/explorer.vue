<template>
    <VcExplorer explorer-key="demo">
        <VcExplorerPanel size="200">
            <VcExplorerFilter :create="filterCreateVisible" group="a" @filter="(val) => { console.log('filter', val) }" />
            <VcExplorerList
                :data="listData"
                :actions="myListAction"
                group="a"
                @create="(val) => { console.log('create', val) }"
                @modify="(val) => { console.log('modify', val) }"
                @remove="(val) => { console.log('remove', val) }"
                @item-click="(val, item, e) => { console.log('itemClick', val, item, e) }"
            />
        </VcExplorerPanel>
        <VcExplorerPanel group="cc">
            <VcExplorerQuery :model="form.fields" :auto-space="autoSpace" @search="(val) => { console.log('search', val) }">
                <ElFormItem label="订单名称" prop="name">
                    <VcInput v-model="form.fields.name" placeholder="订单名称" clearable width="200px" />
                </ElFormItem>
                <ElFormItem label="订单编号" prop="code">
                    <VcInput v-model="form.fields.code" placeholder="订单编号" clearable />
                </ElFormItem>
                <ElFormItem label="订单状态" prop="status">
                    <VcChoice v-model="form.fields.status" multiple :options="orderStatusOptions" />
                </ElFormItem>
                <ElFormItem label="时间范围" prop="date">
                    <el-date-picker
                        v-model="form.fields.date"
                        type="daterange"
                        range-separator="To"
                        start-placeholder="Start date"
                        end-placeholder="End date"
                    />
                </ElFormItem>
            </VcExplorerQuery>
            <VcExplorerTools
                v-model:layout="layout"
                group="cc"
                :tools="myTools"
                :create="toolsCreateVisible"
                @create="() => { console.log('create') }"
                @search="() => { console.log('search') }"
                @refresh="() => { console.log('refresh') }"
                @fullscreen="(val) => { console.log('fullscreen', val) }"
                @setting="(val) => { console.log('setting', val) }"
                @layout="(val) => { console.log('layout', val) }"
            >
                <ElButton>其他按钮1</ElButton>
                <ElButton>其他按钮2</ElButton>
                <template #setting>
                    <ElButton type="primary">设置</ElButton>
                </template>
            </VcExplorerTools>
            <VcExplorerTable :data="tableData" selection :column-config="columns" />
            <VcExplorerFooter v-model:current-page="currentPage" :total="50" @current-change="(val: number) => { console.log('current-change', val) }">
                <ElButton type="primary">批量操作</ElButton>
            </VcExplorerFooter>
        </VcExplorerPanel>
        <VcExplorerPanel size="300">
            <VcExplorerFilter :create="filterCreateVisible" group="b" @filter="(val) => { console.log('filter', val) }" />
            <VcExplorerTree
                :data="treeData"
                :actions="myListAction"
                group="b"
                @node-click="handleNodeClick"
                @create="(val) => { console.log('create', val) }"
                @modify="(val) => { console.log('modify', val) }"
                @remove="(val) => { console.log('remove', val) }"
            />
        </VcExplorerPanel>
    </VcExplorer>
</template>

<script setup lang="ts">
import { columns, tableData, treeData } from '../demo-data'

// Filter
const myListAction = ref<any[]>(['modify', 'remove'])
const filterCreateVisible = ref(false)

// Query
const autoSpace = ref(true)

// Tools
const myTools = ref<any[]>(['search', 'layout', 'refresh', 'fullscreen', 'setting'])
const toolsCreateVisible = ref(true)
const layout = ref<any>('card')

// Footer
const currentPage = ref(1)

const listData = ref<Array<{ label: string, value: string, icon?: string }>>(
    Array.from({ length: 50 }).map((_, i) => ({
        icon: 'carbon:data-table',
        label: `这里是列表项目 ${i + 1}`,
        value: `${i + 1}`,
    })),
)

// 表单
const orderStatusOptions = [
    { label: '审批中', value: '1' },
    { label: '生产中', value: '2' },
    { label: '已交付', value: '3' },
]

const form = reactive({
    fields: {
        name: '',
        code: '',
        status: [],
        date: undefined,
    },
})

function handleNodeClick(value: any, node: any, instance: any, event: MouseEvent) {
    console.log('handleNodeClick', value, node, instance, event)
}
</script>

<style lang="scss" module></style>
