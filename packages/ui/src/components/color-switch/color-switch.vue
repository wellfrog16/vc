<template>
    <el-popover placement="bottom" trigger="click" width="auto" @show="colorPickerRef?.update()">
        <template #reference>
            <i :class="$style['color-switch']"><VcIconifyIcon name="carbon:color-palette" :size="size" /></i>
        </template>

        <!-- 改动：用 :is 渲染，组件类型被显式收窄 -->
        <component :is="ColorPickerPanel" ref="colorPickerRef" v-model="themeColor" :predefine="[...PRESET_COLORS]" :border="false" show-alpha />
    </el-popover>
</template>

<script setup lang="ts">
import type { DefineComponent } from 'vue'
import type { IColorSwitchEmits, IColorSwitchProps } from './color-switch'
import { ElColorPickerPanel } from 'element-plus'
import { throttle } from 'lodash-es'
import VcIconifyIcon from '@/components/iconify-icon/iconify-icon.vue'
import { PRESET_COLORS, useTheme } from './color-switch'

const props = withDefaults(defineProps<IColorSwitchProps>(), {
    darkStorageKey: 'vc-dark',
    storageKey: 'vc-primary-color',
    size: 28,
})
const emits = defineEmits<IColorSwitchEmits>()

// The inferred type of 'default' cannot be named without a reference to '.pnpm/@ctrl+tinycolor@4.2.1/node_modules/@ctrl/tinycolor'. This is likely not portable. A type annotation is necessary.
// 由于上面这条报错信息，使用下面的方法解决，并使用 component :is 来渲染
// 关键：运行时还是 ElColorPickerPanel，但编译期类型被收窄成我们声明的 props
interface PickerPanelProps {
    modelValue?: string
    predefine?: string[]
    border?: boolean
    showAlpha?: boolean
}

// 规避 vue-tsc d.ts 生成时 TS2742：element-plus 内部类型引用 @ctrl/tinycolor 不可移植
const ColorPickerPanel = ElColorPickerPanel as unknown as DefineComponent<PickerPanelProps>

interface ColorPickerPanelExposed {
    update: () => void
}
const colorPickerRef = useTemplateRef<ColorPickerPanelExposed>('colorPickerRef')

const { themeColor, setTheme } = useTheme(props.storageKey, props.darkStorageKey)
const throttleSetTheme = throttle((val: string) => {
    setTheme(val)
    emits('change', val)
}, 1000)

watch(themeColor, (val: string) => throttleSetTheme(val))
</script>

<style lang="scss" module>
.color-switch {
    display: inline-flex;
    cursor: pointer;
}
</style>
