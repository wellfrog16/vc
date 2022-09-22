import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

const resolve = dir => path.join(__dirname, dir)

export default defineConfig({
    build: {
        target: 'esnext',
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, './src/index.ts'),
            name: 'element-plus-components',
            formats: ['es'],
            fileName: format => `index.${format}.mjs`,
        },
        // css不要拆分
        cssCodeSplit: true,
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'element-plus', 'lodash-es', '@element-plus/icons-vue', 'vuedraggable', '@frog-res/h-utils'],
            // output: {
            //     sourcemap: true,
            //     // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
            //     globals: {
            //         'vue': 'Vue',
            //         'element-plus': 'ElementPlus',
            //         '@element-plus/icons-vue': 'ElementPlusIconsVue',
            //         'lodash-es': '_',
            //         'vuedraggable': 'vuedraggable',
            //         '@frog-res/h-utils': 'hutils',
            //     },
            // },
        },
    },
    plugins: [vue(), dts()],
    resolve: {
        alias: [
            { find: /^~/, replacement: '' },
            { find: /^@\//, replacement: resolve('./src/') },
        ],
    },
})
