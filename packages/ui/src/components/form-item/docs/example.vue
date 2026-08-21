<template>
    <Wrapper>
        <ElDescriptionsItem label="展示区">
            <VcConfigProvider :info-tooltip="{ onShowed: handleShowed }">
                <el-form :model="form.fields" :rules="form.rules" :label-position="labelPosition" label-width="120px">
                    <VcFormItem label="标题" content="这里是标题的说明和注释，使用 letter 图标" letter="!" prop="result" :no-edit="noEdit">
                        <el-input v-model="form.fields.result" />
                        <template #label-extra>
                            <ElText>label-position = top 时，可以放额外信息</ElText>
                        </template>
                    </VcFormItem>
                    <VcFormItem label="内容动态加载" code="y" :no-edit="noEdit">
                        <el-input v-model="result" />
                        <template #label-extra>
                            <ElButton type="primary" plain size="small">按钮</ElButton>
                        </template>
                    </VcFormItem>
                    <VcFormItem label="内容动态加载" code="z" :no-edit="noEdit">
                        <el-input v-model="result" />
                    </VcFormItem>
                </el-form>
            </VcConfigProvider>
        </ElDescriptionsItem>
        <ElDescriptionsItem label="label 位置">
            <VcChoice v-model="labelPosition" :options="labelPositionOptions" />
        </ElDescriptionsItem>
        <ElDescriptionsItem label="创建后不可编辑标记">
            <VcChoiceBoolean v-model="noEdit" />
        </ElDescriptionsItem>
    </Wrapper>
</template>

<script lang="ts" setup>
import VcChoiceBoolean from '@/components/choice-boolean/choice-boolean.vue'
import VcChoice from '@/components/choice/choice.vue'
import VcConfigProvider from '@/components/config-provider'
import VcFormItem from '../form-item.vue'

const labelPositionOptions = [
    { label: '顶部', value: 'top' },
    { label: '左边', value: 'left' },
    { label: '右边', value: 'right' },
]
const labelPosition = ref<any>('top')
const noEdit = ref(false)

const result = ref('')

const form = reactive({
    fields: {
        result: '',
    },
    rules: {
        result: [
            { required: true, message: '请输入内容', trigger: 'blur' },
        ],
    },
})

function handleShowed(code: string | undefined, content: string | undefined, setContent: (content: string) => void) {
    if (content) { return }
    setContent('loading...')
    setTimeout(() => {
        setContent(`这里是 code: ${code} 的内容的说明和注释，使用 icon 图标`)
    }, 1000)
}
</script>

<style lang="scss" module></style>
