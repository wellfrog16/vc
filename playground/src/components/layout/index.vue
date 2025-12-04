<template>
    <el-container :class="$style.container">
        <el-aside :class="$style.aside" width="auto">
            <h1 :class="$style.logo"><span v-show="logoVisible">Playground</span></h1>
            <AsideMenu
                class="aside-menu"
                :data="staticRoutes"
                :collapse="collapse"
                :default-active="defaultActive"
            />
        </el-aside>
        <el-container>
            <el-header :class="$style.header">这里是用产物测试，模拟真实场景，测试功能和 ts 类型</el-header>
            <el-main id="elMain" :class="$style.main">
                <router-view v-slot="{ Component }">
                    <transition appear name="fade-transform" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import { useRoute } from 'vue-router'
import AsideMenu from '@/components/menu/index.vue'
import { staticRoutes } from '@/plugins/router'

const router = useRoute()
const logoVisible = ref(true)
const collapse = ref(false)

const defaultActive = computed(() => {
    const matched = [...router.matched]
    const route = matched.reverse().find(item => (item.meta && item.meta.belong) || !(item.meta && item.meta.hidden))
    // return route?.meta.belong || route?.path; // todo test
    return route?.path // todo test
})
</script>

<style lang="scss" module>
$height: 60px;
$page-height: calc(
    100vh - 60px
); // 计算著主容器高度，原本非必要，然后突然出现，原因未知。表现为滚动条异常（变为body滚动条）

.logo {
    height: $height;
    margin: 0;
    font-size: 20px;
    line-height: $height;
    color: var(--color-white);
    text-align: center;
}

.container {
    height: 100vh;

    :global(.aside-menu:not(.el-menu--collapse)) {
        width: 250px;
    }
}

.aside {
    // --el-menu-bg-color: red;
    background-color: var(--color-primary);

    > ul {
        border-right: 0;
    }
}

.header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $height;
    line-height: $height;
    background-color: var(--el-color-white);
    // border-bottom: 1px solid var(--el-border-color);
    // box-shadow: 0 1px 5px rgb(0 0 0 / 20%);
}

main.main {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 0;
    padding: 0;

    // height: @page-height;
    overflow-x: hidden;
    background-color: #f0f2f5;
}
</style>
