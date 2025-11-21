<template>
    <i class="svg-icon-box" :class="[$style.box]">
        <component :is="`h-${type}`" :name="name" class="site-icon" />
    </i>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import HAwesome from '../awesome-icon/awesome-icon.vue'
import HEl from '../el-icon/el-icon.vue'
import HSvg from '../svg-icon/svg-icon.vue'

export default defineComponent({
    components: { HEl, HSvg, HAwesome },
    props: {
        name: { type: String, required: true },
        type: { type: String as PropType<IGlobal.IconType>, required: true },
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
