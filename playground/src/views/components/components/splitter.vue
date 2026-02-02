<template>
    <VcSplitter layout="horizontal">
        <VcSplitterPanel>
            <div v-for="value in 100" :key="value">{{ value }}</div>
        </VcSplitterPanel>
        <VcSplitterPanel>
            <div>快过年了</div>
        </VcSplitterPanel>
    </VcSplitter>
</template>

<script setup lang="ts"></script>

<style lang="scss" module></style>
