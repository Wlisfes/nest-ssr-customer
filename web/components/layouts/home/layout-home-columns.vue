<script lang="tsx">
import { defineComponent, CSSProperties } from 'vue'
import { useHomeStore } from '@/views/home/store/home-store'

export default defineComponent({
    name: 'LayoutHomeColumns',
    setup(props) {
        const store = useHomeStore()

        /**分类样式聚合**/
        function fetchColumnsStyleCover(url: string, opts: Omix<{ w: number; h: number }>): CSSProperties {
            return {
                color: 'var(--text-color-2)',
                transition: 'color .3s var(--cubic-bezier-ease-in-out)',
                width: opts.w + 'px',
                height: opts.h + 'px',
                backgroundColor: 'currentcolor',
                aspectRatio: opts.w / opts.h,
                mask: `url(${url}) 50% 50% / contain no-repeat`
            }
        }

        return () => (
            <div class="layout-home-columns common-width-inline">
                <n-scrollbar x-scrollable scrollbar-props={{ size: 100, trigger: 'none' }}>
                    <div class="flex items-center whitespace-nowrap gap-10 p-block-16">
                        <router-link to="/">
                            <n-button class="h-80 p-10" secondary focusable={false}>
                                <div class="w-full h-full flex flex-col overflow-hidden">
                                    <div class="flex-1 flex flex-col items-center justify-end">
                                        <div
                                            style={fetchColumnsStyleCover(`https://oss.lisfes.cn/store/web/1748843796421.svg`, {
                                                w: 60,
                                                h: 38
                                            })}
                                        ></div>
                                    </div>
                                    <div class="text-12 line-height-20">What's New</div>
                                </div>
                            </n-button>
                        </router-link>
                        {store.columns.map(item => (
                            <router-link to={`/about`}>
                                <n-button class="h-80 p-10" quaternary focusable={false} key={item.keyId}>
                                    <div class="w-full h-full flex flex-col overflow-hidden">
                                        <div class="flex-1 flex flex-col items-center justify-end">
                                            <div style={fetchColumnsStyleCover(item.cover, item.json)}></div>
                                        </div>
                                        <div class="text-12 line-height-20">{item.name}</div>
                                    </div>
                                </n-button>
                            </router-link>
                        ))}
                    </div>
                </n-scrollbar>
            </div>
        )
    }
})
</script>

<style lang="scss" scoped>
.layout-home-columns {
    position: relative;
    :deep(.n-button__content) {
        width: 100%;
        height: 100%;
    }
}
</style>
