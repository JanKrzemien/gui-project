import { Module } from '@nestjs/common';
import { GroupsService } from './service/groups.service';
import { GroupsController } from './controller/groups.controller';
import { GroupEntity } from './group.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
      TypeOrmModule.forFeature([GroupEntity])
    ],
  providers: [GroupsService],
  controllers: [GroupsController]
})
export class GroupsModule {}
