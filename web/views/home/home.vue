<script lang="tsx">
import { defineComponent, onMounted } from 'vue'
import { useUserStore } from '@/web/store/user'

export default defineComponent({
    name: 'Home',
    async asyncData({ store, route }) {
        const userStore = useUserStore(store)
        await userStore.fetchBaseColumnContact()
    },
    seo({ store, route }) {
        return {
            title: '大幅拉升贷记卡沙拉蝴蝶卡'
        }
    },
    setup(props) {
        const userStore = useUserStore()

        onMounted(() => {
            console.log(userStore.list)
        })

        return () => (
            <main>
                <div class="home">Home</div>
                <n-button>Click</n-button>
                <n-card>的哈萨克的哈萨克巨大花洒就看到哈桑</n-card>
                {userStore.list.map(item => (
                    <div key={item.keyId}>{item.user.nickname}</div>
                ))}
            </main>
        )
    }
})
</script>

<style scoped>
.home {
    color: red;
}
</style>
