<template>
    <Wrapper>
        <VcDaterangePicker v-model="result" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcDaterangePicker from '../daterange-picker.vue'

const result = ref(['', ''])
</script>
