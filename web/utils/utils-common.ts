import { VNode } from 'vue'

/**图标示例对象**/
export const modules: Record<string, VNode> = import.meta.glob(`@/assets/icons/*.svg`, { query: '?component', eager: true })
export const iconNames = Object.keys(modules).reduce((icons: typeof modules, next) => {
    icons[next.match(/([^/]+)\.svg$/)?.[1] as string] = modules[next] as never as VNode
    return icons
}, {})

export function prevent(evt: Event, handler?: Function) {
    evt.preventDefault()
    return handler?.(evt)
}

export async function stop(evt: Event, handler?: Function) {
    evt.preventDefault()
    evt.stopPropagation()
    if (handler && typeof handler === 'function') {
        return await handler(evt)
    }
    return evt
}

/**回车事件**/
export function enter(e: KeyboardEvent, handler?: Function) {
    if (e.key === 'Enter') {
        typeof handler === 'function' && handler()
    }
}

/**根据条件返回不同参数**/
export function fetchWhere<T>(where: boolean, value: T, defaultValue?: T): T {
    return (where ? value : defaultValue) as T
}

/**根据条件返回列表项**/
export function fetchColumnWhere<T>(data: Array<T>, value: any, opst: Partial<{ key: string; default: T }> = {}): T {
    const node = data.find(item => item[opst.key ?? 'value'] == value)
    return (node ?? opst.default) as T
}

/**延时方法**/
export function fetchDelay<T>(delay = 100, handler?: Function): Promise<T> {
    return new Promise(resolve => {
        const timeout = setTimeout(() => {
            resolve(handler?.())
            clearTimeout(timeout)
        }, delay)
    })
}

/**条件链式执行函数**/
export async function fetchHandler<T>(where: boolean | Function, handler?: Function): Promise<T> {
    const value = typeof where === 'function' ? await where() : where
    if (value && typeof handler === 'function') {
        return (await handler()) as T
    }
    return value as T
}

/**参数组合函数**/
export async function fetchParameter<T>(data: T) {
    return data
}
