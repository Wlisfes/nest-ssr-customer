import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Home from '@/web/views/home/home.vue'

export function createRouter() {
    return _createRouter({
        // @ts-ignore
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('@/web/views/about/about.vue')
            }
        ]
    })
}
