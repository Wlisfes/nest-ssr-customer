<script lang="tsx">
import { defineComponent, onMounted } from 'vue'
import { useHomeStore } from '@/views/home/store/home-store'
import { useState } from '@/hooks/hook-state'
import Cookies from 'universal-cookie'

export default defineComponent({
    name: 'Home',
    async httpServer(ctx) {
        console.log(new Cookies(ctx.request?.headers.cookie).get('APP_NEST_TOKEN'))
        // const cookies = new Cookies(ctx.request?.headers, { path: '/' });
        const store = useHomeStore(ctx.store)
        return await store.fetchMouseInitialize()
    },
    // async httpMetaServer({ store, route }) {
    //     return {
    //         title: '大苏打33的撒大1111111'
    //     }
    // },
    setup(props) {
        const { state, setState } = useState({
            token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIyMTYzODg2MjQ1NzExNzczNjk2Iiwic3RhdHVzIjoiZW5hYmxlIiwiZW1haWwiOiJsaW12Y2Zhc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkRHNTSzMvZW9KZWtmQ3F5RU1DT3dUZUJpeUZCM3p4dFVFWTdtd29nMGxFaVJQVnlhTmM0S0MiLCJpYXQiOjE3NDgyNzU5MzgsImV4cCI6MTc0ODM2MjMzOH0.EmqfZBCRUuosZyP6OM7lxbOLpLOgUmPjEVpfjHHMXGs`
        })

        async function fetchUpdateCookie() {
            console.log(state)
            return new Cookies().set('APP_NEST_TOKEN', state.token, { maxAge: 7200 })
        }

        return () => (
            <n-element class="flex flex-col flex-1 overflow-hidden">
                <layout-home-columns></layout-home-columns>
                <div class="common-width-inline flex flex-col gap-10 p-20 overflow-hidden">
                    <n-input v-model:value={state.token} type="textarea" placeholder="token" />
                    <div class="flex">
                        <n-button type="primary" onClick={fetchUpdateCookie}>
                            保存
                        </n-button>
                    </div>
                </div>
                <layout-home-carousel></layout-home-carousel>
                <layout-home-browse></layout-home-browse>
                <layout-home-choose></layout-home-choose>
                <div class="common-width-inline flex flex-col items-center overflow-hidden p-bs-60 p-be-76">
                    <n-h1 class="m-0 text-32 line-height-38">Contact our sales team</n-h1>
                    <n-text class="p-bs-20 p-be-40">
                        You will get the best and most suitable solution from our experts. Fill out the form and we will contact you within
                        24 hours.
                    </n-text>
                    <n-button size="large" type="primary">
                        Contact Sales
                    </n-button>
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
