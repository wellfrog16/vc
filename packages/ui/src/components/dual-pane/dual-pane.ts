import type { SplitterPanelProps } from 'element-plus'

export interface IDualPaneProps {
    layout?: 'horizontal' | 'vertical'
    lazy?: boolean
    padding?: number
    props1?: SplitterPanelProps
    props2?: SplitterPanelProps
}
