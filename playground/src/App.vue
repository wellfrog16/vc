<template>
    <div>
        <a href="https://vite.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo">
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
        </a>
    </div>
    <div>111222</div>
    <comppp />
    <HButton type="primary">测试</HButton>
    <HAwesomeIcon name="fa-regular fa-face-laugh-beam" />
    <HBackbottom />
    <HBackbottom />
    <HBackbottom />
    <div v-for="value in 100" :key="value">{{ value }}</div>
</template>

<script setup lang="ts">
import HBackbottom from '@wfrog/vc/es/components/backbottom'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
