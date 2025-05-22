<script lang="tsx">
import { defineComponent, onMounted } from 'vue'
import { useUserStore } from '@web/store/user'

export default defineComponent({
    name: 'User',
    async asyncData({ store, route }) {
        const userStore = useUserStore(store)
        await userStore.fetchBaseUserResolver()
    },
    seo({ store, route }) {
        return {
            title: '大幅拉升贷记卡沙拉蝴蝶卡'
        }
    },
    setup(props) {
        const userStore: any = useUserStore()

        onMounted(() => {
            console.log(userStore.user)
        })

        return () => (
            <div>
                User
                <router-link to="/">Home</router-link>
                {userStore.user.nickname}
            </div>
        )
    }
})
</script>
