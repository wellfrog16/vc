<template>
    <HConfigProvider iconfont-url="//at.alicdn.com/t/font_2923719_83xgwd9wy2l.js">
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
    </HConfigProvider>
</template>

<script setup lang="ts"></script>
