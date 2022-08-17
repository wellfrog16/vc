<template>
    <div class="usage" :class="[$style.main]">
        <ElDivider v-if="data.params" content-position="left">参数</ElDivider>
        <ElTable v-if="data.params" :data="data.params">
            <ElTableColumn prop="param" label="名称" width="150" fixed />
            <ElTableColumn prop="description" label="说明" min-width="150" />
            <ElTableColumn prop="type" label="类型" min-width="150">
                <template #default="{ row }">
                    <span v-if="row.type.indexOf('http') === -1">{{ row.type }}</span>
                    <ElLink v-else type="primary" target="_blank" :href="row.type">参考链接</ElLink>
                </template>
            </ElTableColumn>
            <ElTableColumn prop="defaultValue" label="默认值" width="100" />
        </ElTable>
        <ElDivider v-if="data.methods" content-position="left">方法</ElDivider>
        <ElTable v-if="data.methods" :data="data.methods">
            <ElTableColumn prop="name" label="方法" width="140" />
            <ElTableColumn prop="description" label="说明" />
            <ElTableColumn prop="param" label="参数" />
        </ElTable>
        <ElDivider v-if="data.types" content-position="left">参数类型</ElDivider>
        <ElTable v-if="data.types" :data="data.types">
            <ElTableColumn prop="param" label="类型" width="140" />
            <ElTableColumn prop="description" label="说明" />
        </ElTable>
        <ElDivider v-if="data.events" content-position="left">事件</ElDivider>
        <ElTable v-if="data.events" :data="data.events">
            <ElTableColumn prop="name" label="事件" width="140" />
            <ElTableColumn prop="description" label="说明" />
            <ElTableColumn prop="param" label="回调参数" />
        </ElTable>
        <ElDivider v-if="data.slots" content-position="left">插槽</ElDivider>
        <ElTable v-if="data.slots" :data="data.slots">
            <ElTableColumn prop="name" label="名称" width="140" />
            <ElTableColumn prop="description" label="说明" />
        </ElTable>
    </div>
</template>

<script lang="ts" setup>
import { ElDivider, ElLink, ElTable, ElTableColumn } from 'element-plus'

defineProps({
    data: { type: Object, required: true, default: () => ({}) },
})
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
    }
}
</style>
