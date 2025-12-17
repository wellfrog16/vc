<template>
    <VcDialog
        v-model="dialogVisible"
        title="上传图片"
        :close-on-click-modal="false"
        :class="$style.dialog"
        :width="862"
        :show-close="false"
        :destroy-on-close="destroyOnClose"
        append-to-body
        v-bind="$attrs"
    >
        <Draggable v-model="imgList" item-key="uid" class="el-upload-list--picture-card" :class="[$style.draggable]">
            <template #header>
                <ElUpload
                    v-loading="loading"
                    multiple
                    action=""
                    :file-list="modelValue"
                    :show-file-list="false"
                    :http-request="handleHttpRequest"
                    :before-upload="handleBeforeUpload"
                    accept=".jpg,.jpeg,.png"
                    :class="$style.upload"
                    :limit="limit"
                    :on-exceed="handleOnExceed"
                >
                    <VcElIcon name="Plus" />
                </ElUpload>
            </template>
            <template #item="{ element }">
                <div class="el-upload-list__item">
                    <img class="el-upload-list__item-thumbnail" :src="getImgUrl(element)">
                    <span class="el-upload-list__item-actions" :class="[$style.opration]">
                        <VcElIcon name="ZoomIn" @click="handleOnPreview(element)" />
                        <VcElIcon name="Delete" @click="handleOnRemove(element)" />
                    </span>
                </div>
            </template>
        </Draggable>
        <template #footer>
            <ElButton type="primary" :loading="loading" @click="handleConfirm">确 定</ElButton>
        </template>
    </VcDialog>
</template>

<script lang="ts" setup>
import type { UploadRawFile, UploadRequestOptions } from 'element-plus/es/components/upload/src/upload'
import type { IDialogUploadImagesProps, IUploadFile } from './dialog-upload-images'
import Draggable from 'vuedraggable-es-fix'
import VcDialog from '../dialog/dialog.vue'
import VcElIcon from '../el-icon/el-icon.vue'

const props = withDefaults(defineProps<IDialogUploadImagesProps>(), {
    destroyOnClose: false,
    limit: 5,
    maxSize: 2 * 1024 * 1024,
    beforeUpload: () => true,
    beforeRemove: () => true,
})

const emits = defineEmits<{
    (e: 'update:visible', val: boolean): void
    (e: 'update:modelValue', val: (File | IUploadFile)[]): void
    (e: 'error', message: string): void
    (e: 'close'): void
}>()

const loading = ref(false)
const imgList = shallowRef<(File | IUploadFile)[]>(props.modelValue) // 已上传的文件列表

const dialogVisible = computed({
    get: () => props.visible,
    set: val => {
        emits('update:visible', val)
        if (!val) { emits('close') }
    },
})

function getImgUrl(file: IUploadFile | File) {
    const data = file as any
    if (data.url) { return data.url }
    return window.URL.createObjectURL(data)
}

function handleConfirm() {
    emits('update:modelValue', imgList.value)
    dialogVisible.value = false
}

async function handleHttpRequest({ file }: UploadRequestOptions) {
    const myUploadFile = await props.httpRequest(file) || file
    imgList.value = [...imgList.value, myUploadFile]
    loading.value = false
}

function handleBeforeUpload(file: UploadRawFile) {
    if (file.size > props.maxSize) {
        const message = `文件大小不能超过${props.maxSize / 1024 / 1024}M`
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

async function handleBeforeRemove(file: File | IUploadFile, fileList: (File | IUploadFile)[]) {
    if (props.beforeRemove) {
        loading.value = true

        // 用于文件先请求接口删除，真实删除后再在当前上传列表中删除
        const result = await props.beforeRemove(file, fileList)
        loading.value = false
        return result
    }
    return true
}

async function handleOnRemove(file: File | IUploadFile) {
    const result = await handleBeforeRemove(file, imgList.value)
    if (!result) { return }

    const index = imgList.value.findIndex(item => item === file)
    imgList.value.splice(index, 1)
    imgList.value = [...imgList.value] // 触发数据绑定
}

function handleOnExceed() {
    const message = `文件数量不能超过 ${props.limit} 个`
    emits('error', message)
}

function handleOnPreview(file: IUploadFile | File) {
    window.open(getImgUrl(file))
}
</script>

<style lang="scss" module>
.dialog {
    :global {
        .el-dialog__body {
            max-height: 470px;
            overflow-y: auto;
        }
    }

    &:global(.is-fullscreen) {
        :global(.el-dialog__body) {
            max-height: initial;
        }
    }
}

.upload {
    display: inline-flex;
    line-height: 0;

    :global {
        .el-upload {
            position: relative;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 150px;
            overflow: hidden;
            cursor: pointer;
            border: 1px dashed var(--el-border-color);
            border-radius: 6px;
            transition: var(--el-transition-duration-fast);

            &:hover {
                border-color: var(--el-color-primary);
            }

            .el-icon {
                margin-top: 0;
                font-size: 32px;
            }
        }
    }
}

.opration {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px !important;

    i {
        cursor: pointer;
    }

    > i + i {
        margin-left: 15px;
    }
}

div.draggable {
    display: flex;
    flex-wrap: wrap;
    row-gap: 5px;
    column-gap: 5px;

    :global {
        .el-upload-list__item {
            width: 200px;
            height: 150px;
            margin: 0;
        }

        .el-upload-list__item:nth-of-type(4n) {
            margin-right: 0;
        }

        .el-upload-list__item-thumbnail {
            object-fit: contain;
        }
    }
}
</style>
