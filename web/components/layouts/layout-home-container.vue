<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LayoutHomeContainer',
    setup(props, ctx) {
        return () => (
            <layout-global-container class="layout-home-container" element-class="flex items-center justify-end">
                {/* <router-link to="/about">
                    <n-h4 strong class="m-0 text-14 hover:underline">
                        About us
                    </n-h4>
                </router-link>
                <n-divider vertical class="m-inline-16!" />
                <n-a target="_blank" href="https://lisfes.cn">
                    <n-h4 strong class="m-0 text-14 hover:underline">
                        SKYLINE 官网
                    </n-h4>
                </n-a> */}
            </layout-global-container>
        )
    }
})
</script>
