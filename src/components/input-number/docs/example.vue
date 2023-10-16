<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HInputNumber v-model="result" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HInputNumber from '../index.vue'

const result = ref(1)
</script>
