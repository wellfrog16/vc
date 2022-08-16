import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = dir => path.join(__dirname, dir)

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/build.ts'),
            name: 'element-plus-components',
            fileName: format => `index.${format}.js`,
        },
        // css不要拆分
        cssCodeSplit: true,
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'element-plus'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    'vue': 'Vue',
                    'element-plus': 'ElementPlus',
                },
            },
        },
    },
    plugins: [vue()],
    resolve: {
        alias: [
            { find: /^~/, replacement: '' },
            { find: /^@\//, replacement: resolve('./src/') },
        ],
    },
})
