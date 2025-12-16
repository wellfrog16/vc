<template>
    <el-sub-menu
        :key="item.path"
        :index="item.path"
        :popper-class="popperClass"
    >
        <template #title>
            <vc-icon v-if="type && name" :type="type" :name="name" box />
            <span>{{ item.meta && item.meta.title }}{{ item.meta?.title }}</span>
        </template>
        <template v-for="item1 in item.children">
            <!-- 无子级菜单 -->
            <template v-if="!isHiddenItem(item1) && (!item1.children || isHiddenChildren(item1))">
                <MenuItem :key="myItem(item1).path" :item="myItem(item1)" />
            </template>

            <!-- 有子菜单 -->
            <template v-if="!isHiddenItem(item1) && (item1.children && !isHiddenChildren(item1))">
                <submenu-item :key="myItem(item1).path" :item="myItem(item1)" :popper-class="popperClass" />
            </template>
        </template>
    </el-sub-menu>
</template>

<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'
import * as helper from './helper'
import MenuItem from './menu-item.vue'

interface IPropType {
    item: RouteRecordRaw
    popperClass: string
}

const props = defineProps<IPropType>()
const { isHiddenItem, isHiddenChildren } = helper
const [type = '', name = ''] = props.item.meta?.icon || []

function myItem(item: RouteRecordRaw) {
    const data = { ...item }
    data.path = `${props.item.path}/${data.path}`
    return data
}
</script>
