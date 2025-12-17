<template>
    <el-space direction="vertical" size="large" alignment="left">
        <el-text>树形结构</el-text>
        <el-tree :data="data" default-expand-all />
        <el-divider />
        <el-text>过滤节点 tree.filter(data, item => item.value === '3-1')，返回完整树</el-text>
        <el-tree :data="node1" default-expand-all />
        <el-text>过滤节点 tree.filter(data, item => item.value === '3-1', { fullPath: false })，返回节点</el-text>
        <el-tree :data="node2" default-expand-all />
        <el-divider />
        <el-text>获取路径 tree.getPath(data, item => item.value === '2-1')</el-text>
        <el-text type="primary">{{ node3Path }}</el-text>
        <!-- <el-text>{{ node3 }}</el-text> -->
    </el-space>
</template>

<script setup lang="ts">
import { tree } from '@wfrog/vc-utils'

// 必须声明，否则类型不匹配
interface ITreeNode {
    value: string
    label: string
    children?: ITreeNode[]
}

const data: ITreeNode[] = [
    {
        value: '1',
        label: 'Level one 1',
        children: [
            {
                value: '1-1',
                label: 'Level two 1-1',
                children: [
                    {
                        value: '1-1-1',
                        label: 'Level three 1-1-1',
                    },
                ],
            },
        ],
    },
    {
        value: '2',
        label: 'Level one 2',
        children: [
            {
                value: '2-1',
                label: 'Level two 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: 'Level three 2-1-1',
                    },
                ],
            },
            {
                value: '2-2',
                label: 'Level two 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: 'Level three 2-2-1',
                    },
                ],
            },
        ],
    },
    {
        value: '3',
        label: 'Level one 3',
        children: [
            {
                value: '3-1',
                label: 'Level two 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: 'Level three 3-1-1',
                    },
                ],
            },
            {
                value: '3-2',
                label: 'Level two 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: 'Level three 3-2-1',
                    },
                ],
            },
        ],
    },
]

const node1 = tree.filter(data, item => item.value === '3-1')
const node2 = tree.filter(data, item => item.value === '3-1', { fullPath: false })
const node3 = tree.getPath(data, item => item.value === '2-1')
const node3Path = node3.map(item => item.label).join(' / ')
</script>
