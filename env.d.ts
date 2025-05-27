/**通用对象**/
declare type Omix<T = Record<string, any>> = T & Record<string, any>

declare interface Window {
    /**store数据类型**/
    __INITIAL_DATA__: Omix
}

declare interface EnvOptions {
    /**环境标识**/
    NODE_ENV: 'development' | 'production'
    /**服务端口号**/
    NODE_PORT: number
    /**网站标题**/
    NODE_SEO_TITLE: string
    /**网站副标题**/
    NODE_SEO_SUBTITLE: string
    /**网站搜索关键字**/
    NODE_SEO_KEYWORDS: string
    /**网站描述**/
    NODE_SEO_DESCRIPTION: string
}

declare interface ImportMeta {
    readonly env: EnvOptions & {}
}

declare namespace NodeJS {
    interface ProcessEnv extends EnvOptions {}
}
