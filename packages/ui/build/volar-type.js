import fs from 'node:fs'
import path from 'node:path'
import klawSync from 'klaw-sync'

const baseOutput = path.resolve(__dirname, '../dist/es')
const componentNames = klawSync(`${baseOutput}/components`, {
    nofile: true,
    depthLimit: 0,
}).map(dir => path.basename(dir.path))

const directiveNames = klawSync(`${baseOutput}/directives`, {
    nofile: true,
    depthLimit: 0,
}).map(dir => path.basename(dir.path))

const upper = (_, letter) => letter.toUpperCase()

let content = `// GlobalComponents for Volar
declare module 'vue' {
    export interface GlobalComponents {
`

componentNames.forEach(name => {
    const componentName = `Vc-${name}`.replace(/-(\w)/g, upper)
    content += `        ${componentName}: typeof import('@wfrog/vc-ui')['${componentName}']\n`
})

content += `    }\n`
content += `    export interface GlobalDirectives {
`

directiveNames.forEach(name => {
    const directiveName = `v-${name}`.replace(/-(\w)/g, upper)
    content += `        ${directiveName}: typeof import('@wfrog/vc-ui/es/directives/${name}')\n`
})

content += `    }\n}\nexport {}`

fs.writeFileSync(path.resolve(__dirname, '../dist/global.d.ts'), content)
console.log('build global.d.ts finished')
