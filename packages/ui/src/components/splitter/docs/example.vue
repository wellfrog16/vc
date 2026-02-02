<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <div :class="$style.container">
                <VcSplitter :layout="layout">
                    <VcSplitterPanel>
                        <div v-for="value in 30" :key="value">{{ value }}</div>
                    </VcSplitterPanel>
                    <VcSplitterPanel>
                        <div>快过年了</div>
                    </VcSplitterPanel>
                </VcSplitter>
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="布局">
            <VcChoice v-model="layout" :options="layouts" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoice from '@/components/choice/choice.vue'
import VcSplitterPanel from '@/components/splitter-panel/splitter-panel.vue'
import VcSplitter from '../splitter.vue'

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
