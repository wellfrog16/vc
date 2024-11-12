<template>
    <HDialog
        v-model="dialogVisible"
        title="拍照上传"
        :close-on-click-modal="false"
        :width="dialogWidth"
        :show-close="false"
        append-to-body
        destroy-on-close
        :show-fullscreen="false"
    >
        <div v-loading="loading" :class="$style.window" :style="windowStyle">
            <ElImage v-show="imageVisible" :src="blobImage" fit="contain" />
            <video v-show="videoVisible" ref="elVideo" :width="width" :height="height" muted />
            <canvas v-show="canvasVisible" ref="elCanvas" :width="width" :height="height" />
            <div v-show="alert.visible" :class="$style.alert">
                <Transition mode="out-in">
                    <ElAlert
                        title="提示"
                        :type="alert.type"
                        center
                        show-icon
                        :closable="false"
                        :description="alert.description"
                    />
                </Transition>
            </div>
            <!-- 操作区 -->
            <div v-show="placeholderVisible" :class="[{ [$style['placeholder-opacity']]: placeholderOpacity }, $style.placeholder]">
                <div v-if="cameraVisible" @click="handleOpenCamera">
                    <ElIcon><Camera /></ElIcon>
                </div>
                <HUploadFile
                    v-if="uploadVisible"
                    :http-request="handleHttpRequest"
                    type="button"
                    @error="handleError"
                >
                    <span><ElIcon><Upload /></ElIcon></span>
                </HUploadFile>
            </div>
            <HCropper v-if="cropper" v-model:visible="cropperVisible" :image="blobImage" :option="cropperOption" dialog @finished="handleFinished" />
        </div>
        <template #footer>
            <div :class="$style.footer">
                <ElSelect v-if="cameraVisible" v-model="currentCamera" :class="$style.select">
                    <ElOption
                        v-for="item in cameras"
                        :key="item.deviceId"
                        :label="item.label"
                        :value="item.deviceId"
                    />
                </ElSelect>
                <span v-else />
                <div>
                    <ElButton v-show="!videoVisible" @click="handleClose">取消</ElButton>
                    <ElButton v-show="videoVisible" :loading="loading" @click="handleBack">返回</ElButton>
                    <ElButton v-show="videoVisible" :loading="loading" type="primary" @click="handleShoot">拍摄</ElButton>
                    <ElButton v-show="confirmVisible && cropper" @click="handleCropperOpen">裁剪</ElButton>
                    <ElButton v-show="confirmVisible" :loading="loading" type="primary" @click="handleSave">保存</ElButton>
                </div>
            </div>
        </template>
    </HDialog>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import { defaultWindow, file } from '@wfrog/utils'
import { ElAlert, ElButton, ElIcon, ElImage, ElOption, ElSelect, vLoading } from 'element-plus'
import { Camera, Upload } from '@element-plus/icons-vue'
import { useDevicesList, useUserMedia } from '@vueuse/core'
import HUploadFile from '@/components/upload-file/index.vue'
import HCropper from '@/components/cropper/index.vue'
import { TYPE_CAMERA, TYPE_UPLOAD, WINDOW_CANVAS, WINDOW_IMAGE, WINDOW_PLACEHOLDER, WINDOW_VIDEO } from './data'
import HDialog from '../dialog/index.vue'
import type { AlertProps } from 'element-plus/es/components/alert'
import type { PropType } from 'vue'
import type ICropper from 'cropperjs'

const props = defineProps({
    visible: { type: Boolean, required: true },
    type: { type: Array as PropType<('upload' | 'camera')[]>, default: () => [TYPE_UPLOAD, TYPE_CAMERA] }, // 功能默认包含 上传和拍照
    width: { type: Number, default: 600 },
    fixWidth: { type: Number, default: 32 },
    height: { type: Number, default: 400 },
    accept: { type: String, default: '.jpg,.jpeg,.png' },
    cropper: { type: Boolean, default: true },
    cropperOption: { type: Object as PropType<ICropper.Options>, default: () => { } },
})

const emits = defineEmits(['update:visible', 'close', 'error', 'save'])

// 常量
const TIPS_SHOOT_SUCCESS = '照片拍摄成功'

const currentCamera = ref<string>()
const { videoInputs: cameras } = useDevicesList({
    requestPermissions: true,
    onUpdated() {
        if (!cameras.value.find(i => i.deviceId && i.deviceId === currentCamera.value)) { currentCamera.value = cameras.value[0]?.deviceId }
    },
})
const { stream, start, stop, enabled } = useUserMedia({
    constraints: {
        video: { deviceId: currentCamera.value },
    },
})
const elVideo = ref()
const elCanvas = ref()
const currentWindow = ref('')
const blobImage = ref('')
const loading = ref(false)
const cropperVisible = ref(false)
const alert = reactive<{ visible: boolean; type: AlertProps['type']; description: string }>({ visible: false, type: 'success', description: '' })
let myFile: File

const dialogWidth = computed(() => `${props.width + props.fixWidth}px`) // 对话框宽度
const windowStyle = computed(() => ({ width: `${props.width}px`, height: `${props.height}px` })) // 窗口样式
const cameraVisible = computed(() => props.type.includes(TYPE_CAMERA) && currentCamera.value) // 开启摄像头可见
const uploadVisible = computed(() => props.type.includes(TYPE_UPLOAD)) // 上传按钮可见
const imageVisible = computed(() => currentWindow.value === WINDOW_IMAGE) // 图片窗口可见
const canvasVisible = computed(() => currentWindow.value === WINDOW_CANVAS) // 拍摄结果窗口可见
const videoVisible = computed(() => currentWindow.value === WINDOW_VIDEO) // 拍摄窗口可见
const placeholderVisible = computed(() => currentWindow.value === WINDOW_PLACEHOLDER || imageVisible.value || canvasVisible.value) // 提示操作窗口可见
const placeholderOpacity = computed(() => currentWindow.value === WINDOW_PLACEHOLDER) // 提示操作窗口透明的设置

// 保存按钮可见
const confirmVisible = computed(() => {
    // 已经获得待上传图片或者拍摄过
    const haveSource = !!blobImage.value

    // 在资源窗口
    const myWindow = [WINDOW_CANVAS, WINDOW_IMAGE].includes(currentWindow.value)

    return haveSource && myWindow
})

watch(stream, () => {
    if (elVideo.value && stream.value) {
        elVideo.value.srcObject = stream.value
        elVideo.value.play()
        loading.value = false
    }
})

const dialogVisible = computed({
    get: () => props.visible,
    set: val => {
        emits('update:visible', val)
        if (!val) { emits('close') }
    },
})

// 提示显示
const showAlert = (type: AlertProps['type'], description: string) => {
    alert.visible = true
    alert.description = description
    alert.type = type
    setTimeout(() => { alert.visible = false }, 1500)
}

const handleClose = () => { dialogVisible.value = false }

// 切换窗口显示类型
const toggleWindow = (type: string) => {
    currentWindow.value = type
}

const initWindow = () => {
    toggleWindow(WINDOW_PLACEHOLDER)
    blobImage.value = ''
}

watch(dialogVisible, val => {
    val ? initWindow() : stop()
})

const handleBack = () => {
    if (blobImage.value) {
        toggleWindow(WINDOW_IMAGE)
        return
    }
    toggleWindow(WINDOW_PLACEHOLDER)
}

const handleSave = () => {
    emits('save', myFile, blobImage.value)
    handleClose()
}

const handleOpenCamera = () => {
    loading.value = true
    toggleWindow(WINDOW_VIDEO)
    if (enabled.value) {
        loading.value = false
        return
    }
    start()
}

const handleShoot = () => {
    if (!defaultWindow) { return }
    toggleWindow(WINDOW_CANVAS)
    const context = elCanvas.value.getContext('2d')
    context.drawImage(elVideo.value, 0, 0, props.width, props.height)
    myFile = file.dataURLToFile(elCanvas.value.toDataURL(), 'camera.png')
    const localUrl = defaultWindow.URL.createObjectURL(myFile)
    blobImage.value = localUrl
    showAlert('success', TIPS_SHOOT_SUCCESS)
}

const handleHttpRequest = (file: File, done: () => void, localUrl: string) => {
    done()
    toggleWindow(WINDOW_IMAGE)
    blobImage.value = localUrl
    myFile = file
}

const handleError = (message: string) => emits('error', message)

const handleCropperOpen = () => {
    cropperVisible.value = true
}

const handleFinished = (canvas: any, blob: Blob) => {
    if (!defaultWindow) { return }
    myFile = file.blobToFile(blob, 'cropper.png')
    const localUrl = defaultWindow.URL.createObjectURL(myFile)
    blobImage.value = localUrl
    toggleWindow(WINDOW_IMAGE)
}
</script>

<style lang="scss" module>
.window {
    position: relative;
    box-shadow: 0 0 1px;

    > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}

div.alert {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    width: 200px;
    height: initial;
    transform: translate(-50%, -50%);
}

.placeholder {
    z-index: 10;
    display: flex;
    background-color: rgb(0 0 0 / 20%);
    opacity: 0;
    transition: 0.3s all linear;

    &:hover {
        opacity: 1;
    }

    > div {
        position: relative;
        display: flex;
        flex: 1 0 50%;
        align-items: center;
        justify-content: center;
        color: rgb(0 0 0 / 20%);
        cursor: pointer;
        transition: 0.3s all linear;

        i {
            font-size: 72px;
            color: rgb(255 255 255 / 90%);
            transition: 0.3s all linear;
        }

        &:hover {
            background-color: rgb(0 0 0 / 40%);

            i {
                transform: scale(1.2);
            }
        }
    }

    :global {
        .el-upload {
            width: 100%;
            height: 100%;
        }
    }
}

.placeholder-opacity {
    opacity: 1;
}

.footer {
    display: flex;
    justify-content: space-between;
}

.select {
    flex: 0 0 50%;
}
</style>
