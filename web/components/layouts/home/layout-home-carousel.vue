<script lang="tsx">
import { defineComponent } from 'vue'
import { useHomeStore } from '@/views/home/store/home-store'

export default defineComponent({
    name: 'LayoutHomeCarousel',
    setup(props) {
        const store = useHomeStore()

        return () => (
            <div class="layout-home-carousel overflow-hidden max-h-450">
                <div class="p-bs-24%"></div>
                <div class="absolute inset-0 overflow-hidden">
                    <n-carousel class="h-full w-full" show-arrow draggable autoplay dot-type="line">
                        {store.carousels.map(item => (
                            <div class="w-full h-full relative" key={item.keyId}>
                                <img class="w-full h-full block object-cover" loading="lazy" src={item.cover} alt={item.name} />
                            </div>
                        ))}
                    </n-carousel>
                </div>
            </div>
        )
    }
})
</script>

<style lang="scss" scoped>
.layout-home-carousel {
    position: relative;
    :deep(.n-carousel__dots.n-carousel__dots--line) {
        --n-dot-line-width: 20px;
        --n-dot-line-width-active: 40px;
        bottom: 24px;
        .n-carousel__dot {
            height: 8px;
        }
    }
    :deep(.n-carousel__arrow-group) {
        bottom: 16px;
        right: 16px;
        .n-carousel__arrow {
            width: 32px;
            height: 32px;
        }
    }
}
</style>
