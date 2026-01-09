export function draw(ctx: CanvasRenderingContext2D, x: number, y: number, l: number, r: number, operation: 'fill' | 'clip') {
    const PI = Math.PI

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI)
    ctx.lineTo(x + l, y)
    ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI)
    ctx.lineTo(x + l, y + l)
    ctx.lineTo(x, y + l)
    ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true)
    ctx.lineTo(x, y)
    ctx.lineWidth = 2
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.stroke()
    ctx[operation]()
    ctx.globalCompositeOperation = 'destination-over'
}

export function getContext(width: number, height: number, canvas?: HTMLCanvasElement) {
    const myCanvas = canvas || document.createElement('canvas')
    myCanvas.width = width
    myCanvas.height = height
    const ctx = myCanvas.getContext('2d')!
    return ctx
}
