<template>
    <Wrapper>
        <VcIconPicker v-model="iconName" />
    </Wrapper>
</template>

<script lang="ts" setup>
import VcIconPicker from '../icon-picker.vue'

const iconName = ref('')
</script>
