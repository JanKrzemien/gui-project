import { Module } from '@nestjs/common';
import { ThreadsService } from './service/threads.service';
import { UsersService } from './service/users.service';

@Module({
  providers: [ThreadsService, UsersService]
})
export class ThreadsModule {}
