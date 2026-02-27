<template>
    <VcExplorer explorer-key="demo">
        <VcExplorerPanel size="200">
            <VcExplorerFilter :create="filterCreateVisible" @filter="(val) => { console.log('filter', val) }" />
            <VcExplorerList
                :data="listData"
                :actions="myListAction"
                @create="(val) => { console.log('create', val) }"
                @modify="(val) => { console.log('modify', val) }"
                @remove="(val) => { console.log('remove', val) }"
                @item-click="(val, item, e) => { console.log('itemClick', val, item, e) }"
            />
        </VcExplorerPanel>
        <VcExplorerPanel :padding="0">
            <VcExplorer layout="vertical">
                <VcExplorerPanel resizable>
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
                        :tools="myTools"
                        :create="toolsCreateVisible"
                        column-setter-size="small"
                        column-to-storage
                        :column-reset-visible="toolsColumnResetVisible"
                        @create="() => { console.log('create') }"
                        @search="() => { console.log('search') }"
                        @refresh="() => { console.log('refresh') }"
                        @fullscreen="(val) => { console.log('fullscreen', val) }"
                        @layout="(val) => { console.log('layout', val) }"
                        @config-confirm="(val) => { console.log('config-confirm', val) }"
                        @column-reset="() => { tableRef?.setColumns(cloneDeep(columns)) }"
                    >
                        <ElButton>其他按钮1</ElButton>
                        <ElButton>其他按钮2</ElButton>
                        <template #setting>
                            <ElButton type="primary">设置</ElButton>
                        </template>
                    </VcExplorerTools>
                    <VcExplorerTable ref="tableRef" :data="tableData" selection :column-config="tableColumn" index />
                    <VcExplorerFooter v-model:current-page="currentPage" :total="50" @current-change="(val: number) => { console.log('current-change', val) }">
                        <ElButton type="primary">批量操作</ElButton>
                    </VcExplorerFooter>
                </VcExplorerPanel>
                <VcExplorerPanel size="400" resizable :padding="0">
                    <VcExplorer>
                        <VcExplorerPanel resizable>
                            <VcExplorerForm :title="containerForm.fields.title" :form="containerForm" :form-props="{ labelPosition: 'top' }">
                                <ElRow :gutter="20" :class="$style.row">
                                    <ElCol :span="12">
                                        <ElFormItem label="标题" prop="title">
                                            <ElInput v-model="containerForm.fields.title" placeholder="标题" clearable />
                                        </ElFormItem>
                                    </ElCol>
                                    <ElCol :span="12">
                                        <ElFormItem label="标题" prop="title">
                                            <ElInput v-model="containerForm.fields.title" placeholder="标题" clearable />
                                        </ElFormItem>
                                    </ElCol>
                                    <ElCol :span="12">
                                        <ElFormItem label="标题" prop="title">
                                            <ElInput v-model="containerForm.fields.title" placeholder="标题" clearable />
                                        </ElFormItem>
                                    </ElCol>
                                </ElRow>
                            </VcExplorerForm>
                        </VcExplorerPanel>
                        <VcExplorerPanel resizable>
                            <VcExplorerContainer title="这个是纯容器">
                                <div v-for="value in 20" :key="value">
                                    <ElText>这个是纯容器，带标题{{ value }}</ElText>
                                </div>
                            </VcExplorerContainer>
                        </VcExplorerPanel>
                    </VcExplorer>
                </VcExplorerPanel>
            </VcExplorer>
        </VcExplorerPanel>
        <VcExplorerPanel size="300">
            <VcExplorerFilter :create="filterCreateVisible" @filter="(val) => { console.log('filter', val) }" />
            <VcExplorerTree
                :data="treeData"
                :actions="myListAction"
                @node-click="handleNodeClick"
                @create="(val) => { console.log('create', val) }"
                @modify="(val) => { console.log('modify', val) }"
                @remove="(val) => { console.log('remove', val) }"
            />
        </VcExplorerPanel>
    </VcExplorer>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash-es'
import { columns, tableData, treeData } from '../demo-data'

// Filter
const myListAction = ref<any[]>(['modify', 'remove'])
const filterCreateVisible = ref(false)

// Query
const autoSpace = ref(true)

// Tools
const myTools = ref<any[]>(['search', 'layout', 'refresh', 'fullscreen', 'setter'])
const toolsCreateVisible = ref(true)
const toolsColumnResetVisible = ref(true)
const layout = ref<any>('card')

// Table
const tableRef = useTemplateRef('tableRef')
const tableColumn = ref(cloneDeep(columns))

// Form
const defaultFields = { title: '容器标题' }
const containerForm = reactive({
    fields: { ...defaultFields },
    rules: {
        title: [{ required: true, message: '请输入容器标题', trigger: 'blur' }],
    },
})

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

<style lang="scss" module>
.row {
    margin: 0 !important;
}
</style>
