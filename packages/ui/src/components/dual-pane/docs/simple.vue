<template>
    <Wrapper>
        <VcDualPane>
            <template #panel1>
                <div>新年好</div>
            </template>
            <template #panel2>
                <div>快过年了</div>
            </template>
        </VcDualPane>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcDualPane from '../dual-pane.vue'
</script>
