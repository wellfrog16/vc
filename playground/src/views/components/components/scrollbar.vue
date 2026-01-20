<template>
    <div :class="$style.wrapper">
        <div :class="$style.container">
            <VcScrollbar flex>
                <div v-for="i in 20" :key="i">{{ i }}</div>
            </VcScrollbar>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.wrapper {
    display: flex;
    height: 200px;
    flex-direction: column;
}

.container {
    display: flex;
    height: 10px;
    flex-direction: column;
    flex-grow: 1;
}
</style>
