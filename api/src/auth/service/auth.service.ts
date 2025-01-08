import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAuthEntity } from '../user_auth.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    // constructor(@InjectRepository(UserAuthEntity) userAuthRepository: Repository<UserAuthEntity>, jwt: JwtService) {}


}
