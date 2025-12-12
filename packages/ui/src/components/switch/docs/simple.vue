<template>
    <Wrapper>
        <HSwitch v-model="result" active-text="开" inactive-text="关" active-value="Open" inactive-value="Close" />
    </Wrapper>
</template>

<script lang="ts" setup>
import HSwitch from '../switch.vue'

const result = ref('Open')
</script>
