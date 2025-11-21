<template>
    <Wrapper>
        <HQRCode value="i am qrcode" :width="100" :height="100" />
    </Wrapper>
</template>

<script lang="ts" setup>
import Wrapper from '@/components/simple-wrapper.vue'
import HQRCode from '../qr-code.vue'
</script>
