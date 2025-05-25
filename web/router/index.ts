import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import LayoutHomeContainer from '@/components/layouts/layout-home-container.vue'
import LayoutBaseContainer from '@/components/layouts/layout-base-container.vue'
import Home from '@/views/home/home.vue'

export function createRouter(options: Omix<{ ssr: boolean }>) {
    return _createRouter({
        history: options.ssr ? createMemoryHistory() : createWebHistory(),
        routes: [
            {
                path: '/',
                redirect: '/',
                name: 'LayoutHomeContainer',
                component: LayoutHomeContainer,
                children: [{ path: '/', name: 'Home', meta: { title: '首页', AUTH: 'NONE' }, component: Home }]
            },
            {
                path: '/',
                name: 'LayoutBaseContainer',
                component: LayoutBaseContainer,
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
