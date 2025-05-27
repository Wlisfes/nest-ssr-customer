/// <reference types="vite/client" />
import { AxiosInstance, InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios'
import { RouteLocationNormalizedLoaded, Router } from 'vue-router'
import { Request } from 'express'
import { Pinia } from 'pinia'

/**seo相关配置**/
export interface MateServerOptions extends Omix {
    /**标题**/
    title?: string
    /**关键字**/
    keywords?: string
    /**说明**/
    description?: string
}

/**服务端异步获取数据上下文**/
export interface ContextServerOptions {
    route: RouteLocationNormalizedLoaded
    pinia: Pinia
    router: Router
    request: Request
    env: EnvOptions & ImportMeta['env']
}

declare interface AxiosRequest extends AxiosInstance {
    <T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R & Omix<T>>
    <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R & Omix<T>>
}

declare module 'vue' {
    interface ComponentCustomOptions {
        httpServer?(context: ContextServerOptions): Promise<any>
        httpMetaServer?(context: ContextServerOptions): MateServerOptions | Promise<MateServerOptions>
    }
}

declare module 'vue-router' {
    /**扩展meta字段**/
    interface RouteMeta extends MateServerOptions {
        AUTH: 'NONE' | 'AUTH' | 'AUTH_NONE'
    }
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
