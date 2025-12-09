<template>
    <div ref="containerRef" :class="$style.main">
        <slot />
        <Backbottom
            v-if="containerRef"
            :target="containerRef"
            :class="[$style.backbottom, backbottomClassName]"
            :visibility-height="backbottomProps?.visibilityHeight"
            :bottom="backbottomProps?.bottom"
        >
            <slot name="backbottom" />
        </Backbottom>
    </div>
</template>

<script setup lang="ts">
import type { IChatContainerProps } from './chat-container'

import { onBeforeUnmount, onMounted, shallowRef, useTemplateRef } from 'vue'
import Backbottom from '../backbottom/backbottom.vue'

const props = withDefaults(defineProps<IChatContainerProps>(), {
    containerRef: undefined,
    stopHeight: 30,
    keepBottom: false,
})
const containerRef = useTemplateRef('containerRef')
const observer = shallowRef<MutationObserver>()

function isScrollbarNearBottom(element: HTMLElement) {
    return element.scrollTop + element.clientHeight + props.stopHeight >= element.scrollHeight
}

function scrollToBottom() {
    containerRef.value!.scrollTop = containerRef.value!.scrollHeight
}

defineExpose({ scrollToBottom })

onMounted(() => {
    observer.value = new MutationObserver(() => {
        if (isScrollbarNearBottom(containerRef.value!) || props.keepBottom) {
            containerRef.value!.scrollTop = containerRef.value!.scrollHeight
        }
    })

    observer.value.observe(containerRef.value!, { subtree: true, characterData: true, childList: true })
})

onBeforeUnmount(() => {
    observer.value?.disconnect()
})
</script>

<style lang="scss" module>
.main {
    position: relative;
    overflow-y: auto;
}

.backbottom {
    position: sticky;
    left: calc(100% - 80px);
}
</style>
