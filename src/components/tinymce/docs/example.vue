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
        <ElDescriptionsItem label="展示区：对话框">
            <HButton type="primary" @click="() => toggleVisible()">打开</HButton>
            <HDialog
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
                        <HTinymce v-model.trim="form.fields.content" height="230px" config="simple" />
                    </ElFormItem>
                </ElForm>
                <template #footer>
                    <HButton type="primary" @click="() => toggleVisible()">关闭</HButton>
                </template>
            </HDialog>
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { ElDescriptionsItem, ElForm, ElFormItem, ElInput } from 'element-plus'
import { defaultWindow } from '@wfrog/utils'
import { useToggle } from '@vueuse/core'

import Wrapper from '@/components/example-wrapper.vue'
import HChoice from '@/components/choice/index.vue'
import HButton from '@/components/button/index.vue'
import HDialog from '@/components/dialog/index.vue'
import HTinymce from '../index.vue'
import configs from '../config'
import type { RawEditorSettings } from '@wfrog/utils'

const result = ref<string>('TinyMCE')
const config = ref<keyof typeof configs>('mini')
const data = Object.keys(configs)
const [visible, toggleVisible] = useToggle()
const form = reactive({
    fields: { title: '', content: '' },
})

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
