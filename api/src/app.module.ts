import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { ThreadsModule } from './threads/threads.module';
import { RecommendationsModule } from './recommendations/recommendations.module';

@Module({
  imports: [AuthModule, ProductsModule, GroupsModule, UsersModule, ThreadsModule, RecommendationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
