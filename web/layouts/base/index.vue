<script lang="tsx">
import { defineComponent } from 'vue'
import GlobalLayouts from '@/layouts/global/index.vue'

export default defineComponent({
    name: 'BaseLayouts',
    components: { GlobalLayouts },
    setup(props, ctx) {
        return () => <global-layouts class="base-layouts">BaseLayouts</global-layouts>
    }
})
</script>
