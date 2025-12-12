<template>
    <Wrapper>
        <HCurrency v-model="result" code="EUR" />
    </Wrapper>
</template>

<script lang="ts" setup>
import HCurrency from '../currency.vue'

const result = ref('')
</script>
