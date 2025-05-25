<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LayoutCommonFooter',
    setup(props) {
        return () => (
            <n-element class="layout-common-footer overflow-hidden">
                <div class="common-width-inline flex flex-col overflow-hidden">
                    <div class="flex border-t-1 common-border-divider">大拉萨扩大拉丝机</div>
                </div>
            </n-element>
        )
    }
})
</script>
