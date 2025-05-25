<script lang="tsx">
import { defineComponent, onMounted, VNode } from 'vue'
import { useUserStore } from '@/store/user'

export default defineComponent({
    name: 'Home',
    async httpServer({ store, route }) {
        const userStore = useUserStore(store)
        await userStore.fetchBaseColumnContact()
        // console.log(userStore.list)
    },
    // async httpMetaServer({ store, route, ctx }) {
    //     return {
    //         title: '大苏打33的撒大1111111'
    //     }
    // },
    setup(props) {
        const userStore = useUserStore()

        onMounted(() => {
            console.log(userStore.list)
        })

        return () => (
            <n-element>
                <div class="home flex text-12">Home</div>
                <common-element>法律框架的顺口溜附件是的大萨达萨大撒大撒达444444444</common-element>
                <router-link to="/about">
                    <n-button>About</n-button>
                </router-link>
                <element-wrapper name="nest-logo"></element-wrapper>
                {Array.from({ length: 20 }, (x, i) => (
                    <n-card>的哈萨克的哈萨克巨大花洒就看到哈桑的撒大大萨达萨达33333333333333</n-card>
                ))}
                {userStore.list.map(item => (
                    <div key={item.keyId}>{item.user.nickname}</div>
                ))}
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
