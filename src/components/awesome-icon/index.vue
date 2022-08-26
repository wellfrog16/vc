<template>
    <i class="awesome-icon" :class="props.name" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { defaultWindow, loader } from '@frog-res/h-utils'
import type { PropType } from 'vue'

const props = defineProps({
    name: { type: String, default: '' },
    mode: { type: String as PropType<'css' | 'svg'>, default: 'css' },
})

const loaderSource = async () => {
    const cdn = props.mode === 'svg' ? 'fontawesomeJs' : 'fontawesomeCss'
    await loader.loadCdnSingle(cdn)
}

onMounted(() => {
    if (defaultWindow) {
        if (!defaultWindow.ElementPlusComponents?.isAwesomeIconLock) {
            defaultWindow.ElementPlusComponents = { ...defaultWindow.ElementPlusComponents, isAwesomeIconLock: true }
            loaderSource()
        }
    }
})
</script>
