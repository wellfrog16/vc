<template>
    <div v-show="visible" class="vc-backbottom" :class="$style.wrapper" @click="scrollToBottom">
        <slot><ElIcon :class="$style.icon"><CaretBottom /></ElIcon></slot>
    </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { ElIcon } from 'element-plus'
import { CaretBottom } from '@element-plus/icons-vue'

interface IProp {
    target?: HTMLElement
    right?: number
    bottom?: number
    visibilityHeight?: number
}

const props = withDefaults(defineProps<IProp>(), {
    right: 40,
    bottom: 40,
    visibilityHeight: 200,
})

const myTarget = computed(() => props.target || document.documentElement)

const diffHeight = ref(0) // 距离底部的距离
const scrollHeight = ref(0) // 页面带滚动条高度
const clientHeight = ref(0) // 页面可视高度
const hasVerticalScrollbar = computed(() => scrollHeight.value > clientHeight.value)
const visible = computed(() => hasVerticalScrollbar.value && diffHeight.value > props.visibilityHeight)

const updateHeightData = () => {
    scrollHeight.value = myTarget.value.scrollHeight // 页面带滚动条高度
    clientHeight.value = myTarget.value.clientHeight
    const scrollTop = myTarget.value.scrollTop // 卷去的高度
    diffHeight.value = scrollHeight.value - clientHeight.value - scrollTop
}

const scrollToBottom = () => {
    myTarget.value?.scrollTo({ top: myTarget.value.scrollHeight, behavior: 'smooth' })
}

onMounted(() => {
    if (props.target) {
        myTarget.value.addEventListener('scroll', updateHeightData)
    }
    else {
        document.addEventListener('scroll', updateHeightData)
    }
    updateHeightData()
})

onBeforeUnmount(() => {
    if (props.target) {
        myTarget.value.removeEventListener('scroll', updateHeightData)
    }
    else {
        document.removeEventListener('scroll', updateHeightData)
    }
})
</script>

<style lang="scss" module>
.wrapper {
    position: fixed;
    right: v-bind('`${right}px`');
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
    box-shadow: var(--el-box-shadow-lighter);
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
