<template>
    <Wrapper>
        <HDaterangePicker v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HDaterangePicker from '../index.vue'

const result = ref(['', ''])
</script>
