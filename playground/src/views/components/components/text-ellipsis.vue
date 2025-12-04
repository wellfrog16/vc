<template>
    <el-space direction="vertical">
        <HTextEllipsis :max-width="250" show-tooltip>
            当内容超过指定宽度时，显示省略号，并可设置鼠标hover提示完整文案
        </HTextEllipsis>
        <HTextEllipsis :max-width="250" show-tooltip effect="dark">
            当内容超过指定宽度时，显示省略号，并可设置鼠标hover提示完整文案
        </HTextEllipsis>
    </el-space>
</template>

<script setup lang="ts"></script>
