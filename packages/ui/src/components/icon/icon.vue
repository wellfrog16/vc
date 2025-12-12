<template>
    <i class="svg-icon-box" :class="[$style.box]" :style="{ fontSize: mySize, color }">
        <component :is="components[type]" :name="name" class="site-icon" />
    </i>
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

<style lang="scss" module>
.box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    vertical-align: middle;
}
</style>
