<template>
    <Wrapper>
        <VcTextEllipsis :max-width="250" show-tooltip>
            当内容超过指定宽度时，显示省略号，并可设置鼠标hover提示完整文案
        </VcTextEllipsis>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcTextEllipsis from '../text-ellipsis.vue'
</script>
