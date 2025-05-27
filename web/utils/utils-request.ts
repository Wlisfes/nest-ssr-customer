import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosInstance, AxiosRequestConfig } from 'axios'
// import { getToken } from '@/utils/utils-cookie'

export declare interface AxiosRequest extends AxiosInstance {
    <T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R & Omix<T>>
    <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R & Omix<T>>
}

export const request: AxiosRequest = axios.create({
    timeout: 90000
})

request.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // const token = getToken()
        // if (token) {
        //     config.headers.Authorization = token
        // }
        return config
    },
    error => Promise.reject(error)
)

request.interceptors.response.use(fetchInizeNotice, error => Promise.reject(error))

function fetchInizeNotice(response: AxiosResponse) {
    if (response.data.code !== 200) {
        return Promise.reject(response.data)
    }
    return Promise.resolve(response.data)
}
