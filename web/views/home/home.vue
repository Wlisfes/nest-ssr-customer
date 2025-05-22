<script lang="tsx">
import { defineComponent, onMounted } from 'vue'
import { useUserStore } from '@web/store/user'

export default defineComponent({
    name: 'Home',
    async asyncData({ store, route }) {
        const userStore = useUserStore(store)
        await userStore.fetchBaseColumnCommunit()
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
            <div>
                Home
                <router-link to="/user">User</router-link>
                {userStore.list.map((item: any) => (
                    <div key={item.keyId}>{item.user.nickname}</div>
                ))}
            </div>
        )
    }
})
</script>
