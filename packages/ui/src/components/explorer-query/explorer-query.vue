<template>
    <div ref="queryRef" :class="$style['explorer-query']">
        <div ref="formContainerRef" :class="[$style['form-container'], { [$style.expand]: isExpanded }]">
            <ElForm ref="formRef" :inline="true" :model="model" :class="$style.form">
                <slot />
            </ElForm>
        </div>
        <div ref="actionsRef" :class="$style.actions">
            <VcButton
                v-if="hasMore"
                link
                type="primary"
                :icon="{ name: 'ArrowDown', position: 'right' }"
                :class="[{ [$style.expand]: isExpanded }, $style.more]"
                :time="300"
                @click="() => toggle()"
            >
                {{ expandText }}
            </VcButton>
            <VcButton @click="handleReset">重置</VcButton>
            <VcButton type="primary" @click="handleSearch">搜索</VcButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IExplorerQueryEmits, IExplorerQueryProps } from './explorer-query'
import { promiseTimeout, useElementSize, useResizeObserver, useToggle } from '@vueuse/core'
import VcButton from '../button/button.vue'
import { calculateLayout } from './explorer-query'

const props = withDefaults(defineProps<IExplorerQueryProps>(), {
    padding: 8,
    height: 32,
    autoSpace: true,
})
const emits = defineEmits<IExplorerQueryEmits>()

const queryRef = useTemplateRef('queryRef')
const formContainerRef = useTemplateRef('formContainerRef')
const formRef = useTemplateRef('formRef')
const formElRef = computed(() => formRef.value?.$el)
const actionsRef = useTemplateRef('actionsRef')

const [isExpanded, toggle] = useToggle(false)
const expandText = computed(() => (isExpanded.value ? '收起搜索' : '展开搜索'))

const { height: formHeight } = useElementSize(formElRef)
const hasMore = computed(() => formHeight.value > props.height + 8)

function handleReset() {
    formRef.value?.resetFields()
    emits('search', props.model)
}

function handleSearch() {
    emits('search', props.model)
}

function refreshLayout() {
    if (!props.autoSpace) { return }
    calculateLayout(queryRef.value!, actionsRef.value!, formContainerRef.value!)
}

useResizeObserver(queryRef, () => refreshLayout())

onMounted(async () => {
    await promiseTimeout(0)
    refreshLayout()
})
</script>

<style lang="scss" module>
.explorer-query {
    padding-bottom: v-bind('`${padding}px`');
    display: flex;
    column-gap: 8px;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid var(--el-border-color-lighter);
}

.form-container {
    height: v-bind('`${height}px`');
    overflow: hidden;

    &.expand {
        height: auto;
    }
}

.form {
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 24px;

    :global {
        .el-form-item {
            margin-bottom: 0;
            margin-right: 0;
        }
    }
}

.more {
    :global(.el-icon) {
        transition: all 0.3s;
    }

    &.expand {
        :global(.el-icon) {
            transform: rotate(180deg);
        }
    }
}

.actions {
    display: flex;
    align-items: center;
}
</style>
