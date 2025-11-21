import antfu from '@antfu/eslint-config'

export default antfu(
    {
    // https://eslint.style/rules
        stylistic: {
            indent: 4, // 4, or 'tab'
        },
        vue: true,
        typescript: true,
        javascript: true,
        yaml: false,

        // formatters 依赖于 eslint-plugin-format
        formatters: {
            /**
             * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
             * By default uses Prettier
             */
            css: true,
            /**
             * Format HTML files
             * By default uses Prettier
             */
            html: true,
            /**
             * Format Markdown files
             * Supports Prettier and dprint
             * By default uses Prettier
             */
            markdown: 'prettier',
        },
        ignores: [
            '**/fixtures',
            // ...globs
        ],
    },
    {
    // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/
        files: ['**/*.json', '**/*.jsonc'],
        rules: {
            'jsonc/indent': ['error', 2, {}],
        },
    },
    {
    // https://eslint.vuejs.org/rules/
        files: ['**/*.vue'],
        rules: {
            'vue/html-indent': ['error', 4, {
                attribute: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            }],
            'vue/block-order': ['error', {
                order: ['template', 'script', 'style'],
            }],
            'vue/singleline-html-element-content-newline': [0],
            'vue/max-attributes-per-line': ['error', {
                singleline: { max: 7 },
                multiline: { max: 1 },
            }],
        },
    },
    {
        files: ['**/*.js', '**/*.ts', '**/*.mts', '**/*.mjs'],
        rules: {
            indent: ['error', 4, { SwitchCase: 1 }],
        },
    },
    {
    // ?? https://eslint.org/docs/latest/rules
        rules: {
            'style/max-statements-per-line': ['error', { max: 2 }],
            'no-console': 'off',
            '@stylistic/arrow-parens': ['error', 'as-needed'],
        },
    },
)
