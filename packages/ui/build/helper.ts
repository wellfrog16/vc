import path from 'node:path'
import klawSync from 'klaw-sync'

export function getFoldFile(relativePath: string, nofile: boolean = false) {
    const result = new Map<string, { fileName: string, path: string }>()
    klawSync(path.resolve(__dirname, relativePath), {
        nofile,
        depthLimit: 0,
    }).forEach(dir => {
        const parts = dir.path.split('\\')
        const lastPart = parts[parts.length - 1]
        result.set(lastPart, {
            fileName: lastPart,
            path: dir.path,
        })
    })
    return result
}
