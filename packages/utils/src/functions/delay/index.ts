/**
 * 延时函数，返回一个Promise，在指定时间后resolve
 * @param time - 延时时间，默认为1000毫秒
 * @returns 返回一个Promise，在延时后resolve为true
 */
function delay(time = 1000) {
    return new Promise<boolean>(resolve => {
        // 使用setTimeout设置定时器，在指定时间后执行resolve
        setTimeout(() => {
            resolve(true) // 将Promise状态resolve为true
        }, time || 1) // 如果time未提供或为0，则使用1毫秒作为最小延时
    })
}

export default delay // 导出delay函数作为默认导出
