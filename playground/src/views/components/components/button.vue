<template>
    <vc-config-provider iconfont-url="//at.alicdn.com/t/font_2923719_83xgwd9wy2l.js">
        <el-space direction="vertical" size="large" alignment="left" fill>
            <el-space size="large">
                <vc-button :icon="{ name: 'Search' }" type="primary" size="small">Eleme 图标</vc-button>
                <vc-button :icon="{ type: 'awesome', name: 'fas fa-dog' }" type="primary">Awesome 图标</vc-button>
                <vc-button :icon="{ type: 'svg', name: 'test' }" type="primary" size="large">SVG 图标</vc-button>
            </el-space>
            <el-space size="large">
                <vc-button type="warning">点击会有 messagebox 二次确认</vc-button>
                <vc-button type="warning" :confirm="{ type: 'popconfirm' }">点击会有 popconfirm 二次确认</vc-button>
            </el-space>
        </el-space>
    </vc-config-provider>
</template>

<script setup lang="ts"></script>
