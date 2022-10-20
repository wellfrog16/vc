import klawSync from 'klaw-sync'
import fs from 'fs'
import path, { dirname, resolve } from 'path'

const JS_PATH = path.resolve(__dirname, '../es/components')

const jsEntrys = klawSync(JS_PATH, {
    nofile: true,
    depthLimit: 0,
}).map(dir => `${dir.path}/index.mjs`)

jsEntrys.forEach(js => {
    const selfJs = fs.readFileSync(js, 'utf-8')
    const cssFile = resolve(dirname(js), './index.css')

    if (fs.existsSync(cssFile)) {
        const selfCss = 'import \'./index.css\'\n'
        const jsFile = resolve(js)

        fs.writeFileSync(jsFile, selfCss + selfJs)
    }
})

console.log('build finished')
