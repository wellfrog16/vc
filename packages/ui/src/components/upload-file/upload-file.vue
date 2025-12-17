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
            <VcElIcon v-else :name="imgOptions.icon" :class="[$style.icon]" :style="iconSizeStyle" />
        </template>
        <template v-if="isButtonType">
            <slot><VcButton :size="btnOptions.size" :type="btnOptions.type" :icon="{ name: btnOptions.icon }">{{ btnOptions.text }}</VcButton></slot>
        </template>
        <VcCropper v-if="cropper && image" v-model:visible="visible" :image="image" :option="cropperOption" dialog @finished="handleFinished" @cancel="handleCancel" />
    </ElUpload>
</template>

<script lang="ts" setup>
import type { UploadRawFile } from 'element-plus/es/components/upload/src/upload'
import type { IUploadFileProps } from './upload-file'

import { file } from '@wfrog/vc-utils'
import { ElImage, ElUpload, vLoading } from 'element-plus'
import { computed, nextTick, ref } from 'vue'

import VcButton from '../button/button.vue'
import VcCropper from '../cropper/cropper.vue'
import VcElIcon from '../el-icon/el-icon.vue'
import { buttonOptions, imageOptions } from './upload-file'

const props = withDefaults(defineProps<IUploadFileProps>(), {
    accept: '.jpg,.jpeg,.png',
    type: 'image',
    imageOptions: () => imageOptions,
    buttonOptions: () => buttonOptions,
    maxSize: 2 * 1024 * 1024,
    cropper: false,
    cropperOption: () => ({}),
})

const emits = defineEmits<{
    (e: 'error', message: string): void
}>()

const loading = ref(false)
const imgSrc = ref('') // 上传图片的本地url
const visible = ref(false)
const image = ref<File>()

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

function checkFile(file: UploadRawFile) {
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

function handleBeforeUpload(file: UploadRawFile) {
    const checkResult = checkFile(file)

    if (checkResult && props.cropper) {
        image.value = file
        nextTick(() => {
            visible.value = true
        })
        return false
    }
    return checkResult
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

function handleCancel() {
    loading.value = false
}

function handleFinished(canvas: any, blob: Blob) {
    const myFile = file.blobToFile(blob, 'cropper.jpg')
    handleHttpRequest({ file: myFile })
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
