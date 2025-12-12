<template>
    <slot />
</template>

<script lang="ts" setup>
import type { IConfigProviderProps } from './config-provider'
import { loader } from '@wfrog/utils'

import { useProvide } from '@/use/useStore'
import { KEY_NAME } from './config-provider'

const props = defineProps<IConfigProviderProps>()
useProvide(KEY_NAME, props)

onMounted(() => {
    if (!window.VC?.isSVGIconLock && props.iconfontUrl) {
        window.VC = { ...window.VC, isSVGIconLock: true }
        loader.loadScriptSingle(props.iconfontUrl)
    }
})
</script>
