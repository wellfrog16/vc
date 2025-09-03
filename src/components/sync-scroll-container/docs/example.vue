<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <div :class="$style.container">
                <HSyncScrollContainer :shadow="shadow" :border="border">
                    <template #corner>
                        <div>slot: corner</div>
                    </template>
                    <template #sidebar>
                        <div :class="$style.sidebar">slot: sidebar</div>
                    </template>
                    <template #header>
                        <div :class="$style.header">slot: header</div>
                    </template>
                    <div :class="$style.body">slot: default</div>
                </HSyncScrollContainer>
            </div>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：阴影">
            <HChoiceBoolean v-model="shadow" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：边框">
            <HChoiceBoolean v-model="border" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Header 高度">
            <HInputNumber v-model="headerHeight" :step="5" :min="20" :max="100" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Sidebar 宽度">
            <HInputNumber v-model="sidebarWidth" :step="5" :min="80" :max="200" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HInputNumber from '@/components/input-number/index.vue'

import HSyncScrollContainer from '../index.vue'

const shadow = ref(false)
const border = ref(true)
const headerHeight = ref(40)
const sidebarWidth = ref(100)
</script>

<style lang="scss" module>
.container {
    width: 100%;
    height: 300px;
}

.header {
    height: v-bind('`${headerHeight}px`');
}

.sidebar {
    width: v-bind('`${sidebarWidth}px`');
}

.body {
    width: 1000px;
    height: 1000px;
}
</style>
