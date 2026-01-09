<template>
    <div :class="$style.wrapper" @mousemove="dragMoving" @mouseup="dragFinished" @mouseleave="dragFinished">
        <div :class="[$style.progress, { [$style.animate]: isSwiped, [$style.success]: isSuccess }]" />
        <div :class="[$style.text, { [$style.animate]: !isSuccess }]">
            <span :class="{ [$style['text-transform']]: stopToCheck && isSuccess, [$style.success]: isSuccess }">{{ myText }}</span>
        </div>

        <div :class="[$style.slider, { [$style.animate]: isSwiped }]" @mousedown.prevent="dragStart">
            <el-icon :size="20" :color="isSuccess ? background[2] : textColor">
                <CircleCheck v-if="isSuccess" />
                <DArrowRight v-else />
            </el-icon>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { IDragVerifyTextProps } from '../drag-verify'
import { CircleCheck, DArrowRight } from '@element-plus/icons-vue'
import { inRange } from '@wfrog/vc-utils'

const props = defineProps<IDragVerifyTextProps>()
const emits = defineEmits<{
    (e: 'success'): void
    (e: 'failed'): void
    (e: 'update:success', success: boolean): void
    (e: 'dragStart', startX: number): void
    (e: 'dragMoving', moveX: number): void
    (e: 'dragFinished', moveX: number): void
    (e: 'dragEnd', currentX: number): void
}>()

const isMoving = ref(false)
const startX = ref(0)
const currentX = ref(0)
const isSuccess = ref(false)
const isSwiped = ref(false) // 滑动过，动画后会还原为 false
const mySuccess = useVModel(props, 'success', emits)

const myText = computed(() => isSuccess.value ? props.successText : props.text)
const moveX = computed(() => currentX.value - startX.value)
const halfWidth = computed(() => props.width / 2)
const swipeWidth = computed(() => props.width - props.height)
const mySuccessRange = computed<[number, number]>(() => props.successRange || [swipeWidth.value, 9999])
const sliderLeft = computed(() => {
    if (moveX.value < 0) { return 0 }
    if (moveX.value > swipeWidth.value) { return swipeWidth.value }
    return moveX.value
})

const progressWidth = computed(() => {
    if (moveX.value < 0) { return 0 }
    if (moveX.value > swipeWidth.value) {
        return props.width - props.height / 2
    }
    return moveX.value + props.height / 2
})

const myTextColor = computed(() => isSuccess.value ? '#fff' : props.textColor)

function verify(result: boolean) {
    mySuccess.value = result
    result ? emits('success') : emits('failed')
}

function dragMoving(e: MouseEvent | TouchEvent) {
    if (!isMoving.value || isSuccess.value) { return }
    currentX.value = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX
    emits('dragMoving', moveX.value)
    if (inRange(moveX.value, mySuccessRange.value) && !props.stopToCheck) {
        isSuccess.value = true
        isMoving.value = false
        verify(true)
    }
}

function dragFinished(e: MouseEvent | TouchEvent) {
    if (!isMoving.value || isSuccess.value) { return }

    currentX.value = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX
    isMoving.value = false

    if (!inRange(moveX.value, mySuccessRange.value)) {
        currentX.value = startX.value
        isSwiped.value = true
        setTimeout(() => {
            isSwiped.value = false
            emits('dragFinished', currentX.value)
        }, 500)
        verify(false)
    }
    else {
        isSuccess.value = true
        verify(true)
    }
    emits('dragEnd', currentX.value)
}

function dragStart(e: MouseEvent | TouchEvent) {
    if (isSuccess.value) { return }

    isMoving.value = true
    startX.value = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX
    emits('dragStart', startX.value)
}

function reset() {
    isMoving.value = false
    startX.value = 0
    currentX.value = 0
    isSuccess.value = false
    isSwiped.value = false
    mySuccess.value = false
}

defineExpose({ reset })
</script>

<style lang="scss" module>
@keyframes slidetounlock {
    0% {
        background-position: v-bind('`${-halfWidth}px`') 0;
    }
    100% {
        background-position: v-bind('`${halfWidth}px`') 0;
    }
}

.wrapper {
    --width: v-bind('`${width}px`');
    --height: v-bind('`${height}px`');

    position: relative;
    text-align: center;
    overflow: hidden;
    width: var(--width);
    height: var(--height);
    line-height: var(--height);
    background: v-bind('`${background[0]}`');
    border-radius: v-bind('`${circle ? height / 2 : radius}px`');
    box-shadow: 0 0 3px #ccc;
}

.text {
    position: absolute;
    top: 0px;
    color: transparent;
    user-select: none;
    width: var(--width);
    background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(0, v-bind(myTextColor)),
        color-stop(0.4, v-bind(myTextColor)),
        color-stop(0.5, #fff),
        color-stop(0.6, v-bind(myTextColor)),
        color-stop(1, v-bind(myTextColor))
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-size-adjust: none;

    &.animate {
        animation: slidetounlock 3s infinite;
    }

    span.success {
        color: v-bind(myTextColor);
        -webkit-text-fill-color: v-bind(myTextColor);
    }

    // * {
    //     -webkit-text-fill-color: v-bind(myTextColor);
    // }
}

.text-transform {
    display: inline-flex;
    transform: translateX(v-bind('`${(sliderLeft - width) / 2}px`'));
}

.progress {
    position: absolute;
    height: var(--height);
    width: v-bind('`${progressWidth}px`');
    background: v-bind('`${background[1]}`');
    border-radius: v-bind('`${circle ? `${height / 2}px 0 0 ${height / 2}px` : radius}px`');

    &.animate {
        transition: width 0.5s;
    }

    &.success {
        background: v-bind('`${background[2]}`');
    }
}

.slider {
    position: absolute;
    top: 0px;
    left: v-bind('`${sliderLeft}px`');
    cursor: move;
    width: var(--height);
    height: var(--height);
    background: #fff;
    display: grid;
    place-content: center;

    &.animate {
        transition: left 0.5s;
    }
}
</style>
