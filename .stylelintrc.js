module.exports = {
    extends: [
        "@wfrog/stylelint-config-vue-scss",
    ],
    rules: {
        "value-keyword-case": ["lower", { "ignoreFunctions": ["v-bind"] }], // 忽略 vue3 绑定样式
    },
};
