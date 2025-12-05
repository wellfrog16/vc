<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HSinglePlayer :width="400" :src="mediaUrl" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HSinglePlayer from '../single-player.vue'

const mediaUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
</script>
