<template>
    <Wrapper>
        <HTextEllipsis :max-width="250" show-tooltip>
            当内容超过指定宽度时，显示省略号，并可设置鼠标hover提示完整文案
        </HTextEllipsis>
    </Wrapper>
</template>

<script lang="ts" setup>
import Wrapper from '@/components/simple-wrapper.vue'
import HTextEllipsis from '../text-ellipsis.vue'
</script>
