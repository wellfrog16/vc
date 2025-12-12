<template>
    <Wrapper>
        <ElDescriptionsItem label="展示">
            <VcQRCode value="i am qrcode" :width="200" :height="200" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcQRCode from '../qr-code.vue'
</script>
