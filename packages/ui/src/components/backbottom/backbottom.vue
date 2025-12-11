<template>
    <Teleport v-if="teleportTarget" :to="teleportTarget">
        <Child v-bind="props" @inited="handleInited" />
    </Teleport>
    <Child v-else v-bind="props" @inited="handleInited" />
</template>

<script lang="ts" setup>
import type { IBackBottomProps } from './backbottom'

import { ref } from 'vue'

import Child from './components/child.vue'

const props = withDefaults(defineProps<IBackBottomProps>(), {
    right: 40,
    bottom: 40,
    visibilityHeight: 200,
})

const teleportTarget = ref<HTMLElement>()

function handleInited(val?: HTMLElement) {
    teleportTarget.value = val
}
</script>
