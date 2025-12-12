<template>
    <Wrapper>
        <ElDescriptionsItem label="展示">
            <HQRCode value="i am qrcode" :width="200" :height="200" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import HQRCode from '../qr-code.vue'
</script>
