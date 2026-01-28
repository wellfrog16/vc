<template>
    <div class="main-wrapper" :class="$style.main">
        <div :class="$style['aside-wrapper']">
            <div :class="$style.aside">
                <el-scrollbar>
                    <el-collapse v-model="activeNames" :class="$style.collapse">
                        <el-collapse-item v-for="(item, index) in componentsData" :key="item.text" :title="item.text" :name="index" :class="$style['components-name-container']">
                            <el-text v-for="com in item.items" :key="com.text" :type="activeComponent === com.text ? 'primary' : 'info'" size="large" @click="setComponent(com.text)">{{ com.text }}</el-text>
                        </el-collapse-item>
                    </el-collapse>
                </el-scrollbar>
            </div>
        </div>
        <div :class="$style['container-wrapper']">
            <vc-scrollbar flex :view-class="$style.container">
                <component :is="currentComponent" v-if="currentComponent" />
                <div v-else>
                    <el-text type="warning">从左边选择一个组件</el-text>
                </div>
            </vc-scrollbar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storage } from '@wfrog/vc-utils'
import { componentsData } from './data'

const STORAGE_KEY = 'PLAYGROUND_ACTIVE_COMPONENT'
const activeNames = ref(Array.from({ length: componentsData.length }, (_, index) => index))

const modules: Record<string, any> = import.meta.glob('./components/*.vue', { eager: true })
const componentMap: Record<string, any> = {}
for (const path in modules) {
    const name = path.match(/\.\/components\/(.+)\.vue$/)![1]
    if (name) {
        componentMap[name] = modules[path].default
    }
}
const activeComponent = ref(storage.get(STORAGE_KEY) || '')
const currentComponent = computed(() => componentMap[activeComponent.value])

function setComponent(name: string) {
    activeComponent.value = name
    console.log('setComponent', name, componentMap)
    storage.set(STORAGE_KEY, name)
}
</script>

<style lang="scss" module>
.main {
    flex-direction: row;
}

.aside-wrapper {
    display: flex;
    flex-direction: column;
    background-color: var(--el-bg-color);
    margin-right: 4px;
}

.aside {
    width: 240px;
    height: 100px;
    flex-grow: 1;
    box-sizing: border-box;
    overflow-x: hidden;
    padding: 12px 0;

    :global {
        // 防止被鼠标横向拖动
        .el-scrollbar__wrap {
            overflow-x: hidden;
        }

        // .el-collapse-item__header {
        //     box-sizing: border-box;
        // }
    }
}

.collapse {
    padding: 0 12px;
}

.container-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: var(--el-bg-color);
}

.container {
    padding: 12px;
}

.components-name-container {
    :global(.el-text) {
        display: block;
        cursor: pointer;

        &:hover:not(:global(.el-text--primary)) {
            color: var(--el-color-warning);
        }
    }
}
</style>
