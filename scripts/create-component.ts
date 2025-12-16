#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { createTemplate, kebabToPascal } from './component-template'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 获取组件名称
const componentName = process.argv[2]

if (!componentName) {
    console.error('请提供组件名称: pnpm gen:com component-name')
    process.exit(1)
}

// 验证组件名称格式
if (!/^[a-z][a-z0-9-]*[a-z0-9]$/.test(componentName)) {
    console.error('组件名称必须以小写字母开头，只能包含字母、数字、短横线，不能以短横线结尾')
    process.exit(1)
}

const componentDir = join(__dirname, '../packages/ui/src/components', componentName)

// 检查组件是否已存在
if (existsSync(componentDir)) {
    console.error(`组件 ${componentName} 已存在`)
    process.exit(1)
}

const template = createTemplate(componentName)

// 创建组件目录
mkdirSync(componentDir, { recursive: true })

// 创建模板文件
writeFileSync(join(componentDir, `${componentName}.vue`), template.component)
writeFileSync(join(componentDir, `${componentName}.ts`), template.types)
writeFileSync(join(componentDir, 'index.ts'), template.install)

// 创建文档目录
const docsDir = join(componentDir, 'docs')
mkdirSync(docsDir, { recursive: true })

// 创建模板文件
writeFileSync(join(docsDir, 'index.md'), template.docs)
writeFileSync(join(docsDir, 'example.vue'), template.docsExample)
writeFileSync(join(docsDir, 'simple.vue'), template.docsSimple)
writeFileSync(join(docsDir, 'usage.vue'), template.docsUsage)

const playgroundDir = join(__dirname, '../playground/src/views/components/components')

// 创建 playground 文件
writeFileSync(join(playgroundDir, `${componentName}.vue`), template.playground)

// 创建测试目录和文件
// const testDir = join(componentDir, '__tests__')
// mkdirSync(testDir, { recursive: true })
// writeFileSync(join(testDir, `${componentName}.spec.ts`), testTemplate)

// 更新组件导出
// const componentsIndexPath = join(__dirname, '../packages/ui/src/components/index.ts')
// const componentsIndex = readFileSync(componentsIndexPath, 'utf-8')

// const newExport = `export * from './${componentName}';`
// const updatedIndex = `${componentsIndex.trim()}\n${newExport}\n`

// writeFileSync(componentsIndexPath, updatedIndex)

console.log('========================================================================')
console.log(`✅ 组件 ${componentName} 创建成功！`)
console.log(`📁 位置: packages/ui/src/components/${componentName}`)
console.log(`📝 请使用下面语句在 packages/ui/src/index.ts 中导出新组件\n`)
console.log(`export { default as Vc${kebabToPascal(componentName)} } from './components/${componentName}/${componentName}.vue'\n`)
console.log(`📝 请使用下面语句在 packages/ui/.vitepress/config.mts 中增加路由菜单\n`)
console.log(`{ text: '${componentName}', link: '/components/${componentName}' },\n`)
console.log('------------------------------------------------------------------------\n')
console.log(`✅ 组件 ${componentName} playground 创建成功！`)
console.log(`📁 位置: playground/src/views/components/components/${componentName}`)
console.log(`📝 请使用下面语句在 playground/src/views/components/data.ts 中增加菜单\n`)
console.log(`{ text: '${componentName}' },\n`)
console.log('========================================================================')
