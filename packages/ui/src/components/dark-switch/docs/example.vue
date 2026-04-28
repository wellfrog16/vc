<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcDarkSwitch :size="30" storage-key="vitepress-theme-appearance" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcDarkSwitch from '../dark-switch.vue'
</script>
