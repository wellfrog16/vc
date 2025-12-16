import fs from 'node:fs'
import path, { resolve } from 'node:path'
import { getFoldFile } from '../../../scripts/helper'

const baseOutput = path.resolve(__dirname, '../dist/es')
// const cssFile = getFoldFile('../dist/es/assets')
const cssFile = getFoldFile(`${baseOutput}\\assets`)

// fs 创建一个新的css文件，把cssFile的value路径下文件的内容合并到一起
fs.writeFileSync(path.resolve(__dirname, '../dist/index.css'), [...cssFile.values()].map(data => fs.readFileSync(data.path, 'utf-8')).join('\n'))

const components = getFoldFile(`${baseOutput}\\components`, true)

// 把每个css写入到组件对应的mjs里
for (const [key, value] of cssFile) {
    // 读取文件内容的第一行信息
    const firstLine = fs.readFileSync(value.path, 'utf-8').split('\n')[0]
    // 第一行内容是 /* source: vue文件路径 */， 获取vue文件路径的值
    const vueFiles = firstLine.match(/\/\* source: (.*) \*\//)?.[1].split(',')
    if (!vueFiles) { continue }

    // 从css source获取的样式归属的组件名称
    const vueFileComponentName = vueFiles[0].match(/\/components\/(.*?)\//)?.[1]
    // 根据样式文件名获取的组件名称
    const name = key.replace(/\.css$/, '')
    // 对应组件的js文件
    const jsFile = resolve(`${baseOutput}\\components\\${vueFileComponentName}\\${vueFileComponentName}.mjs`)

    if (components.get(name)) {
        const css = fs.readFileSync(value.path, 'utf-8')
        fs.writeFileSync(`${baseOutput}\\components\\${name}\\index.css`, css)

        // 插入css引用
        const selfCss = 'import \'./index.css\'\n'
        const selfJs = fs.readFileSync(jsFile, 'utf-8')
        fs.writeFileSync(jsFile, selfCss + selfJs)
    }
    else {
        const css = fs.readFileSync(value.path, 'utf-8')
        fs.writeFileSync(`${baseOutput}\\components\\${vueFileComponentName}\\${name}.css`, css)

        // 如果是共用的子组件的样式，则使用组件名作为css名插入css引用
        const selfCss = `import \'./${name}.css\'\n`
        const selfJs = fs.readFileSync(jsFile, 'utf-8')
        fs.writeFileSync(jsFile, selfCss + selfJs)
    }
}

// 删除assets文件夹
fs.rmSync(`${baseOutput}\\assets`, { recursive: true })

console.log('build css finished')
