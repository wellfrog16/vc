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
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import Wrapper from '@/components/simple-wrapper.vue'
import HDialogMapPoint from '../index.vue'

const result = ref({ lng: 0, lat: 0 })
const visible = ref(false)

const handleClick = () => {
    visible.value = true
}
</script>
