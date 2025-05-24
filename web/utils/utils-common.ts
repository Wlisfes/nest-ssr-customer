import { VNode } from 'vue'

/**图标示例对象**/
export const modules: Record<string, VNode> = import.meta.glob(`@/assets/icons/*.svg`, { query: '?component', eager: true })
export const iconNames = Object.keys(modules).reduce((icons: typeof modules, next) => {
    icons[next.match(/([^/]+)\.svg$/)?.[1] as string] = modules[next] as never as VNode
    return icons
}, {})
