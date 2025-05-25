import { useThemeVars, darkTheme, lightTheme, GlobalThemeOverrides, ThemeCommonVars } from 'naive-ui'
import { toRefs, computed, ComputedRef } from 'vue'
import { useState } from '@/hooks/hook-state'
export interface CustomThemeCommonVars extends Omix<ThemeCommonVars> {
    '--common-body-color': string
}

export function useProvider() {
    const vars = useThemeVars() as ComputedRef<CustomThemeCommonVars>
    const { state, setState } = useState({
        theme: 'light'
    })

    /**主题反转**/
    const inverted = computed(() => state.theme === 'dark')
    const themeStyle = computed(() => (inverted.value ? darkTheme : lightTheme))
    const themeOverrides = computed(() => (inverted.value ? darkThemeOverrides.value : lightThemeOverrides.value))

    const lightThemeOverrides = computed<GlobalThemeOverrides & { common: Partial<CustomThemeCommonVars> }>(() => ({
        common: {
            // primaryColor: primaryColor.value,
            // primaryColorHover: lightenStr.value,
            // primaryColorPressed: lightenStr.value,
            // primaryColorSuppl: primaryColor.value,
            '--common-body-color': '#f8f8f8'
        },
        Scrollbar: { width: '6px', height: '6px' },
        Tree: { nodeHeight: '36px' }
    }))
    const darkThemeOverrides = computed<GlobalThemeOverrides & { common: Partial<CustomThemeCommonVars> }>(() => ({
        common: {
            // primaryColor: primaryColor.value,
            // primaryColorHover: lightenStr.value,
            // primaryColorPressed: lightenStr.value,
            // primaryColorSuppl: primaryColor.value,
            '--common-body-color': 'var(--body-color)'
        },
        Scrollbar: { width: '6px', height: '6px' },
        Tree: { nodeHeight: '36px' }
    }))

    return { ...toRefs(state), state, setState, themeStyle, themeOverrides, vars, inverted }
}
