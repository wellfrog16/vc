import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { path, getDirname } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: 'VC 组件库',
    description: '基于element-plus的组件库，也包含独立组件',
    templateDev: path.resolve(__dirname, './templates/dev.html'),
    templateBuild: path.resolve(__dirname, './templates/build.html'),
    alias: {
        // '@components': path.resolve(__dirname, '../../src/components'),
        '@': path.resolve(__dirname, '../../src'),
    },
    theme: defaultTheme({
        themePlugins: {
            mediumZoom: false,
        },
        navbar: [
            {
                text: '指南',
                link: '/',
            },
            {
                text: '组件',
                children: [
                    '/form/',
                    '/other/',
                ],
            },
            {
                text: 'Github',
                link: 'http://www.baidu.com',
            },
        ],
        sidebarDepth: 0,
        sidebar: {
            '/': [
                {
                    text: '指南',
                    link: '/',
                },
            ],
            '/form/': [
                {
                    text: '表单组件',
                    collapsible: false,
                    children: [
                        '/form/choice',
                        '/form/choice-boolean',
                        '/form/confirm-switch',
                        '/form/daterange-picker',
                        '/form/dialog-upload-images',
                        '/form/select',
                        '/form/tags',
                        '/form/thousand-input',
                        '/form/tinymce',
                        '/form/tree-picker',
                    ],
                },
            ],
            '/other/': [
                {
                    text: '其他组件',
                    collapsible: false,
                    children: [
                        '/other/easy-pagination',
                        '/other/awesome-icon',
                        '/other/el-icon',
                        '/other/svg-icon',
                        '/other/icon',
                        '/other/button',
                        '/other/cropper',
                        '/other/image',
                        '/other/qr-code',
                        '/other/screenfull',
                        '/other/single-player',
                        '/other/text-ellipsis',
                        '/other/upload-file',
                    ],
                },
            ],
        },
    }),
    markdown: {
        importCode: {
            handleImportPath: (str) => {
                return str.replace(/^@/, path.resolve(__dirname, '../../src'));
            },
        },
    },
})