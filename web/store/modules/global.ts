import { toRefs } from 'vue'
import { defineStore } from 'pinia'
import { useState } from '@/hooks/hook-state'
import { locale, fetchI18nContextUpdate } from '@/i18n'
import { Logger } from '@/plugins'
import * as Service from '@/api'

export const useGlobal = defineStore('APP_NEST_GLOBAL_STORE', () => {
    const { state, setState } = useState({
        /**初始化**/
        initialize: true,
        /**国际化语言翻译**/
        messages: {} as Omix,
        /**商品分类**/
        category: [] as Array<Omix>,
        /**商品规格**/
        specs: [] as Array<Omix>,
        /**博客年份**/
        years: [] as Array<string>,
        /**当前支付类型**/
        payStore: {}
    })

    /**获取静态词组**/
    async function fetchBaseI18nContentStatic(logger: Logger) {
        try {
            return await Service.httpBaseI18nContentStatic().then(async ({ data }) => {
                await fetchI18nContextUpdate(locale.value, data ?? {})
                return await setState({ messages: data ?? {} })
            })
        } catch (err) {
            logger.error('获取静态词组:fetchBaseI18nContentStatic', err)
            return await setState({ messages: {} })
        }
    }

    /**获取商品分类系列**/
    async function fetchBaseColumnCategory(logger: Logger) {
        try {
            return await Service.httpBaseColumnCategory().then(async ({ data }) => {
                return await setState({ category: data ?? [] })
            })
        } catch (err) {
            logger.error('获取商品分类系列:fetchBaseColumnCategory', err)
            return await setState({ category: [] })
        }
    }

    /**获取商品规格**/
    async function fetchBaseColumnSpecs(logger: Logger) {
        try {
            return await Service.httpBaseColumnSpecs().then(async ({ data }) => {
                return await setState({ specs: data ?? [] })
            })
        } catch (err) {
            logger.error('获取商品规格:fetchBaseColumnSpecs', err)
            return await setState({ specs: [] })
        }
    }

    /**获取博客年份**/
    async function fetchBaseColumnBlogYears(logger: Logger) {
        try {
            return await Service.httpBaseColumnBlogYears().then(async ({ data }) => {
                return await setState({ years: data ?? [] })
            })
        } catch (err) {
            logger.error('获取博客年份:fetchBaseColumnBlogYears', err)
            return await setState({ years: [] })
        }
    }

    /**获取当前支付类型**/
    async function fetchBasePayPlatform(logger: Logger) {
        try {
            return await Service.httpBasePayPlatform().then(async ({ data }) => {
                return await setState({ payStore: data ?? {} })
            })
        } catch (err) {
            logger.error('获取当前支付类型:fetchBasePayPlatform', err)
            return await setState({ payStore: {} })
        }
    }

    /**初始化**/
    async function fetchGlobaInitialize(logger: Logger) {
        if (!state.initialize) {
            return await setState({ initialize: false })
        }
        try {
            await Promise.all([
                fetchBaseI18nContentStatic(logger),
                fetchBaseColumnCategory(logger),
                fetchBaseColumnSpecs(logger),
                fetchBaseColumnBlogYears(logger),
                fetchBasePayPlatform(logger)
            ])
            return await setState({ initialize: false })
        } catch (err) {
            return await setState({ initialize: false })
        }
    }

    return {
        state,
        ...toRefs(state),
        setState,
        fetchGlobaInitialize
    }
})
