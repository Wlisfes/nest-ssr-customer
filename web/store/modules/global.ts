import { toRefs, computed } from 'vue'
import { defineStore } from 'pinia'
import { useState } from '@/hooks/hook-state'
import { locale, fetchI18nContextUpdate } from '@/i18n'
import { Logger } from '@/plugins'
import * as Service from '@/api'

export const useGlobal = defineStore('APP_NEST_GLOBAL_STORE', () => {
    const { state, setState } = useState({
        /**开启初始化**/
        initialize: true,
        /**国际化语言翻译**/
        messages: {} as Omix,
        /**产品系列**/
        classify: [] as Array<Omix>
    })

    /**客户端产品系列列表**/
    async function fetchClientColumnClassify(logger: Logger) {
        try {
            return await Service.httpClientColumnClassify().then(async ({ data }) => {
                return await setState({ classify: data.list ?? [] })
            })
        } catch (err) {
            logger.error('客户端产品系列列表:fetchClientColumnClassify', err)
            return await setState({ classify: [] })
        }
    }

    /**初始化**/
    async function fetchGlobaInitialize(logger: Logger) {
        if (!state.initialize) {
            return await setState({ initialize: false })
        }
        try {
            await Promise.all([fetchClientColumnClassify(logger)])
            return await setState({ initialize: false })
        } catch (err) {
            return await setState({ initialize: false })
        }
    }

    return {
        state: computed(() => state),
        ...toRefs(state),
        setState,
        fetchGlobaInitialize
    }
})
