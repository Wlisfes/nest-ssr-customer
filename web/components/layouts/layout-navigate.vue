<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LayoutNavigate',
    setup(props, ctx) {
        return () => (
            <n-element class="layout-navigate h-48 max-w-large flex items-center">
                <router-link to="/" class="flex p-bs-6">
                    <element-wrapper name="nest-skyline" size={42}></element-wrapper>
                </router-link>
                <div class="flex-1 p-inline-40">的撒</div>
                <div class="flex items-center gap-24">
                    <layout-language></layout-language>
                    <element-wrapper name="nest-search" size={24}></element-wrapper>
                    <n-badge type="info" offset={[5, 0]} value={40} max={99}>
                        <element-wrapper name="nest-cart" size={24}></element-wrapper>
                    </n-badge>
                    <element-wrapper name="nest-user" size={24}></element-wrapper>
                </div>
            </n-element>
        )
    }
})
</script>

<style lang="scss" scoped>
.layout-navigate {
    position: relative;
    .n-badge :deep(.n-badge-sup) {
        --n-font-size: 11px;
        height: 16px;
        min-width: 16px;
        padding: 0 4.5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
