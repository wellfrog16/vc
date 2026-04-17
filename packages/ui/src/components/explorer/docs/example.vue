<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcDialog v-model="dialogVisible" title="测试" height="500px" fullscreen padding="5px" view-margin="0px" :box-padding="false">
                <VcExplorer explorer-key="demo">
                    <VcExplorerPanel size="200">
                        <VcExplorerFilter :create="filterCreateVisible" @filter="(val) => { console.log('filter', val) }" />
                        <VcExplorerList
                            :data="listData"
                            :actions="myListAction"
                            @create="(val) => { console.log('create', val); dialogFormVisible = true }"
                            @modify="(val) => { console.log('modify', val); dialogFormVisible = true }"
                            @remove="(val) => { console.log('remove', val) }"
                            @up="(val) => { console.log('up', val) }"
                            @down="(val) => { console.log('down', val) }"
                            @item-click="(val, item, e) => { console.log('itemClick', val, item, e) }"
                        />
                        <VcExplorerModalForm v-model="dialogFormVisible" type="dialog" :form="dialogForm">
                            <ElRow :gutter="20">
                                <ElCol :span="12">
                                    <ElFormItem label="标题" prop="title">
                                        <ElInput v-model="dialogForm.fields.title" placeholder="标题" clearable />
                                    </ElFormItem>
                                </ElCol>
                                <ElCol :span="12">
                                    <ElFormItem label="标题" prop="title">
                                        <VcInput v-model="dialogForm.fields.title" placeholder="标题" clearable block />
                                    </ElFormItem>
                                </ElCol>
                                <ElCol :span="12">
                                    <ElFormItem label="图标" prop="icon">
                                        <VcIconPicker v-model="dialogForm.fields.icon" block />
                                    </ElFormItem>
                                </ElCol>
                            </ElRow>
                        </VcExplorerModalForm>
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
                                    <ElButton>其他按钮21</ElButton>
                                </VcExplorerTools>
                                <VcExplorerTable ref="tableRef" :data="tableData" selection :column-config="tableColumn" :column-render="columnRender" @column-event="(column, row, val) => { console.log(column, row, val) }">
                                    <template #operation>
                                        <VcButton :icon="{ name: 'Edit' }" link>编辑</VcButton>
                                        <VcButton :icon="{ name: 'Remove' }" link>删除</VcButton>
                                    </template>
                                    <template #expand-row>
                                        <div>展开内容</div>
                                    </template>
                                </VcExplorerTable>
                                <VcExplorerFooter v-model:current-page="currentPage" :total="50" @current-change="(val: number) => { console.log('current-change', val) }">
                                    <ElButton type="primary">批量操作</ElButton>
                                </VcExplorerFooter>
                            </VcExplorerPanel>
                            <VcExplorerPanel :padding="0" size="400" resizable>
                                <VcExplorer>
                                    <VcExplorerPanel resizable>
                                        <VcExplorerForm ref="formRef" :title="containerForm.fields.title" :form="containerForm" @save="handleSave">
                                            <ElRow :gutter="20">
                                                <ElCol :span="12">
                                                    <ElFormItem label="标题" prop="title">
                                                        <ElInput v-model="containerForm.fields.title" placeholder="标题" clearable />
                                                    </ElFormItem>
                                                </ElCol>
                                                <ElCol :span="12">
                                                    <ElFormItem label="标题" prop="title">
                                                        <VcInput v-model="containerForm.fields.title" placeholder="标题" clearable block />
                                                    </ElFormItem>
                                                </ElCol>
                                                <ElCol :span="12">
                                                    <ElFormItem label="图标" prop="icon">
                                                        <VcIconPicker v-model="containerForm.fields.icon" block />
                                                    </ElFormItem>
                                                </ElCol>
                                                <ElCol :span="12">
                                                    <ElFormItem label="操作">
                                                        <VcButton type="primary">操作按钮</VcButton>
                                                    </ElFormItem>
                                                </ElCol>
                                            </ElRow>
                                        </VcExplorerForm>
                                    </VcExplorerPanel>
                                    <VcExplorerPanel resizable>
                                        <VcExplorerContainer title="这个是纯容器">
                                            <ElAlert type="info">
                                                <template #default>
                                                    <div>长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很</div>
                                                </template>
                                            </ElAlert>
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
                            @up="(val) => { console.log('up', val) }"
                            @down="(val) => { console.log('down', val) }"
                        />
                    </VcExplorerPanel>
                </VcExplorer>
            </VcDialog>
            <ElSpace direction="vertical" alignment="start">
                <ElText>布局太大，放在对话框里展示</ElText>
                <ElButton @click="dialogVisible = true">打开对话框</ElButton>
            </ElSpace>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Filter 参数" />
        <ElDescriptionsItem label="新增按钮">
            <VcChoiceBoolean v-model="filterCreateVisible" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="List/Tree 参数" />
        <ElDescriptionsItem label="操作">
            <VcChoice v-model="myListAction" multiple :options="listActionOptions" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Query 参数" />
        <ElDescriptionsItem label="自动布局">
            <VcChoiceBoolean v-model="autoSpace" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Tools 参数" />
        <ElDescriptionsItem label="新增按钮">
            <VcChoiceBoolean v-model="toolsCreateVisible" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="列重置按钮">
            <VcChoiceBoolean v-model="toolsColumnResetVisible" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="工具栏">
            <VcChoice v-model="myTools" multiple :options="toolsOptions" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="当前布局">{{ layout }}</ElDescriptionsItem>
        <ElDescriptionsItem label="Footer 参数" />
        <ElDescriptionsItem label="当前页">{{ currentPage }}</ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { cloneDeep } from 'lodash-es'
import VcButton from '@/components/button/button.vue'
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcChoice from '@/components/choice/choice.vue'
import VcDialog from '@/components/dialog/dialog.vue'
import VcExplorerContainer from '@/components/explorer-container/explorer-container.vue'
import VcExplorerFilter from '@/components/explorer-filter/explorer-filter.vue'
import VcExplorerFooter from '@/components/explorer-footer/explorer-footer.vue'
import VcExplorerForm from '@/components/explorer-form/explorer-form.vue'
import VcExplorerList from '@/components/explorer-list/explorer-list.vue'
import VcExplorerModalForm from '@/components/explorer-modal-form/explorer-modal-form.vue'
import VcExplorerPanel from '@/components/explorer-panel/explorer-panel.vue'
import VcExplorerQuery from '@/components/explorer-query/explorer-query.vue'
import VcExplorerTable from '@/components/explorer-table/explorer-table.vue'
import VcExplorerTools from '@/components/explorer-tools/explorer-tools.vue'
import VcExplorerTree from '@/components/explorer-tree/explorer-tree.vue'
import VcIconPicker from '@/components/icon-picker/icon-picker.vue'
import VcInput from '@/components/input/input.vue'
import VcExplorer from '../explorer.vue'
import { columnRender, columns, tableData, treeData } from './data'

const listActionOptions = [
    { label: '新增', value: 'create' },
    { label: '修改', value: 'modify' },
    { label: '上移', value: 'up' },
    { label: '下移', value: 'down' },
    { label: '删除', value: 'remove' },
]

const toolsOptions = [
    { label: '搜索', value: 'search' },
    { label: '布局', value: 'layout' },
    { label: '刷新', value: 'refresh' },
    { label: '全屏', value: 'fullscreen' },
    { label: '设置', value: 'setter' },
]

// Filter
const myListAction = ref<any[]>(['modify', 'remove'])
const filterCreateVisible = ref(false)

// Dialog-Form
const dialogFormVisible = ref(false)
const dialogForm = reactive({
    fields: { title: '对话框表单', icon: '' },
    rules: {
        title: [{ required: true, message: '对话框表单', trigger: 'blur' }],
    },
})

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
const formRef = useTemplateRef('formRef')
const defaultFields = { title: '容器标题', icon: '' }
const containerForm = reactive({
    fields: { ...defaultFields },
    rules: {
        title: [{ required: true, message: '请输入容器标题', trigger: 'blur' }],
    },
})
async function handleSave() {
    console.log('handleSave', containerForm.fields)
    formRef.value?.update()
    formRef.value?.toggleEditing(false)
}

// Footer
const currentPage = ref(1)

const dialogVisible = ref(false)
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
