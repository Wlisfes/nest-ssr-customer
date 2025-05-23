/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare type Omix<T = Record<string, any>> = T & Record<string, any>

declare interface Window {
    __INITIAL_DATA__: Omix
}
