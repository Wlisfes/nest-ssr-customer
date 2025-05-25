<script lang="tsx">
import { defineComponent, onMounted } from 'vue'
import { useHomeStore } from '@/views/home/store/home-store'
import { useState } from '@/hooks/hook-state'

export default defineComponent({
    name: 'LayoutHomeBrowse',
    setup(props) {
        const store = useHomeStore()
        const { state, setState } = useState({ offset: '0px' })

        onMounted(async () => {
            return await setState({ offset: `${(window.innerWidth - 1280) / 2}px` })
        })

        return () => (
            <div class="layout-home-browse flex flex-col overflow-hidden">
                <n-h2 class="common-width-inline lg:text-28 sm:text-20 xxs:text-16  line-height-34 m-be-0 p-bs-60">
                    Take a look at our core products
                </n-h2>
                <n-carousel class="p-block-16" draggable loop={false} slides-per-view="auto" dot-type="line" space-between={24}>
                    <n-carousel-item style={{ width: state.offset }}></n-carousel-item>
                    {store.browses.map(item => (
                        <n-carousel-item key={item.keyId} class="relative b-rd-4 overflow-hidden">
                            <n-image
                                class="w-full h-full elemeent-customize"
                                object-fit="cover"
                                preview-disabled
                                src={item.cover}
                                alt={item.name}
                            />
                            <div class="absolute inset-0 flex flex-col p-24">
                                <n-text type="warning">New</n-text>
                                <n-h2 class="m-block-10 text-24 text-white">
                                    <n-ellipsis tooltip={false}>{item.name}</n-ellipsis>
                                </n-h2>
                                <n-text class="flex text-16 line-height-24 text-[var(--icon-color)]">
                                    <n-ellipsis tooltip={false} line-clamp={3}>
                                        {item.document}
                                        {item.document}
                                        {item.document}
                                        {item.document}
                                    </n-ellipsis>
                                </n-text>
                                <router-link class="m-bs-24 overflow-hidden" to="/about">
                                    <n-text class="text-16 line-height-24 text-white hover:text-[var(--primary-color)] hover:underline">{`More products >`}</n-text>
                                </router-link>
                            </div>
                        </n-carousel-item>
                    ))}
                </n-carousel>
            </div>
        )
    }
})
</script>

<style lang="scss" scoped>
.layout-home-browse {
    position: relative;
    :deep(.n-carousel__slide) {
        cursor: pointer;
        width: 360px;
        height: 420px;
        transform: translate3d(0, 0, 0) scale(1);
        transition: transform 0.3s var(--cubic-bezier-ease-in-out);
        &:hover {
            transform: translate3d(0, 0, 0) scale(1.03);
        }
    }
    :deep(.n-carousel__dots.n-carousel__dots--line) {
        --n-dot-line-width: 20px;
        --n-dot-line-width-active: 40px;
        bottom: 42px;
        .n-carousel__dot {
            height: 8px;
        }
    }
}
</style>
