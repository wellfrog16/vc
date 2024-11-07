module.exports = {
    extends: [
        '@antfu/eslint-config-vue',
    ],
    globals: {
        IGlobal: 'readonly',
        $filters: 'readonly',
        // defineProps: 'readonly',
        // defineEmits: 'readonly',
        // defineExpose: "readonly",
        // withDefaults: "readonly",
    },
    overrides: [
        {
            files: ['*.ts', '*.vue', '*.js', '*.mts'],
            rules: {
                'indent': ['error', 4, { SwitchCase: 1 }],
                '@typescript-eslint/indent': ['error', 4],
                'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
                'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
                'arrow-parens': ['error', 'as-needed'],
                'curly': ['error', 'all'],
                'import/order': ['error', {
                    pathGroups: [
                        {
                            pattern: '@/**',
                            group: 'external',
                            position: 'after',
                        },
                    ],
                    groups: ['internal', 'external', 'index', 'sibling', 'parent', 'builtin', 'object', 'type'],
                },
                ],

                // vue
                'vue/html-indent': ['error', 4, {
                    attribute: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: [],
                }],
                'vue/component-tags-order': ['error', {
                    order: ['template', 'script', 'style'],
                }],
                'vue/singleline-html-element-content-newline': [0],
                'vue/max-attributes-per-line': ['error', {
                    singleline: { max: 7 },
                    multiline: { max: 1 },
                }],
            },
        },
    ],
}
