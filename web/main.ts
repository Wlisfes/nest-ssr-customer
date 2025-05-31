import '@unocss/reset/normalize.css'
import '@/styles/index.scss'
import 'uno.css'
import { Request } from 'express'
import { createSSRApp } from 'vue'
import { createRouter } from '@/router'
import { createPinia } from 'pinia'
import { CoutextServer } from '@/plugins'
import { setup } from '@css-render/vue3-ssr'
import App from '@/App.vue'

export interface AppServerOptions {
    ssr: boolean
    request?: Request
}

export function createAppServer(options: AppServerOptions) {
    const app = createSSRApp(App)
    const router = createRouter(options)
    const pinia = createPinia()
    const { collect } = setup(app)

    app.use(CoutextServer(options.ssr, options.request))
    app.use(router)
    app.use(pinia)

    return { app, router, pinia, collect }
}
