import fs from 'node:fs'
import path from 'node:path'
import klawSync from 'klaw-sync'

const baseOutput = path.resolve(__dirname, '../dist/es')
const names = klawSync(`${baseOutput}\\components`, {
    nofile: true,
    depthLimit: 0,
}).map(dir => dir.path.split('\\').pop())

const upper = (_, letter) => letter.toUpperCase()

let content = `// GlobalComponents for Volar
declare module 'vue' {
    export interface GlobalComponents {
`

names.forEach(name => {
    let componentName = `H-${name}`.replace(/-(\w)/g, upper)

    if (name === 'qr-code') { componentName = 'HQRCode' }
    if (name === 'svg-icon') { componentName = 'HSVGIcon' }
    if (name === 'pca-picker') { componentName = 'HPCAPicker' }
    content += `        ${componentName}: typeof import('@wfrog/vc')['${componentName}']\n`
})

content += `    }\n}\nexport {}`

fs.writeFileSync(path.resolve(__dirname, '../dist/global.d.ts'), content)
console.log('build global.d.ts finished')
