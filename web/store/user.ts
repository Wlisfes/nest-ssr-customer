import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state() {
        return {
            loading: false,
            list: []
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
                        authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIyMTYzODg2MjQ1NzExNzczNjk2Iiwic3RhdHVzIjoiZW5hYmxlIiwiZW1haWwiOiJsaW12Y2Zhc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkRHNTSzMvZW9KZWtmQ3F5RU1DT3dUZUJpeUZCM3p4dFVFWTdtd29nMGxFaVJQVnlhTmM0S0MiLCJpYXQiOjE3NDc5ODgzMjAsImV4cCI6MTc0ODA3NDcyMH0.Gbm-ts0yJciH-Dju5JNUc7VnQ9rPXdFH3SiwXcqyeio`
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
