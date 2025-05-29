import { useThemeVars, darkTheme, lightTheme, GlobalThemeOverrides, ThemeCommonVars } from 'naive-ui'
import { toRefs, computed, ComputedRef } from 'vue'
import { useState } from '@/hooks/hook-state'
import { useBaseStore } from '@/store'
export interface CustomThemeCommonVars extends Omix<ThemeCommonVars> {
    '--layout-common-footer-background-color': string
}

const { state, setState } = useState({
    theme: 'light',
    primaryColor: '#536dfe'
})
export function useProvider() {
    const baseStore = useBaseStore()
    const vars = useThemeVars() as ComputedRef<CustomThemeCommonVars>

    /**主题反转**/
    const inverted = computed(() => baseStore.theme === 'dark')
    const themeStyle = computed(() => (inverted.value ? darkTheme : lightTheme))
    const themeOverrides = computed(() => (inverted.value ? darkThemeOverrides.value : lightThemeOverrides.value))

    function addLight(color: string, amount: number) {
        const cc = parseInt(color, 16) + amount
        const c = cc > 255 ? 255 : cc
        return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`
    }

    function lighten(color: string, amount: number) {
        color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color
        amount = Math.trunc((255 * amount) / 100)
        return `#${addLight(color.substring(0, 2), amount)}${addLight(color.substring(2, 4), amount)}${addLight(
            color.substring(4, 6),
            amount
        )}`
    }
    const lightenStr = computed(() => lighten(baseStore.primaryColor, 6))
    const lightThemeOverrides = computed<GlobalThemeOverrides & { common: Partial<CustomThemeCommonVars> }>(() => ({
        common: {
            primaryColor: state.primaryColor,
            primaryColorHover: lightenStr.value,
            primaryColorPressed: lightenStr.value,
            primaryColorSuppl: state.primaryColor,
            '--layout-common-footer-background-color': '#f8f8f8'
        },
        Scrollbar: { width: '6px', height: '6px' },
        Tree: { nodeHeight: '36px' }
    }))
    const darkThemeOverrides = computed<GlobalThemeOverrides & { common: Partial<CustomThemeCommonVars> }>(() => ({
        common: {
            primaryColor: state.primaryColor,
            primaryColorHover: lightenStr.value,
            primaryColorPressed: lightenStr.value,
            primaryColorSuppl: state.primaryColor,
            '--layout-common-footer-background-color': '#000000'
        },
        Scrollbar: { width: '6px', height: '6px' },
        Tree: { nodeHeight: '36px' }
    }))

    return { ...toRefs(state), state, setState, themeStyle, themeOverrides, vars, inverted }
}
