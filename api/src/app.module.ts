import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { ThreadsModule } from './threads/threads.module';
import { RecommendationsModule } from './recommendations/recommendations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecomendationsService } from './recomendations/service/recomendations.service';

@Module({
  imports: [
    AuthModule,
    ProductsModule,
    GroupsModule,
    UsersModule,
    ThreadsModule,
    RecommendationsModule,
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "apiDB",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, RecomendationsService],

})
export class AppModule {}
