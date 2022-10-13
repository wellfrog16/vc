<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <ElButton @click="handleClick">打开</ElButton>
            <HDialogCameraUpload
                v-model:visible="visible"
                :http-request="httpRequest"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="获取的图片"><ElImage :src="result" :class="$style.image" /></ElDescriptionsItem>
        <ElDescriptionsItem label="本地Blob地址"><span>{{ result }}</span></ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDescriptionsItem, ElImage } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HDialogCameraUpload from '../index.vue'

const result = ref('')
const visible = ref(false)

const handleClick = () => {
    visible.value = true
}

const httpRequest = (file: File, localUrl: string) => {
    result.value = localUrl
}
</script>

<style lang="scss" module>
.image {
    height: 200px;
}
</style>
