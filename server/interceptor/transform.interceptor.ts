import { CallHandler, ExecutionContext, Injectable, NestInterceptor, HttpStatus } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import moment from 'dayjs'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<unknown>> {
        const request = context.switchToHttp().getRequest()
        console.log()
        return next.handle().pipe(
            map(data => {
                return {
                    data: data || null,
                    code: HttpStatus.OK,
                    message: typeof data?.message === 'object' ? 'success' : (data?.message ?? 'success'),
                    timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
                }
            })
        )
    }
}
