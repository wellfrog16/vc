<template>
    <div :class="mainClass">
        <div v-if="$slots.prepend" class="el-input-group__prepend"><slot name="prepend" /></div>
        <ElInputNumber
            v-model="myValue"
            v-bind="$attrs"
            :size="size"
            step-strictly
            :class="[inputNumberClass, $style['el-input-number']]"
            :precision="precision"
            :controls-position="myControlsPosition"
            @keydown="limitInputValue"
            @change="handleChange"
        />
    </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, useCssModule, useSlots } from 'vue'
import { ElInputNumber } from 'element-plus'

interface IPropType {
    modelValue: number
    precision?: number
    controlsPosition?: 'right' | ''
    size?: 'large' | 'default' | 'small'
    inputNumberClass?: string
    inputWidth?: string
}

const props = withDefaults(defineProps<IPropType>(), { modelValue: 0, precision: 0, inputWidth: '80px' })

const emits = defineEmits<{
    (e: 'update:modelValue', val: number): void
    (e: 'change', currentValue: number, oldValue: number): void
}>()

const $slots = useSlots()
const $style = useCssModule()

const mainClass = computed(() => {
    const className = {
        [$style['input-number']]: true,
        'el-input': true,
        'el-input-group__prepend': $slots.prepend,
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
        emits('update:modelValue', -1234567890) // 无意义，用于触发更新
        nextTick(() => emits('update:modelValue', myVal))
    },
})

const limitInputValue = (e: KeyboardEvent) => {
    const key = e.key
    if (key === 'e' || key === 'E' || (props.precision === 0 && key === '.')) {
        // e.returnValue = false
        e.preventDefault()
        return false
    }
    return true
}

const handleChange = (currentValue: number | undefined, oldValue: number | undefined) => {
    myValue.value = currentValue === 0 ? currentValue : (currentValue || oldValue || 0)
    emits('change', myValue.value, oldValue || 0)
}
</script>

<style lang="scss" module>
.input-number {
    display: inline-flex;
    width: auto;
    padding: 0;

    &:global(.el-input-group__prepend :not(.el-select) .el-input__wrapper) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    &:global(.el-input-group__prepend div.el-select .el-input__wrapper) {
        $border-radius: var(--el-input-border-radius, var(--el-border-radius-base));

        border-radius: $border-radius 0 0 $border-radius;
        box-shadow: 0 0 0 0;
    }
}

.el-input-number {
    width: auto;
    line-height: 10px; // 防止上边框消失，10px为小于30px的任意值，无特殊意义

    :global(.el-input__inner) {
        width: v-bind(inputWidth);
    }
}
</style>
