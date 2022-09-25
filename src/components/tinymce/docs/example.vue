<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <HTinymce v-model="result" :config="config" :http-request="httpRequest" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="编辑器配置">
            <HChoice v-model="config" :options="data" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            <div v-html="result" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
import { defaultWindow } from '@wfrog/utils'
import Wrapper from '@/components/example-wrapper.vue'
import HChoice from '@/components/choice/index.vue'
import HTinymce from '../index.vue'
import configs from '../config'
import type { RawEditorSettings } from '@wfrog/utils'

const result = ref<string>('TinyMCE')
const config = ref<keyof typeof configs>('mini')
const data = Object.keys(configs)

const httpRequest: RawEditorSettings['images_upload_handler'] = (blobInfo, onSccuess, onFailed) => {
    if (!defaultWindow) { return }

    const blobUrl = defaultWindow.URL.createObjectURL(blobInfo.blob())
    if (blobUrl) {
        onSccuess(blobUrl)
    }
    else {
        onFailed('上传失败')
    }
}
</script>
