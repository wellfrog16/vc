import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: './',
    resolve: {
        alias: [
            { find: /^~/, replacement: '' },
            { find: /^@\//, replacement: resolve('./src/') },
            // { find: /^nprogress$/, replacement: cdn('nprogress', '0.2.0') },
            // { find: /^axios$/, replacement: cdn('axios', '0.27.2') },
            // { find: /^moment$/, replacement: cdn('moment') },
            // { find: /^dayjs$/, replacement: cdn('dayjs') },
            // { find: /^lodash$/, replacement: cdn('lodash', '4.17.21') },
            // { find: /^three$/, replacement: cdn('three', '0.143.0') },

            // { find: /^sortablejs$/, replacement: cdn('sortablejs') },
            // { find: /^vuedraggable$/, replacement: cdn('vuedraggable@next') },
            // { find: /^vuedraggable$/, replacement: 'http://cdn.jsdelivr.net/npm/vuedraggable@4.0.3/dist/vuedraggable.umd.min.js' },
            // { find: /^draggable2$/, replacement: 'https://cdn.jsdelivr.net/npm/vuedraggable@2.24.3/dist/vuedraggable.umd.min.js' },
            // { find: /^crypto-js/, replacement: cdn('crypto-js') }, // 已使用按需加载
        ],
    },
})
