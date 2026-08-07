<template>
    <ElSelect collapse-tags :popper-class="$style.popper" :class="className" :options="myOptions" />
</template>

<script lang="ts" setup>
import type { SelectProps } from 'element-plus'
import type { ISelectProps } from './select'
import { formatToPx } from '@/utils'

const props = withDefaults(defineProps<ISelectProps>(), {
    width: '',
    disabled: undefined,
})

const myOptions = computed(() => {
    if (Array.isArray(props.options) && typeof props.options[0] === 'string') {
        return props.options.map(item => ({ label: item, value: item }))
    }
    return props.options as SelectProps['options']
})

const $style = useCssModule()
const className = computed(() => ({
    [$style['select-width']]: !!props.width,
    [$style.select]: true,
}))
const myWidth = computed(() => props.width ? formatToPx(props.width) : 'auto')
</script>

<style lang="scss" module>
.popper {
    :global(.el-select-dropdown__item.is-hovering) {
        background-color: var(--vc-highlight-bg-color, var(--el-fill-color-light));
    }
}

div.select-width {
    width: v-bind(myWidth);
}
</style>
