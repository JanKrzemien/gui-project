import { ExecutionContext, Inject, Injectable, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Injectable()
export class LocalGuard extends AuthGuard('local') {
  constructor(@Inject() private localStrategy: LocalStrategy) {
    super()
  }
  
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const body = context.switchToHttp().getRequest().body

    const foundUser = await this.localStrategy.validate(body.email, body.password);
    return foundUser ? true : false;
  }
}
