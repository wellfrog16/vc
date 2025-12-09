<template>
    <slot />
</template>

<script lang="ts" setup>
import type { IConfigProviderProps } from './config-provider'

import { useProvide } from '@/use/useStore'
import { KEY_NAME } from './config-provider'

const props = defineProps<IConfigProviderProps>()
useProvide(KEY_NAME, props)
</script>
