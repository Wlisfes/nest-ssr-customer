import { snowflakeId } from 'snowflake-id-maker'
import { zh_CN, Faker } from '@faker-js/faker'
import { isNotEmpty } from 'class-validator'
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
export function fetchIntNumber(opts: Omix<{ bit?: number }> = {}) {
    if (isNotEmpty(opts.bit) && opts.bit > 0) {
        return Array.from({ length: opts.bit }, x => Math.floor(Math.random() * 9) + 1).join('')
    }
    return snowflakeId({ worker: process.pid, epoch: 1199145600000 })
}
