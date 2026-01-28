<template>
    <div :class="$style.wrapper">
        <div :class="$style.container">
            <img ref="imgRef" crossOrigin="anonymous" :src="imgSrc" style="width:100%" @load="reset">
            <canvas ref="mainRef" class="main-canvas" />
            <canvas ref="moveRef" :class="[$style['move-canvas'], { [$style.animate]: isSwiped }]" />
            <div v-if="refresh && !isSuccess" :class="$style.refresh" @click="setImage">
                <el-icon :size="26"><Refresh /></el-icon>
            </div>
            <div
                v-if="tips && isHandled"
                :class="[$style.tips, { [$style.success]: isSuccess, [$style.danger]: !isSuccess }]"
            >
                {{ isSuccess ? successTips : failedTips }}
            </div>
        </div>
        <Text
            ref="textRef"
            v-bind="props"
            v-model:success="mySuccess"
            :success-range="successRange"
            stop-to-check
            @drag-moving="handleDragMoving"
            @drag-finished="isSwiped = false"
            @failed="handleFailed"
            @success="handleSuccess"
        />
    </div>
</template>

<script lang="ts" setup>
import type { IDragVerifyProps } from '../drag-verify'
import { Refresh } from '@element-plus/icons-vue'
import { draw, getContext } from '../helper'
import Text from './text.vue'

const props = defineProps<Required<IDragVerifyProps>>()
const emits = defineEmits<{
    (e: 'success'): void
    (e: 'failed'): void
    (e: 'update:success', success: boolean): void
}>()

const mainRef = useTemplateRef('mainRef')
const moveRef = useTemplateRef('moveRef')
const imgRef = useTemplateRef('imgRef')
const textRef = useTemplateRef('textRef')

const mySuccess = useVModel(props, 'success', emits)
const isSwiped = ref(false)
const clipBarX = ref(0)
const isSuccess = ref(false)
const imgSrc = ref('')
const isHandled = ref(false) // 是否操作过

const successRange = computed<[number, number]>(() => [clipBarX.value - props.diffWidth, clipBarX.value + props.diffWidth])

function setImage() {
    if (props.imgs.length <= 1) { return }

    const lastImg = imgSrc.value
    do {
        imgSrc.value = props.imgs[Math.floor(Math.random() * props.imgs.length)]
    } while (lastImg === imgSrc.value)
}

function render() {
    const img = imgRef.value!

    const imgWidth = img.width
    const imgHeight = img.height

    const l = props.height
    const r = props.radius

    const halfWidth = Math.floor(props.width / 2)
    const refreshHeight = 25
    const tipHeight = 20
    const maxX = Math.max(0, halfWidth - l - r - 5)
    const x = halfWidth + Math.ceil(Math.random() * maxX)
    const y = refreshHeight + Math.floor(Math.random() * Math.max(0, imgHeight - l - refreshHeight - tipHeight))

    // 设置主画布为图片尺寸并绘制缺口（fill）
    const mainCtx = getContext(imgWidth, imgHeight, mainRef.value!)
    draw(mainCtx, x, y, l, r, 'fill')
    clipBarX.value = x

    // 准备一个临时画布（全图）来裁切拼块
    // 在临时画布上裁剪拼块路径并绘制图片
    const tmpCtx = getContext(imgWidth, imgHeight)
    draw(tmpCtx, x, y, l, r, 'clip')
    tmpCtx.drawImage(img, 0, 0, imgWidth, imgHeight)

    // 计算拼块实际区域并提取像素
    const pieceSize = l + r * 2 + 3
    const pieceX = Math.max(0, x - r - 1)
    const pieceY = Math.max(0, y - r - 1)
    // 安全边界检查
    const sx = Math.min(pieceX, imgWidth - pieceSize)
    const sy = Math.min(pieceY, imgHeight - pieceSize)

    const imageData = tmpCtx.getImageData(sx, sy, pieceSize, pieceSize)

    // 把拼块绘制到显示用的 movecanvas（尺寸为拼块大小）
    const moveCtx = getContext(pieceSize, pieceSize, moveRef.value!)
    moveRef.value!.style.top = `${y - 5}px`
    moveCtx.putImageData(imageData, 0, 0)
}

function handleDragMoving(moveX: number) {
    moveRef.value!.style.left = `${moveX}px`
}

function handleFailed() {
    isSwiped.value = true
    isHandled.value = true
    moveRef.value!.style.left = '0px'
    emits('failed')
}

function handleSuccess() {
    isSuccess.value = true
    isHandled.value = true
    emits('success')
}

function reset() {
    isHandled.value = false
    isSuccess.value = false
    textRef.value?.reset()
    moveRef.value!.style.left = '0px'
    render()
}

defineExpose({ reset: setImage })

onBeforeMount(() => setImage())
</script>

<style lang="scss" module>
.wrapper {
    --width: v-bind('`${width}px`');
    --height: v-bind('`${height}px`');

    position: relative;
    line-height: 0;
}

.container {
    position: relative;
    width: var(--width);
    overflow: hidden;

    canvas {
        position: absolute;
        left: 0;
        top: 0;
    }
}

.refresh {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
    z-index: 5;
    color: var(--el-bg-color);
}

.move-canvas {
    &.animate {
        transition: left 0.5s;
    }
}

.tips {
    position: absolute;
    bottom: 0;
    height: 20px;
    line-height: 20px;
    text-align: center;
    width: 100%;
    font-size: 12px;
    z-index: 5;

    &.success {
        background: rgba(255, 255, 255, 0.7);
        color: var(--el-color-success);
    }
    &.danger {
        background: rgba(0, 0, 0, 0.7);
        color: var(--el-color-warning-light-7);
    }
}
</style>
