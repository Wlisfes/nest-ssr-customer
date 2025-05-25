import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import HomeLayout from '@/layouts/home/index.vue'
import BaseLayout from '@/layouts/base/index.vue'
import Home from '@/views/home/home.vue'

export function createRouter(options: Omix<{ ssr: boolean }>) {
    return _createRouter({
        history: options.ssr ? createMemoryHistory() : createWebHistory(),
        routes: [
            {
                path: '/',
                redirect: '/',
                name: 'HomeLayout',
                component: HomeLayout,
                children: [{ path: '/', name: 'Home', meta: { title: '首页', AUTH: 'NONE' }, component: Home }]
            },
            {
                path: '/',
                name: 'BaseLayout',
                component: BaseLayout,
                children: [
                    {
                        path: '/about',
                        name: 'About',
                        meta: { title: '关于我们', AUTH: 'NONE' },
                        component: () => import('@/views/about/about.vue')
                    }
                ]
            }
        ]
    })
}
