import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import LayoutHomeContainer from '@/components/layouts/layout-home-container.vue'
import LayoutBaseContainer from '@/components/layouts/layout-base-container.vue'
import Home from '@/views/home/home.vue'
import Not from '@/views/error/404.vue'

export function createRouter(options: Omix<{ ssr: boolean }>) {
    return _createRouter({
        history: options.ssr ? createMemoryHistory() : createWebHistory(),
        routes: [
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
            },
            {
                path: '/',
                redirect: '/',
                name: 'LayoutHomeContainer',
                component: LayoutHomeContainer,
                children: [
                    { path: '/', name: 'Home', meta: { AUTH: 'NONE' }, component: Home },
                    { path: '/:pathMatch(.*)*', name: 'Not', meta: { AUTH: 'NONE' }, component: Not }
                ]
            }
        ]
    })
}
