import type { CascaderOption } from 'element-plus/es/components/cascader-panel'
import { VcSwitch } from '@wfrog/vc-ui'

export const treeData: CascaderOption[] = [
    {
        value: 'guide',
        label: 'Guide',
        children: [
            {
                value: 'disciplines',
                label: 'Disciplines',
                icon: 'carbon:data-table',
                children: [
                    { value: 'consistency', label: 'Consistency' },
                    { value: 'feedback', label: 'Feedback' },
                    { value: 'efficiency', label: 'Efficiency' },
                    { value: 'controllability', label: 'Controllability' },
                ],
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    { value: 'side nav', label: 'Side Navigation' },
                    { value: 'top nav', label: 'Top Navigation' },
                ],
            },
        ],
    },
    {
        value: 'component',
        label: 'Component',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    { value: 'layout', label: 'Layout' },
                    { value: 'color', label: 'Color' },
                    { value: 'typography', label: 'Typography' },
                    { value: 'icon', label: 'Icon' },
                    { value: 'button', label: 'Button' },
                ],
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    { value: 'alert', label: 'Alert' },
                    { value: 'loading', label: 'Loading' },
                    { value: 'message', label: 'Message' },
                    { value: 'message-box', label: 'MessageBox' },
                    { value: 'notification', label: 'Notification' },
                ],
            },
        ],
    },
]

export const tableData = [
    { date: '2016-05-03', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-02', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-04', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-01', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-08', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', status: true, name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
]

export const columns: any[] = [
    { prop: 'index', label: '', width: 60, widthType: 'width', visible: true, align: 'center', fixed: 'left' },
    { prop: 'expand-row', label: '', width: 60, widthType: 'width', visible: true, align: 'left' },
    { prop: 'status', label: '状态', width: 80, widthType: 'width', visible: true, align: 'left' },
    { prop: 'date', label: 'Date', width: 150, widthType: 'width', visible: true, align: 'left' },
    { prop: 'name', label: 'Name', width: 120, widthType: 'width', visible: true, align: 'left' },
    { prop: 'state', label: 'State', width: 120, widthType: 'width', visible: true, align: 'left' },
    { prop: 'city', label: 'City', width: 120, widthType: 'width', visible: true, align: 'left' },
    { prop: 'zip', label: 'Zip', width: 120, widthType: 'width', visible: true, align: 'left' },
    { prop: 'tag', label: 'Tag', width: 100, widthType: 'width', visible: true, align: 'left' },
    { prop: 'address', label: 'Address', minWidth: 300, widthType: 'minWidth', visible: true, align: 'left' },
    { prop: 'operation', label: '操作', width: 160, widthType: 'width', visible: true, align: 'center', fixed: 'right' },
]

const columns2 = new Map<string, (column: any, row: Record<string, any>, emits: any) => any>()

// 状态
columns2.set('status', (column: any, row: Record<string, any>, emits: any) => {
    return h(VcSwitch, {
        'disabled': false,
        'confirm': true,
        'activeText': '开',
        'inactiveText': '关',
        'modelValue': row.status,
        'onUpdate:modelValue': val => row.status = val,
        'inline-prompt': true,
        'onChange': (val: any) => { emits('columnEvent', column, row, { value: val }) },
    })
})

export function columnRender(column: any, row: Record<string, any>, emits: any) {
    return columns2.get(column.prop)?.(column, row, emits) || h('span', row[column.prop])
}
