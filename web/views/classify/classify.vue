<script lang="tsx">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
    name: 'BaseClassify',
    async httpServer() {
        console.log(`11111111111111111111`)
    },
    setup(props) {
        onMounted(() => console.log(`222222222222222222：`, Math.random()))

        return () => (
            <main>
                <router-link to="/">
                    <n-button>Home</n-button>
                </router-link>
                Classify
            </main>
        )
    }
})
</script>
