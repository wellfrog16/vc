<template>
    <i class="awesome-icon" :class="props.name" :style="{ fontSize: mySize, color }" />
</template>

<script lang="ts" setup>
import { defaultWindow, loader } from '@wfrog/utils'
import { computed, onMounted } from 'vue'

interface IPropType {
    name: string
    mode?: 'css' | 'svg'
    size?: number | string
    color?: string
}

const props = withDefaults(defineProps<IPropType>(), {
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
    if (defaultWindow) {
        if (!defaultWindow.VC?.isAwesomeIconLock) {
            defaultWindow.VC = { ...defaultWindow.VC, isAwesomeIconLock: true }
            loaderSource()
        }
    }
})
</script>
