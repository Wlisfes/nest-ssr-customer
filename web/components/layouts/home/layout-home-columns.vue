<script lang="tsx">
import { defineComponent } from 'vue'
import { useHomeStore } from '@/views/home/store/home-store'

export default defineComponent({
    name: 'LayoutHomeColumns',
    setup(props) {
        const store = useHomeStore()

        return () => (
            <div class="layout-home-columns p-be-10">
                <n-scrollbar x-scrollable scrollbar-props={{ size: 100, trigger: 'none' }}>
                    <div class="flex items-center justify-center whitespace-nowrap gap-10 p-inline-24 p-block-16">
                        {store.columns.map(item => (
                            <n-button class="w-180 h-96 p-block-10" quaternary focusable={false} key={item.keyId}>
                                <div class="w-full h-full flex flex-col overflow-hidden">
                                    <div class="flex-1 flex flex-col justify-center" style={{ flex: 1, width: '55%', margin: '0 auto' }}>
                                        <n-image preview-disabled src={item.cover} object-fit="cover" width="100%"></n-image>
                                    </div>
                                    <div class="line-height-20 p-bs-5">{item.name}</div>
                                </div>
                            </n-button>
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
