<template>
    <i :class="$style['dark-switcher']"><VcIconifyIcon :name="iconName" :size="size" @click="handleToggle" /></i>
</template>

<script setup lang="ts">
import type { IDarkSwitcherEmits, IDarkSwitcherProps } from './dark-switcher'
import { useDark, useToggle } from '@vueuse/core'
import VcIconifyIcon from '@/components/iconify-icon/iconify-icon.vue'

const props = withDefaults(defineProps<IDarkSwitcherProps>(), {
    initialValue: 'auto',
    size: 28,
    storageKey: 'vc-dark',
    duration: 850,
})

const emits = defineEmits<IDarkSwitcherEmits>()

const isDark = useDark({ storageKey: props.storageKey, initialValue: props.initialValue })
const toggleDark = useToggle(isDark)
const iconName = computed(() => isDark.value ? 'carbon:sun' : 'carbon:moon')

function handleToggle(e: MouseEvent) {
    // @ts-expect-error startViewTransition
    const isAppearanceTransition = document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isAppearanceTransition || !e) {
        toggleDark()
        return
    }
    const x = e.clientX
    const y = e.clientY
    const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
    )
    const transition = document.startViewTransition(async () => {
        toggleDark()
        await nextTick()
    })
    transition.ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ]
        const animate = document.documentElement.animate(
            {
                clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
            },
            {
                duration: props.duration,
                easing: 'ease-in',
                pseudoElement: isDark.value
                    ? '::view-transition-old(root)'
                    : '::view-transition-new(root)',
            },
        )
        animate.onfinish = () => {
            transition.skipTransition()
            emits('change', isDark.value)
        }
    })
}
</script>

<style lang="scss" module>
:global {
    // 黑暗模式下，让旧节点的层级变高，否则会导致动画播放不了
    html.dark::view-transition-old(root) {
        z-index: 10000;
    }

    // 关闭默认动画，否则影响自定义动画的执行
    ::view-transition-new(root),
    ::view-transition-old(root) {
        animation: none !important;
    }
}

.dark-switcher {
    display: inline-flex;
    cursor: pointer;
}
</style>
