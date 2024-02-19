<template>
    <Wrapper>
        <HInput v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import Wrapper from '@/components/simple-wrapper.vue'
import HInput from '../index.vue'

const result = ref('')
</script>
