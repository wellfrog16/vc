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
import { ref } from 'vue'
import { ElButton, ElDescriptionsItem, ElImage } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HChoice from '@/components/choice/index.vue'
import HChoiceBoolean from '@/components/choice-boolean/index.vue'
import HDialogCameraUpload from '../index.vue'

const result = ref('')
const visible = ref(false)
const cropper = ref(true)
const type = ref<('upload' | 'camera')[]>(['upload', 'camera'])

const handleClick = () => {
    visible.value = true
}

const handleSave = (file: File, localUrl: string) => {
    result.value = localUrl
}
</script>

<style lang="scss" module>
.image {
    height: 200px;
}
</style>
