<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcTinymce v-model="result" :config="config" :http-request="httpRequest" storage-key="vitepress-theme-appearance" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="编辑器配置">
            <VcChoice v-model="config" :options="data" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="结果">
            <div v-html="result" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="展示区：对话框">
            <VcButton type="primary" @click="() => toggleVisible()">打开</VcButton>
            <VcDialog
                v-model="visible"
                title="对话框展示编辑器"
                :close-on-click-modal="false"
                :width="600"
                destroy-on-close
                append-to-body
                :show-fullscreen="false"
            >
                <ElForm :model="form.fields" label-width="80px">
                    <ElFormItem prop="title" label="标题">
                        <ElInput v-model.trim="form.fields.title" />
                    </ElFormItem>
                    <ElFormItem prop="content" label="内容">
                        <VcTinymce v-model.trim="form.fields.content" height="230px" config="simple" />
                    </ElFormItem>
                </ElForm>
                <template #footer>
                    <VcButton type="primary" @click="() => toggleVisible()">关闭</VcButton>
                </template>
            </VcDialog>
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
// import type { RawEditorSettings } from '@wfrog/utils'

import VcButton from '@/components/button/button.vue'
import VcChoice from '@/components/choice/choice.vue'
import VcDialog from '@/components/dialog/dialog.vue'
import configs from '../config'
import VcTinymce from '../tinymce.vue'

const result = ref<string>('TinyMCE')
const config = ref<keyof typeof configs>('mini')
const data = Object.keys(configs)
const [visible, toggleVisible] = useToggle()
const form = reactive({
    fields: { title: '', content: '' },
})

function httpRequest(blobInfo: any, onSccuess: any, onFailed: any) {
    const blobUrl = window.URL.createObjectURL(blobInfo.blob())
    if (blobUrl) {
        onSccuess(blobUrl)
    }
    else {
        onFailed('上传失败')
    }
}
</script>
