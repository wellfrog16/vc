<template>
    <div v-loading="loading" :class="$style.tinymce">
        <textarea :id="id" :class="$style.textarea" />
    </div>
</template>

<script lang="ts" setup>
import type { ITinymceProps } from './tinymce'
import { useDark } from '@vueuse/core'
import { loader } from '@wfrog/vc-utils'
import config from './config'

const props = withDefaults(defineProps<ITinymceProps>(), {
    id: () => `h-tinymce-${+new Date()}${(Math.random() * 1000).toFixed(0)}`,
    config: 'mini',
    width: '100%',
    height: '360px',
    modelValue: '',
    httpRequest: undefined,
    storageKey: 'vc-dark',
})

const emits = defineEmits(['update:modelValue'])

const isDark = useDark({ storageKey: props.storageKey })
const Tinymce = shallowRef()
const loading = ref(false)

async function tinymceInit() {
    if (!Tinymce.value) {
        loading.value = true
        Tinymce.value = await loader.loadCdnSingle('tinymce')
    }

    const cdnName = window.VC?.cdn?.name || 'jsdelivr'
    const cdnUrl = loader.baseCdnUrl()[cdnName]
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
        skin: isDark.value ? 'oxide-dark' : 'oxide',
        theme: 'silver',
        selector: `#${props.id}`, // 容器
        language: 'zh_CN',
        language_url,
        height: props.height,
        width: props.width,
        base_url, // js和css资源路径
        content_css: false, // 不加载body的样式
        image_uploadtab: true,
        images_upload_handler: props.httpRequest,
        suffix: '.min',
        branding: false, // 显示tinymce徽标
        init_instance_callback: (editor: any) => {
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

const tinymceWatch = watch([tinymceConfig, isDark], () => {
    tinymceDestory()
    tinymceInit()
}, { deep: true })

onMounted(() => tinymceInit())

onBeforeUnmount(() => {
    tinymceWatch.stop()
    tinymceDestory()
})

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
