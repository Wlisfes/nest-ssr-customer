import App from '@web/App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from '@web/router'
import { createPinia } from '@web/store'

export function createApp() {
    const app = createSSRApp(App)
    const router = createRouter()
    const store = createPinia()
    app.use(router)
    app.use(store)

    return { app, router, store }
}
