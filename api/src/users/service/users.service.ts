import { Injectable, Logger } from '@nestjs/common';
import { UserEntity } from '../user.entity';
import { BookEntity } from 'src/products/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersBookEntity } from '../users_book.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>,
                @InjectRepository(UsersBookEntity) private usersBookRepository: Repository<UsersBookEntity>,
                @InjectRepository(BookEntity) private bookRepository: Repository<BookEntity>
            ) {}

    
    async addToRead(user_id: number, book_id: number): Promise<UserEntity> {
        const user_book_relation = new UsersBookEntity()
        user_book_relation.userId = user_id
        user_book_relation.bookId = book_id
        user_book_relation.status = 'plan to read'
        user_book_relation.pagesRead = 0
        user_book_relation.review = ""
        user_book_relation.reviewScore = -1

        await this.usersBookRepository.save(user_book_relation)

        const user = this.usersRepository.findOne({
            where: { user_id: user_id },
            relations: ['bookConn']
        })

        return user
    }

    async getBooks(user: UserEntity): Promise<BookEntity[]> {
        const users_books: BookEntity[] = await this.bookRepository.find({
            relations: {
                userConn: {
                    user: {
                        bookConn: true
                    },
                    book: true
                }
            },
            where: {
                userConn: {
                    user: {
                        user_id: user.user_id
                    }
                }         
            }
        })
        return users_books
    }

}
