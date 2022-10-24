import klawSync from 'klaw-sync'
import fs from 'fs'
import path from 'path'
import { cwd } from 'process'

const JS_PATH = path.resolve(__dirname, '../es/components')

const names = klawSync(JS_PATH, {
    nofile: true,
    depthLimit: 0,
}).map(dir => dir.path.split('\\').pop())

const upper = (_, letter) => letter.toUpperCase()

let content = `// GlobalComponents for Volar
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
`

names.forEach(name => {
    let componentName = `H-${name}`.replace(/-(\w)/g, upper)

    if (name === 'qr-code') { componentName = 'HQRCode' }
    if (name === 'svg-icon') { componentName = 'HSVGIcon' }
    content += `        ${componentName}: typeof import('@wfrog/vc')['${componentName}']\n`
})

content += `    }
}
export {}
`
fs.promises.writeFile(`${cwd()}/es/global.d.ts`, content).then(() => {
    console.log('build global.d.ts finished')
})

