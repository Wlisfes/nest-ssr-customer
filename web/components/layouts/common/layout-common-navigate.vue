<script lang="tsx">
import { defineComponent } from 'vue'
import { useMouse, useStore } from '@/store'

export default defineComponent({
    name: 'LayoutCommonNavigate',
    props: {
        /**中部内容class**/
        elementClass: { type: String }
    },
    setup(props, { slots }) {
        const { theme, fetchThemeUpdate } = useStore(useMouse)

        return () => (
            <n-element class="layout-common-navigate h-48 flex items-center">
                <router-link to="/" class="flex">
                    <n-button text focusable={false}>
                        <common-wrapper name="nest-logo" size={42}></common-wrapper>
                    </n-button>
                </router-link>
                <div class={`flex-1 ${props.elementClass ?? ''}`}>{slots.default && slots.default()}</div>
                <div class="flex items-center gap-28">
                    <n-button text focusable={false}>
                        <common-wrapper name="nest-search" size={24}></common-wrapper>
                    </n-button>
                    <n-button text focusable={false}>
                        <n-badge type="info" offset={[5, 0]} value={40} max={99}>
                            <common-wrapper name="nest-cart" size={24}></common-wrapper>
                        </n-badge>
                    </n-button>
                    <n-button text focusable={false}>
                        <common-wrapper name="nest-user" size={24}></common-wrapper>
                    </n-button>
                </div>
                <n-divider vertical class="h-20! m-inline-20!" />
                <div class="flex items-center gap-20 overflow-hidden">
                    <n-button text focusable={false}>
                        <layout-common-language></layout-common-language>
                    </n-button>
                    <n-button text focusable={false} onClick={() => fetchThemeUpdate()}>
                        <div class="w-24 flex justify-center items-center">
                            {theme.value === 'dark' ? (
                                <common-wrapper name="nest-light" size={24}></common-wrapper>
                            ) : (
                                <common-wrapper name="nest-dark" size={22}></common-wrapper>
                            )}
                        </div>
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
