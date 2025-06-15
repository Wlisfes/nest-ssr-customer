<script lang="tsx">
import { defineComponent, PropType, CSSProperties, onMounted } from 'vue'

export default defineComponent({
    name: 'LayoutHomeClassify',
    props: {
        /**分类系列列表**/
        dataSource: { type: Array as PropType<Array<Omix>>, default: () => [] }
    },
    setup(props) {
        onMounted(() => console.log(props.dataSource))

        /**分类样式聚合**/
        function fetchClassStyle(item: Omix): CSSProperties {
            return {
                color: 'var(--text-color-2)',
                transition: 'color .3s var(--cubic-bezier-ease-in-out)',
                width: item.width + 'px',
                height: item.height + 'px',
                backgroundColor: 'currentcolor',
                aspectRatio: item.width / item.height,
                mask: `url(${item.url}) 50% 50% / contain no-repeat`
            }
        }

        return () => (
            <div class="layout-home-classify common-width-inline">
                <n-scrollbar x-scrollable scrollbar-props={{ size: 100, trigger: 'none' }}>
                    <div class="flex items-center whitespace-nowrap gap-10 p-block-16">
                        {props.dataSource.map((item, index) => {
                            if (index === 0) {
                                return (
                                    <router-link key={item.keyId} to="/">
                                        <n-button class="h-80 p-10" secondary focusable={false}>
                                            <div class="w-full h-full flex flex-col overflow-hidden">
                                                <div class="flex-1 flex flex-col items-center justify-end">
                                                    <div style={fetchClassStyle(item.image)}></div>
                                                </div>

                                                <div class="text-12 line-height-20">{item.en}</div>
                                            </div>
                                        </n-button>
                                    </router-link>
                                )
                            }
                            return (
                                <router-link key={item.keyId} to={`/classify/${item.keyId}`}>
                                    <n-button class="h-80 p-10" quaternary focusable={false}>
                                        <div class="w-full h-full flex flex-col overflow-hidden">
                                            <div class="flex-1 flex flex-col items-center justify-end">
                                                <div style={fetchClassStyle(item.image)}></div>
                                            </div>
                                            <div class="text-12 line-height-20">{item.en}</div>
                                        </div>
                                    </n-button>
                                </router-link>
                            )
                        })}
                    </div>
                </n-scrollbar>
            </div>
        )
    }
})
</script>

<style lang="scss" scoped>
.layout-home-classify {
    position: relative;
    :deep(.n-button__content) {
        width: 100%;
        height: 100%;
    }
}
</style>
