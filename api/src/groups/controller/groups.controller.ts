import { Body, Controller, Get, Post } from '@nestjs/common';
import { GroupsService } from '../service/groups.service';
import { GroupEntity } from '../group.entity';

@Controller('groups')
export class GroupsController {
    constructor(private groupsService: GroupsService) {}

    @Get('getall')
    async getAllBooks(): Promise<GroupEntity[]> {
        return this.groupsService.getAll()
    }

    @Post('getgroup')
    async getOneGroup(@Body() body: { group_id: number }): Promise<GroupEntity> {
        return this.groupsService.getOne(body.group_id)
    }
}
