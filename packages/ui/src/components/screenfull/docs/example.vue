<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcScreenfull :size="fontsize" :color="myColor" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="大小控制">
            <ElSlider v-model="fontsize" :min="14" :max="40" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="颜色控制">
            <VcChoice v-model="myColor" :options="colors" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoice from '@/components/choice/choice.vue'
import VcScreenfull from '../screenfull.vue'

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
