<template>
    <el-space direction="vertical" fill size="large" :style="{ display: 'flex' }">
        <el-alert title="icon 如果没显示，可能需要加强网络" type="warning" :closable="false" />

        <el-space>
            <vc-iconify-icon name="mdi-light:bank" />
            <vc-iconify-icon name="mdi-light:face-mask" size="30px" />
            <vc-iconify-icon name="ic:baseline-dining" size="40" color="yellowgreen" />
            <vc-iconify-icon name="solar:accessibility-outline" size="30" color="#e89f40" />
            <vc-iconify-icon name="ri:briefcase-4-line" size="1.5em" />
            <vc-iconify-icon name="svg-spinners:bars-scale-fade" color="red" />
        </el-space>
    </el-space>
</template>

<script setup lang="ts"></script>

<style lang="scss" module></style>
