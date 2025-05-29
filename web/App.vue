<script lang="tsx">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { dateZhCN, zhCN } from 'naive-ui'
import { useStore, useMouse } from '@/store'

export default defineComponent({
    name: 'App',
    setup(props) {
        const { themeStyle, themeOverrides } = useMouse(useStore)

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
