<template>
    <el-space direction="vertical" size="large" alignment="left" fill>
        <el-space size="large">
            <HButton :icon="{ name: 'Search' }" type="primary" size="small">Eleme 图标</HButton>
            <HButton :icon="{ type: 'awesome', name: 'fas fa-dog' }" type="primary">Awesome 图标</HButton>
            <HButton :icon="{ type: 'svg', name: 'test' }" type="primary" size="large">SVG 图标</HButton>
        </el-space>
        <el-space size="large">
            <HButton type="warning">点击会有 messagebox 二次确认</HButton>
            <HButton type="warning" :confirm="{ type: 'popconfirm' }">点击会有 popconfirm 二次确认</HButton>
        </el-space>
    </el-space>
</template>

<script setup lang="ts">
import { useSVGIconExample } from '@/helper'

useSVGIconExample()
</script>
