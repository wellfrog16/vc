<template>
    <Wrapper>
        <VcSinglePlayer :width="400" :src="mediaUrl" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcSinglePlayer from '../single-player.vue'

const mediaUrl = 'https://music.163.com/song/media/outer/url?id=1842025914.mp3'
</script>
