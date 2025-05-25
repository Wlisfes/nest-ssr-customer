<script lang="tsx">
import { defineComponent, onMounted } from 'vue'
import { useHomeStore } from '@/views/home/store/home-store'

export default defineComponent({
    name: 'LayoutHomeCarousel',
    setup(props) {
        const store = useHomeStore()

        onMounted(() => {
            console.log(store.columns)
        })

        return () => (
            <div class="layout-home-carousel h-480 overflow-hidden">
                <n-carousel show-arrow draggable autoplay style={{ '--n-dot-size': '14px' }}>
                    {store.carousels.map(item => (
                        <div class="w-full h-full relative" key={item.keyId}>
                            <n-image
                                class="w-full h-full elemeent-customize"
                                object-fit="cover"
                                preview-disabled
                                src={item.cover}
                                alt={item.name}
                            />
                        </div>
                    ))}
                </n-carousel>
            </div>
        )
    }
})
</script>
