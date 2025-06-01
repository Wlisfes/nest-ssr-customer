import { ref, computed } from 'vue'
import { createI18n, useI18n } from 'vue-i18n'
import { messages, I18nContext, I18nNode, I18nStore } from '@/i18n/messages'
import { useCoutext, AUTH } from '@/hooks/hook-context'

export const locale = ref<'cn' | 'en'>(getDefaultLocale())
export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    warnHtmlMessage: false,
    locale: locale.value,
    messages
})

/**获取默认语言**/
export function getDefaultLocale() {
    const { cookies } = useCoutext()
    return cookies.get(AUTH.APP_NEST_LOCALE) ?? 'cn'
}

/**切换语言**/
export async function fetchI18nUpdate(value: 'cn' | 'en') {
    const { cookies } = useCoutext()
    await cookies.set(AUTH.APP_NEST_LOCALE, value)
    locale.value = value
    return (i18n.global.locale.value = value)
}

export function useI18nContext() {
    const ctx = useI18n()

    /**重载t方法**/
    function t(path: I18nContext, props: Omix = {}): string {
        return ctx.t(path, props)
    }

    /**异步重载t方法**/
    function at(path: I18nContext, props: Omix = {}): () => string {
        return () => ctx.t(path, props)
    }

    /**载tm方法**/
    function tm<T>(path: I18nContext): Array<Omix<I18nNode<T>>> {
        return ctx.tm(path)
    }

    /**异步载tm方法**/
    function atm<T>(path: I18nContext): () => Array<Omix<I18nNode<T>>> {
        return () => ctx.tm(path)
    }

    /**文字转换**/
    function fallback(data: { cn: number | string; en: number | string }): string | number {
        return data[locale.value] ?? ''
    }

    /**列表查找**/
    function fallStore<T>(column: Array<T>, value: any, opts: Partial<I18nStore<T>> = {}) {
        const key = opts.valueField ?? 'value'
        const node = column.find(item => (item as Omix<I18nNode<T>>)[key] == value)
        if (opts.labelField) {
            return (node ?? opts.defaultValue ?? {})[opts.labelField] as T
        }
        return (node ?? opts.defaultValue) as I18nNode<T>
    }

    return {
        ctx,
        locale,
        Locale: computed(() => messages[locale.value]),
        t,
        at,
        tm,
        atm,
        fallback,
        fallStore
    }
}
