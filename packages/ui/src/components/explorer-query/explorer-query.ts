export interface IExplorerQueryProps {
    padding?: number
    height?: number
    model: Record<string, any>
    autoSpace?: boolean // form-item 环绕 actions，使用 absolute，计算坐标来实现
}

export interface IExplorerQueryEmits {
    (e: 'search', query: Record<string, any>): void
}

export function calculateLayout(containerEl: HTMLElement, actionsEl: HTMLElement, formContainerEl: HTMLElement) {
    // 配置
    const rowGap = 8
    const colGap = 16

    // 基础数据
    const rowWidth = Math.floor(containerEl.getBoundingClientRect().width) // 向下取整，往小了算
    const actionsWidth = Math.ceil(actionsEl.getBoundingClientRect().width) // 向上取整，往大了算
    const baseHeight = actionsEl.offsetHeight // 每行基础高度
    const firstRowWidth = rowWidth - actionsWidth - colGap // 第一行宽度

    const formEl = formContainerEl.querySelector('.el-form') as HTMLElement
    const formItems = formContainerEl.querySelectorAll('.el-form-item') as NodeListOf<HTMLElement>

    // form-contianer
    formContainerEl.style.position = 'relative'
    formContainerEl.style.width = `${rowWidth}px`

    // container
    containerEl.style.position = 'relative'

    // actions 固定
    actionsEl.style.position = 'absolute'
    actionsEl.style.right = '0'
    actionsEl.style.top = '0'

    // form-item
    let currentX = 0
    let currentY = 0
    let rowIndex = 1
    formItems.forEach(item => {
        const itemWidth = Math.ceil(item.getBoundingClientRect().width) // 向上取整，往大了算
        const safeWidth = rowIndex === 1 ? firstRowWidth : rowWidth

        if (currentX + itemWidth >= safeWidth) {
            rowIndex++
            currentX = 0
            currentY += baseHeight + rowGap
        }
        item.style.position = 'absolute'
        item.style.left = `${currentX}px`
        item.style.top = `${currentY}px`
        currentX += itemWidth + colGap
    })

    formEl.style.height = `${currentY + baseHeight}px`
}
