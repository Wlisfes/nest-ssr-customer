import { toRefs } from 'vue'
import { defineStore } from 'pinia'
import { useState } from '@/hooks/hook-state'
import { imageNames } from '@/utils/utils-common'

export interface HomeStore {
    loading: boolean
    initialize: boolean
    columns: Array<Omix>
}

export const useHomeStore = defineStore('HOME_STORE', () => {
    const { state, setState } = useState<HomeStore>({
        loading: true,
        initialize: true,
        columns: []
    })

    /**获取一级分类栏目**/
    async function fetchBaseColumns() {
        return await setState({
            columns: [
                { keyId: 1, name: 'Cloud Gateway', cover: imageNames['cloud-gateway'] },
                { keyId: 2, name: 'SMS Gateway', cover: imageNames['sms-gateway'] },
                { keyId: 3, name: 'Voip Gateway', cover: imageNames['voip-gateway'] },
                { keyId: 4, name: 'Proxy Gateway', cover: imageNames['proxy-gateway'] },
                { keyId: 5, name: 'SMS Modem', cover: imageNames['sms-modem'] },
                { keyId: 6, name: 'GOIP Gateway', cover: imageNames['goip-gateway'] }
            ]
        })
    }

    /**初始化**/
    async function fetchMouseInitialize() {
        try {
            await Promise.all([fetchBaseColumns()])
            return await setState({ initialize: false, loading: false })
        } catch (err) {
            return await setState({ initialize: false, loading: false })
        }
    }

    return { ...toRefs(state), fetchBaseColumns, fetchMouseInitialize }
})
