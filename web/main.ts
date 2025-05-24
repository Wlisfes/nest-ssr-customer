import '@unocss/reset/normalize.css'
import '@/styles/index.scss'
import 'uno.css'
import { createSSRApp } from 'vue'
import { createRouter } from '@/router'
import { createPinia } from 'pinia'
import { setup } from '@css-render/vue3-ssr'
import App from '@/App.vue'

export function createAppServer(options: Parameters<typeof createRouter>['0']) {
    const app = createSSRApp(App)
    const router = createRouter(options)
    const store = createPinia()
    const { collect } = setup(app)

    app.use(router)
    app.use(store)

    return { app, router, store, collect }
}
