<script lang="tsx">
import { defineComponent, computed, CSSProperties } from 'vue'
import { useProvider } from '@/hooks/hook-provider'

export default defineComponent({
    name: 'LayoutGlobalContainer',
    setup(props, { slots, attrs }) {
        const { theme } = useProvider()
        const globalStyle = computed<CSSProperties>(() => ({
            '--element-footer-background-color': theme.value === 'light' ? '#f8f8f8' : 'var(--body-color)'
        }))

        return () => (
            <n-layout
                class="layout-global-container h-full overflow-hidden"
                content-class="flex flex-col overflow-hidden"
                style={globalStyle.value}
            >
                <n-layout-header>
                    <layout-common-navigate class="common-width-inline" element-class={attrs['element-class']}>
                        {slots}
                    </layout-common-navigate>
                </n-layout-header>
                <n-layout-content
                    class="flex-1 overflow-hidden"
                    content-class="min-h-full flex flex-col"
                    native-scrollbar={false}
                    scrollbar-props={{ size: 100, trigger: 'none' }}
                >
                    <n-element class="flex flex-col flex-1">
                        <router-view></router-view>
                    </n-element>
                    <layout-common-footer></layout-common-footer>
                </n-layout-content>
            </n-layout>
        )
    }
})
</script>
