import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAuthEntity } from '../user_auth.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/users/user.entity';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserAuthEntity) private userAuthRepository: Repository<UserAuthEntity>, @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>, private jwt: JwtService) {}

    async signup(user: {auth: UserAuthEntity, info: UserEntity}): Promise<UserAuthEntity> {
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(user.auth.password, salt)
        
        const userInfo = new UserEntity()
        userInfo.username = user.info.username
        userInfo.profilePicture = 'default'
        userInfo.aboutMe = ''
        const savedUserInfo = await this.userRepository.save(userInfo)
        
        const userAuth = new UserAuthEntity()
        userAuth.email = user.auth.email
        userAuth.role = user.auth.role
        userAuth.password = hash
        userAuth.isActive = Boolean(user.auth.isActive)
        userAuth.user = savedUserInfo

        return await this.userAuthRepository.save(userAuth);
    }

    async validateUser(email: string, password: string): Promise<any> {
        const foundUser = await this.userAuthRepository.findOne({
            where: {
                email: email
            }
        })
        if (foundUser && await bcrypt.compare(password, foundUser.password) && foundUser.isActive) {
            const {password, ...result} = foundUser
            return result
        }
        return null
    }

    async login(body: any): Promise<any> {
        const user = await this.userAuthRepository.findOne({
            relations: {
                user: true
            },
            where: {
                email: body.email
            }
        })
        const payload = {email: user.email, user_id: user.auth_id, role: user.role}
        return {
            access_token: this.jwt.sign(payload),
            user: user
        }
    }
}
