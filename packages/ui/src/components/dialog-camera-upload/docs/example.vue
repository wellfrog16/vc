<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <ElButton @click="handleClick">打开</ElButton>
            <HDialogCameraUpload
                v-model:visible="visible"
                :type="type"
                :cropper="cropper"
                @save="handleSave"
            />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="获取的图片"><ElImage v-if="result" :src="result" :class="$style.image" /></ElDescriptionsItem>
        <ElDescriptionsItem label="本地Blob地址"><span>{{ result }}</span></ElDescriptionsItem>
        <ElDescriptionsItem label="参数：类型">
            <HChoice v-model="type" :options="['upload', 'camera']" multiple />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="参数：裁剪">
            <HChoiceBoolean v-model="cropper" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import HChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import HChoice from '@/components/choice/choice.vue'
import HDialogCameraUpload from '../dialog-camera-upload.vue'

const result = ref('')
const visible = ref(false)
const cropper = ref(true)
const type = ref<('upload' | 'camera')[]>(['upload', 'camera'])

function handleClick() {
    visible.value = true
}

function handleSave(_file: File, localUrl: string) {
    result.value = localUrl
}
</script>

<style lang="scss" module>
.image {
    height: 200px;
}
</style>
