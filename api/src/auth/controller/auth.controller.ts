import { Body, Controller, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { UserAuthEntity } from '../user_auth.entity';
import { LocalGuard } from '../local.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    async signup(@Body() user: UserAuthEntity): Promise<UserAuthEntity> {
        return this.authService.signup(user)
    }

    @UseGuards(LocalGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.body)
    }
}
