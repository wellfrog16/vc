<template>
    <el-splitter :layout="layout" :lazy="lazy">
        <slot />
    </el-splitter>
</template>

<script setup lang="ts">
import type { ISplitterProps } from './splitter'

withDefaults(defineProps<ISplitterProps>(), {
    layout: 'horizontal',
    lazy: true,
})
</script>
