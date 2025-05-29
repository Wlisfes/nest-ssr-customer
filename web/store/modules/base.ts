import { defineStore } from 'pinia'

export const useBaseStore = defineStore('BASE_STORE', {
    state: () => ({
        /**主题**/
        theme: 'light',
        /**主题色**/
        primaryColor: '#536dfe'
    }),
    getters: {},
    actions: {
        async fetchThemeUpdate(theme?: 'light' | 'dark') {
            return (this.theme = theme ?? (this.theme === 'light' ? 'dark' : 'light'))
        }
    }
})
