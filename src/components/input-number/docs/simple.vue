<template>
    <Wrapper>
        <HInputNumber v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HInputNumber from '../index.vue'

const result = ref(1)
</script>
