<template>
    <div ref="refWrapper" :class="$style.wrapper">
        <div ref="refHeader" :class="[$style.header, { [$style.border]: border }]">
            <div :class="[$style.corner, { [$style.shadow]: shadow, [$style.border]: border }]">
                <slot name="corner" />
            </div>
            <div>
                <div ref="refHeaderContainer" :class="$style['header-container']"><slot name="header" /></div>
            </div>
        </div>
        <div v-if="shadow" :class="$style['header-shadow']" />
        <div :class="[$style.sidebar, { [$style.shadow]: shadow, [$style.border]: border }]">
            <div ref="refSidebarContainer"><slot name="sidebar" /></div>
        </div>
        <div ref="refContainer" :class="$style.container">
            <div :class="$style.body">
                <div ref="refBodyContainer"><slot /></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import { useElementSize } from '@vueuse/core'

interface IPropType {
    shadow?: boolean
    border?: boolean
}

const props = withDefaults(defineProps<IPropType>(), {
    shadow: false,
    border: true,
})

const refWrapper = shallowRef<HTMLDivElement>()
const refContainer = shallowRef<HTMLDivElement>()
const refHeader = shallowRef<HTMLDivElement>()
const refHeaderContainer = shallowRef<HTMLDivElement>()
const refBodyContainer = shallowRef<HTMLDivElement>()
const refSidebarContainer = shallowRef<HTMLDivElement>()
const refNode = computed(() => refWrapper.value?.parentNode as HTMLElement || refWrapper.value)

const { height: headerHeight } = useElementSize(refHeaderContainer)
const { width: bodyWidth, height: bodyHeight } = useElementSize(refBodyContainer)
const { width: sidebarWidth } = useElementSize(refSidebarContainer)
const { width: nodeWidth, height: nodeHeight } = useElementSize(refNode)

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

const syncScroll = () => {
    function updateScroll() {
        refHeader.value!.scrollLeft = refWrapper.value!.scrollLeft
    }

    function hasHorizontalScroll(element) {
        return element.scrollWidth > element.clientWidth
    }

    const install = () => {
        refWrapper.value!.addEventListener('scroll', updateScroll)

        if (hasHorizontalScroll(refWrapper.value!)) {
            scrollBarWidth.value = getScrollbarWidth()
        }
    }

    const uninstall = () => {
        refWrapper.value!.removeEventListener('scroll', updateScroll)
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
    width: v-bind('`${nodeWidth}px`');
    height: v-bind('`${nodeHeight}px`');
    overflow: auto;
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
