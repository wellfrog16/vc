<template>
    <slot />
</template>

<script lang="ts" setup>
import { useProvide } from '@/use/useStore'
import { KEY_NAME, preProps } from './config'

const props = defineProps(preProps)
useProvide(KEY_NAME, props)
</script>
