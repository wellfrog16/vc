<template>
    <Wrapper>
        <VcButton :icon="{ name: 'Search' }">Eleme 图标</VcButton>
        <VcButton :icon="{ type: 'awesome', name: 'fas fa-dog' }">Awesome 图标</VcButton>
        <VcButton :icon="{ type: 'svg', name: 'test' }">SVG 图标</VcButton>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcButton from '../button.vue'
</script>
