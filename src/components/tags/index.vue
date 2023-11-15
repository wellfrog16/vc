<template>
    <ElSpace v-if="readonly" wrap>
        <ElTag v-for="tag in tags" :key="tag.name" v-bind="$attrs">{{ tag.name }}</ElTag>
    </ElSpace>
    <ElSpace v-else wrap>
        <Draggable
            v-model="tags"
            drag-class="el-tag--success"
            :class="$style.draggable"
            tag="span"
            item-key="name"
            animation="400"
        >
            <template #item="{ element }">
                <ElTag v-if="!element.editVisible" closable :class="$style.tag" v-bind="$attrs" @close="handleDelete(element.name)" @dblclick="handleClick(element.name)">
                    {{ element.name }}
                </ElTag>
                <ElInput
                    v-else
                    v-model="currentTag"
                    v-focus
                    size="small"
                    clearable
                    :class="$style.input"
                    @clear="handleSaveClear"
                    @keyup.enter="handleBlur"
                    @blur="handleSave"
                />
            </template>
            <template #footer>
                <ElInput
                    v-if="createVisible"
                    ref="createRef"
                    v-model="currentTag"
                    v-focus
                    size="small"
                    clearable
                    :class="$style.input"
                    @clear="handleInsertClear"
                    @keyup.enter="handleBlur"
                    @blur="handleInsert"
                />
                <HButton v-else size="small" :icon="{ name: 'Plus' }" @click="showCreate" />
            </template>
        </Draggable>
        <ElPopover v-if="errorVisible" ref="popoverRef" :virtual-ref="currentRef" :visible="errorVisible" placement="bottom">
            <ElAlert type="error" :closable="false" :class="$style.alert">{{ sameNameMessage || errorMessage }}</ElAlert>
        </ElPopover>
    </ElSpace>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import Draggable from 'vuedraggable'
import { ElAlert, ElInput, ElPopover, ElSpace, ElTag } from 'element-plus'
import vFocus from '@/directives/focus'
import HButton from '../button/index.vue'
import type { PropType } from 'vue'

const props = defineProps({
    modelValue: { type: Array as PropType<(string | number) []>, required: true, default: () => [] },
    regexp: { type: RegExp as PropType<RegExp>, default: /\S+/ },
    errorMessage: { type: String, default: '' },
    readonly: { type: Boolean, default: false },
    valueFormat: { type: Function as PropType<(val: string | number) => string | number>, default: (val: string | number) => val },
})

const emits = defineEmits(['update:modelValue', 'change'])

const message = '名称重复了'

const errorVisible = ref(false)
const createVisible = ref(false) // 新建input的visible
const currentTag = ref('') // 正在编辑的tag值
const bakTag = ref('') // 编辑前的tag值
const sameNameMessage = ref('')
const currentInput = ref<HTMLInputElement>()
const timerId = ref()
const popoverRef = ref()
const createRef = ref()
const currentRef = ref()

const tags = computed({
    get() {
        return props.modelValue.map(tag => ({ name: tag, editVisible: tag === bakTag.value }))
    },
    set(val: any[]) {
        const data = val.map(item => props.valueFormat(item.name || item))
        emits('update:modelValue', data)
    },
})

const handleClick = (name: string) => {
    currentTag.value = name
    bakTag.value = name
}

// 删除节点
const handleDelete = (name: string) => {
    const data = [...props.modelValue]
    data.splice(data.indexOf(name), 1)
    tags.value = data
    emits('change', data)
}

// 是否有同名
const isSameName = (name: string | number) => props.modelValue.includes(name) && bakTag.value !== name

// 是否通过正则检测
const isPassTest = (name: string) => props.regexp.test(name)

// 检查变更的tag name是否已存在和通过正则验证
const checkTag = (name: string) => !isSameName(name) && isPassTest(name)

const closeError = () => {
    errorVisible.value = false
    sameNameMessage.value = ''
    clearTimeout(timerId.value)
}

const showError = () => {
    clearTimeout(timerId.value)
    if (isSameName(currentTag.value)) {
        sameNameMessage.value = message
    }
    errorVisible.value = true
    currentInput.value?.focus()
    timerId.value = setTimeout(() => closeError(), 3000)
}

// tag 修改保存时
const handleSave = ({ target }: FocusEvent) => {
    currentRef.value = target
    currentTag.value = currentTag.value.trim()
    // 如果编辑值为空则删除当前tag
    if (currentTag.value === '') {
        handleDelete(bakTag.value)
        return
    }

    currentInput.value = target as HTMLInputElement

    // 检测输入数据
    if (!checkTag(currentTag.value)) { showError(); return }

    const data = tags.value.map(item => (item.name === bakTag.value ? currentTag.value : item.name))
    bakTag.value = ''
    tags.value = data
    emits('change', data)
}

const handleSaveClear = () => {
    closeError()
    currentTag.value = bakTag.value // 恢复值
}

const showCreate = () => {
    currentTag.value = ''
    createVisible.value = true
}

// tag 新建保存时
const handleInsert = ({ target }: FocusEvent) => {
    currentRef.value = target
    currentTag.value = currentTag.value.trim()
    // 如果编辑值为空则关闭输入框
    if (currentTag.value === '') {
        createVisible.value = false
        return
    }

    currentInput.value = target as HTMLInputElement

    // 检测输入数据
    if (!checkTag(currentTag.value)) { showError(); return }

    const data = [...props.modelValue, currentTag.value]
    createVisible.value = false
    tags.value = data
    emits('change', data)
    setTimeout(() => showCreate(), 0)
}

const handleInsertClear = () => {
    closeError()
    createVisible.value = false
    currentTag.value = ''
}

// 回车失去焦点
const handleBlur = ({ target }: KeyboardEvent) => {
    if (!target) { return }
    // const myTarget: HTMLInputElement = target
    currentRef.value = target
    const myTarget: any = target
    myTarget.blur()
}
</script>

<style lang="scss" module>
div.input {
    width: 100px;
}

.draggable {
    display: inline-block;
    margin-top: -8px;
    line-height: 1;
}

span.draggable > * {
    margin-top: 8px;
    margin-right: 8px;
    vertical-align: bottom;
}

.alert {
    :global {
        p.el-alert__description {
            margin-top: 0;
        }
    }
}
</style>
