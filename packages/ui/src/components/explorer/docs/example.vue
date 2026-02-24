<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcDialog v-model="dialogVisible" title="测试" height="500px" fullscreen flex :padding="5" :box-padding="false">
                <VcExplorer explorer-key="demoa">
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
                    <VcExplorerPanel>
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
                            @column-reset="() => { console.log('column-reset') }"
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
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcChoice from '@/components/choice/choice.vue'
import VcDialog from '@/components/dialog/dialog.vue'
import VcExplorerFilter from '@/components/explorer-filter/explorer-filter.vue'
import VcExplorerFooter from '@/components/explorer-footer/explorer-footer.vue'
import VcExplorerList from '@/components/explorer-list/explorer-list.vue'
import VcExplorerPanel from '@/components/explorer-panel/explorer-panel.vue'
import VcExplorerQuery from '@/components/explorer-query/explorer-query.vue'
import VcExplorerTable from '@/components/explorer-table/explorer-table.vue'
import VcExplorerTools from '@/components/explorer-tools/explorer-tools.vue'
import VcExplorerTree from '@/components/explorer-tree/explorer-tree.vue'
import VcInput from '@/components/input/input.vue'
import VcExplorer from '../explorer.vue'
import { columns, tableData, treeData } from './data'

const listActionOptions = [
    { label: '新增', value: 'create' },
    { label: '修改', value: 'modify' },
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

// Query
const autoSpace = ref(true)

// Tools
const myTools = ref<any[]>(['search', 'layout', 'refresh', 'fullscreen', 'setter'])
const toolsCreateVisible = ref(true)
const toolsColumnResetVisible = ref(true)
const layout = ref<any>('card')

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

<style lang="scss" module>
.container {
    height: 250px;
}
</style>
