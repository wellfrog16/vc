import type { CascaderOption } from 'element-plus/es/components/cascader-panel'
import type { IColumnConfig } from '../../explorer-column-table/explorer-column-table'

export const treeData: CascaderOption[] = [
    {
        value: 'guide',
        label: 'Guide',
        children: [
            {
                value: 'disciplines',
                label: '文字 icon 测试 Label',
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
    { date: '2016-05-03', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-02', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-04', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-01', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-08', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
    { date: '2016-05-06', name: 'Tom', state: 'California', city: 'Los Angeles', address: 'No. 189, Grove St, Los Angeles', zip: 'CA 90036', tag: 'Home' },
]

export const columns: IColumnConfig[] = [
    { prop: 'date', label: 'Date', width: 150, widthType: 'width', visible: true, align: 'left' },
    { prop: 'name', label: 'Name', width: 120, widthType: 'width', visible: true, align: 'left' },
    { prop: 'state', label: 'State', width: 120, widthType: 'width', visible: true, align: 'left' },
    { prop: 'city', label: 'City', width: 120, widthType: 'width', visible: true, align: 'left' },
    { prop: 'zip', label: 'Zip', width: 120, widthType: 'width', visible: true, align: 'left' },
    { prop: 'tag', label: 'Tag', width: 100, widthType: 'width', visible: true, align: 'left' },
    { prop: 'address', label: 'Address', minWidth: 300, widthType: 'minWidth', visible: true, align: 'left' },
]
