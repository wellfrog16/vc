<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HDaterangePicker v-model="result" :limit-days="limitDays" :include-today="includeToday" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：限制天数">
            <ElInputNumber v-model="limitDays" :min="-10" :max="10" :precision="0" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：当天">
            <ElCheckbox v-model="includeToday">包含当天</ElCheckbox>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ result }}</span></ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElCheckbox, ElDescriptionsItem, ElInputNumber } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HDaterangePicker from '../index.vue'

const result = ref<string[]>(['', ''])
const limitDays = ref(5)
const includeToday = ref(false)
</script>
