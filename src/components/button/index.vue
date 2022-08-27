<template>
    <ElButton v-bind="attrs">
        <HIcon v-if="position === 'left'" :type="type" :name="name" :class="$style.left" />
        <span v-if="$slots.default"><slot /></span>
        <HIcon v-if="position === 'right'" :type="type" :name="name" :class="$style.right" />
    </ElButton>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue'
import { ElButton } from 'element-plus'
import HIcon from '../icon/index.vue'
import type { PropType } from 'vue'
import type { IIconOption } from './index'

const props = defineProps({
    icon: { type: Object as PropType<IIconOption>, required: true },
})

const { icon, ...attrs } = useAttrs()
const { name, type = 'el', position = 'left' } = props.icon
</script>

<style lang="scss" module>
.left {
    margin-right: 0.5em;
}

.right {
    margin-left: 0.5em;
}
</style>
