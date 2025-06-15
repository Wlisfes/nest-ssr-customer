import { request } from '@/utils/utils-request'
import { ResultColumn } from '@/interface/instance.resolver'

/**获取静态词组**/
export function httpBaseI18nContentStatic() {
    return request({
        url: `/soip/web/i18n/getStaticI18nContentAll`,
        method: 'GET'
    })
}

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

/**客户端产品系列列表**/
export function httpClientColumnClassify(data: Omix = {}) {
    return request<ResultColumn>({
        url: `/api/v1/system/classify/client/column`,
        method: 'POST',
        data
    })
}
