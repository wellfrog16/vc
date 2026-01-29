import { useStorage } from '@vueuse/core'
import { colord } from 'colord'

export interface IColorSwitcherProps {
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

export function generateThemeColors(primary: string): Record<string, string> {
    const c = colord(primary)

    return {
        primary,
        'light-3': c.lighten(0.27).saturate(-0.05).toHex(),
        'light-5': c.lighten(0.45).saturate(-0.1).toHex(),
        'light-7': c.lighten(0.63).saturate(-0.15).toHex(),
        'light-8': c.lighten(0.72).saturate(-0.15).toHex(),
        'light-9': c.lighten(0.81).saturate(-0.15).toHex(),
        'dark-2': c.darken(0.18).saturate(0.05).toHex(),
    }
}

export function applyTheme(colors: Record<string, string>): void {
    const root = document.documentElement.style

    Object.keys(CSS_VARS).forEach(key => root.setProperty(CSS_VARS[key], colors[key]))
}

export function useTheme(storageKey: string) {
    const themeColor = useStorage(storageKey, PRESET_COLORS[0])

    const setTheme = (color: string): void => {
        if (!color) { return }
        applyTheme(generateThemeColors(color))
    }

    onBeforeMount(() => setTheme(themeColor.value))

    return { themeColor, setTheme }
}
