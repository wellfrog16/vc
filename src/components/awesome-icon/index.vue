<template>
    <i class="awesome-icon" :class="props.name" />
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { loader } from '@frog-res/h-utils'
import type { PropType } from 'vue'

const props = defineProps({
    name: { type: String, default: '' },
    mode: { type: String as PropType<'css' | 'svg'>, default: 'css' },
})

const loaderSource = async () => {
    const cdn = props.mode === 'svg' ? 'fontawesomeJs' : 'fontawesomeCss'
    await loader.loadCdnSingle(cdn)
}

onBeforeMount(() => {
    if (!window.ElementPlusComponents?.isLock) {
        window.ElementPlusComponents = { isLock: true }
        loaderSource()
    }
})
</script>
