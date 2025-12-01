<template>
    <slot />
</template>

<script lang="ts" setup>
import type { IPropType } from './config-provider'
import { useProvide } from '@/use/useStore'
import { KEY_NAME } from './config-provider'

const props = defineProps<IPropType>()
useProvide(KEY_NAME, props)
</script>
