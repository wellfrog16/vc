<template>
    <el-space direction="vertical" size="large">
        <el-space size="large">
            <HIcon type="awesome" name="fa-brands fa-bilibili" />
            <HIcon type="awesome" name="fa-solid fa-car-side" size="30px" />
            <HIcon type="awesome" name="fa-solid fa-chart-line" size="40" color="yellowgreen" />
            <HIcon type="awesome" name="fa-brands fa-github-alt" size="30" color="#e89f40" />
            <HIcon type="awesome" name="fa-regular fa-face-laugh-beam" size="1.5em" />
            <HIcon type="awesome" name="fa-regular fa-id-card" color="red" />
        </el-space>
        <el-space size="large">
            <HIcon type="el" name="Aim" />
            <HIcon type="el" name="Link" size="30px" />
            <HIcon type="el" name="Edit" size="40" color="yellowgreen" />
            <HIcon type="el" name="Message" size="30" color="#e89f40" />
            <HIcon type="el" name="ShoppingCart" size="1.5em" />
            <HIcon type="el" name="MoonNight" color="red" />
        </el-space>
        <el-space size="large">
            <HIcon type="svg" name="music" />
            <HIcon type="svg" name="star" size="30px" />
            <HIcon type="svg" name="dream" size="40" color="yellowgreen" />
            <HIcon type="svg" name="component" size="30" color="#e89f40" />
            <HIcon type="svg" name="eleme" size="1.5em" />
            <HIcon type="svg" name="business" color="red" />
        </el-space>
    </el-space>
</template>

<script setup lang="ts">
import { useSVGIconExample } from '@/helper'

useSVGIconExample()
</script>
