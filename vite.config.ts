import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

const resolve = dir => path.join(__dirname, dir)

export default defineConfig({
    build: {
        outDir: 'es',
        target: 'esnext',
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, './src/index.ts'),
            name: '@wfrog/vc',
            formats: ['es'],
            fileName: 'index',
        },
        // css不要拆分
        // cssCodeSplit: false,
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'element-plus', 'lodash-es', '@element-plus/icons-vue', 'vuedraggable', '@wfrog/utils'],
            // output: {
            //     manualChunks(id) {
            //         if (id.includes('/components/')) {
            //             const arr = id.toString().split('/components/')[1].split('/')
            //             return arr[0]
            //         }
            //         if (id.includes('/node_modules/')) {
            //             return 'vendor'
            //         }
            //         return 'main'
            //     },
            //     chunkFileNames: 'components/[name]/index.js',
            //     // entryFileNames: '[name].js',
            //     // assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
            // },
            // output: {
            //     sourcemap: true,
            //     // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
            //     globals: {
            //         'vue': 'Vue',
            //         'element-plus': 'ElementPlus',
            //         '@element-plus/icons-vue': 'ElementPlusIconsVue',
            //         'lodash-es': '_',
            //         'vuedraggable': 'vuedraggable',
            //         '@wfrog/utils': 'hutils',
            //     },
            // },
        },
    },
    plugins: [vue(), dts({ cleanVueFileName: true })],
    resolve: {
        alias: [
            { find: /^~/, replacement: '' },
            { find: /^@\//, replacement: resolve('./src/') },
        ],
    },
})
