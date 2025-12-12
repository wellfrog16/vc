<template>
    <Wrapper>
        <VcCurrency v-model="result" code="EUR" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcCurrency from '../currency.vue'

const result = ref('')
</script>
