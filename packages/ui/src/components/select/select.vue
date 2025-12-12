<template>
    <ElSelect collapse-tags v-bind="$attrs" :class="className" :options="myOptions" />
</template>

<script lang="ts" setup>
import type { SelectProps } from 'element-plus'
import type { ISelectProps } from './select'

const props = withDefaults(defineProps<ISelectProps>(), {
    block: false,
    width: '',
})

const myOptions = computed(() => {
    if (Array.isArray(props.options) && typeof props.options[0] === 'string') {
        return props.options.map(item => ({ label: item, value: item }))
    }
    return props.options as SelectProps['options']
})

const $style = useCssModule()
const className = computed(() => ({
    [$style.select]: true,
    [$style.block]: props.block,
}))

const myWidth = computed(() => {
    return props.width || (props.block ? '100%' : '240px')
})
</script>

<style lang="scss" module>
div.select {
    width: unset;
    min-width: v-bind(myWidth);

    &.block {
        display: block;
        width: v-bind(myWidth);
    }
}
</style>
