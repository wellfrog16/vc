import type { ElTooltipProps } from 'element-plus'
import type { IInfoTooltipProps } from '../info-tooltip/info-tooltip'

export interface IFormItemProps extends IInfoTooltipProps {
    label?: string
    tooltipProps?: Partial<ElTooltipProps>
}

export interface IFormItemEmits {
    (e: 'click', code: string | undefined, label: string | undefined): void
}
