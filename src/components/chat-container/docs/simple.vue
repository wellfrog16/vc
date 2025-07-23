<template>
    <Wrapper>
        <HChatContainer :class="$style.container">
            <div>内容部分</div>
        </HChatContainer>
    </Wrapper>
</template>

<script lang="ts" setup>
import Wrapper from '@/components/simple-wrapper.vue'
import HChatContainer from '../index.vue'
</script>

<style lang="scss" module>
.container {
    width: 100%;
    height: 300px;
}
</style>
