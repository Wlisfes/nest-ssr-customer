/**通用对象**/
declare type Omix<T = Record<string, any>> = T & Record<string, any>

/**store数据类型**/
declare interface Window {
    __INITIAL_DATA__: Omix
}
