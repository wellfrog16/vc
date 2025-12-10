<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HScreenfull :size="fontsize" :color="myColor" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="大小控制">
            <ElSlider v-model="fontsize" :min="14" :max="40" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="颜色控制">
            <HChoice v-model="myColor" :options="colors" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElDescriptionsItem, ElSlider } from 'element-plus'
import { ref } from 'vue'

import HChoice from '@/components/choice/choice.vue'
import Wrapper from '@/components/example-wrapper.vue'
import HScreenfull from '../screenfull.vue'

const fontsize = ref(24)
const colors = [
    { label: '粉红', value: 'deeppink' },
    { label: '黄绿', value: 'yellowgreen' },
    { label: '浅蓝', value: 'cornflowerblue' },
    { label: '银色', value: 'silver' },
    { label: '金色', value: 'gold' },
]
const myColor = ref('deeppink')
</script>
