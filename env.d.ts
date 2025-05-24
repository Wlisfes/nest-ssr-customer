declare namespace NodeJS {
    interface ProcessEnv {
        /**环境标识**/
        NODE_ENV: 'development' | 'production'
        /**服务端口号**/
        NODE_PORT: number
    }
}
