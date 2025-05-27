import { Request } from 'express'
import Cookies from 'universal-cookie'

export { Cookies }
export interface ICookieOptions {}
export class UniversalCookie {
    private cookies: Cookies

    constructor(request?: Request) {
        this.cookies = new Cookies(request?.headers.cookie)
    }

    async set(key: string, value: any, options?: ICookieOptions) {
        return this.cookies.set(key, JSON.stringify(value), options)
    }

    async delete(key: string, options?: ICookieOptions) {
        this.cookies.remove(key, options)
    }

    get(key: string) {
        return this.cookies.get(key)
    }
}
