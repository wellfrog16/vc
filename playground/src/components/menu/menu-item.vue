<template>
    <el-menu-item
        v-bind="itemProps"
        @click="handleLink"
    >
        <h-icon v-if="type && name" :type="type" :name="name" box />
        <template #title><span>{{ item.meta && item.meta.title }}</span></template>
    </el-menu-item>
</template>

<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

interface IPropType {
    item: RouteRecordRaw
}

interface IMenuItemProps {
    key: string
    index?: string
}

const props = defineProps<IPropType>()
const [type = '', name = ''] = props.item.meta?.icon || []

const isLink = computed(() => {
    const meta = props.item?.meta || {}
    return meta.type === 'link'
})

const itemProps = computed(() => {
    const { item } = props
    const params: IMenuItemProps = {
        key: item.path,
    }
    // 无index则不会触发el-menu的router
    if (!isLink.value) { params.index = item.path }

    return params
})

function handleLink() {
    const meta = props.item?.meta || {}
    isLink.value && meta.url && window.open(meta.url as string)
}
</script>
