import Cookies from 'universal-cookie'
export { Cookies }
export default new Cookies()
export enum AUTH {
    /**主题存储**/
    APP_NEST_THEME = 'APP_NEST_THEME',
    /**主题色存储**/
    APP_NEST_PRIMARY_COLOR = 'APP_NEST_PRIMARY_COLOR',
    /**token存储**/
    APP_NEST_TOKEN = 'APP_NEST_TOKEN'
}
