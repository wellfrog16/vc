<template>
    <el-form :model="form.fields" :rules="form.rules" label-position="top">
        <vc-form-item label="标题" content="这里是标题的说明和注释，使用 letter 图标" letter="!" prop="result1">
            <vc-input v-model="form.fields.result1" />
        </vc-form-item>
        <vc-form-item label="标题" content="这里是标题的说明和注释，使用 icon 图标" prop="result2">
            <vc-input v-model="form.fields.result2" />
        </vc-form-item>
    </el-form>
</template>

<script setup lang="ts">
const form = reactive({
    fields: {
        result1: '',
        result2: '',
    },
    rules: {
        result1: [
            { required: true, message: '请输入内容', trigger: 'blur' },
        ],
    },
})
</script>
