import { Module } from '@nestjs/common';
import { GroupsService } from './service/groups.service';

@Module({
  providers: [GroupsService]
})
export class GroupsModule {}
