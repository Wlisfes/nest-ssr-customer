<script lang="tsx">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { dateZhCN, zhCN } from 'naive-ui'

export default defineComponent({
    name: 'App',
    setup(props) {
        return () => (
            <n-config-provider abstract inline-theme-disabled locale={zhCN} date-locale={dateZhCN}>
                <n-global-style />
                <RouterView></RouterView>
            </n-config-provider>
        )
    }
})
</script>
