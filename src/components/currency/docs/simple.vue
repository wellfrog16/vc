<template>
    <Wrapper>
        <HCurrency v-model="result" code="EUR" />
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Wrapper from '@/components/simple-wrapper.vue'
import HCurrency from '../index.vue'

const result = ref('')
</script>
