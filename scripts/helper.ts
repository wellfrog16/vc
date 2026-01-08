import klawSync from 'klaw-sync'

export function getFoldFile(root: string, nofile: boolean = false) {
    const result = new Map<string, { fileName: string, path: string }>()
    klawSync(root, {
        nofile,
        depthLimit: 0,
    }).forEach(dir => {
        console.log(dir.path)
        console.log('--------------------')
        const parts = dir.path.split('\\')
        const lastPart = parts[parts.length - 1]
        console.log(lastPart)
        result.set(lastPart, { fileName: lastPart, path: dir.path })
    })
    return result
}
