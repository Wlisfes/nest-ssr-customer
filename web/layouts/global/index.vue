<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'GlobalLayouts',
    setup(props, { slots, attrs }) {
        return () => (
            <n-layout class="global-layouts h-full overflow-hidden" content-class="flex flex-col overflow-hidden">
                <n-layout-header>
                    <layout-navigate element-class={attrs['element-class']}>{slots}</layout-navigate>
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
                </n-layout-content>
            </n-layout>
        )
    }
})
</script>
