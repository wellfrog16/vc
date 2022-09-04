<template>
    <ElUpload
        v-loading="loading"
        :class="[$style.uploader, `upload-type-${type}`]"
        action=""
        :show-file-list="false"
        :accept="accept"
        :http-request="handleHttpRequest"
        :before-upload="handleBeforeUpload"
    >
        <template v-if="isImageType">
            <ElImage v-if="hasImage" :src="imgOptions.src" :fit="imgOptions.fit" :style="imageSizeStyle" :class="$style.photo">
                <template #placeholder>加载中</template>
            </ElImage>
            <HElIcon v-else :name="imgOptions.icon" :class="[$style.icon]" :style="iconSizeStyle" />
        </template>
        <template v-if="isButtonType">
            <slot><HButton :size="btnOptions.size" :type="btnOptions.type" :icon="{ name: btnOptions.icon }">{{ btnOptions.text }}</HButton></slot>
        </template>
    </ElUpload>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElImage, ElUpload, vLoading } from 'element-plus'
import HElIcon from '@/components/el-icon/index.vue'
import HButton from '@/components/button/index.vue'
import myProps, { buttonOptions, imageOptions } from './props'
import type { UploadRawFile } from 'element-plus/es/components/upload/src/upload'

const props = defineProps(myProps)
const emits = defineEmits(['error'])

const loading = ref(false)
const imgSrc = ref('') // 上传图片的本地url

const imgOptions = computed(() => {
    const options = { ...imageOptions, ...props.imageOptions }
    if (imgSrc.value) { options.src = imgSrc.value }
    return options
})
const btnOptions = computed(() => ({ ...buttonOptions, ...props.buttonOptions }))

const hasImage = computed(() => !!imgOptions.value.src)
const imageSizeStyle = computed(() => {
    const options = imgOptions.value
    return {
        'width': options.width,
        'height': options.height,
        'line-height': options.height,
    }
})
const iconSizeStyle = computed(() => {
    const options = imgOptions.value
    return {
        'width': options.width,
        'height': options.height,
        'line-height': options.height,
        'font-size': `${options.iconSize}px`,
    }
})
const isImageType = computed(() => props.type === 'image')
const isButtonType = computed(() => props.type === 'button')

const handleBeforeUpload = (file: UploadRawFile) => {
    if (file.size > props.maxSize) {
        const message = `文件大小不能超过 ${props.maxSize / 1024 / 1024}M`
        emits('error', message)
        return false
    }

    if (props.beforeUpload) {
        if (props.beforeUpload(file)) {
            loading.value = true
            return true
        }
        return false
    }

    loading.value = true
    return true
}

const handleHttpRequest: any = ({ file }: { file: File }) => {
    if (props.httpRequest) {
        const localUrl = window.URL.createObjectURL(file)
        const done = () => {
            imgSrc.value = localUrl
            loading.value = false
        }
        props.httpRequest(file, done, localUrl)
    }
}
</script>

<style lang="scss" module>
.uploader {
    display: inline-block;

    :global(.el-upload) {
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }

    &:global(.upload-type-image .el-upload) {
        font-size: 0;
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;

        &:hover {
            border-color: var(--el-color-primary);
        }
    }
}

.icon {
    color: var(--el-color-text-secondary);
    text-align: center;

    &:hover {
        color: var(--el-color-primary);
    }
}

.photo {
    display: block;

    img {
        border-radius: 6px;
    }
}
</style>
