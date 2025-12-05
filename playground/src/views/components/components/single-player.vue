<template>
    <div :class="$style.container">
        <HSinglePlayer :width="400" :src="mediaUrl" />
    </div>
</template>

<script setup lang="ts">
const mediaUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
</script>

<style lang="scss" module>
.container {
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
