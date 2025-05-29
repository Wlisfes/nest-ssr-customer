export * from '@/store/modules/store'
import { defineStore, storeToRefs } from 'pinia'

/**导出解构函数**/
export function useMouse<T extends ReturnType<typeof defineStore>>(useDataStore: T) {
    const data = useDataStore() as ReturnType<T>
    const refs = storeToRefs(data)
    return { ...data, ...refs }
}
