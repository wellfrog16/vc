<template>
    <Teleport v-if="teleportTarget" :to="teleportTarget">
        <div v-show="visible" ref="backbottomRef" :class="$style.wrapper" @click="scrollToBottom">
            <slot><ElIcon :class="$style.icon"><CaretBottom /></ElIcon></slot>
        </div>
    </Teleport>
    <div v-else v-show="visible" ref="backbottomRef" :class="$style.wrapper" @click="scrollToBottom">
        <slot><ElIcon :class="$style.icon"><CaretBottom /></ElIcon></slot>
    </div>
</template>

<script lang="ts" setup>
import { CaretBottom } from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'

import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

interface IPropType {
    target?: HTMLElement | string | null
    right?: number
    bottom?: number
    visibilityHeight?: number
    parent?: boolean
}

const props = withDefaults(defineProps<IPropType>(), {
    right: 40,
    bottom: 40,
    visibilityHeight: 200,
})

const backbottomRef = useTemplateRef('backbottomRef')
const myTarget = ref<HTMLElement>()
const defaultTarget = document.documentElement

const diffHeight = ref(0) // 距离底部的距离
const scrollHeight = ref(0) // 页面带滚动条高度
const clientHeight = ref(0) // 页面可视高度
const hasVerticalScrollbar = computed(() => scrollHeight.value > clientHeight.value)
const visible = computed(() => hasVerticalScrollbar.value && diffHeight.value > props.visibilityHeight)

const teleportTarget = computed(() => myTarget.value === document.documentElement ? 'body' : myTarget.value)

function updateHeightData() {
    scrollHeight.value = myTarget.value!.scrollHeight // 页面带滚动条高度
    clientHeight.value = myTarget.value!.clientHeight
    const scrollTop = myTarget.value!.scrollTop // 卷去的高度
    diffHeight.value = scrollHeight.value - clientHeight.value - scrollTop
}

function scrollToBottom() {
    myTarget.value?.scrollTo({ top: myTarget.value.scrollHeight, behavior: 'smooth' })
}

function getTarget() {
    let eleTarget
    if (props.parent) {
        eleTarget = backbottomRef.value?.parentElement
        return (eleTarget || defaultTarget) as HTMLElement
    }
    if (props.target) {
        if (typeof props.target === 'string') {
            eleTarget = document.querySelector(props.target)
        }
        else {
            eleTarget = props.target as HTMLElement
        }
    }
    else {
        // const container = backbottomRef.value?.parentElement?.parentElement
        // if (container && container.classList.contains('el-scrollbar__wrap')) {
        //     eleTarget = container
        // }
        let container = backbottomRef.value?.parentElement
        do {
            if (container && container.classList.contains('el-scrollbar__wrap')) {
                eleTarget = container
            }
            container = container?.parentElement
        } while (!eleTarget && container)
    }

    return (eleTarget || defaultTarget) as HTMLElement
}

onMounted(() => {
    myTarget.value = getTarget()
    if (myTarget.value === defaultTarget) {
        document.addEventListener('scroll', updateHeightData)
    }
    else {
        myTarget.value!.addEventListener('scroll', updateHeightData)
    }
    updateHeightData()
})

onBeforeUnmount(() => {
    if (myTarget.value === defaultTarget) {
        document.removeEventListener('scroll', updateHeightData)
    }
    else {
        myTarget.value!.removeEventListener('scroll', updateHeightData)
    }
})
</script>

<style lang="scss" module>
.wrapper {
    position: sticky;
    left: 100%;
    transform: translateX(v-bind('`${-right}px`'));
    bottom: v-bind('`${bottom}px`');
    z-index: 5;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    width: 40px;
    height: 40px;
    color: var(--el-color-primary-light-2);
    cursor: pointer;
    background-color: var(--el-bg-color);
    border-radius: 40px;
    box-shadow: var(--el-box-shadow);
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: var(--el-color-primary-light-9);
    }
}

.icon {
    font-size: 20px;
    color: var(--el-color-primary);
}
</style>
