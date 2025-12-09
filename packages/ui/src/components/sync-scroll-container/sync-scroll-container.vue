<template>
    <div ref="wrapperRef" :class="[$style.wrapper, { [$style.border]: border }]">
        <div ref="headerRef" :class="[$style.header, { [$style.border]: border }]">
            <div :class="[$style.corner, { [$style.shadow]: shadow, [$style.border]: border }]">
                <slot name="corner" />
            </div>
            <div>
                <div ref="headerContainerRef" :class="$style['header-container']"><slot name="header" /></div>
            </div>
        </div>
        <div v-if="shadow" :class="$style['header-shadow']" />
        <div :class="[$style.sidebar, { [$style.shadow]: shadow, [$style.border]: border }]">
            <div ref="sidebarContainerRef"><slot name="sidebar" /></div>
        </div>
        <div :class="$style.container">
            <div :class="$style.body">
                <div ref="bodyContainerRef"><slot /></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ISyncScrollContainerProps } from './sync-scroll-container'

import { useElementSize } from '@vueuse/core'
import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

withDefaults(defineProps<ISyncScrollContainerProps>(), {
    shadow: false,
    border: true,
})

const wrapperRef = useTemplateRef('wrapperRef')
const headerRef = useTemplateRef('headerRef')
const headerContainerRef = useTemplateRef('headerContainerRef')
const bodyContainerRef = useTemplateRef('bodyContainerRef')
const sidebarContainerRef = useTemplateRef('sidebarContainerRef')
const nodeRef = computed(() => wrapperRef.value?.parentNode as HTMLElement || wrapperRef.value)

const { height: headerHeight } = useElementSize(headerContainerRef)
const { width: bodyWidth, height: bodyHeight } = useElementSize(bodyContainerRef)
const { width: sidebarWidth } = useElementSize(sidebarContainerRef)
const { width: nodeWidth, height: nodeHeight } = useElementSize(nodeRef)

const scrollBarWidth = ref(0)

function getScrollbarWidth() {
    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.overflow = 'scroll'
    document.body.appendChild(outer)

    const widthWithScroll = outer.offsetWidth
    const widthWithoutScroll = outer.clientWidth

    document.body.removeChild(outer)
    return widthWithScroll - widthWithoutScroll || 8
}

function syncScroll() {
    function updateScroll() {
        headerRef.value!.scrollLeft = wrapperRef.value!.scrollLeft
    }

    function hasHorizontalScroll(element: HTMLDivElement) {
        return element.scrollWidth > element.clientWidth
    }

    const install = () => {
        wrapperRef.value!.addEventListener('scroll', updateScroll)

        if (hasHorizontalScroll(wrapperRef.value!)) {
            scrollBarWidth.value = getScrollbarWidth()
        }
    }

    const uninstall = () => {
        wrapperRef.value!.removeEventListener('scroll', updateScroll)
    }

    return { install, uninstall }
}
const { install: syncScrollInstall, uninstall: syncScrollUninstall } = syncScroll()

onMounted(() => syncScrollInstall())
onBeforeUnmount(() => syncScrollUninstall())
</script>

<style lang="scss" module>
@mixin vertical-shadow {
    box-shadow: 3px 0 5px -2px rgb(0 0 0 / 20%);
}

.wrapper {
    position: relative;
    box-sizing: border-box;
    width: v-bind('`${nodeWidth}px`');
    height: v-bind('`${nodeHeight}px`');
    overflow: auto;

    &.border {
        border: 1px solid var(--el-border-color);
    }
}

.header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    width: 100%;
    height: v-bind('`${headerHeight}px`');
    overflow: hidden;
    background-color: var(--el-bg-color);

    &.border {
        border-bottom: 1px solid var(--el-border-color);
    }
}

.header-container {
    width: v-bind('`${bodyWidth}px`');
}

.header-shadow {
    position: sticky;
    top: v-bind('`${headerHeight}px`');
    left: 0;
    z-index: 4;
    width: v-bind('`${bodyWidth + sidebarWidth}px`');
    min-width: 100%;
    height: 0;
    box-shadow: 0 1px 4px 1px rgb(0 0 0 / 20%);
}

.corner {
    position: sticky;
    left: 0;
    z-index: 3;
    box-sizing: border-box;
    flex-shrink: 0;
    width: v-bind('`${sidebarWidth}px`');
    background-color: var(--el-bg-color);

    &.border {
        border-right: 1px solid var(--el-border-color);
    }

    &.shadow {
        @include vertical-shadow;
    }
}

.container {
    position: absolute;
    top: v-bind('`${headerHeight}px`');
    left: v-bind('`${sidebarWidth}px`');
    display: flex;
    background-color: var(--el-bg-color);
}

.sidebar {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 3;
    box-sizing: border-box;
    display: flex;
    width: v-bind('`${sidebarWidth}px`');
    height: v-bind('`${bodyHeight}px`');
    min-height: v-bind('`calc(100% - ${headerHeight}px)`');
    background-color: var(--el-bg-color);

    &.border {
        border-right: 1px solid var(--el-border-color);
    }

    &.shadow {
        @include vertical-shadow;
    }
}

.body {
    position: relative;
    height: v-bind('`${bodyHeight}px`');
}
</style>
