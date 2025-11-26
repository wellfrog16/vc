<template>
    <i class="svg-icon-box" :class="[$style.box]" :style="{ fontSize: mySize, color }">
        <component :is="components[type]" :name="name" class="site-icon" />
    </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HAwesome from '../awesome-icon/awesome-icon.vue'
import HEl from '../el-icon/el-icon.vue'
import HSvg from '../svg-icon/svg-icon.vue'

interface IPropType {
    name: string
    type: IGlobal.IconType
    color?: string
    size?: string | number
}

const props = defineProps<IPropType>()
const components = { awesome: HAwesome, el: HEl, svg: HSvg }
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
