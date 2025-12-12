<template>
    <Document :data="documentData" />
</template>

<script lang="ts" setup>
const documentData = {
    params: [
        { param: '*v-model', description: '绑定值', type: 'string', defaultValue: '' },
        { param: 'width', description: '编辑器宽度', type: 'string', defaultValue: '100%' },
        { param: 'height', description: '编辑器高度', type: 'string', defaultValue: '360px' },
        { param: 'id', description: '编辑器的id', type: 'string', defaultValue: '随机' },
        { param: 'config', description: '配置类型，不同的按键配置', type: 'mini | simple | standard | full', defaultValue: 'mini' },
        { param: 'http-request', description: '自定义上传', type: 'UploadHandler', defaultValue: 'undefind' },
    ],
    types: [
        { param: 'UploadHandler', description: '(blobInfo, onSccuess, onFailed) => void，详情请查阅tinymce.d.ts' },
    ],
    methods: [
        { name: 'setContent', description: '设置编辑器的内容', param: 'val: string' },
        { name: 'getContent', description: '获取编辑器的内容', param: '-' },
    ],
}
</script>
