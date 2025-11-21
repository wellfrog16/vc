<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区：文字">
            <HImage type="text" src="https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg" text="文字标题展示图片" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：图片">
            <HImage src="https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg" width="200px" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ElDescriptionsItem } from 'element-plus'
import Wrapper from '@/components/example-wrapper.vue'
import HImage from '../image.vue'
</script>
