<template>
    <div :class="$style['explorer-query']">
        <div :class="[$style['form-container'], { [$style.expand]: isExpanded }]">
            <el-form ref="formRef" :inline="true" :model="model" :class="$style.form">
                <slot />
            </el-form>
        </div>
        <div :class="$style.actions">
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
import { useElementSize, useToggle } from '@vueuse/core'
import VcButton from '../button/button.vue'

const props = withDefaults(defineProps<IExplorerQueryProps>(), {
    padding: 8,
    height: 32,
})
const emits = defineEmits<IExplorerQueryEmits>()

const formRef = useTemplateRef('formRef')
const formElRef = computed(() => formRef.value?.$el)

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
