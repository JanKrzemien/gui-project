import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from '../book.entity';
import { DeleteResult, Like, Repository, UpdateResult } from 'typeorm';
import { UserAuthEntity } from 'src/auth/user_auth.entity';
import { UserEntity } from 'src/users/user.entity';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(BookEntity) private productRepository: Repository<BookEntity>) {}

    async getAll(): Promise<BookEntity[]> {
        return await this.productRepository.find()
    }

    async getOne(id: number): Promise<BookEntity> {
        return this.productRepository.findOne({
            where: {
                book_id: id
            }
        })
    }        

    async getFiltered(filter: BookEntity): Promise<BookEntity[]> {
        const query = this.productRepository.createQueryBuilder("book").where("book.title LIKE :title", {title: `%${filter?.title ? filter.title : ''}%`}).andWhere("book.author LIKE :author", {author: `%${filter?.author ? filter.author : ''}%`}).andWhere("book.genres LIKE :genres", {genres: `%${filter?.genres ? filter.genres : ''}%`}).andWhere("book.tags LIKE :tags", {tags: `%${filter?.tags ? filter.tags : ''}%`}).andWhere("book.other LIKE :other", {other: `%${filter?.other ? filter.other : ''}%`})
        return await query.getMany()
    }

    async create(product: BookEntity, user: UserAuthEntity): Promise<BookEntity> {
        if(user.role == 'admin') {
            return await this.productRepository.save(product)
        }
        throw new UnauthorizedException()
    }

    async update(id: number, product: BookEntity, user: UserAuthEntity): Promise<UpdateResult> {
        if (user.role == 'admin') {
            return await this.productRepository.update(id, product);
        }
        throw new UnauthorizedException();
    }

    
   async delete(id: number, user: UserAuthEntity): Promise<DeleteResult> {
        if (user.role == 'admin') {
            return await this.productRepository.delete(id);
        }
        throw new UnauthorizedException();
    }
}
