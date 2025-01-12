import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuthEntity } from './user_auth.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controller/auth.controller';
import { LocalStrategy } from './local.strategy';
import { UserEntity } from 'src/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserAuthEntity, UserEntity]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '60m'}
    }),
    PassportModule
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
