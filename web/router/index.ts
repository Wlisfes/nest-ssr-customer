import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Layout from '@/components/layouts/layout.vue'
import BaseHome from '@/views/home/home.vue'
import BaseSearch from '@/views/search/search.vue'
import Base404 from '@/views/error/404.vue'

export function createRouter(options: Omix<{ ssr: boolean }>) {
    return _createRouter({
        history: options.ssr ? createMemoryHistory() : createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'HomeLayout',
                props: { name: 'HomeLayout' },
                component: Layout,
                children: [
                    { path: '/', name: BaseHome.name, meta: { AUTH: 'NONE' }, component: BaseHome },
                    { path: '/search', name: BaseSearch.name, meta: { AUTH: 'NONE' }, component: BaseSearch },
                    { path: '/:pathMatch(.*)*', name: Base404.name, meta: { AUTH: 'NONE' }, component: Base404 }
                ]
            },
            {
                path: '/',
                name: 'GlobalLayout',
                props: { name: 'GlobalLayout' },
                component: Layout,
                children: [
                    {
                        path: '/classify/:keyId',
                        name: 'BaseClassify',
                        meta: { title: '商品列表', AUTH: 'NONE' },
                        component: () => import('@/views/classify/classify.vue')
                    },
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
