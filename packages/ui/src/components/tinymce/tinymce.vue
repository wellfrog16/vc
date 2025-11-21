<template>
    <div v-loading="loading" :class="$style.tinymce">
        <textarea :id="id" :class="$style.textarea" />
    </div>
</template>

<script lang="ts" setup>
// import type { ICDNType, RawEditorSettings } from '@wfrog/utils'
import type { ICDNType } from '@wfrog/utils'
import type { PropType } from 'vue'
import { defaultWindow, loader } from '@wfrog/utils'

import { vLoading } from 'element-plus'
import { computed, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'
import config from './config'

const props = defineProps({
    id: { type: String, default: () => `h-tinymce-${+new Date()}${(Math.random() * 1000).toFixed(0)}` },
    config: { type: String as PropType<keyof typeof config>, default: 'mini' },
    width: { type: String, default: '100%' },
    height: { type: String, default: '360px' },
    modelValue: { type: String, default: '' },
    // httpRequest: { type: Function as PropType<RawEditorSettings['images_upload_handler']>, default: undefined },
    httpRequest: { type: Function as PropType<any>, default: undefined }, // 上面ts类型报错，暂时any，原因未知
})

const emits = defineEmits(['update:modelValue'])

const Tinymce = shallowRef<ICDNType['tinymce']>()
const loading = ref(false)

async function tinymceInit() {
    if (!defaultWindow) { return }

    if (!Tinymce.value) {
        loading.value = true
        Tinymce.value = await loader.loadCdnSingle('tinymce')
    }

    const cdnName = defaultWindow.h_utils?.cdn.name || 'jsdelivr'
    const cdnUrl = loader.baseCdnUrl[cdnName]
    const version = '5.8.1'

    let base_url = ''
    let language_url = ''

    switch (cdnName) {
        case 'defaultBase' :
            base_url = `${cdnUrl}/tinymce/${version}`
            language_url = `${cdnUrl}/tinymce-langs/1.0.0/langs/zh_CN.js`
            break
        case 'jsdelivr':
            base_url = `${cdnUrl}/tinymce@${version}`
            language_url = `${cdnUrl}/tinymce-langs@1.0.0/langs/zh_CN.js`
            break
        case 'localCDN':
            base_url = `${cdnUrl}/tinymce/${version}`
            language_url = `${cdnUrl}/tinymce-langs/1.0.0/langs/zh_CN.js`
            break
    }

    Tinymce.value.init({
        ...config[props.config], // 插件、菜单等配置信息
        selector: `#${props.id}`, // 容器
        language: 'zh_CN',
        language_url,
        height: props.height,
        width: props.width,
        base_url, // js和css资源路径
        content_css: false, // 不加载body的样式
        image_uploadtab: true,
        images_upload_handler: props.httpRequest,
        init_instance_callback: editor => {
            if (props.modelValue) { editor.setContent(props.modelValue) }

            // self.hasInit = true;
            editor.on('NodeChange Change KeyUp SetContent', () => {
                emits('update:modelValue', editor.getContent())
            })
            loading.value = false
        },
    })
}

function tinymceDestory() {
    if (!Tinymce.value) { return }
    const tinymce = Tinymce.value.get(props.id)
    tinymce.execCommand('mceFullScreen')
    tinymce && tinymce.destroy()
}

const tinymceConfig = computed(() => props.config)

watch(tinymceConfig, () => {
    tinymceDestory()
    tinymceInit()
})

onMounted(async () => {
    tinymceInit()
})

onBeforeUnmount(() => tinymceDestory())

function setContent(val: string) {
    if (!Tinymce.value) { return }
    const tinymce = Tinymce.value.get(props.id)
    tinymce.setContent(val)
}

function getContent() {
    if (!Tinymce.value) { return }
    const tinymce = Tinymce.value.get(props.id)
    tinymce.getContent()
}

defineExpose({ setContent, getContent })
</script>

<style lang="scss" module>
.tinymce {
    width: 100%;
    height: v-bind(height);
}

.textarea {
    z-index: -1;
    visibility: hidden;
}
</style>
