<template>
    <Wrapper>
        <HDaterangePicker v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import HDaterangePicker from '../daterange-picker.vue'

const result = ref(['', ''])
</script>
