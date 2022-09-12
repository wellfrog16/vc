<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HSinglePlayer :width="400" :src="mediaUrl" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HSinglePlayer from '../index.vue'

const mediaUrl = 'https://music.163.com/song/media/outer/url?id=1842025914.mp3'
</script>
