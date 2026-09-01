<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcThousandSeparator :value="value" :decimal-places="decimalPlaces" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：小数位数">
            <VcInputNumber v-model="decimalPlaces" width="200px" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcInputNumber from '@/components/input-number/input-number.vue'
import VcThousandSeparator from '../thousand-separator.vue'

const value = ref('123456789')
const decimalPlaces = ref(2)
</script>
