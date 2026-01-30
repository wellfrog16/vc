import { useDark, useStorage } from '@vueuse/core'
import { colord } from 'colord'

export interface IColorSwitcherProps {
    darkStorageKey?: string // 暗黑模式的storage key，用以监听用自定义主题色的暗黑颜色来覆盖原有暗黑颜色
    storageKey?: string
    size?: string | number
}

export interface IColorSwitcherEmits {
    (e: 'change', value: string): void
}

export const PRESET_COLORS = [
    '#409EFF', // Element Blue
    '#8B5CF6', // 紫罗兰
    '#EC4899', // 樱花粉
    '#EAB308', // 柠檬黄
    '#0EA5E9', // 天蓝色
    '#22C55E', // 浅绿色
    '#52525B', // 锌色灰
    '#14B8A6', // 深绿色（青）
    '#1D4ED8', // 深蓝色
    '#F97316', // 橙黄色
    '#E11D48', // 玫瑰红
    '#262626', // 中性色（近黑）
    '#475569', // 石板灰
    '#6B7280', // 中灰色
] as const

export const CSS_VARS: Record<string, string> = {
    'primary': '--el-color-primary',
    'light-3': '--el-color-primary-light-3',
    'light-5': '--el-color-primary-light-5',
    'light-7': '--el-color-primary-light-7',
    'light-8': '--el-color-primary-light-8',
    'light-9': '--el-color-primary-light-9',
    'dark-2': '--el-color-primary-dark-2',
}

// RGB 线性混合（等效于 SCSS mix）
function mix(baseColor: string, mixColor: string, weight: number): string {
    const base = colord(baseColor).toRgb()
    const blend = colord(mixColor).toRgb()
    const p = weight / 100

    return colord({
        r: Math.round(base.r * (1 - p) + blend.r * p),
        g: Math.round(base.g * (1 - p) + blend.g * p),
        b: Math.round(base.b * (1 - p) + blend.b * p),
    }).toHex()
}

// Light 模式：向白色偏移（highlight 变亮）
function generateLightTheme(primary: string) {
    return {
        primary,
        'light-3': mix(primary, '#ffffff', 30),
        'light-5': mix(primary, '#ffffff', 50),
        'light-7': mix(primary, '#ffffff', 70),
        'light-8': mix(primary, '#ffffff', 80),
        'light-9': mix(primary, '#ffffff', 90), // 很浅的背景色
        'dark-2': mix(primary, '#000000', 20),
    }
}

// Dark 模式：向深灰（#141414 类似）偏移，避免纯白刺眼
function generateDarkTheme(primary: string) {
    return {
        primary,
        'light-3': mix(primary, '#141414', 30), // 变暗
        'light-5': mix(primary, '#141414', 50),
        'light-7': mix(primary, '#141414', 70),
        'light-8': mix(primary, '#141414', 80),
        'light-9': mix(primary, '#141414', 90), // 深色调背景
        'dark-2': mix(primary, '#ffffff', 20), // active 状态反而变亮
    }
}

export function applyTheme(color: string, isDark: boolean): void {
    const colors: Record<string, string> = isDark ? generateDarkTheme(color) : generateLightTheme(color)
    const root = document.documentElement.style

    Object.keys(CSS_VARS).forEach(key => root.setProperty(CSS_VARS[key], colors[key]))
}

export function useTheme(storageKey: string, darkStorageKey: string) {
    const isDark = useDark({ storageKey: darkStorageKey })
    const themeColor = useStorage(storageKey, PRESET_COLORS[0])

    const setTheme = (color: string): void => {
        if (!color) { return }
        applyTheme(color, isDark.value)
    }

    onBeforeMount(() => setTheme(themeColor.value))
    watch(isDark, dark => applyTheme(themeColor.value, dark))

    return { themeColor, setTheme }
}
