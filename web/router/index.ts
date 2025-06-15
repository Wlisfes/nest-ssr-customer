import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import Layout from '@/components/layouts/layout.vue'
import Home from '@/views/home/home.vue'
import Not from '@/views/error/404.vue'

export function createRouter(options: Omix<{ ssr: boolean }>) {
    return _createRouter({
        history: options.ssr ? createMemoryHistory() : createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'HomeLayout',
                component: Layout,
                props: { name: Layout.name },
                children: [
                    { path: '/', name: 'Home', props: { name: Layout.name }, meta: { AUTH: 'NONE' }, component: Home },
                    { path: '/:pathMatch(.*)*', name: 'Not', meta: { AUTH: 'NONE' }, component: Not }
                ]
            },
            {
                path: '/',
                name: 'GlobalLayout',
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
