import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Home from '@/views/home/home.vue'

export function createRouter(options: Omix<{ ssr: boolean }>) {
    return _createRouter({
        history: options.ssr ? createMemoryHistory() : createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('@/views/about/about.vue')
            }
        ]
    })
}
