<template>
    <transition name="el-fade-in">
        <div v-show="visible" ref="backbottomRef" :class="$style.wrapper">
            <div :class="$style.container">
                <div :class="$style.body" @click="scrollToBottom">
                    <slot><ElIcon :class="$style.icon"><CaretBottom /></ElIcon></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import type { IBackBottomProps } from '../backbottom'

import { CaretBottom } from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'
import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

const props = withDefaults(defineProps<IBackBottomProps>(), {
    right: 40,
    bottom: 40,
    visibilityHeight: 200,
})

const emits = defineEmits<{
    (e: 'inited', target?: HTMLElement): void
}>()

const backbottomRef = useTemplateRef('backbottomRef')
const myTarget = ref<HTMLElement>()

const diffHeight = ref(0) // 距离底部的距离
const scrollHeight = ref(0) // 页面带滚动条高度
const clientHeight = ref(0) // 页面可视高度
const hasVerticalScrollbar = computed(() => scrollHeight.value > clientHeight.value)
const visible = computed(() => hasVerticalScrollbar.value && diffHeight.value > props.visibilityHeight)

const teleportTarget = ref<HTMLElement>()
const needTeleport = ref(false)

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
        let container = eleTarget
        let elScrollTarget = null
        do {
            if (container && container.classList.contains('el-scrollbar__wrap')) {
                needTeleport.value = true
                elScrollTarget = container
            }
            container = container?.parentElement
        } while (!elScrollTarget && container)

        if (elScrollTarget) {
            eleTarget = elScrollTarget
        }
        return eleTarget as HTMLElement
    }

    if (props.target) {
        needTeleport.value = true
        if (typeof props.target === 'string') {
            eleTarget = document.querySelector(props.target)
        }
        else {
            eleTarget = props.target as HTMLElement
        }
        return eleTarget as HTMLElement
    }

    return document.documentElement
}

onMounted(() => {
    myTarget.value = getTarget()
    if (needTeleport.value) {
        teleportTarget.value = myTarget.value as HTMLElement
    }

    if (myTarget.value === document.documentElement) {
        teleportTarget.value = document.body
        document.addEventListener('scroll', updateHeightData)
    }
    else {
        myTarget.value!.addEventListener('scroll', updateHeightData)
    }
    updateHeightData()
    emits('inited', teleportTarget.value)
})

onBeforeUnmount(() => {
    if (myTarget.value === document.documentElement) {
        window.document.removeEventListener('scroll', updateHeightData)
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
    transition: all 0.3s ease-in-out;
    width: 40px;
}

.container {
    position: relative;
}

.body {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    bottom: 0;
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
