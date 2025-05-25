<script lang="tsx">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { dateZhCN, zhCN } from 'naive-ui'
import { useProvider } from '@/hooks/hook-provider'

export default defineComponent({
    name: 'App',
    setup(props) {
        const { themeStyle, themeOverrides } = useProvider()

        return () => (
            <n-config-provider
                abstract
                inline-theme-disabled
                locale={zhCN}
                date-locale={dateZhCN}
                theme={themeStyle.value}
                theme-overrides={themeOverrides.value}
            >
                <n-global-style />
                <RouterView></RouterView>
            </n-config-provider>
        )
    }
})
</script>
