<template>
    <div ref="inputNumberRef" :class="mainClass">
        <div v-if="$slots.prepend" class="el-input-group__prepend"><slot name="prepend" /></div>
        <ElInputNumber
            v-if="visible"
            v-model="myValue"
            step-strictly
            :size="size"
            :class="[inputNumberClass, $style['el-input-number']]"
            :precision="precision"
            :controls-position="myControlsPosition"
            v-bind="$attrs"
            @keydown="limitInputValue"
            @change="handleChange"
            @blur="handleBlur"
        >
            <template v-if="$slots.prefix" #prefix>
                <slot name="prefix" />
            </template>
            <template v-if="$slots.suffix" #suffix>
                <slot name="suffix" />
            </template>
        </ElInputNumber>
    </div>
</template>

<script lang="ts" setup>
import type { IInputNumberProps } from './input-number'
import { ElInputNumber } from 'element-plus'
import { computed, nextTick, onUnmounted, ref, useCssModule, useSlots, useTemplateRef, watch } from 'vue'

const props = withDefaults(defineProps<IInputNumberProps>(), { precision: 0, inputWidth: '80px' })
const emits = defineEmits<{
    (e: 'update:modelValue', val: number): void
    (e: 'change', currentValue: number, oldValue: number): void
    (e: 'blur', event: Event): void
}>()

const $slots = useSlots()
const $style = useCssModule()
const visible = ref(true)
const inputNumberRef = useTemplateRef('inputNumberRef')

const mainClass = computed(() => {
    const className = {
        [$style['input-number']]: true,
        'el-input': true,
        'el-input-group--prepend': $slots.prepend,
        'input-with-select': inputNumberRef.value?.querySelector('.el-input-group__prepend>.el-select'),
    }
    if (props.size) {
        className[`el-input--${props.size}`] = true
    }
    return className
})

const myControlsPosition = computed(() => ($slots.prepend && props.controlsPosition === undefined) ? 'right' : props.controlsPosition)

const myValue = computed({
    get: () => props.modelValue,
    set: val => {
        const myVal = val === null ? myValue.value : val
        emits('update:modelValue', myVal)
    },
})

function limitInputValue(e: KeyboardEvent) {
    const key = e.key
    if (key === 'e' || key === 'E' || (props.precision === 0 && key === '.')) {
        // e.returnValue = false
        e.preventDefault()
        return false
    }
    return true
}

function handleChange(currentValue: number | undefined, oldValue: number | undefined) {
    myValue.value = currentValue === 0 ? currentValue : (currentValue || oldValue || 0)
    emits('change', myValue.value, oldValue || 0)
}

function rerender() {
    visible.value = false
    nextTick(() => (visible.value = true))
}

function handleBlur(e: Event) {
    const eleInput = inputNumberRef.value?.querySelector('.el-input__inner[type=number]') as HTMLInputElement
    if (eleInput.value === '') { rerender() }
    emits('blur', e)
}

const watchHandler = watch(() => props.precision, val => val === 0 && rerender())
onUnmounted(() => watchHandler.stop())
</script>

<style lang="scss" module>
div.input-number {
    display: inline-flex;
    width: auto;
    padding: 0;

    &:global(.el-input-group--prepend :not(.el-select) .el-input__wrapper) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    &:global(.el-input-group--prepend div.el-select .el-input__wrapper) {
        $border-radius: var(--el-input-border-radius, var(--el-border-radius-base));

        border-radius: $border-radius 0 0 $border-radius;
        box-shadow: 0 0 0 0;
    }

    &:global(.input-with-select .el-input-group__prepend) {
        background-color: var(--el-fill-color-blank);
    }
}

div.el-input-number {
    width: auto;
    line-height: 10px; // 防止上边框消失，10px为小于30px的任意值，无特殊意义

    :global(.el-input__inner) {
        width: v-bind(inputWidth);
    }
}
</style>
