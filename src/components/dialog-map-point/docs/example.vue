<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <ElButton @click="handleClick">打开</ElButton>
            <HDialogMapPoint
                v-model="result"
                v-model:visible="visible"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            <p>{{ result }}</p>
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HDialogMapPoint from '../index.vue'

const result = ref({ lng: '', lat: '' })
const visible = ref(false)

const handleClick = () => {
    visible.value = true
}
</script>
