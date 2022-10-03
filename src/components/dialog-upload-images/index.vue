<template>
    <ElDialog
        v-model="dialogVisible"
        title="上传图片"
        :close-on-click-modal="false"
        :custom-class="`${$style.dialog} or-dialog`"
        :width="660"
        :show-close="false"
        :destroy-on-close="destroyOnClose"
        append-to-body
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
                    <HElIcon name="Plus" />
                </ElUpload>
            </template>
            <template #item="{ element }">
                <div class="el-upload-list__item">
                    <img class="el-upload-list__item-thumbnail" :src="getImgUrl(element)">
                    <span class="el-upload-list__item-actions" :class="[$style.opration]">
                        <HElIcon name="ZoomIn" @click="handleOnPreview(element)" />
                        <HElIcon name="Delete" @click="handleOnRemove(element)" />
                    </span>
                </div>
            </template>
        </Draggable>
        <template #footer>
            <ElButton type="primary" :loading="loading" @click="handleConfirm">确 定</ElButton>
        </template>
    </ElDialog>
</template>

<script lang="ts" setup>
import { computed, ref, shallowRef } from 'vue'
import Draggable from 'vuedraggable'
import { ElButton, ElDialog, ElUpload, vLoading } from 'element-plus'
import { defaultWindow } from '@wfrog/utils'
import HElIcon from '@/components/el-icon/index.vue'
import myProps from './props'
import type { IUploadFile } from './props'
import type { UploadRequestOptions } from 'element-plus'
import type { UploadRawFile } from 'element-plus/es/components/upload/src/upload'

const props = defineProps(myProps)
const emits = defineEmits(['update:visible', 'update:modelValue', 'error', 'close'])

const loading = ref(false)
const imgList = shallowRef<(File | IUploadFile)[]>(props.modelValue) // 已上传的文件列表

const dialogVisible = computed({
    get: () => props.visible,
    set: val => {
        emits('update:visible', val)
        if (!val) { emits('close') }
    },
})

const getImgUrl = (file: IUploadFile | File) => {
    if (!defaultWindow) { return '' }

    const data = file as any
    if (data.url) { return data.url }
    return defaultWindow.URL.createObjectURL(data)
}

const handleConfirm = () => {
    emits('update:modelValue', imgList.value)
    dialogVisible.value = false
}

const handleHttpRequest = async ({ file }: UploadRequestOptions) => {
    const myUploadFile = await props.httpRequest(file) || file
    imgList.value = [...imgList.value, myUploadFile]
    loading.value = false
}

const handleBeforeUpload = (file: UploadRawFile) => {
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

const handleBeforeRemove = async (file: File | IUploadFile, fileList: (File | IUploadFile)[]) => {
    if (props.beforeRemove) {
        loading.value = true

        // 用于文件先请求接口删除，真实删除后再在当前上传列表中删除
        const result = await props.beforeRemove(file, fileList)
        loading.value = false
        return result
    }
    return true
}

const handleOnRemove = async (file: File | IUploadFile) => {
    const result = await handleBeforeRemove(file, imgList.value)
    if (!result) { return }

    const index = imgList.value.findIndex(item => item === file)
    imgList.value.splice(index, 1)
    imgList.value = [...imgList.value] // 触发数据绑定
}

const handleOnExceed = () => {
    const message = `文件数量不能超过 ${props.limit} 个`
    emits('error', message)
}

const handleOnPreview = (file: IUploadFile | File) => {
    defaultWindow && defaultWindow.open(getImgUrl(file))
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
}

.upload {
    display: inline-flex;
    margin: 0 5px 5px 0;
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

    :global {
        .el-upload-list__item {
            width: 200px;
            height: 150px;
            margin: 0 5px 5px 0;
        }

        .el-upload-list__item:nth-of-type(3n) {
            margin-right: 0;
        }

        .el-upload-list__item-thumbnail {
            object-fit: contain;
        }
    }
}
</style>
