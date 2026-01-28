import path from 'node:path'
import process from 'node:process'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'

const resolve = (dir: string) => path.join(__dirname, dir)

// const __dirname = getDirname(import.meta.url)

function getBase() {
    const deploy = process?.env?.deploy
    if (deploy === 'gh') { return '/vc/' } // github
    return '/' // default, layer0
}

export default defineConfig({
    base: getBase(),
    lang: 'zh-CN',
    title: 'VC 组件库',
    description: '基于element-plus的组件库，也包含独立组件',
    srcDir: './src',
    rewrites: {
        'components/:name/docs/(.*)': 'components/:name.md',
    },
    ignoreDeadLinks: true,
    // head: [
    //     [
    //         'script',
    //         { },
    //         'window.h_utils = { cdn: { name: \'localCDN\', path: \'http://www.dreamersky.com/local-cdn\', host: \'\' } }',
    //     ],
    // ],
    themeConfig: {
        nav: [
            {
                text: '指南',
                link: '/',
            },
            {
                text: '组件',
                link: '/components/choice',
            },
            {
                text: '更新日志',
                link: '/log.md',
            },
            {
                text: 'Github',
                link: 'https://www.github.com',
            },
        ],
        sidebar: {

            '/log': [],
            '/components': [
                {
                    text: '全局配置',
                    items: [
                        { text: 'config-provider', link: '/components/config-provider' },
                        { text: 'dark-switcher', link: '/components/dark-switcher' },
                    ],
                },
                {
                    text: '表单组件',
                    items: [
                        { text: 'choice', link: '/components/choice' },
                        { text: 'choice-boolean', link: '/components/choice-boolean' },
                        { text: 'currency', link: '/components/currency' },
                        { text: 'daterange-picker', link: '/components/daterange-picker' },
                        { text: 'dialog-map-point', link: '/components/dialog-map-point' },
                        { text: 'dialog-upload-images', link: '/components/dialog-upload-images' },
                        { text: 'icon-picker', link: '/components/icon-picker' },
                        { text: 'input', link: '/components/input' },
                        { text: 'input-number', link: '/components/input-number' },
                        { text: 'pca-picker', link: '/components/pca-picker' },
                        { text: 'select', link: '/components/select' },
                        { text: 'switch', link: '/components/switch' },
                        { text: 'tags', link: '/components/tags' },
                        { text: 'thousand-input', link: '/components/thousand-input' },
                        { text: 'tinymce', link: '/components/tinymce' },
                        { text: 'tree-picker', link: '/components/tree-picker' },
                    ],
                },
                {
                    text: '展示组件',
                    items: [
                        { text: 'backbottom', link: '/components/backbottom' },
                        { text: 'chat-container', link: '/components/chat-container' },
                        { text: 'cropper', link: '/components/cropper' },
                        { text: 'dialog', link: '/components/dialog' },
                        { text: 'dialog-camera-upload', link: '/components/dialog-camera-upload' },
                        { text: 'drag-verify', link: '/components/drag-verify' },
                        { text: 'drawer', link: '/components/drawer' },
                        { text: 'dual-pane', link: '/components/dual-pane' },
                        { text: 'easy-pagination', link: '/components/easy-pagination' },
                        { text: 'awesome-icon', link: '/components/awesome-icon' },
                        { text: 'el-icon', link: '/components/el-icon' },
                        { text: 'iconify-icon', link: '/components/iconify-icon' },
                        { text: 'svg-icon', link: '/components/svg-icon' },
                        { text: 'icon', link: '/components/icon' },
                        { text: 'button', link: '/components/button' },
                        { text: 'flag', link: '/components/flag' },
                        { text: 'image', link: '/components/image' },
                        { text: 'qr-code', link: '/components/qr-code' },
                        { text: 'screenfull', link: '/components/screenfull' },
                        { text: 'scrollbar', link: '/components/scrollbar' },
                        { text: 'single-player', link: '/components/single-player' },
                        { text: 'sync-scroll-container', link: '/components/sync-scroll-container' },
                        { text: 'text-ellipsis', link: '/components/text-ellipsis' },
                        { text: 'upload-file', link: '/components/upload-file' },
                    ],
                },
            ],
            // '/': [
            //     {
            //         text: '指南',
            //         link: '/',
            //     },
            // ],
        },
    },
    vite: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
                imports: [
                    'vue',
                    '@vueuse/core',
                    {
                        '@vueuse/core': [
                            'defaultWindow',
                            'defaultDocument',
                            'isClient',
                            'isDef',
                            'resolveUnref',
                        ],
                    },
                ],
                dts: './types/auto-imports.d.ts',
            }),
            Components({
                resolvers: [
                    ElementPlusResolver({
                        importStyle: false, // 导入 css 会报错，这里本来也是在 theme 下的 index.scss 全局引用
                    }),
                    name => {
                        if (name === 'Wrapper')
                            return { name: 'default', from: '@/components/example-wrapper.vue' }
                        if (name === 'Document')
                            return { name: 'default', from: '@/components/document.vue' }
                        if (name === 'CdnTag')
                            return { name: 'default', from: '@/components/cdn-tag.vue' }
                    },
                ],
                dirs: [], // 避免自动导入其他组件，element-plus 类型由 tsconfig 的 compilerOptions.types 控制
                // dirs: ['../src/components'],
                // globs: ['../src/components/*.vue'],
                dts: './types/components.d.ts',
                include: [/\.vue$/, /\.md$/, /\.vue\?vue/, /\.vue\.[tj]sx?\?vue/],
            }),
        ],
        resolve: {
            alias: [
                { find: /^~/, replacement: '' },
                { find: /^@\//, replacement: resolve('../src/') },
                { find: /^@components\//, replacement: resolve('../src/components/') },
            ],
        },
    },
})
