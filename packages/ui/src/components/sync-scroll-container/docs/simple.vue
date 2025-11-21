<template>
    <Wrapper>
        <HSyncScrollContainer border>
            <template #corner>
                <div>slot: corner</div>
            </template>
            <template #sidebar>
                <div :class="$style.sidebar">slot: sidebar</div>
            </template>
            <template #header>
                <div :class="$style.header">slot: header</div>
            </template>
            <div :class="$style.body">slot: default</div>
        </HSyncScrollContainer>
    </Wrapper>
</template>

<script lang="ts" setup>
import Wrapper from '@/components/simple-wrapper.vue'
import HSyncScrollContainer from '../sync-scroll-container.vue'
</script>

<style lang="scss" module>
.container {
    width: 100%;
    height: 300px;
}

.header {
    height: 40px;
}

.sidebar {
    width: 100px;
}

.body {
    width: 1000px;
    height: 1000px;
}
</style>
