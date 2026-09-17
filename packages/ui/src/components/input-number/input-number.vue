<template>
    <div ref="inputNumberRef" :class="mainClass">
        <div v-if="$slots.prepend" class="el-input-group__prepend"><slot name="prepend" /></div>
        <ElInputNumber
            v-if="visible"
            v-model="myValue"
            step-strictly
            :size="size"
            :class="[inputNumberClass, $style['el-input-number']]"
            :controls-position="myControlsPosition"
            disabled-scientific
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
    </div>
</template>

<script lang="ts" setup>
import type { IInputNumberEmits, IInputNumberProps } from './input-number'
import { formatToPx } from '@/utils'

const props = withDefaults(defineProps<IInputNumberProps>(), {
    width: 'auto',
    disabled: undefined,
})
const emits = defineEmits<IInputNumberEmits>()

const $slots = useSlots()
const $style = useCssModule()
const visible = ref(true)
const inputNumberRef = useTemplateRef('inputNumberRef')

const mainClass = computed(() => {
    const className = {
        [$style['input-number']]: true,
        [$style['input-number-width']]: !!props.width,
        'el-input': true,
        'el-input-group--prepend': $slots.prepend,
        'input-with-select': inputNumberRef.value?.querySelector('.el-input-group__prepend>.el-select'),
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

    &:global(.el-input-group--prepend :not(.el-select) .el-input__wrapper) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    &:global(.el-input-group--prepend div.el-select .el-input__wrapper) {
        $border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
        box-shadow: 0 0 0 0;

        border-radius: $border-radius 0 0 $border-radius;
    }

    &:global(.input-with-select .el-input-group__prepend) {
        background-color: var(--el-fill-color-blank);
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
