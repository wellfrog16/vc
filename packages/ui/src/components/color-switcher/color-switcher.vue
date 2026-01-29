<template>
    <el-popover placement="bottom" trigger="click" width="auto" @show="colorPickerRef?.update()">
        <template #reference>
            <i :class="$style['color-switcher']"><VcIconifyIcon name="carbon:color-palette" :size="size" /></i>
        </template>

        <el-color-picker-panel ref="colorPickerRef" v-model="themeColor" :predefine="[...PRESET_COLORS]" :border="false" show-alpha />
    </el-popover>
</template>

<script setup lang="ts">
import type { IColorSwitcherEmits, IColorSwitcherProps } from './color-switcher'
import { Brush } from '@element-plus/icons-vue'
import { throttle } from 'lodash-es'
import VcIconifyIcon from '@/components/iconify-icon/iconify-icon.vue'
import { PRESET_COLORS, useTheme } from './color-switcher'

const props = withDefaults(defineProps<IColorSwitcherProps>(), {
    storageKey: 'vc-primary-color',
    size: 28,
})
const emits = defineEmits<IColorSwitcherEmits>()

const colorPickerRef = useTemplateRef('colorPickerRef')

const { themeColor, setTheme } = useTheme(props.storageKey)
const throttleSetTheme = throttle(val => {
    setTheme(val)
    emits('change', val)
}, 1000)

watch(themeColor, val => throttleSetTheme(val))
</script>

<style lang="scss" module>
.color-switcher {
    display: inline-flex;
    cursor: pointer;
}
</style>
