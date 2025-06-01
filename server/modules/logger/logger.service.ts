import { Injectable } from '@nestjs/common'

/**注入日志配置**/
// export function AutoDescriptor(target: any, propertyName: string, descriptor: Omix<PropertyDescriptor>) {
//     const className = target.constructor.name
//     const methodName = propertyName
//     const originalMethod = descriptor.value
//     descriptor.value = function (...args: any[]) {
//         this.deplayName = [className, methodName].join(':')
//         return originalMethod.apply(this, args)
//     }
// }

@Injectable()
export class Logger {
    public readonly deplayName: string
    /**返回包装**/
    public async fetchResolver<T>(data: Partial<OmixResult<T>>) {
        return data
    }
}
