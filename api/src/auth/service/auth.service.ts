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

    async signup(user: any): Promise<UserAuthEntity> {
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(user.password, salt)
        
        const userInfo = new UserEntity()
        userInfo.username = user?.username ? user.username : 'default'
        userInfo.profilePicture = user?.profilePicture ? user.profilePicture : 'default'
        userInfo.aboutMe = ''
        const savedUserInfo = await this.userRepository.save(userInfo)
        
        const userAuth = new UserAuthEntity()
        userAuth.email = user.email
        userAuth.role = user.role
        userAuth.password = hash
        userAuth.isActive = Boolean(user.isActive)
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

    async login(body: any) {
        const user = await this.userAuthRepository.findOne({
            where: {
                email: body.email
            }
        })
        const payload = {email: user.email, user_id: user.auth_id, role: user.role}
        return {
            access_token: this.jwt.sign(payload)
        }
    }
}
