<template>
    <Wrapper>
        <VcConfigProvider iconfont-url="//at.alicdn.com/t/font_2923719_83xgwd9wy2l.js">
            <VcSVGIcon name="role" />
        </VcConfigProvider>
        <!-- 自定义插槽内容 -->
        <VcSVGIcon name="screenfull" viewBox="0 0 1024 1024">
            <path d="M170.666667 170.666667v213.333333H85.333333V85.333333h298.666667v85.333334H170.666667z m682.666666 213.333333V170.666667h-213.333333V85.333333h298.666667v298.666667h-85.333334zM170.666667 640v213.333333h213.333333v85.333334H85.333333v-298.666667h85.333334z m682.666666 0h85.333334v298.666667h-298.666667v-85.333334h213.333333v-213.333333z" />
        </VcSVGIcon>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcConfigProvider from '@/components/config-provider/config-provider.vue'
import VcSVGIcon from '../svg-icon.vue'
</script>
