<script lang="tsx">
import { defineComponent } from 'vue'
import GlobalLayouts from '@/layouts/global/index.vue'

export default defineComponent({
    name: 'HomeLayouts',
    components: { GlobalLayouts },
    setup(props, ctx) {
        return () => (
            <global-layouts class="home-layouts" element-class="flex items-center justify-end">
                <router-link to="/about">
                    <n-h4 strong class="m-0 text-14 hover:underline">
                        About us
                    </n-h4>
                </router-link>
                <n-divider vertical class="m-inline-16!" />
                <n-a target="_blank" href="https://lisfes.cn">
                    <n-h4 strong class="m-0 text-14 hover:underline">
                        SKYLINE 官网
                    </n-h4>
                </n-a>
            </global-layouts>
        )
    }
})
</script>
