<template>
    <span v-loading="loading" :class="$style.main" :style="{ fontSize: mySize, color }" @click="handleClick">
        <slot :is-fullscreen="isFullscreen">
            <HSVGIcon v-if="isFullscreen" name="screenfull-exit" viewBox="0 0 1024 1024">
                <path d="M298.666667 298.666667V85.333333h85.333333v298.666667H85.333333V298.666667h213.333334z m426.666666-213.333334v213.333334h213.333334v85.333333h-298.666667V85.333333h85.333333zM298.666667 938.666667v-213.333334H85.333333v-85.333333h298.666667v298.666667H298.666667z m426.666666 0h-85.333333v-298.666667h298.666667v85.333333h-213.333334v213.333334z" />
            </HSVGIcon>
            <HSVGIcon v-else name="screenfull" viewBox="0 0 1024 1024">
                <path d="M170.666667 170.666667v213.333333H85.333333V85.333333h298.666667v85.333334H170.666667z m682.666666 213.333333V170.666667h-213.333333V85.333333h298.666667v298.666667h-85.333334zM170.666667 640v213.333333h213.333333v85.333334H85.333333v-298.666667h85.333334z m682.666666 0h85.333334v298.666667h-298.666667v-85.333334h213.333333v-213.333333z" />
            </HSVGIcon>
        </slot>
    </span>
</template>

<script lang="ts" setup>
import type { IScreenfullProps } from './screenfull'
import { loader } from '@wfrog/utils'
import HSVGIcon from '../svg-icon/svg-icon.vue'

const props = defineProps<IScreenfullProps>()
const mySize = computed(() => {
    if (props.size && Number.isNaN(+props.size)) { return props.size }
    return `${props.size}px`
})

const loading = ref(false)
const isFullscreen = ref(false)
const screenfull = shallowRef()

async function handleClick() {
    if (screenfull.value) {
        screenfull.value.toggle()
        return
    }

    loading.value = true
    screenfull.value = (await loader.loadCdnSingle('screenfull'))
    loading.value = false

    screenfull.value.toggle()
    screenfull.value.on('change', () => {
        isFullscreen.value = screenfull.value.isFullscreen
    })
}
</script>

<style lang="scss" module>
.main {
    display: inline-flex;
    cursor: pointer;
    vertical-align: top;
}

.icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    font-size: 1em;
    vertical-align: -0.15em;
    fill: currentcolor;
}
</style>
