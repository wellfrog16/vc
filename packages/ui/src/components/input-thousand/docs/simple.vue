<template>
    <Wrapper>
        <VcInputThousand v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcInputThousand from '../input-thousand.vue'

const result = ref<number>()
</script>
