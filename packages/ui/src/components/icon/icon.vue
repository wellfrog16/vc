<template>
    <component :is="components[type]" :name="name" class="vc-icon" :style="{ fontSize: mySize, color, width: '1em', height: '1em' }" />
</template>

<script setup lang="ts">
import type { IIconProps } from './icon'
import VcAwesome from '../awesome-icon/awesome-icon.vue'
import HEl from '../el-icon/el-icon.vue'
import VcSvg from '../svg-icon/svg-icon.vue'

const props = defineProps<IIconProps>()
const components = { awesome: VcAwesome, el: HEl, svg: VcSvg }
const mySize = computed(() => {
    if (props.size && Number.isNaN(+props.size)) { return props.size }
    return `${props.size}px`
})
</script>
