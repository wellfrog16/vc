<template>
    <Wrapper>
        <HButton :icon="{ name: 'Search' }">Eleme 图标</HButton>
        <HButton :icon="{ type: 'awesome', name: 'fas fa-dog' }">Awesome 图标</HButton>
        <HButton :icon="{ type: 'svg', name: 'test' }">SVG 图标</HButton>
    </Wrapper>
</template>

<script lang="ts" setup>
import Wrapper from '@/components/simple-wrapper.vue'
import HButton from '../index.vue'
</script>
