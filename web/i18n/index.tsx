import { ref, App } from 'vue'
import { createI18n } from 'vue-i18n'
import { messages, I18nContext } from '@/i18n/messages'
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
