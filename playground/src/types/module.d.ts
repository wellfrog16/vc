import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        title?: string
        icon?: ['awesome' | 'el' | 'svg', string] // 路由显示的icon
        hidden?: boolean // 即不在菜单中显示，也不在权限分配中显示
        visible?: boolean // 不在菜单中显示，但是在权限分配中显示
        isStatic?: boolean // 是否静态路由，用于登出时移除动态路由
        type?: 'link' | 'iframe'
        url?: string // 如果type是ifreme，需要设置url
        // roles?: string[]; // 可访问此路由的角色（内部用）
        belong?: boolean // 当前的路由在左侧菜单高亮时，归属于的另外一个路由
    }
}
