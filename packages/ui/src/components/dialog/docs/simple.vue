<template>
    <Wrapper>
        <HDialog v-model="visible" title="测试">
            内容
        </HDialog>
        <HButton @click="() => toggleVisible()">打开</HButton>
    </Wrapper>
</template>

<script lang="ts" setup>
import HDialog from '../dialog.vue'

const [visible, toggleVisible] = useToggle()
</script>
