<template>
    <div class="usage" :class="[$style.main]">
        <ElDivider v-if="data.params" content-position="left">参数</ElDivider>
        <ElTable v-if="data.params" :data="data.params" row-key="param" :span-method="spanMethod">
            <ElTableColumn prop="param" label="名称" width="150" fixed />
            <ElTableColumn prop="description" label="说明" min-width="150" />
            <ElTableColumn prop="type" label="类型" min-width="100">
                <template #default="{ row }">
                    <ElLink v-if="row.type && row.type.indexOf('http') !== -1" type="primary" target="_blank" :href="row.type">参考链接</ElLink>
                    <ElLink v-if="row.type && row.type.indexOf('./') !== -1" type="primary" :href="row.type">查看</ElLink>
                    <span v-if="row.type && row.type.indexOf('http') === -1 && row.type.indexOf('./') === -1">{{ row.type }}</span>
                </template>
            </ElTableColumn>
            <ElTableColumn prop="defaultValue" label="默认值" width="80" :show-overflow-tooltip="false" />
        </ElTable>
        <ElDivider v-if="data.methods" content-position="left">方法</ElDivider>
        <ElTable v-if="data.methods" :data="data.methods">
            <ElTableColumn prop="name" label="方法" width="150" fixed />
            <ElTableColumn prop="description" label="说明" />
            <ElTableColumn prop="param" label="参数" />
        </ElTable>
        <ElDivider v-if="data.types" content-position="left">参数类型</ElDivider>
        <ElTable v-if="data.types" :data="data.types">
            <ElTableColumn prop="param" label="类型" width="150" fixed />
            <ElTableColumn prop="description" label="说明" />
        </ElTable>
        <ElDivider v-if="data.events" content-position="left">事件</ElDivider>
        <ElTable v-if="data.events" :data="data.events">
            <ElTableColumn prop="name" label="事件" width="150" fixed />
            <ElTableColumn prop="description" label="说明" />
            <ElTableColumn prop="param" label="回调参数">
                <template #default="{ row }">
                    <span v-if="row.param.indexOf('http') === -1">{{ row.param }}</span>
                    <ElLink v-else type="primary" target="_blank" :href="row.param">参考链接</ElLink>
                </template>
            </ElTableColumn>
        </ElTable>
        <ElDivider v-if="data.slots" content-position="left">插槽</ElDivider>
        <ElTable v-if="data.slots" :data="data.slots" row-key="name">
            <ElTableColumn prop="name" label="名称" width="150" fixed />
            <ElTableColumn prop="description" label="说明" />
        </ElTable>
    </div>
</template>

<script lang="ts" setup>
import { ElDivider, ElLink, ElTable, ElTableColumn } from 'element-plus'

defineProps({
    data: { type: Object, required: true, default: () => ({}) },
})

const spanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex,
}: any) => {
    if (['defaultValue', 'paramType'].includes(row.rowType)) {
        if (columnIndex === 0) { return [1, 1] }
        if (columnIndex === 1) {
            return [1, 3]
        }
        else {
            return [0, 0]
        }
    }
    return [1, 1]
}
</script>

<style lang="scss" module>
.main {
    padding-bottom: 60px;

    :global {
        .el-divider {
            margin-top: 60px;
        }

        .el-divider__text {
            font-weight: bold;
        }

        a.el-link {
            color: var(--el-link-text-color);
            text-decoration: none;

            &:hover {
                color: var(--el-link-hover-text-color);
            }

            &::after {
                width: inherit !important;
                height: inherit !important;
                margin-top: 0 !important;
                margin-left: 0 !important;
                background: inherit !important;
                mask-image: none !important;
            }
        }

        table.el-table__body, table.el-table__header {
            border-collapse: separate;
        }

        tbody tr:nth-child(2n) {
            background-color: inherit;
        }
    }
}
</style>
