import { Module } from '@nestjs/common';
import { ProductsService } from './service/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './book.entity';
import { ProductsController } from './controller/products.controller';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookEntity])
  ],
  providers: [ProductsService, JwtStrategy],
  controllers: [ProductsController]
})
export class ProductsModule {}
