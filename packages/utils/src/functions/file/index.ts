interface imageOption {
    format: string // todo枚举
    quality: number
}

const defaultImageOption: imageOption = {
    format: 'image/png',
    quality: 1,
}

// canvas转dataURL
export function canvasToDataURL(canvas: HTMLCanvasElement, option?: Partial<imageOption>) {
    const myOption = { ...defaultImageOption, ...option }
    return canvas.toDataURL(myOption.format, myOption.quality)
}

// img(src 或 dataurl) 转 canvas
export function imageToCanvas(data: string, crossOrigin?: string) {
    return new Promise<HTMLCanvasElement>((resolve, reject) => {
        const canvas = document.createElement('canvas') as HTMLCanvasElement
        const ctx = canvas.getContext('2d')
        const img = new Image()
        if (crossOrigin)
            img.crossOrigin = crossOrigin

        img.onload = () => {
            try {
                if (!ctx) {
                    reject(new Error('无法获取 canvas 上下文'))
                    return
                }
                canvas.width = img.width
                canvas.height = img.height
                ctx.drawImage(img, 0, 0)
                resolve(canvas)
            }
            catch (err) {
                reject(err)
            }
        }
        img.onerror = () => {
            reject(new Error('图片加载错误'))
        }
        img.src = data
    })
}

// canvas转image（同步返回 image 元素；如果需要确保加载完请使用 onload）
export function canvasToImage(canvas: HTMLCanvasElement, option?: Partial<imageOption>) {
    const img = new Image()
    img.src = canvasToDataURL(canvas, option)
    return img
}

// File / Blob 转 DataURL
export function fileOrBlobToDataURL(obj: File | Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
            const r = reader.result
            if (typeof r === 'string') {
                resolve(r)
            }
            else {
                reject(new Error('读取到非字符串的结果'))
            }
        }
        reader.onerror = () => {
            reject(new Error('文件加载错误'))
        }
        reader.readAsDataURL(obj)
    })
}

// DataURL -> Uint8Array + mime
export function dataURLtoUint8Array(dataurl: string) {
    const arr = dataurl.split(',')
    if (arr.length < 2) { throw new Error('dataURL 数据格式错误') }
    const match = arr[0].match(/:(.*?);/)
    if (!match) { throw new Error('dataURL 数据错误') }
    const mime = match[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return { uint8Array: u8arr, type: mime }
}

// DataURL -> Blob
export function dataURLToBlob(dataurl: string) {
    const data = dataURLtoUint8Array(dataurl)
    return new Blob([data.uint8Array], { type: data.type })
}

// DataURL -> File
export function dataURLToFile(dataurl: string, fileName: string) {
    const data = dataURLtoUint8Array(dataurl)
    return new File([data.uint8Array], fileName, { type: data.type })
}

export const blobToFile = (blob: Blob, fileName: string) => new File([blob], fileName, { type: blob.type, lastModified: Date.now() })

// Blob -> Image（等待图片加载完成）
export function blobToImage(blob: Blob, crossOrigin?: string): Promise<HTMLImageElement> {
    return fileOrBlobToDataURL(blob).then(dataurl => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image()
            if (crossOrigin)
                img.crossOrigin = crossOrigin
            img.onload = () => resolve(img)
            img.onerror = () => reject(new Error('图片加载错误'))
            img.src = dataurl
        })
    })
}

// image(url/dataurl) -> Blob
export function imageToBlob(data: string, crossOrigin?: string) {
    return imageToCanvas(data, crossOrigin).then(canvas => {
        return dataURLToBlob(canvasToDataURL(canvas))
    })
}

// Blob -> Canvas
export function blobToCanvas(blob: Blob, crossOrigin?: string) {
    return fileOrBlobToDataURL(blob).then(dataurl => imageToCanvas(dataurl, crossOrigin))
}

// canvas -> Blob (同步包装)
export const canvasToBlob = (canvas: HTMLCanvasElement) => dataURLToBlob(canvasToDataURL(canvas))

// image（url/dataurl） -> dataURL
export function imageToDataURL(data: string, crossOrigin?: string) {
    return imageToCanvas(data, crossOrigin).then(canvas => canvasToDataURL(canvas))
}

// dataURL -> Image（同步返回未加载 image 元素）
export function dataURLToImage(dataurl: string) {
    const img = new Image()
    img.src = dataurl
    return img
}

// 字符串转 ArrayBuffer（支持 Unicode）
export function stringToArrayBuffer(s: string) {
    return new TextEncoder().encode(s).buffer
}

export default {
    canvasToDataURL,
    imageToCanvas,
    canvasToImage,
    fileOrBlobToDataURL,
    dataURLtoUint8Array,
    dataURLToBlob,
    dataURLToFile,
    blobToImage,
    imageToBlob,
    blobToCanvas,
    blobToFile,
    canvasToBlob,
    imageToDataURL,
    dataURLToImage,
    stringToArrayBuffer,
}
