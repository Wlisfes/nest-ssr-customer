import { snowflakeId } from 'snowflake-id-maker'
import { zh_CN, Faker } from '@faker-js/faker'
import DayJS from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
DayJS.extend(timezone)
DayJS.extend(utc)

/**dayjs实例**/
export const moment = DayJS

/**虚拟数据实例**/
export const faker = new Faker({ locale: zh_CN })

/**生成纯数字的雪花ID、随机字符串**/
export function fetchIntNumber(opts: Partial<Omix<{ worker: number; epoch: number; random: boolean; bit: number }>> = {}) {
    if (opts.random) {
        return Array.from({ length: opts.bit ?? 6 }, x => Math.floor(Math.random() * 9) + 1).join('')
    }
    return snowflakeId({
        worker: opts.worker ?? process.pid,
        epoch: opts.epoch ?? 1199145600000
    })
}
