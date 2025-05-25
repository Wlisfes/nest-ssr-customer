<script lang="tsx">
import { defineComponent, onMounted } from 'vue'
import { useHomeStore } from '@/views/home/store/home-store'

export default defineComponent({
    name: 'Home',
    async httpServer(ctx) {
        const store = useHomeStore(ctx.store)
        return await store.fetchMouseInitialize()
    },
    // async httpMetaServer({ store, route, ctx }) {
    //     return {
    //         title: '大苏打33的撒大1111111'
    //     }
    // },
    setup(props) {
        return () => (
            <n-element class="flex flex-col flex-1 overflow-hidden">
                <layout-home-columns></layout-home-columns>
                <layout-home-carousel></layout-home-carousel>
                <div class="home flex text-12">Home</div>

                <router-link to="/about">
                    <n-button>About</n-button>
                </router-link>
                <common-wrapper name="nest-logo"></common-wrapper>
                <div class="flex flex-col gap-24 p-24">
                    {Array.from({ length: 3 }, (x, i) => (
                        <n-card>的哈萨克的哈萨克巨大花洒就看到哈桑的撒大大萨达萨达33333333333333</n-card>
                    ))}
                </div>
            </n-element>
        )
    }
})
</script>

<style lang="scss" scoped>
.home {
    color: red;
}
</style>
