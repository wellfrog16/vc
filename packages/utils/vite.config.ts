import path, { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { getFoldFile } from '../../scripts/helper'

const funEntrys: Record<string, string> = {}

for (const [key, value] of getFoldFile(path.resolve(__dirname, './src/functions'), true)) {
    funEntrys[`functions/${key}`] = value.path
}

// 简化配置，避免类型错误
export default defineConfig({
    plugins: [
        vue(),
        dts({
            // 包含的文件类型
            include: ['src/**/*.{vue,ts,tsx}'],
            exclude: ['src/__tests__/*', 'src/**/*.{test,spec,stories,demo}.{vue,ts,tsx}'],
            // 输出目录
            outDir: ['dist/es'],
            // 写入文件前的处理
            beforeWriteFile: (filePath, content) => ({
                // 替换文件路径中的 '/src/' 为 '/'，不然类型产物都会被放在src文件夹下面
                filePath: filePath.replace('/src/', '/'),
                content,
            }),
        }),
        AutoImport({
            imports: ['vue', '@vueuse/core'],
            dts: './src/types/auto-imports.d.ts',
        }),
    ],

    build: {
        cssCodeSplit: true,
        target: 'esnext', // 目标版本
        outDir: 'dist', // 输出目录
        emptyOutDir: true, // 清空输出目录
        minify: false, // 方便查看打包后的代码（排查问题），禁用最小化混淆
        // 库配置
        lib: {
            // 入口文件
            entry: {
                main: resolve(__dirname, './src/index.ts'),
                ...funEntrys,
            },
            name: '@wfrog/vc-utils',
            formats: ['es'],
            fileName: (format, entryName) => {
                // console.log(entryName, 'entryName')
                if (entryName === 'main') {
                    return 'es/index.mjs'
                }
                else {
                    return `es/${entryName}/index.mjs`
                }
            },
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                // entryFileNames: 'es/components/[name]/index.mjs',
                chunkFileNames: chunkInfo => {
                    console.log(chunkInfo.name)
                    return 'es/chunk/[hash].mjs'
                },
                // 导出方式
                exports: 'named',
                // 保留原始模块结构，而不是将所有模块合并成一个大文件
                preserveModules: false,
                // 将 src 目录设置为模块的根目录，这样输出的文件就会直接从 src 的子目录开始，去掉 src 这一层。
                preserveModulesRoot: 'src',
            },
        },
        chunkSizeWarningLimit: 2000,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        exclude: ['vue'],
    },
})
