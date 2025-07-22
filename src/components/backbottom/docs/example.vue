<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            看右下角
            <HBackbottom :bottom="bottom" :right="right" :visibility-height="visibilityHeight" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：底部距离">
            <ElInputNumber v-model="bottom" :min="0" :precision="0" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：右侧距离">
            <ElInputNumber v-model="right" :min="0" :precision="0" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：可见高度">
            <ElInputNumber v-model="visibilityHeight" :min="0" :precision="0" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem, ElInputNumber } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'

import HBackbottom from '../index.vue'

const bottom = ref(40)
const right = ref(40)
const visibilityHeight = ref(200)
</script>
