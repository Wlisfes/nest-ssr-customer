import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state() {
        return {
            loading: false,
            user: {},
            list: []
        }
    },
    actions: {
        async fetchBaseUserResolver() {
            try {
                this.loading = true
                const response = await axios({
                    url: `https://chat.lisfes.cn/web-service/user/resolver`,
                    method: 'GET',
                    headers: {
                        authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIyMTYzODg2MjQ1NzExNzczNjk2Iiwic3RhdHVzIjoiZW5hYmxlIiwiZW1haWwiOiJsaW12Y2Zhc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkRHNTSzMvZW9KZWtmQ3F5RU1DT3dUZUJpeUZCM3p4dFVFWTdtd29nMGxFaVJQVnlhTmM0S0MiLCJpYXQiOjE3NDc5MzE3NzYsImV4cCI6MTc0ODAxODE3Nn0.4DeQs-ysCoD8jyrSMYZV_kg9SHm5A_htkSJGWt4vYLg`
                    }
                })
                this.user = response.data.data || {}
                this.loading = false
            } catch (error: any) {}
        },
        async fetchBaseColumnCommunit() {
            try {
                this.loading = true
                const response = await axios({
                    url: `https://chat.lisfes.cn/web-service/contact/column`,
                    method: 'GET',
                    headers: {
                        authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIyMTYzODg2MjQ1NzExNzczNjk2Iiwic3RhdHVzIjoiZW5hYmxlIiwiZW1haWwiOiJsaW12Y2Zhc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkRHNTSzMvZW9KZWtmQ3F5RU1DT3dUZUJpeUZCM3p4dFVFWTdtd29nMGxFaVJQVnlhTmM0S0MiLCJpYXQiOjE3NDc5MzE3NzYsImV4cCI6MTc0ODAxODE3Nn0.4DeQs-ysCoD8jyrSMYZV_kg9SHm5A_htkSJGWt4vYLg`
                    }
                })
                this.list = response.data.data.list || []
                this.loading = false
            } catch (error: any) {}
        }
    }
})
