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
                        '/form/choice.md',
                        '/form/choice-boolean.md',
                        '/form/confirm-switch.md',
                        '/form/daterange-picker.md',
                        '/form/select.md',
                    ],
                },
                {
                    text: '其他组件',
                    collapsible: true,
                    children: [
                        '/other/awesome-icon.md',
                        '/other/el-icon.md',
                        '/other/svg-icon.md',
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