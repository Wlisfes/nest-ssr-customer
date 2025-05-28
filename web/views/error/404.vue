<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'About',
    setup(props) {
        return () => (
            <n-element class="flex flex-col flex-1 justify-center items-center overflow-hidden">
                <n-h1 class="m-0">404 - Not Found</n-h1>
                <n-text class="text-16">Sorry, the page you are looking for does not exist.</n-text>
                <router-link to="/">
                    <n-button tertiary>Back Page</n-button>
                </router-link>
            </n-element>
        )
    }
})
</script>
