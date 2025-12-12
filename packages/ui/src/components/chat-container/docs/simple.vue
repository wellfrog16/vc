<template>
    <Wrapper>
        <VcChatContainer :class="$style.container">
            <div>内容部分</div>
        </VcChatContainer>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChatContainer from '../chat-container.vue'
</script>

<style lang="scss" module>
.container {
    width: 100%;
    height: 300px;
}
</style>
