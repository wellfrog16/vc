/**
 * 生成随机十六进制颜色代码
 * @returns {string} 返回一个随机的十六进制颜色代码，格式为 #RRGGBB
 */
function rndColor() {
    // 生成一个0到0xFFFFFF之间的随机整数，并将其转换为十六进制字符串
    // 然后在前面补0，确保总长度为6位，最后加上#符号返回
    return `#${(`00000${(Math.random() * 0x1000000 << 0).toString(16)}`).slice(-6)}`
}

export default rndColor
