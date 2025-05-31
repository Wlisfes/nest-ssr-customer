import { useThemeVars, darkTheme, lightTheme } from 'naive-ui'
import { defineStore } from 'pinia'
import { themeOverrides } from '@/utils/utils-theme'
import { useCoutext, AUTH } from '@/hooks/hook-context'

const { ctx, cookies } = useCoutext()
export const useStore = defineStore('APP_NEST_STORE', {
    state: () => {
        console.log(cookies.get(AUTH.APP_NEST_THEME))
        return {
            /**主题**/
            theme: cookies.get(AUTH.APP_NEST_THEME) ?? 'light',
            /**主题色**/
            primaryColor: cookies.get(AUTH.APP_NEST_PRIMARY_COLOR) ?? '#536dfe'
        }
    },
    getters: {
        vars: state => useThemeVars(),
        /**主题反转**/
        inverted: state => state.theme === 'dark',
        /**主题配色**/
        themeStyle: state => (state.theme === 'dark' ? darkTheme : lightTheme),
        /**自定义主题配置**/
        themeOverrides: state => themeOverrides(state.theme === 'dark', state)
    },
    actions: {
        async fetchThemeUpdate(theme?: 'light' | 'dark') {
            // await cookies.set(AUTH.APP_NEST_THEME, theme, { maxAge: 31536000000 })
            // console.log(new Cookies().get(AUTH.APP_NEST_THEME))
            await (this.theme = theme ?? (this.theme === 'light' ? 'dark' : 'light'))
            return cookies.set(AUTH.APP_NEST_THEME, this.theme, { maxAge: 7200 })
        }
    }
})
