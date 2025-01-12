import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from 'src/products/book.entity';
import { UserEntity } from './user.entity';
import { UsersBookEntity } from './users_book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookEntity, UserEntity, UsersBookEntity])
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
