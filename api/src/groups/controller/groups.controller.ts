import { Controller, Get } from '@nestjs/common';
import { GroupsService } from '../service/groups.service';
import { GroupEntity } from '../group.entity';

@Controller('groups')
export class GroupsController {
    constructor(private groupsService: GroupsService) {}

    @Get('getall')
    async getAllBooks(): Promise<GroupEntity[]> {
        return this.groupsService.getAll()
    }
}
