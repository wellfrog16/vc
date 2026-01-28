<template>
    <div class="main-wrapper" :class="$style.main">
        <div :class="$style['aside-wrapper']">
            <div :class="$style.aside">
                <el-scrollbar>
                    <el-collapse v-model="activeNames" :class="$style.collapse">
                        <el-collapse-item v-for="(item, index) in functionsData" :key="item.text" :title="item.text" :name="index" :class="$style['components-name-container']">
                            <el-text v-for="com in item.items" :key="com.text" :type="activeFunction === com.text ? 'primary' : 'info'" size="large" @click="setFunction(com.text)">{{ com.text }}</el-text>
                        </el-collapse-item>
                    </el-collapse>
                </el-scrollbar>
            </div>
        </div>
        <div :class="$style['container-wrapper']">
            <el-scrollbar :class="$style.scrollbar">
                <div :class="$style.container">
                    <component :is="currentFunction" v-if="currentFunction" />
                    <div v-else>
                        <el-text type="warning">从左边选择一个函数</el-text>
                    </div>
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storage } from '@wfrog/vc-utils'
import { functionsData } from './data'

const STORAGE_KEY = 'PLAYGROUND_ACTIVE_FUNCTION'
const activeNames = ref(Array.from({ length: functionsData.length }, (_, index) => index))

const modules: Record<string, any> = import.meta.glob('./components/*.vue', { eager: true })
const functionMap: Record<string, any> = {}
for (const path in modules) {
    const name = path.match(/\.\/components\/(.+)\.vue$/)![1]
    if (name) {
        functionMap[name] = modules[path].default
    }
}
const activeFunction = ref(storage.get(STORAGE_KEY) || '')
const currentFunction = computed(() => functionMap[activeFunction.value])

function setFunction(name: string) {
    activeFunction.value = name
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

.scrollbar {
    height: 100px;
    flex-grow: 1;
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
