<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcIconPicker v-model="iconName1" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：单个合集">
            <VcIconPicker v-model="iconName2" :collections="['catppuccin']" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：指定多合集">
            <VcIconPicker v-model="iconName3" collection="fa7-regular" :collections="['catppuccin', 'fa7-regular', 'ep']" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcIconPicker from '../icon-picker.vue'

const iconName1 = ref('')
const iconName2 = ref('')
const iconName3 = ref('')
</script>
