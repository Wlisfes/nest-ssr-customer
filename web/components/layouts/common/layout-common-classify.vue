<script lang="tsx">
import { defineComponent, computed, PropType } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'LayoutCommonClassify',
    props: {
        /**分类系列列表**/
        dataSource: { type: Array as PropType<Array<Omix>>, default: () => [] }
    },
    setup(props) {
        const route = useRoute()
        const link = computed<Array<Omix>>(() => {
            return props.dataSource.slice(1).map(item => ({
                ...item,
                url: `/classify/${item.keyId}`,
                type: route.params.keyId === item.keyId ? 'primary' : undefined
            }))
        })

        return () => (
            <n-element class="layout-common-classify h-full flex-1 p-inline-24 overflow-hidden">
                <div class="h-full flex flex-1 gap-20 overflow-hidden">
                    {link.value.map(item => (
                        <router-link class="h-full flex items-center" key={item.keyId} to={item.url}>
                            <n-button class="h-full" focusable={false} text type={item.type}>
                                {item.en}
                            </n-button>
                        </router-link>
                    ))}
                </div>
            </n-element>
        )
    }
})
</script>
