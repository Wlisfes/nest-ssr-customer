<script lang="tsx">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
    name: 'BaseSearch',
    setup(props) {
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
