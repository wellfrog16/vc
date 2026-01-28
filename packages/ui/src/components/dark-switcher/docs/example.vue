<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcDarkSwitcher :size="30" storage-key="vitepress-theme-appearance" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcDarkSwitcher from '../dark-switcher.vue'
</script>
