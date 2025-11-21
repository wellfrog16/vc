<template>
    <Wrapper>
        <ElButton @click="handleClick">打开</ElButton>
        <HDialogMapPoint
            v-model="result"
            v-model:visible="visible"
        />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HDialogMapPoint from '../dialog-map-point.vue'

const result = ref({ lng: 0, lat: 0 })
const visible = ref(false)

function handleClick() {
    visible.value = true
}
</script>
