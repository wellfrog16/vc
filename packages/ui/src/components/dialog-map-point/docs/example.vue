<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <ElButton @click="handleClick">打开</ElButton>
            <VcDialogMapPoint v-model="result" v-model:visible="visible" ak="rrK5thxGKxN45pnaH2Gd0ZxyFkr8MaTl" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果"><span>{{ `lng: ${result.lng}, lat: ${result.lat}` }}</span></ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcDialogMapPoint from '../dialog-map-point.vue'

const result = ref({ lng: 0, lat: 0 })
const visible = ref(false)

function handleClick() {
    visible.value = true
}
</script>
