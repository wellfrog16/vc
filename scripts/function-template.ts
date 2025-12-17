export function kebabToCamel(name: string): string {
    return name
        .split('-')
        .map((word, idx) =>
            idx === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join('')
}

export function createTemplate(name: string) {
    const kebabName = kebabToCamel(name)

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
