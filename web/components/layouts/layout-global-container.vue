<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LayoutGlobalContainer',
    setup(props, { slots, attrs }) {
        return () => (
            <n-layout class="layout-global-container h-full overflow-hidden" content-class="flex flex-col overflow-hidden">
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
