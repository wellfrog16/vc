<template>
    <el-popover placement="bottom" trigger="click" width="auto" @show="colorPickerRef?.update()">
        <template #reference>
            <i :class="$style['color-switch']"><VcIconifyIcon name="carbon:color-palette" :size="size" /></i>
        </template>

        <el-color-picker-panel ref="colorPickerRef" v-model="themeColor" :predefine="[...PRESET_COLORS]" :border="false" show-alpha />
    </el-popover>
</template>

<script setup lang="ts">
import type { IColorSwitchEmits, IColorSwitchProps } from './color-switch'
import { throttle } from 'lodash-es'
import VcIconifyIcon from '@/components/iconify-icon/iconify-icon.vue'
import { PRESET_COLORS, useTheme } from './color-switch'

const props = withDefaults(defineProps<IColorSwitchProps>(), {
    darkStorageKey: 'vc-dark',
    storageKey: 'vc-primary-color',
    size: 28,
})
const emits = defineEmits<IColorSwitchEmits>()

const colorPickerRef = useTemplateRef('colorPickerRef')

const { themeColor, setTheme } = useTheme(props.storageKey, props.darkStorageKey)
const throttleSetTheme = throttle(val => {
    setTheme(val)
    emits('change', val)
}, 1000)

watch(themeColor, val => throttleSetTheme(val))
</script>

<style lang="scss" module>
.color-switch {
    display: inline-flex;
    cursor: pointer;
}
</style>
