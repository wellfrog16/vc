<template>
    <el-tooltip v-if="content || code" ref="tooltipRef" v-bind="tooltipProps" @before-show="handleShow">
        <span v-if="myProps.letter" :class="$style.letter" @click="handleClick">{{ myProps.letter }}</span>
        <VcIconifyIcon v-else :name="myProps.icon" :class="$style.icon" @click="handleClick" />
        <template #content><div :class="$style.content" :style="{ maxWidth: myProps.maxWidth }" v-html="myContent" /></template>
    </el-tooltip>
</template>

<script setup lang="ts">
import type { ElTooltipProps } from 'element-plus'
import type { IInfoTooltipEmits, IInfoTooltipProps } from './info-tooltip'
import { pick } from 'lodash-es'
import { injectConfig } from '../config-provider/config-provider'
import VcIconifyIcon from '../iconify-icon/iconify-icon.vue'

const props = withDefaults(defineProps<IInfoTooltipProps>(), {
    maxWidth: '400px',
    icon: 'carbon:help',
    offsetY: '-4px',
})
const emits = defineEmits<IInfoTooltipEmits>()

const $attrs = useAttrs()
const { infoTooltip } = injectConfig()
const tooltipRef = useTemplateRef('tooltipRef')
const myContent = ref(props.content)

const tooltipProps = computed(() => {
    return {
        placement: 'top',
        rawContent: true,
        trigger: 'hover',
        ...infoTooltip?.tooltipProps,
        ...$attrs,
    } as ElTooltipProps
})

const myProps = computed(() => {
    return {
        ...props,
        ...pick(infoTooltip, ['letter', 'icon', 'offsetY', 'maxWidth']),
    } as Required<IInfoTooltipProps>
})

function setContent(value: string) {
    myContent.value = value
    tooltipRef.value?.updatePopper()
}

function handleClick() {
    emits('click', props.code)
}

function handleShow() {
    infoTooltip?.onShowed && infoTooltip.onShowed(props.code, myContent.value, setContent)
}
</script>

<style lang="scss" module>
.letter {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
    border: 1px solid var(--el-text-color-regular);
    font-size: 0.7em;
    border-radius: 12px;
    cursor: pointer;
    transform: translateY(v-bind('myProps.offsetY'));

    &:hover {
        color: var(--el-color-primary);
        border-color: var(--el-color-primary);
    }
}

.icon {
    cursor: pointer;
    outline: none;
    transform: translateY(v-bind('myProps.offsetY'));

    &:hover {
        color: var(--el-color-primary);
    }
}

.content {
    white-space: pre-wrap;
    font-size: var(--el-font-size-base);
    text-align: justify;
}
</style>
