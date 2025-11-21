<template>
    <Wrapper>
        <HCropper v-model:visible="visible" :image="imgSrc" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HCropper from '../cropper.vue'

const visible = ref(false)
const imgSrc = 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
</script>
