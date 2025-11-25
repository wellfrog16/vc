import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/components/layout/index.vue'

export const staticRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: { name: 'components' },
        meta: {
            hidden: true,
        },
    },
    {
        name: 'my-components',
        path: '/components',
        component: Layout,
        redirect: { name: 'components' },
        meta: {
            title: '组件',
            icon: ['el', 'Menu'],
        },
        children: [
            {
                name: 'components',
                path: 'index',
                component: () => import('@/views/components/index.vue'),
                meta: {
                    hidden: true,
                },
            },
        ],
    },
    // {
    //     name: 'my-components3',
    //     path: '/components3',
    //     component: Layout,
    //     redirect: { name: 'components3' },
    //     meta: {
    //         title: '组件3',
    //         icon: ['el', 'Menu'],
    //     },
    //     children: [
    //         {
    //             name: 'components3',
    //             path: 'index',
    //             component: () => import('@/views/components/index.vue'),
    //             meta: {
    //                 title: '组件1113',
    //                 icon: ['el', 'Menu'],
    //             },
    //         },
    //     ],
    // },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: staticRoutes,
})

export default router
