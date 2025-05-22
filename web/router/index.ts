import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Home from '@web/views/home/home.vue'

export function createRouter() {
    const router = _createRouter({
        // @ts-ignore
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/user',
                name: 'User',
                component: () => import('@web/views/deplay/system/user.vue')
            }
        ]
    })

    return router
}
