<template>
    <Wrapper>
        <el-form>
            <VcFormItem label="标题" content="这里是标题的说明和注释" prop="result">
                <el-input v-model="text" />
            </VcFormItem>
        </el-form>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcFormItem from '../form-item.vue'

const text = ref('')
</script>
