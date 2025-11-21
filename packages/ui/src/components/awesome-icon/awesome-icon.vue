<template>
    <i class="awesome-icon" :class="props.name" />
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { defaultWindow, loader } from '@wfrog/utils'
import { onMounted } from 'vue'

const props = defineProps({
    name: { type: String, default: '' },
    mode: { type: String as PropType<'css' | 'svg'>, default: 'css' },
})

async function loaderSource() {
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
