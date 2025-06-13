import { request } from '@/utils/utils-request'

/**获取商品分类系列**/
export function httpBaseColumnCategory() {
    return request({
        url: `/soip/goods/category/list`,
        method: 'GET'
    })
}

/**获取商品规格**/
export function httpBaseColumnSpecs() {
    return request({
        url: `/soip/goods/specs/list`,
        method: 'GET'
    })
}

/**获取博客年份**/
export function httpBaseColumnBlogYears() {
    return request({
        url: `/soip/blogInfo/yearList`,
        method: 'GET'
    })
}

/**获取当前支付类型**/
export function httpBasePayPlatform() {
    return request({
        url: `/soip/web/pay/getPayPlatform`,
        method: 'POST'
    })
}
