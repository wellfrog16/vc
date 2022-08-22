<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HChoiceBoolean v-model="result" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">{{ result }}</ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoiceBoolean from '../index.vue'

const result = ref<boolean>(false)
</script>
