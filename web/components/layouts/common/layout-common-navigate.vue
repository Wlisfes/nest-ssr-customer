<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LayoutCommonNavigate',
    props: {
        /**中部内容class**/
        elementClass: { type: String }
    },
    setup(props, { slots }) {
        return () => (
            <n-element class="layout-common-navigate h-48 flex items-center">
                <router-link to="/" class="flex p-bs-6">
                    <element-wrapper name="nest-skyline" size={42}></element-wrapper>
                </router-link>
                <div class={`flex-1 sm:p-inline-40 xs:p-inline-20 ${props.elementClass ?? ''}`}>{slots.default && slots.default()}</div>
                <div class="flex items-center sm:gap-28 xs:gap-20">
                    <n-button text focusable={false}>
                        <layout-common-language></layout-common-language>
                    </n-button>
                    <n-button text focusable={false}>
                        <element-wrapper name="nest-search" size={24}></element-wrapper>
                    </n-button>
                    <n-button text focusable={false}>
                        <n-badge type="info" offset={[5, 0]} value={40} max={99}>
                            <element-wrapper name="nest-cart" size={24}></element-wrapper>
                        </n-badge>
                    </n-button>
                    <n-button text focusable={false}>
                        <element-wrapper name="nest-user" size={24}></element-wrapper>
                    </n-button>
                </div>
            </n-element>
        )
    }
})
</script>

<style lang="scss" scoped>
.layout-common-navigate {
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
