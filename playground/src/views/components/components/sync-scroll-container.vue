<template>
    <div :class="$style.container">
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
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.container {
    width: 100%;
    height: 500px;
}

.header {
    height: 80px;
}

.sidebar {
    width: 200px;
}

.body {
    width: 2000px;
    height: 1000px;
}
</style>
