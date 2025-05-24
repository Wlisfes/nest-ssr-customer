<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'About',
    setup(props) {
        return () => (
            <main>
                <router-link to="/">
                    <n-button>Home</n-button>
                </router-link>
                About
            </main>
        )
    }
})
</script>
