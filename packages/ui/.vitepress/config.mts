import path from 'node:path'
import process from 'node:process'
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
                        { text: 'input', link: '/components/input' },
                        { text: 'input-number', link: '/components/input-number' },
                        { text: 'pca-picker', link: '/components/pca-picker' },
                        { text: 'select', link: '/components/select' },
                        // { text: 'switch', link: '/components/switch' },
                        { text: 'tags', link: '/components/tags' },
                        { text: 'thousand-input', link: '/components/thousand-input' },
                        // { text: 'tinymce', link: '/components/tinymce' },
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
                        { text: 'drawer', link: '/components/drawer' },
                        { text: 'easy-pagination', link: '/components/easy-pagination' },
                        { text: 'awesome-icon', link: '/components/awesome-icon' },
                        { text: 'el-icon', link: '/components/el-icon' },
                        { text: 'svg-icon', link: '/components/svg-icon' },
                        { text: 'icon', link: '/components/icon' },
                        { text: 'button', link: '/components/button' },
                        { text: 'flag', link: '/components/flag' },
                        { text: 'image', link: '/components/image' },
                        // { text: 'qr-code', link: '/components/qr-code' },
                        // { text: 'screenfull', link: '/components/screenfull' },
                        // { text: 'sync-scroll-container', link: '/components/sync-scroll-container' },
                        // { text: 'single-player', link: '/components/single-player' },
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
        resolve: {
            alias: [
                { find: /^~/, replacement: '' },
                { find: /^@\//, replacement: resolve('../src/') },
                { find: /^@components\//, replacement: resolve('../src/components/') },
            ],
        },
        // 修复 The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0 的警告
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
        },
    },
})
