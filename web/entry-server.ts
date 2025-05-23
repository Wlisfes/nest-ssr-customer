import { createAppServer } from '@/web/main'
import { renderToString } from 'vue/server-renderer'
import { setup } from '@css-render/vue3-ssr'
import { isPromise } from '@/web/utils/is'

export async function render(url: string) {
    const { app, router, store } = createAppServer()
    router.push(url)
    await router.isReady()

    const route = router.currentRoute
    const routeMatched = route.value.matched
    const meta = route.value.meta

    /* 获取当前路由对应所有的组件 */
    const matchedComponents: any = []
    routeMatched.map(item => {
        if (item.components) {
            matchedComponents.push(...Object.values(item.components))
        }
    })
    /**
     * config.router参数与客户端entry-client.ts中的config.router参数，router.currentRoute.value值不一致 原因:
     * 因为服务端先执行了await router.isReady();，所以router.currentRoute.value的值是to
     * 客户端entry-client.ts中当前路由还么有执行next()跳转，所以router.currentRoute.value的值还是from
     * 所以asyncDataFun 集合中执行的请求，如果需要当前页面路由参数请用route获取
     */
    const config = { store: store, route: route.value, router }
    /* 获取 asyncDataFun 集合 */
    const asyncDataFuncs: any = []
    /* 获取 seoFun, 已页面为准（最后一个组件） */
    let seoFun: any = null
    matchedComponents.map(component => {
        const asyncData = component.asyncData || null
        if (asyncData) {
            if (isPromise(asyncData) === false) {
                asyncDataFuncs.push(Promise.resolve(asyncData(config)))
            } else {
                asyncDataFuncs.push(asyncData(config))
            }
        }
        seoFun = component.seo || null
    })

    // 执行asyncDataFuncs（在页面生成之前）
    await Promise.all(asyncDataFuncs)
    // seo 赋值(在页面生成之前,asyncDataFuncs之后)
    if (seoFun) {
        const seo = seoFun(config)
        // document.title = seo.title
    }

    const ctx: any = {}
    const { collect } = setup(app)
    const template = await renderToString(app, ctx)
    const state = JSON.stringify(store.state.value)
    const style = collect()

    return { template, state, style }
}
