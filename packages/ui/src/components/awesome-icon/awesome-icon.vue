<template>
    <i class="awesome-icon" :class="props.name" :style="{ fontSize: mySize, color }" />
</template>

<script lang="ts" setup>
import type { IAwesomeIconProps } from './awesome-icon.ts'
import { loader } from '@wfrog/vc-utils'

const props = withDefaults(defineProps<IAwesomeIconProps>(), {
    mode: 'css',
})

const mySize = computed(() => {
    if (props.size && Number.isNaN(+props.size)) { return props.size }
    return `${props.size}px`
})

async function loaderSource() {
    const cdn = props.mode === 'svg' ? 'fontawesomeJs' : 'fontawesomeCss'
    await loader.loadCdnSingle(cdn)
}

onMounted(() => {
    if (!window.VC?.isAwesomeIconLock) {
        window.VC = { ...window.VC, isAwesomeIconLock: true }
        loaderSource()
    }
})
</script>
