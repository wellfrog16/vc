<template>
    <div ref="refContainer" :class="$style.main">
        <slot />
        <Backbottom
            v-if="refContainer"
            :target="refContainer"
            :class="[$style.backbottom, backbottomClassName]"
            :visibility-height="backbottomProps?.visibilityHeight"
            :bottom="backbottomProps?.bottom"
        >
            <slot name="backbottom" />
        </Backbottom>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, shallowRef, useTemplateRef } from 'vue'

import Backbottom from '../backbottom/backbottom.vue'

interface IPropType {
    stopHeight?: number
    keepBottom?: boolean
    backbottomClassName?: string
    backbottomProps?: {
        visibilityHeight?: number
        bottom?: number
    }
}

const props = withDefaults(defineProps<IPropType>(), {
    refContainer: undefined,
    stopHeight: 30,
    keepBottom: false,
})
const refContainer = useTemplateRef('refContainer')
const observer = shallowRef<MutationObserver>()

function isScrollbarNearBottom(element: HTMLElement) {
    return element.scrollTop + element.clientHeight + props.stopHeight >= element.scrollHeight
}

function scrollToBottom() {
    refContainer.value!.scrollTop = refContainer.value!.scrollHeight
}

defineExpose({ scrollToBottom })

onMounted(() => {
    observer.value = new MutationObserver(() => {
        if (isScrollbarNearBottom(refContainer.value!) || props.keepBottom) {
            refContainer.value!.scrollTop = refContainer.value!.scrollHeight
        }
    })

    observer.value.observe(refContainer.value!, { subtree: true, characterData: true, childList: true })
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
