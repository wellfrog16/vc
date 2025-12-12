<template>
    <Wrapper>
        <ElButton @click="handleClick">打开</ElButton>
        <!-- 需要填写你自己的百度地图 AK 密钥 -->
        <HDialogMapPoint v-model="result" v-model:visible="visible" ak="" />
    </Wrapper>
</template>

<script lang="ts" setup>
import HDialogMapPoint from '../dialog-map-point.vue'

const result = ref({ lng: 0, lat: 0 })
const visible = ref(false)

function handleClick() {
    visible.value = true
}
</script>
