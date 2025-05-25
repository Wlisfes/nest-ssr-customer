import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import BaseLayout from '@/layouts/base/index.vue'
import Home from '@/views/home/home.vue'

export function createRouter(options: Omix<{ ssr: boolean }>) {
    return _createRouter({
        history: options.ssr ? createMemoryHistory() : createWebHistory(),
        routes: [
            {
                path: '/',
                redirect: '/',
                name: 'BaseLayout',
                meta: { title: '昆仑服务平台', AUTH: 'AUTH' },
                component: BaseLayout,
                children: [
                    {
                        path: '/',
                        name: 'Home',
                        meta: { title: '首页' },
                        component: Home
                    },
                    {
                        path: '/about',
                        name: 'About',
                        meta: { title: '关于我们' },
                        component: () => import('@/views/about/about.vue')
                    }
                ]
            }
        ]
    })
}
