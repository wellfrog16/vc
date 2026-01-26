<template>
    <VcDualPane layout="horizontal">
        <template #panel1>
            <div v-for="value in 100" :key="value">{{ value }}</div>
        </template>
        <template #panel2>
            <div>快过年了</div>
        </template>
    </VcDualPane>
</template>

<script setup lang="ts"></script>
