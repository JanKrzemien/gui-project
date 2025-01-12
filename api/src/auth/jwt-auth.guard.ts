import { ExecutionContext, Inject, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

@Injectable()
export class JWTAuthGuard extends AuthGuard('jwt') {
    constructor(private jwtService: JwtService) {
        super()
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest()
        const token = req.get('Authorization')

        if(!token) {
            throw new UnauthorizedException()
        }
        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: jwtConstants.secret,
                    ignoreExpiration: true
                }
            )
            req.body.user = payload;
        } catch {
            throw new UnauthorizedException()
        }
        return true
    }
}