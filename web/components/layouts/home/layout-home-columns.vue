<script lang="tsx">
import { defineComponent } from 'vue'
import { useHomeStore } from '@/views/home/store/home-store'

export default defineComponent({
    name: 'LayoutHomeColumns',
    setup(props) {
        const store = useHomeStore()

        return () => (
            <div class="layout-home-columns common-width-inline">
                <n-scrollbar x-scrollable scrollbar-props={{ size: 100, trigger: 'none' }}>
                    <div class="flex items-center whitespace-nowrap gap-10 p-block-16">
                        <router-link to="/">
                            <n-button class="h-80 p-10" secondary focusable={false}>
                                <div class="w-full h-full flex flex-col overflow-hidden">
                                    <div class="flex-1 flex flex-col items-center justify-end">
                                        <img
                                            class="block object-contain"
                                            loading="lazy"
                                            src="https://oss.lisfes.cn/store/web/1748843796421.svg"
                                            alt="What's New"
                                            style={{ width: '60px', height: '38px' }}
                                        />
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
                                            <img
                                                class="block object-contain"
                                                loading="lazy"
                                                src={item.cover}
                                                alt={item.name}
                                                style={{ width: item.json.w + 'px', height: item.json.h + 'px' }}
                                            />
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
