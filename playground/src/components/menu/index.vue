<template>
    <el-menu
        router
        :class="$style.main"
        :collapse="collapse"
        :default-openeds="defaultOpeneds"
        :default-active="defaultActive"
    >
        <template v-for="(item, index) in data">
            <!-- 无子菜单 -->
            <template v-if="!isHiddenItem(item) && (!item.children || isHiddenChildren(item))">
                <MenuItem :key="index" :item="item" />
            </template>

            <!-- 有子菜单 -->
            <template v-if="!isHiddenItem(item) && (item.children && !isHiddenChildren(item))">
                <SubmenuItem :key="index" :item="item" :popper-class="`${popperClass} ${$style['popper-class']}`" />
            </template>
        </template>
    </el-menu>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import * as helper from './helper'
import MenuItem from './menu-item.vue'
import SubmenuItem from './submenu-item.vue'

export default defineComponent({
    components: { MenuItem, SubmenuItem },
    props: {
        data: { type: Array as PropType<RouteRecordRaw[]>, default: () => [] },
        collapse: { type: Boolean, default: false },
        defaultOpeneds: { type: Array as PropType<string[]>, default: () => [] },
        defaultActive: { type: String, default: '' },
        popperClass: { type: String, default: '' },
    },
    setup() {
        return {
            isHiddenItem: helper.isHiddenItem,
            isHiddenChildren: helper.isHiddenChildren,
        }
    },
})
</script>

<style lang="scss" module>
.main,
.popper-class {
    :global {
        .el-sub-menu__title,
        .el-menu-item {
            > span {
                margin-left: 5px;
            }
        }

        .el-sub-menu__title:hover {
            background-color: var(--el-menu-hover-bg-color) !important;
        }

        .svg-icon {
            font-size: 1.2em;
        }
    }
}
</style>
