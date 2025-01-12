import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from '../service/users.service';
import { BookEntity } from 'src/products/book.entity';
import { UserEntity } from '../user.entity';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @UseGuards(JWTAuthGuard)
    @Post('addtoread')
    async add(@Body() body: {user: UserEntity, book_id: number}): Promise<UserEntity> {
        return this.usersService.addToRead(body.user.user_id, body.book_id)
    }

    @UseGuards(JWTAuthGuard)
    @Get('getuserbooks')
    async getUserBooks(@Body() body: {user: UserEntity}): Promise<BookEntity[]> {
        return this.usersService.getBooks(body.user)
    }
}
