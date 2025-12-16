#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { createTemplate, pascalToKebab } from './function-template'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 获取组件名称
const functionName = process.argv[2]

if (!functionName) {
    console.error('请提供函数名称: pnpm gen:fun function-name')
    process.exit(1)
}

// 验证组件名称格式
if (!/^[a-z][a-z0-9-]*[a-z0-9]$/.test(functionName)) {
    console.error('函数名称必须以小写字母开头，只能包含字母、数字、短横线，不能以短横线结尾')
    process.exit(1)
}

const functionDir = join(__dirname, '../packages/utils/src/functions', functionName)

// 检查函数是否已存在
if (existsSync(functionDir)) {
    console.error(`函数 ${functionName} 已存在`)
    process.exit(1)
}

const template = createTemplate(functionName)

// 创建组件目录
mkdirSync(functionDir, { recursive: true })

// 创建模板文件
writeFileSync(join(functionDir, 'index.ts'), template.function)

const playgroundDir = join(__dirname, '../playground/src/views/functions/components')

// 创建 playground 文件
writeFileSync(join(playgroundDir, `${functionName}.vue`), template.playground)

console.log('========================================================================')
console.log(`✅ 组件 ${functionName} 创建成功！`)
console.log(`📁 位置: packages/utils/src/functions/${functionName}`)
console.log(`📝 请使用下面语句在 packages/utils/src/index.ts 中导出新函数\n`)
console.log(`export { default as ${pascalToKebab(functionName)} } from './functions/${functionName}'\n`)
console.log('------------------------------------------------------------------------\n')
console.log(`✅ 组件 ${functionName} playground 创建成功！`)
console.log(`📁 位置: playground/src/views/functions/component/${functionName}`)
console.log(`📝 请使用下面语句在 playground/src/views/functions/data.ts 中增加菜单\n`)
console.log(`{ text: '${functionName}' },\n`)
console.log('========================================================================')
