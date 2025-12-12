<template>
    <Wrapper>
        <VcSwitch v-model="result" active-text="开" inactive-text="关" active-value="Open" inactive-value="Close" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcSwitch from '../switch.vue'

const result = ref('Open')
</script>
