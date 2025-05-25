<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BaseLayout',
    setup(props, ctx) {
        return () => (
            <n-layout class="h-full overflow-hidden" content-class="flex flex-col overflow-hidden">
                <n-layout-header class="h-50 p-inline-16">
                    <layout-navigate></layout-navigate>
                </n-layout-header>
                <n-layout-content
                    class="flex-1 overflow-hidden"
                    content-class="min-h-full flex flex-col"
                    native-scrollbar={false}
                    scrollbar-props={{ size: 100, trigger: 'none' }}
                >
                    <router-view></router-view>
                </n-layout-content>
            </n-layout>
        )
    }
})
</script>
