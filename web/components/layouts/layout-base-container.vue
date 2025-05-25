<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LayoutBaseContainer',
    setup(props, ctx) {
        return () => <layout-global-container class="layout-base-container">BaseLayouts</layout-global-container>
    }
})
</script>
