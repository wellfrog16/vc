export function pascalToKebab(name: string) {
    return name
        .split('')
        .map((char, index) => {
            if (index === 0) {
                return char.toLowerCase()
            }
            if (char === char.toUpperCase()) {
                return `-${char.toLowerCase()}`
            }
            return char
        })
        .join('')
}

export function createTemplate(name: string) {
    const kebabName = pascalToKebab(name)

    const functionTemplate = `function ${kebabName}(str: string) {
    if (!str) { return '' }
    return str
}

export default ${kebabName}
`

    const playgroundTemplate = `<template>
    <el-space direction="vertical" size="large" alignment="left">
        <div>todo</div>
    </el-space>
</template>

<script setup lang="ts">
import { ${kebabName} } from '@wfrog/vc-utils'
</script>
`

    return {
        function: functionTemplate,
        playground: playgroundTemplate,
    }
}
