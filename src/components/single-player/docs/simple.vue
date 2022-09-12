<template>
    <Wrapper>
        <HSinglePlayer :width="400" :src="mediaUrl" />
    </Wrapper>
</template>

<script lang="ts" setup>
import Wrapper from '@/components/simple-wrapper.vue'
import HSinglePlayer from '../index.vue'

const mediaUrl = 'https://music.163.com/song/media/outer/url?id=1842025914.mp3'
</script>
