import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state() {
        return {
            loading: false,
            list: [] as Array<Omix>
        }
    },
    actions: {
        async fetchBaseColumnContact() {
            try {
                this.loading = true
                const response = await axios({
                    url: `https://chat.lisfes.cn/web-service/contact/column`,
                    method: 'GET',
                    headers: {
                        authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIyMTYzODg2MjQ1NzExNzczNjk2Iiwic3RhdHVzIjoiZW5hYmxlIiwiZW1haWwiOiJsaW12Y2Zhc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkRHNTSzMvZW9KZWtmQ3F5RU1DT3dUZUJpeUZCM3p4dFVFWTdtd29nMGxFaVJQVnlhTmM0S0MiLCJpYXQiOjE3NDgwOTU3MjYsImV4cCI6MTc0ODE4MjEyNn0.evwB-_0K0CFgLcqQ0ORbMrl6Or8hz1FANjSYAitk0VQ`
                    }
                })
                this.list = response.data.data.list || []
                this.loading = false
            } catch (error) {
                console.log(error)
            }
        }
    }
})
