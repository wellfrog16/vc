<template>
    <Wrapper>
        <VcSplitter>
            <VcSplitterPanel>
                <div v-for="value in 30" :key="value">{{ value }}</div>
            </VcSplitterPanel>
            <VcSplitterPanel>
                <div>快过年了</div>
            </VcSplitterPanel>
        </VcSplitter>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcSplitterPanel from '@/components/splitter-panel/splitter-panel.vue'
import VcSplitter from '../splitter.vue'
</script>
