import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from '../service/products.service';
import { BookEntity } from '../book.entity';
import { UserAuthEntity } from 'src/auth/user_auth.entity';
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @UseGuards(JWTAuthGuard)
    @Post('add')
    async add(@Body() body: {books: BookEntity[], user: UserAuthEntity}): Promise<number> {
        body.books.forEach((item, index) => {
            this.productsService.create(item, body.user)
        })
        return body.books.length
    }

    @Post('getmatching')
    async getMatchingBooks(@Body() body: { books: BookEntity, limit: number }): Promise<BookEntity[]> {
        return this.productsService.getFiltered(body)
    }

    @Post('getbook')
    async getOneBook(@Body() body: { book_id: number }): Promise<BookEntity> {
        return this.productsService.getOne(body.book_id)
    }
}
