<template>
    <Icon :icon="name" :class="$style.icon" :style="{ fontSize: mySize, color }" />
</template>

<script setup lang="ts">
import type { IIconifyIconProps } from './iconify-icon'
import { Icon } from '@iconify/vue'

const props = withDefaults(defineProps<IIconifyIconProps>(), { color: '', size: '' })

const mySize = computed(() => {
    if (props.size && Number.isNaN(+props.size)) { return props.size }
    return `${props.size}px`
})
</script>

<style lang="scss" module>
.icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    fill: currentcolor;
    vertical-align: middle;
    font-size: 1em;
    display: inline-flex;
    vertical-align: -0.17em;
}
</style>
