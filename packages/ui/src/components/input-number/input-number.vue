<template>
    <div :class="mainClass">
        <div v-if="$slots.prepend" class="el-input-group__prepend"><slot name="prepend" /></div>
        <ElInputNumber
            v-model="myValue"
            :size="size"
            :class="[inputNumberClass, $style['el-input-number']]"
            :controls-position="myControlsPosition"
            disabled-scientific
            :align="align"
            v-bind="$attrs"
            @change="handleChange"
        >
            <template v-if="$slots.prefix" #prefix>
                <slot name="prefix" />
            </template>
            <template v-if="$slots.suffix" #suffix>
                <slot name="suffix" />
            </template>
        </ElInputNumber>
        <div v-if="$slots.append" class="el-input-group__append"><slot name="append" /></div>
    </div>
</template>

<script lang="ts" setup>
import type { IInputNumberEmits, IInputNumberProps } from './input-number'
import { formatToPx } from '@/utils'

const props = withDefaults(defineProps<IInputNumberProps>(), {
    width: 'auto',
    disabled: undefined,
    align: 'right',
})
const emits = defineEmits<IInputNumberEmits>()

const $slots = useSlots()
const $style = useCssModule()

const mainClass = computed(() => {
    const className = {
        [$style['input-number']]: true,
        [$style['input-number-width']]: !!props.width,
        'el-input': true,
        'el-input-group--prepend': $slots.prepend,
        'el-input-group--append': $slots.append,
    }
    if (props.size) {
        className[`el-input--${props.size}`] = true
    }
    return className
})
const myWidth = computed(() => props.width ? formatToPx(props.width) : 'auto')

const myControlsPosition = computed(() => ($slots.prepend && props.controlsPosition === undefined) ? 'right' : props.controlsPosition)

const myValue = computed({
    get: () => props.modelValue,
    set: val => {
        const myVal = val === null ? myValue.value : val
        emits('update:modelValue', myVal)
    },
})

function handleChange(currentValue: number | undefined, oldValue: number | undefined) {
    myValue.value = currentValue === 0 ? currentValue : (currentValue || oldValue || 0)
    emits('change', myValue.value, oldValue || 0)
}
</script>

<style lang="scss" module>
div.input-number {
    display: flex;
    padding: 0;
    width: auto;

    &:global(.el-input-group--prepend .el-input__wrapper) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    &:global(.el-input-group--append .el-input__wrapper) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
}

div.input-number-width {
    width: v-bind(myWidth);
}

div.el-input-number {
    display: flex;
    width: 100%;
    line-height: 10px; // 防止上边框消失，10px为小于30px的任意值，无特殊意义
}
</style>
