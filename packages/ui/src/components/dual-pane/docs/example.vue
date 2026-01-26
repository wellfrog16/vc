<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <div :class="$style.container">
                <VcDualPane :layout="layout">
                    <template #panel1>
                        <div v-for="value in 30" :key="value">{{ value }}</div>
                    </template>
                    <template #panel2>
                        <div>快过年了</div>
                    </template>
                </VcDualPane>
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="布局">
            <VcChoice v-model="layout" :options="layouts" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoice from '@/components/choice/choice.vue'
import VcDualPane from '../dual-pane.vue'

const layouts = [
    { label: '水平', value: 'horizontal' },
    { label: '垂直', value: 'vertical' },
]

const layout = ref<'horizontal' | 'vertical'>('horizontal')
</script>

<style lang="scss" module>
.container {
    height: 250px;
    border: var(--el-descriptions-table-border);
}
</style>
