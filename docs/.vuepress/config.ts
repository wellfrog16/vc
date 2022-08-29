const { defaultTheme } = require('@vuepress/theme-default')
const path = require('path')

module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: 'Element-plus-components',
    description: '基于element-plus的组件库，也包含独立组件',
    alias: {
        // '@components': path.resolve(__dirname, '../../src/components'),
        '@': path.resolve(__dirname, '../../src'),
    },
    theme: defaultTheme({
        navbar: [
            {
                text: '指南',
                link: '/',
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
                {
                    text: '表单组件',
                    collapsible: true,
                    children: [
                        '/form/choice',
                        '/form/choice-boolean',
                        '/form/confirm-switch',
                        '/form/daterange-picker',
                        '/form/select',
                        '/form/thousand-input',
                    ],
                },
                {
                    text: '其他组件',
                    collapsible: true,
                    children: [
                        '/other/awesome-icon',
                        '/other/el-icon',
                        '/other/svg-icon',
                        '/other/icon',
                        '/other/button',
                        '/other/easy-pagination',
                        '/other/screenfull',
                        '/other/text-ellipsis',
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
}