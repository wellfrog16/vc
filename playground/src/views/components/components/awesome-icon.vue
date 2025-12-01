<template>
    <el-space direction="vertical" fill size="large" :style="{ display: 'flex' }">
        <el-alert title="icon 如果没显示，可能需要加强网络" type="warning" :closable="false" />

        <el-space>
            <HAwesomeIcon name="fa-brands fa-bilibili" />
            <HAwesomeIcon name="fa-solid fa-car-side" size="30px" />
            <HAwesomeIcon name="fa-solid fa-chart-line" size="40" color="yellowgreen" />
            <HAwesomeIcon name="fa-brands fa-github-alt" size="30" color="#e89f40" />
            <HAwesomeIcon name="fa-regular fa-face-laugh-beam" size="1.5em" />
            <HAwesomeIcon name="fa-regular fa-id-card" color="red" />
        </el-space>
    </el-space>
</template>

<script setup lang="ts"></script>
