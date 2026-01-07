<template>
    <div :class="$style.wrapper" @mousemove="dragMoving" @mouseup="dragFinish" @mouseleave="dragFinish">
        <div :class="[$style.progress, { [$style.animate]: isSwiped, [$style.success]: isSuccess }]" />
        <div :class="[$style.text, { [$style.animate]: !isSuccess }]">{{ myText }}</div>

        <div :class="[$style.slider, { [$style.animate]: isSwiped }]" @mousedown.prevent="dragStart">
            <el-icon :size="20" :color="isSuccess ? background[2] : textColor">
                <CircleCheck v-if="isSuccess" />
                <DArrowRight v-else />
            </el-icon>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { IDragVerifyProps } from '../drag-verify'
import { CircleCheck, DArrowRight } from '@element-plus/icons-vue'
import { useVModel } from '@vueuse/core'

const props = defineProps<Required<IDragVerifyProps>>()
const emits = defineEmits<{
    (e: 'success'): void
    (e: 'fail'): void
    (e: 'update:success', success: boolean): void
}>()

const isMoving = ref(false)
const startX = ref(0)
const currentX = ref(0)
const isSuccess = ref(false)
const isSwiped = ref(false)
const mySuccess = useVModel(props, 'success', emits)

const myText = computed(() => isSuccess.value ? props.successText : props.text)
const moveX = computed(() => currentX.value - startX.value)
const halfWidth = computed(() => props.width / 2)
const swipeWidth = computed(() => props.width - props.height)
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
    result ? emits('success') : emits('fail')
}

function dragMoving(e: MouseEvent | TouchEvent) {
    if (!isMoving.value || isSuccess.value) { return }
    currentX.value = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX
    if (moveX.value >= swipeWidth.value) {
        isSuccess.value = true
        isMoving.value = false
        verify(true)
    }
}

function dragFinish(e: MouseEvent | TouchEvent) {
    if (!isMoving.value || isSuccess.value) { return }

    currentX.value = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX
    isMoving.value = false

    if (moveX.value < swipeWidth.value) {
        currentX.value = startX.value
        isSwiped.value = true
        setTimeout(() => { isSwiped.value = false }, 500)
        verify(false)
    }
    else {
        isSuccess.value = true
        verify(true)
    }
}

function dragStart(e: MouseEvent | TouchEvent) {
    if (isSuccess.value) { return }

    isMoving.value = true
    startX.value = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX
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

    * {
        -webkit-text-fill-color: v-bind(myTextColor);
    }
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
