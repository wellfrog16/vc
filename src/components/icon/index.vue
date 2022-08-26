<template>
    <i class="svg-icon-box" :class="[$style.box]">
        <component :is="`h-${type}`" :name="name" class="site-icon" />
    </i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HEl from '../el-icon/index.vue'
import HSvg from '../svg-icon/index.vue'
import HAwesome from '../awesome-icon/index.vue'
import type { PropType } from 'vue'

export default defineComponent({
    components: { HEl, HSvg, HAwesome },
    props: {
        name: { type: String, required: true },
        type: { type: String as PropType<'el' | 'svg' | 'awesome'>, required: true },
    },
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
