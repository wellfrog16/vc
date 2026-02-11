import type { CascaderOption } from 'element-plus/es/components/cascader-panel'

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
