import { createSSRApp } from 'vue'
import { createRouter } from '@/web/router'
import { createPinia } from '@/web/store'
import App from '@/web/App.vue'

export function createAppServer() {
    const app = createSSRApp(App)
    const router = createRouter()
    const store = createPinia()
    app.use(router)
    app.use(store)
    return { app, router, store }
}
