<template>
    <svg class="svg-icon" :class="[$style.icon]" aria-hidden="true" :style="{ fontSize: size, color }">
        <slot><use :xlink:href="`#icon-${props.name}`" /></slot>
    </svg>
</template>

<script lang="ts" setup>
import type { ISVGIconProps } from './svg-icon'

const props = defineProps<ISVGIconProps>()
</script>

<style lang="scss" module>
.icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    font-size: 1em;
    vertical-align: -0.15em;
    fill: currentcolor;
}
</style>
