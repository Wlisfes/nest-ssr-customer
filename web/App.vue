<script lang="tsx">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
    name: 'App',
    setup(props) {
        return () => <RouterView></RouterView>
    }
})
</script>
