import { zhCN, enUS } from 'naive-ui'

export const messages = {
    cn: {
        ...zhCN
    },
    en: {
        ...enUS
    }
}
export type I18nContext = typeof messages.cn & typeof messages.en
export default messages
