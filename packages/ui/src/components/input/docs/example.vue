<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HInput v-model="result" :block="isBlock" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：内联/块级">
            <ElSwitch
                v-model="isBlock"
                inactive-text="内联"
                active-text="块级"
                :active-value="true"
                :inactive-value="false"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            {{ result }}
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElDescriptionsItem, ElSwitch } from 'element-plus'
import { ref } from 'vue'

import Wrapper from '@/components/example-wrapper.vue'
import HInput from '../input.vue'

const result = ref('')
const isBlock = ref(false)
</script>
