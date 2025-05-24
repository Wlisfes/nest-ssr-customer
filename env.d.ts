/**通用对象**/
declare type Omix<T = Record<string, any>> = T & Record<string, any>

declare namespace NodeJS {
    interface ProcessEnv {
        /**环境标识**/
        NODE_ENV: 'development' | 'production'
        /**服务端口号**/
        NODE_PORT: number
    }
}
